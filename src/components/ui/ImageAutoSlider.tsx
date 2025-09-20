'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import Image from 'next/image';

interface ImageAutoSliderProps {
  className?: string;
  images?: string[];
  duration?: number;
  imageSize?: 'sm' | 'md' | 'lg';
}

export const ImageAutoSlider = ({ 
  className,
  images: customImages,
  duration = 20,
  imageSize = 'md'
}: ImageAutoSliderProps) => {
  // Default images for the infinite scroll - using Unsplash URLs
  const defaultImages = [
    "https://images.unsplash.com/photo-1518495973542-4542c06a5843?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1472396961693-142e6e269027?q=80&w=2152&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1505142468610-359e7d316be0?q=80&w=2126&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1482881497185-d4a9ddbe4151?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1673264933212-d78737f38e48?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1711434824963-ca894373272e?q=80&w=2030&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1675705721263-0bbeec261c49?q=80&w=1940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1524799526615-766a9833dec0?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  ];

  const images = customImages || defaultImages;
  
  // Duplicate images for seamless loop
  const duplicatedImages = [...images, ...images];

  // Size classes for images
  const sizeClasses = {
    sm: 'w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48',
    md: 'w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80',
    lg: 'w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96'
  };

  return (
    <div className={cn("w-full relative overflow-hidden flex items-center justify-center", className)}>
      {/* Scrolling images container */}
      <div className="relative z-10 w-full flex items-center justify-center py-8">
        <div 
          className="w-full max-w-6xl overflow-hidden"
          style={{
            maskImage: 'linear-gradient(90deg, transparent 0%, black 10%, black 90%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(90deg, transparent 0%, black 10%, black 90%, transparent 100%)'
          }}
        >
          <div 
            className="flex gap-6 w-max"
            style={{
              animation: `scroll-right ${duration}s linear infinite`
            }}
          >
            {duplicatedImages.map((image, index) => (
              <div
                key={index}
                className={cn(
                  "flex-shrink-0 rounded-xl overflow-hidden shadow-2xl relative transition-transform duration-300 hover:scale-105 hover:brightness-110",
                  sizeClasses[imageSize]
                )}
              >
                <Image
                  src={image}
                  alt={`Gallery image ${(index % images.length) + 1}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 128px, (max-width: 1024px) 160px, 192px"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};