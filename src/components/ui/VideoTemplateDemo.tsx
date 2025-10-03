'use client';

import { useState } from 'react';
import { Play, Pause } from 'lucide-react';

export function VideoTemplateDemo() {
  const [playingVideo, setPlayingVideo] = useState<number | null>(null);
  
  const videoUrls = [
    'https://foxtra-ai-website-videos.s3.ap-southeast-2.amazonaws.com/Foxtra-videos-project.mp4',
    'https://foxtra-ai-website-videos.s3.ap-southeast-2.amazonaws.com/dental-prabin.mp4'
  ];

  const toggleVideo = (index: number) => {
    if (playingVideo === index) {
      setPlayingVideo(null);
    } else {
      setPlayingVideo(index);
    }
  };

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <div className="flex gap-2 w-full max-w-lg">
        {/* First Video Section */}
        <div className="bg-white/5 backdrop-blur-sm border border-white/5 rounded-xl p-3 w-1/2">
          <div className="w-full aspect-[9/16] rounded-xl overflow-hidden bg-gray-900/50 relative">
          {playingVideo === 0 ? (
            <video
              src={videoUrls[0]}
              autoPlay
              loop
              playsInline
              className="w-full h-full object-cover"
              onEnded={() => setPlayingVideo(null)}
            />
          ) : (
            <div className="w-full h-full bg-gray-900/50 flex items-center justify-center cursor-pointer" onClick={() => toggleVideo(0)}>
              <video
                src={videoUrls[0]}
                muted
                playsInline
                className="w-full h-full object-cover"
                onLoadedData={(e) => {
                  e.currentTarget.currentTime = 1;
                }}
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="flex items-center justify-center w-16 h-16 bg-rose-600 border border-rose-600 rounded-full shadow-lg hover:bg-rose-500 hover:border-rose-500 hover:shadow-xl transition-all duration-300">
                  <Play className="w-6 h-6 text-white ml-1" />
                </div>
              </div>
            </div>
          )}
          {playingVideo === 0 && (
            <div className="absolute bottom-4 right-4">
              <button
                onClick={() => toggleVideo(0)}
                className="flex items-center justify-center w-8 h-8 bg-rose-600 border border-rose-600 rounded-full shadow-lg hover:bg-rose-500 hover:border-rose-500 hover:shadow-xl transition-all duration-300"
              >
                <Pause className="w-3 h-3 text-white" />
              </button>
            </div>
          )}
          </div>
        </div>

        {/* Second Video Section */}
        <div className="bg-white/5 backdrop-blur-sm border border-white/5 rounded-xl p-3 w-1/2">
          <div className="w-full aspect-[9/16] rounded-xl overflow-hidden bg-gray-900/50 relative">
          {playingVideo === 1 ? (
            <video
              src={videoUrls[1]}
              autoPlay
              loop
              playsInline
              className="w-full h-full object-cover"
              onEnded={() => setPlayingVideo(null)}
            />
          ) : (
            <div className="w-full h-full bg-gray-900/50 flex items-center justify-center cursor-pointer" onClick={() => toggleVideo(1)}>
              <video
                src={videoUrls[1]}
                muted
                playsInline
                className="w-full h-full object-cover"
                onLoadedData={(e) => {
                  e.currentTarget.currentTime = 1;
                }}
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="flex items-center justify-center w-16 h-16 bg-rose-600 border border-rose-600 rounded-full shadow-lg hover:bg-rose-500 hover:border-rose-500 hover:shadow-xl transition-all duration-300">
                  <Play className="w-6 h-6 text-white ml-1" />
                </div>
              </div>
            </div>
          )}
          {playingVideo === 1 && (
            <div className="absolute bottom-4 right-4">
              <button
                onClick={() => toggleVideo(1)}
                className="flex items-center justify-center w-8 h-8 bg-rose-600 border border-rose-600 rounded-full shadow-lg hover:bg-rose-500 hover:border-rose-500 hover:shadow-xl transition-all duration-300"
              >
                <Pause className="w-3 h-3 text-white" />
              </button>
            </div>
          )}
          </div>
        </div>
      </div>
    </div>
  );
}
