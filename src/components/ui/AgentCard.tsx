'use client';

import { ReactNode, useState } from 'react';
import { Phone, Loader2, TriangleAlert, Check, X } from 'lucide-react';

interface AgentCardProps {
  profileImage: string;
  phoneNumber: string;
  countryCode: string;
  flag: ReactNode;
  agentName: string;
  role: string;
  agentId?: string; // Optional agent ID for Retell AI
}

export function AgentCard({ 
  profileImage, 
  phoneNumber, 
  countryCode, 
  flag, 
  agentName, 
  role,
  agentId
}: AgentCardProps) {
  const [inputValue, setInputValue] = useState('');
  const [isCalling, setIsCalling] = useState(false);
  const [callStatus, setCallStatus] = useState<string | null>(null);

  const handleCallRegistration = async () => {
    if (!inputValue.trim() || inputValue.length !== 10) {
      setCallStatus('Error: Please enter a valid 10-digit phone number');
      return;
    }

    setIsCalling(true);
    setCallStatus(null);

    try {
      const response = await fetch('/api/agent/call', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          phoneNumber: `${countryCode} ${inputValue}`,
          agentName,
          agentRole: role,
          agentId
        }),
      });

      const data = await response.json();

      if (data.success) {
        if (data.demo) {
          setCallStatus('A Call has been initiated successfully!');
        } else {
          setCallStatus(`Call initiated! ID: ${data.callId}`);
        }
        setInputValue(''); // Clear input after successful call
      } else {
        setCallStatus(`Error: ${data.error}`);
      }
    } catch (error) {
      setCallStatus('Failed to register call. Please try again.');
    } finally {
      setIsCalling(false);
    }
  };
  return (
    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl shadow-2xl overflow-hidden hover:bg-white/10 transition-all duration-300">
      {/* Profile Image - Square */}
      <div className="relative aspect-square">
        <img
          src={profileImage}
          alt={`${agentName} profile`}
          className="w-full h-full object-cover"
        />
        
        {/* Dark overlay for better input visibility */}
        <div className="absolute inset-0 bg-black/40"></div>
        
        {/* Call Status Alert - Top of image */}
        {callStatus && (
          <div className="absolute top-2 left-1/2 transform -translate-x-1/2 z-10 w-[90%]">
            <div className={`text-xs p-2 rounded-md flex items-start gap-0.5 ${
              callStatus.includes('Error') 
                ? 'bg-red-100 text-red-600 border border-red-300 backdrop-blur-sm text-center justify-center'
                : callStatus.includes('A Call has been initiated successfully!') 
                  ? 'bg-green-100 text-green-600 border border-green-300 backdrop-blur-sm text-left justify-start'
                  : 'bg-green-500/90 text-green-100 border border-green-400 backdrop-blur-sm text-center justify-center'
            }`}>
              {callStatus.includes('Error') && (
                <TriangleAlert className="w-3 h-3 text-red-600 flex-shrink-0 mt-0.5" />
              )}
              {callStatus.includes('A Call has been initiated successfully!') && (
                <Check className="w-3 h-3 text-green-600 flex-shrink-0 mt-0.5" />
              )}
              <span>{callStatus.replace('Error: ', '')}</span>
            </div>
          </div>
        )}
        
        {/* Phone Number Input - 90% width */}
        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-[90%] pb-8">
          <div className="bg-white/5 backdrop-blur-sm rounded-xl px-3 py-2 flex items-center gap-2 border border-white/10">
            {/* Fixed Australian flag and +61 */}
            <div className="flex items-center gap-1 shrink-0">
              {flag}
              <span className="text-xs font-medium text-white/90">
                {countryCode}
              </span>
            </div>
            
            {/* Phone number input container with icon inside */}
            <div className="flex-1 relative">
              <input
                type="tel"
                value={inputValue}
                onChange={(e) => {
                  const value = e.target.value.replace(/\D/g, '').slice(0, 10);
                  setInputValue(value);
                }}
                placeholder="Mobile number"
                className="w-full bg-transparent text-xs font-medium text-white/90 placeholder:text-white/50 focus:outline-none pr-10"
                maxLength={10}
              />
              
              {/* Call icon inside input box */}
              <button 
                onClick={handleCallRegistration}
                disabled={isCalling || !inputValue.trim()}
                className="absolute right-0.5 top-1/2 transform -translate-y-1/2 flex size-7 items-center justify-center rounded-md border border-white/20 text-white/60 bg-rose-600 hover:bg-rose-700 disabled:bg-gray-500 disabled:cursor-not-allowed transition-all duration-300"
              >
                {isCalling ? (
                  <Loader2 className="w-3 h-3 text-white animate-spin" />
                ) : (
                  <Phone className="w-3 h-3 text-white" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Agent Info */}
      <div className="p-4">
        <h3 className="text-white/90 font-medium text-lg tracking-wide mb-1">
          {agentName}
        </h3>
        <p className="text-white/70 text-sm">
          {role}
        </p>
      </div>
    </div>
  );
}
