'use client';

import { ReactNode } from 'react';
import { Phone } from 'lucide-react';

interface AgentCardProps {
  profileImage: string;
  phoneNumber: string;
  countryCode: string;
  flag: ReactNode;
  agentName: string;
  role: string;
}

export function AgentCard({ 
  profileImage, 
  phoneNumber, 
  countryCode, 
  flag, 
  agentName, 
  role 
}: AgentCardProps) {
  return (
    <div className="bg-gray-50 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      {/* Profile Image */}
      <div className="relative">
        <img
          src={profileImage}
          alt={`${agentName} profile`}
          className="w-full h-48 object-cover rounded-t-lg"
        />
        
        {/* Phone Number Overlay */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2">
          <div className="bg-white rounded-lg shadow-md px-4 py-2 flex items-center gap-2 border border-gray-200">
            {flag}
            <span className="text-sm font-medium text-gray-700">
              {countryCode} {phoneNumber}
            </span>
            <button className="ml-1 p-1 rounded-full bg-red-500 hover:bg-red-600 transition-colors duration-200">
              <Phone className="w-3 h-3 text-white" />
            </button>
          </div>
        </div>
      </div>
      
      {/* Agent Info */}
      <div className="pt-6 pb-4 px-4">
        <h3 className="text-lg font-semibold text-gray-900 mb-1">
          {agentName}
        </h3>
        <p className="text-sm text-gray-600">
          {role}
        </p>
      </div>
    </div>
  );
}
