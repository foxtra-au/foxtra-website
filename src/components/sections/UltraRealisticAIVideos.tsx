'use client';

import React, { useState } from 'react';
import { Play, Pause } from 'lucide-react';

export function UltraRealisticAIVideos() {
  const [playingVideo, setPlayingVideo] = useState<number | null>(null);

  const videoUrls = [
    'https://foxtra-ai-website-videos.s3.ap-southeast-2.amazonaws.com/salon-telugu.mp4',
    'https://foxtra-ai-website-videos.s3.ap-southeast-2.amazonaws.com/life-english.mp4',
    'https://foxtra-ai-website-videos.s3.ap-southeast-2.amazonaws.com/gold-telugu.mp4',
    'https://foxtra-ai-website-videos.s3.ap-southeast-2.amazonaws.com/fabo-washing.mp4',
    'https://foxtra-ai-website-videos.s3.ap-southeast-2.amazonaws.com/commercial-space-english.mp4',
    'https://foxtra-ai-website-videos.s3.ap-southeast-2.amazonaws.com/rainbow-india-telugu.mp4',
  ];

  const toggleVideo = (index: number) => {
    if (playingVideo === index) {
      setPlayingVideo(null);
    } else {
      setPlayingVideo(index);
    }
  };

  const VideoTile = ({ url, index }: { url: string; index: number }) => {
    const isPlaying = playingVideo === index;
    
    return (
      <div className="group relative overflow-hidden rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300">
        <div className="aspect-video relative">
          <video
            key={`video-${index}-${isPlaying ? 'playing' : 'thumbnail'}`}
            src={url}
            autoPlay={isPlaying}
            loop={isPlaying}
            muted={!isPlaying}
            playsInline
            className="w-full h-full object-cover rounded-xl cursor-pointer"
            onClick={() => toggleVideo(index)}
            onLoadedData={(e) => {
              if (!isPlaying) {
                // Set the video to show the first frame as thumbnail
                e.currentTarget.currentTime = 1;
              }
            }}
            onEnded={() => setPlayingVideo(null)}
          />
          
          {!isPlaying && (
            <div className="absolute bottom-4 right-4">
              <button 
                onClick={() => toggleVideo(index)}
                className="relative z-10 flex items-center justify-center w-8 h-8 bg-rose-600 border border-rose-600 rounded-full shadow-lg group-hover:bg-rose-500 group-hover:border-rose-500 group-hover:shadow-xl transition-all duration-300 cursor-pointer"
              >
                <Play className="w-3 h-3 text-white ml-0.5" />
              </button>
            </div>
          )}
          
          {isPlaying && (
            <div className="absolute bottom-4 right-4">
              <button
                onClick={() => toggleVideo(index)}
                className="relative z-10 flex items-center justify-center w-8 h-8 bg-rose-600 border border-rose-500 rounded-full shadow-lg hover:bg-rose-400 hover:border-rose-400 hover:shadow-xl transition-all duration-300"
              >
                <Pause className="w-3 h-3 text-white" />
              </button>
            </div>
          )}
        </div>
      </div>
    );
  };

  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="text-left mb-12">
          <h2 className="text-3xl font-bold text-white mb-4 font-sans">
            Ultra-Realistic AI Videos
          </h2>
          <p className="text-lg text-white/70 max-w-3xl font-sans">
            We create effective ultra realistic AI videos for businesses like yours
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videoUrls.map((url, index) => (
            <VideoTile key={index} url={url} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
