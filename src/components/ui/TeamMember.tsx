'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Play, Pause } from 'lucide-react';
import { useState, useRef } from 'react';

interface TeamMemberProps {
  name: string;
  title: string;
  videoUrl?: string;
  imageUrl?: string;
}

export function TeamMember({ name, title, videoUrl, imageUrl }: TeamMemberProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
    }
  };

  const handlePlay = () => {
    setIsPlaying(true);
  };

  const handlePause = () => {
    setIsPlaying(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-white/10 via-white/5 to-white/10 backdrop-blur-md border border-white/20 hover:bg-gradient-to-br hover:from-white/15 hover:via-white/8 hover:to-white/15 hover:border-white/30 transition-all duration-300 shadow-2xl shadow-black/20"
    >
      {/* Video or Image Container */}
      <div className="aspect-[4/5] relative overflow-hidden bg-white/5 p-4">
        {videoUrl ? (
          <>
            <div className="relative w-full h-full rounded-lg overflow-hidden">
              {/* Photo Thumbnail - shown when paused */}
              {imageUrl && (
                <div className="absolute inset-0 w-full h-full">
                  <Image
                    src={imageUrl}
                    alt={name}
                    fill
                    className={`object-cover transition-opacity duration-300 ${
                      isPlaying ? 'opacity-0' : 'opacity-100'
                    }`}
                  />
                </div>
              )}
              {/* Video - shown when playing, constrained within photo space */}
              <video
                ref={videoRef}
                src={videoUrl}
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${
                  isPlaying ? 'opacity-100' : 'opacity-0 pointer-events-none'
                }`}
                muted
                loop
                playsInline
                onPlay={handlePlay}
                onPause={handlePause}
                preload="metadata"
              />
              {/* Play/Pause Button Overlay */}
              {!isPlaying && (
                <div className="absolute bottom-4 right-4">
                  <button
                    onClick={handlePlayPause}
                    className="flex items-center justify-center w-16 h-16 bg-rose-600 border border-rose-600 rounded-full shadow-lg hover:bg-rose-500 hover:border-rose-500 hover:shadow-xl transition-all duration-300 cursor-pointer z-10"
                    aria-label="Play video"
                  >
                    <Play className="w-6 h-6 text-white ml-1" />
                  </button>
                </div>
              )}
              {isPlaying && (
                <div className="absolute bottom-6 right-6 z-10">
                  <button
                    onClick={handlePlayPause}
                    className="flex items-center justify-center w-8 h-8 bg-rose-600 border border-rose-600 rounded-full shadow-lg hover:bg-rose-500 hover:border-rose-500 hover:shadow-xl transition-all duration-300 cursor-pointer"
                    aria-label="Pause video"
                  >
                    <Pause className="w-3 h-3 text-white" />
                  </button>
                </div>
              )}
            </div>
          </>
        ) : imageUrl ? (
          <div className="relative w-full h-full rounded-lg overflow-hidden">
            <Image
              src={imageUrl}
              alt={name}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-white/10 to-white/5 flex items-center justify-center rounded-lg">
            <div className="text-white/40 text-4xl font-bold">{name.charAt(0)}</div>
          </div>
        )}
      </div>
      
      {/* Name and Title */}
      <div className="p-6 text-center">
        <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-white/90 transition-colors">
          {name}
        </h3>
        <p className="text-sm text-white/60 leading-relaxed">
          {title}
        </p>
      </div>
    </motion.div>
  );
}

