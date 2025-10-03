'use client';

import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Mic, MicOff, PhoneOff } from 'lucide-react';
import { RetellWebClient } from 'retell-client-js-sdk';

interface SimplifiedVoiceAgentProps {
  className?: string;
}

export function SimplifiedVoiceAgent({ className = '' }: SimplifiedVoiceAgentProps) {
  const [isCallActive, setIsCallActive] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isConnecting, setIsConnecting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [voiceIntensity, setVoiceIntensity] = useState(0);
  const [isAgentTalking, setIsAgentTalking] = useState(false);
  const [isUserTalking, setIsUserTalking] = useState(false);
  const [isMicrophoneReady, setIsMicrophoneReady] = useState(false);
  const [hasRequestedPermission, setHasRequestedPermission] = useState(false);

  const retellWebClientRef = useRef<RetellWebClient | null>(null);
  const animationFrameRef = useRef<number | null>(null);
  const audioContextRef = useRef<AudioContext | null>(null);
  const analyserRef = useRef<AnalyserNode | null>(null);
  const mediaStreamRef = useRef<MediaStream | null>(null);

  // Initialize Retell Web Client on component mount
  useEffect(() => {
    const initializeRetellClient = async () => {
      try {
        if (retellWebClientRef.current) {
          console.log('🎤 Voice agent already initialized, reusing existing client');
          return;
        }

        retellWebClientRef.current = new RetellWebClient();
        
        // Set up event listeners
        setupEventListeners();
        
        console.log('🎤 Voice agent initialized and ready');
      } catch (error) {
        console.error('Failed to initialize Retell client:', error);
        setError('Failed to initialize voice client. Please try again.');
      }
    };

    initializeRetellClient();
  }, []);

  const setupEventListeners = useCallback(() => {
    if (!retellWebClientRef.current) return;

    const client = retellWebClientRef.current;

    client.on('call_started', () => {
      console.log('📞 Call Started');
      setIsCallActive(true);
      setIsConnecting(false);
      setError(null);
    });

    client.on('call_ended', () => {
      console.log('📞 Call Ended');
      setIsCallActive(false);
      setIsConnecting(false);
      setIsAgentTalking(false);
      setIsUserTalking(false);
      setVoiceIntensity(0);
      setError(null);
    });

    client.on('agent_start_talking', () => {
      console.log('🗣️ Agent Start Talking');
      setIsAgentTalking(true);
    });

    client.on('agent_stop_talking', () => {
      console.log('🗣️ Agent Stop Talking');
      setIsAgentTalking(false);
    });

    client.on('update', (update) => {
      console.log('📝 Update Event:', update);
      if (update.transcript && update.transcript.length > 0) {
        const latestUtterance = update.transcript[update.transcript.length - 1];
        console.log('🗣️ Latest Utterance:', {
          role: latestUtterance.role,
          content: latestUtterance.content,
          timestamp: latestUtterance.timestamp
        });
      }
    });

    client.on('metadata', (metadata) => {
      console.log('📊 Metadata Event:', metadata);
    });

    client.on('error', (error) => {
      console.error('An error occurred:', error);
      setError('Voice service error. Please try again.');
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
  }, [isUserTalking]);

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
      
      // Return true to indicate success
      return true;
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

  const startCall = async () => {
    console.log('🎤 startCall called');
    
    if (!retellWebClientRef.current) {
      console.error('❌ Retell client not ready');
      setError('Voice client not ready. Please refresh the page.');
      return;
    }

    console.log('✅ Retell client is ready');
    setError(null);

    try {
      let microphoneReady = isMicrophoneReady;
      
      // Request microphone permission on first click if not already done
      if (!hasRequestedPermission) {
        console.log('🎤 Requesting microphone permission...');
        setIsConnecting(true);
        await requestMicrophonePermission();
        console.log('✅ Microphone permission granted');
        microphoneReady = true; // We know it's ready since the function succeeded
        setIsConnecting(false);
      }

      // Check if microphone is ready
      if (!microphoneReady) {
        console.error('❌ Microphone not ready');
        setError('Microphone not ready. Please try again.');
        setIsConnecting(false);
        return;
      }

      console.log('✅ Microphone is ready');

      // Get access token from our API
      setIsConnecting(true);
      console.log('🌐 Getting access token from API...');
      
      const response = await fetch('/api/get-access-token', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      console.log('📡 API response status:', response.status);
      console.log('📡 API response ok:', response.ok);

      if (!response.ok) {
        const errorData = await response.json();
        console.error('❌ API error response:', errorData);
        throw new Error(errorData.error || `API request failed with status ${response.status}`);
      }

      const responseData = await response.json();
      console.log('📡 API response data received:', { hasAccessToken: !!responseData.access_token });
      
      const { access_token } = responseData;
      
      if (!access_token) {
        console.error('❌ No access token in response:', responseData);
        throw new Error('No access token received from server');
      }
      
      console.log('✅ Access token received, starting call...');

      // Start the call using Retell Web SDK (following official documentation)
      await retellWebClientRef.current.startCall({
        accessToken: access_token,
        sampleRate: 24000, // (Optional) set sample rate of the audio capture and playback
        captureDeviceId: 'default', // (Optional) device id of the mic
        playbackDeviceId: 'default', // (Optional) device id of the speaker
        emitRawAudioSamples: true, // (Optional) Whether to emit "audio" events that contain raw pcm audio bytes
      });

      console.log('✅ Call started successfully');

    } catch (error) {
      console.error('❌ Failed to start call:', error);
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
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
    if (retellWebClientRef.current) {
      if (isMuted) {
        retellWebClientRef.current.unmute();
      } else {
        retellWebClientRef.current.mute();
      }
    }
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
                ? 'bg-green-600 backdrop-blur-sm border border-green-400 hover:bg-green-600' 
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
                <span className="text-white text-sm font-medium whitespace-nowrap">
                  {!hasRequestedPermission ? 'Requesting access...' : 'Starting call...'}
                </span>
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
              isMuted ? 'bg-red-500' : (isAgentTalking || isUserTalking) ? 'bg-green-500' : 'bg-blue-500'
            }`} />
          )}

          {/* Mute button - appears when connected */}
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
        <div className="absolute bottom-full right-0 mb-2 p-2 bg-red-600/90 text-white text-xs rounded-md shadow-lg max-w-xs">
          {error}
        </div>
      )}
    </div>
  );
}