'use client';

import { useState, useRef, useEffect } from 'react';
import { Mic, MicOff, Phone, PhoneOff } from 'lucide-react';
import { RetellWebClient } from 'retell-client-js-sdk';

interface VoiceAgentProps {
  className?: string;
}

export function VoiceAgent({ className = '' }: VoiceAgentProps) {
  const [isCallActive, setIsCallActive] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isConnecting, setIsConnecting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [voiceIntensity, setVoiceIntensity] = useState(0);
  const [isAgentTalking, setIsAgentTalking] = useState(false);
  const [isUserTalking, setIsUserTalking] = useState(false);
  const [isMicrophoneReady, setIsMicrophoneReady] = useState(false);
  const [isFullyReady, setIsFullyReady] = useState(false);
  const [hasRequestedPermission, setHasRequestedPermission] = useState(false);

  const retellWebClientRef = useRef<RetellWebClient | null>(null);
  const animationFrameRef = useRef<number | null>(null);
  const audioContextRef = useRef<AudioContext | null>(null);
  const analyserRef = useRef<AnalyserNode | null>(null);
  const mediaStreamRef = useRef<MediaStream | null>(null);
  const connectionDataRef = useRef<{ call_id: string; access_token: string } | null>(null);

  // Initialize Retell Web Client on component mount (without microphone)
  useEffect(() => {
    const initializeRetellClient = async () => {
      try {
        retellWebClientRef.current = new RetellWebClient();
        
        // Set up event listeners
        setupEventListeners();
        
        // Pre-establish connection to Retell API (no microphone needed yet)
        await preEstablishConnection();
        
        // Mark as ready for UI, but microphone will be requested on first click
        setIsFullyReady(true);
        console.log('🎤 Voice agent ready - microphone will be requested on first click');
      } catch (error) {
        console.error('Failed to initialize Retell client:', error);
        setError('Failed to initialize voice client. Please try again.');
        setIsFullyReady(false);
      }
    };

    initializeRetellClient();

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      if (retellWebClientRef.current) {
        retellWebClientRef.current.stopCall();
      }
      if (mediaStreamRef.current) {
        mediaStreamRef.current.getTracks().forEach(track => track.stop());
      }
      if (audioContextRef.current) {
        audioContextRef.current.close();
      }
    };
  }, []);

  const setupEventListeners = () => {
    if (!retellWebClientRef.current) return;

    const client = retellWebClientRef.current;

    client.on('call_started', () => {
      console.log('📞 Call started');
      setIsCallActive(true);
      setIsConnecting(false);
      setError(null);
    });

    client.on('call_ended', () => {
      console.log('📞 Call ended');
      setIsCallActive(false);
      setIsConnecting(false);
      setIsAgentTalking(false);
      setVoiceIntensity(0);
    });

    client.on('agent_start_talking', () => {
      console.log('🤖 Agent started talking');
      setIsAgentTalking(true);
    });

    client.on('agent_stop_talking', () => {
      console.log('🤖 Agent stopped talking');
      setIsAgentTalking(false);
    });

    client.on('update', (update) => {
      console.log('📝 Update:', update);
      // You can access transcript with update.transcript
    });

    client.on('metadata', (metadata) => {
      console.log('📊 Metadata:', metadata);
    });

    client.on('error', (error) => {
      console.error('❌ Retell error:', error);
      setError('Voice call error occurred. Please try again.');
      setIsCallActive(false);
      setIsConnecting(false);
    });

    // Listen to raw audio for voice intensity visualization
    client.on('audio', (audio) => {
      if (audio && audio.length > 0) {
        // Calculate voice intensity from audio samples (this is agent audio)
        const average = audio.reduce((sum: number, sample: number) => sum + Math.abs(sample), 0) / audio.length;
        const intensity = Math.min(average * 10, 1);
        
        // Update agent talking state
        if (intensity > 0.1) {
          setIsAgentTalking(true);
          // Only update voice intensity if user is not talking (user takes priority)
          if (!isUserTalking) {
            setVoiceIntensity(intensity);
          }
        } else {
          setIsAgentTalking(false);
          // Only reset voice intensity if user is also not talking
          if (!isUserTalking) {
            setVoiceIntensity(0);
          }
        }
      }
    });
  };

  const requestMicrophonePermission = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      
      // Set up audio analysis for user microphone input
      const audioContext = new AudioContext();
      const source = audioContext.createMediaStreamSource(stream);
      const analyser = audioContext.createAnalyser();
      
      analyser.fftSize = 256;
      analyser.smoothingTimeConstant = 0.8;
      source.connect(analyser);
      
      // Store references for cleanup
      audioContextRef.current = audioContext;
      analyserRef.current = analyser;
      mediaStreamRef.current = stream;
      
      // Start monitoring user audio
      startUserAudioMonitoring();
      
      setIsMicrophoneReady(true);
      setHasRequestedPermission(true);
      console.log('🎤 Microphone permission granted and audio analysis set up');
    } catch (error) {
      console.error('Microphone access denied:', error);
      throw new Error('Microphone access denied. Please allow microphone access to use voice features.');
    }
  };

  const startUserAudioMonitoring = () => {
    if (!analyserRef.current) return;
    
    const bufferLength = analyserRef.current.frequencyBinCount;
    const dataArray = new Uint8Array(bufferLength);
    
    const updateIntensity = () => {
      if (!analyserRef.current) return;
      
      analyserRef.current.getByteFrequencyData(dataArray);
      
      // Calculate average intensity
      let sum = 0;
      for (let i = 0; i < bufferLength; i++) {
        sum += dataArray[i];
      }
      const average = sum / bufferLength;
      const intensity = Math.min(average / 128, 1); // Normalize to 0-1
      
      // Update voice intensity for user speaking
      if (intensity > 0.1) {
        setIsUserTalking(true);
        // Always update voice intensity when user is speaking
        setVoiceIntensity(intensity);
      } else {
        setIsUserTalking(false);
        // Only reset voice intensity if agent is also not talking
        if (!isAgentTalking) {
          setVoiceIntensity(0);
        }
      }
      
      animationFrameRef.current = requestAnimationFrame(updateIntensity);
    };
    
    updateIntensity();
  };

  const preEstablishConnection = async () => {
    try {
      // Pre-call the API to get access token and call details
      const response = await fetch('/api/start-retell-call', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to establish connection');
      }

      const { call_id, access_token } = await response.json();
      
      // Store the connection details for immediate use
      connectionDataRef.current = { call_id, access_token };
      
      console.log('🔗 Pre-established connection ready:', { call_id });
    } catch (error) {
      console.error('Failed to pre-establish connection:', error);
      throw error;
    }
  };

  const startCall = async () => {
    if (!retellWebClientRef.current || !isFullyReady || !connectionDataRef.current) {
      setError('Voice client not ready. Please refresh the page.');
      return;
    }

    setError(null);

    try {
      // Request microphone permission on first click if not already done
      if (!hasRequestedPermission) {
        setIsConnecting(true);
        await requestMicrophonePermission();
        setIsConnecting(false);
      }

      if (!isMicrophoneReady) {
        setError('Microphone not ready. Please try again.');
        return;
      }

      const { call_id, access_token } = connectionDataRef.current;
      console.log('Starting call with pre-established connection:', { call_id });

      // Start the call using Retell Web SDK with pre-established connection
      await retellWebClientRef.current.startCall({
        accessToken: access_token,
        sampleRate: 24000,
        captureDeviceId: 'default',
        playbackDeviceId: 'default',
        emitRawAudioSamples: true, // Enable for voice intensity visualization
      });

      // Immediately prepare for next call by establishing a new connection
      setTimeout(() => {
        preEstablishConnection().catch(console.error);
      }, 1000);

    } catch (error) {
      console.error('Failed to start call:', error);
      setError(`Failed to start voice call: ${(error as Error).message}`);
      setIsConnecting(false);
    }
  };

  const endCall = () => {
    if (retellWebClientRef.current) {
      retellWebClientRef.current.stopCall();
    }
    setIsCallActive(false);
    setIsAgentTalking(false);
    setIsUserTalking(false);
    setVoiceIntensity(0);
    setError(null);
    
    // Stop microphone monitoring when call ends
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
      animationFrameRef.current = null;
    }
    if (mediaStreamRef.current) {
      mediaStreamRef.current.getTracks().forEach(track => track.stop());
      mediaStreamRef.current = null;
    }
    if (audioContextRef.current) {
      audioContextRef.current.close();
      audioContextRef.current = null;
    }
    analyserRef.current = null;
    setIsMicrophoneReady(false);
    
    // Clear connection data and prepare for next call
    connectionDataRef.current = null;
    preEstablishConnection().catch(console.error);
  };

  const toggleMute = () => {
    // Note: Retell Web SDK handles mute/unmute automatically
    // This is just for UI state
    setIsMuted(!isMuted);
  };

  // Voice memo visualization component - Sound waves
  const VoiceMemo = () => {
    const bars = 7;
    const isAnyTalking = isAgentTalking || isUserTalking;
    
    return (
      <div className="flex items-end space-x-0.5 h-10">
        {Array.from({ length: bars }).map((_, index) => {
          // Create wave-like pattern with varying heights
          const baseHeight = isAnyTalking ? 
            Math.max(2, (voiceIntensity * 32) * (0.5 + Math.sin(index * 0.8) * 0.5)) : 2;
          
          // Add some randomness for more natural wave effect
          const waveVariation = isAnyTalking ? 
            Math.sin(Date.now() * 0.005 + index * 0.5) * (voiceIntensity * 8) : 0;
          
          const finalHeight = Math.max(2, baseHeight + waveVariation);
          
          return (
            <div
              key={index}
              className={`w-1.5 rounded-full transition-all duration-100 ${
                isAnyTalking 
                  ? (isAgentTalking ? 'bg-rose-400' : 'bg-blue-400')
                  : 'bg-white/30'
              }`}
              style={{
                height: `${finalHeight}px`,
                animationDelay: `${index * 80}ms`,
                animation: isAnyTalking ? 'pulse 0.6s ease-in-out infinite alternate' : 'none'
              }}
            />
          );
        })}
      </div>
    );
  };

  // Show loading indicator while fully initializing (microphone + connection)
  if (!isFullyReady) {
    return (
      <div className={`fixed bottom-6 right-6 z-50 ${className}`}>
        <div className="flex items-center justify-center w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl shadow-2xl">
          <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin" />
        </div>
      </div>
    );
  }

  return (
    <div className={`fixed bottom-6 right-6 z-50 ${className}`}>
      <div className="relative">
        {/* Voice memo visualization - positioned to the left with reduced spacing */}
        <div className="absolute right-16 top-1/2 transform -translate-y-1/2">
          <VoiceMemo />
        </div>

        {/* Main voice agent button */}
        <div className="relative group">
          <button
            onClick={!isCallActive ? startCall : endCall}
            disabled={isConnecting}
            className={`
              relative flex items-center justify-center gap-2 px-4 py-3 rounded-xl shadow-2xl transition-all duration-300 transform hover:scale-105 active:scale-95
              ${!isCallActive 
                ? 'bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20' 
                : 'bg-red-600/90 backdrop-blur-sm border border-red-500/50 hover:bg-red-700/90'
              }
              ${isConnecting ? 'animate-pulse' : ''}
            `}
          >
            {isConnecting ? (
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-white/20 backdrop-blur-sm border border-white/30 rounded-md flex items-center justify-center">
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                </div>
                <span className="text-white text-sm font-medium whitespace-nowrap">Requesting access...</span>
              </div>
            ) : !isCallActive ? (
              <>
                <div className="w-6 h-6 bg-white/20 backdrop-blur-sm border border-white/30 rounded-md flex items-center justify-center">
                  <Mic className="w-4 h-4 text-white" />
                </div>
                <span className="text-white text-sm font-medium whitespace-nowrap">Click to talk</span>
              </>
            ) : (
              <>
                <div className="w-6 h-6 bg-white/20 backdrop-blur-sm border border-white/30 rounded-md flex items-center justify-center">
                  <PhoneOff className="w-4 h-4 text-white" />
                </div>
                <span className="text-white text-sm font-medium whitespace-nowrap">End call</span>
              </>
            )}
          </button>

          {/* Status indicator */}
          {isCallActive && (
            <div className={`absolute -top-1 -right-1 w-4 h-4 rounded-full border-2 border-white ${
              isAgentTalking ? 'bg-blue-500' : 'bg-green-500'
            }`} />
          )}

          {/* Mute button - appears when call is active */}
          {isCallActive && (
            <button
              onClick={toggleMute}
              className={`
                absolute -bottom-2 -right-2 w-8 h-8 rounded-md shadow-lg transition-all duration-300 transform hover:scale-110 flex items-center justify-center
                ${isMuted 
                  ? 'bg-red-600/90 backdrop-blur-sm border border-red-500/50 hover:bg-red-700/90' 
                  : 'bg-white/20 backdrop-blur-sm border border-white/30 hover:bg-white/30'
                }
              `}
            >
              {isMuted ? (
                <MicOff className="w-4 h-4 text-white" />
              ) : (
                <Mic className="w-4 h-4 text-white" />
              )}
            </button>
          )}
        </div>
      </div>

      {/* Error message - positioned above the button */}
      {error && (
        <div className="absolute bottom-full right-0 mb-2 px-3 py-2 bg-red-600/90 backdrop-blur-sm border border-red-500/50 rounded-lg shadow-lg">
          <p className="text-white text-sm font-medium whitespace-nowrap">{error}</p>
        </div>
      )}
    </div>
  );
}