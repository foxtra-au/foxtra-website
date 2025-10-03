'use client';

import { useEffect, useState } from 'react';
import { SimplifiedVoiceAgent } from './SimplifiedVoiceAgent';

export function PersistentVoiceAgent() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Only render VoiceAgent after component is mounted to prevent hydration issues
  if (!isMounted) {
    return (
      <div className="fixed bottom-6 right-6 z-50">
        <div className="flex items-center justify-center w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl shadow-2xl">
          <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin" />
        </div>
      </div>
    );
  }

  return <SimplifiedVoiceAgent />;
}