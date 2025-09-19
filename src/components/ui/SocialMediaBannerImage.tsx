'use client';

import Image from 'next/image';

export function SocialMediaBannerImage() {
  return (
    <div className="relative">
      <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
        <Image
          src="/services/custom-development.png"
          alt="Social Media Management Dashboard"
          width={600}
          height={400}
          className="max-w-full h-auto rounded-lg"
          priority
        />
      </div>
    </div>
  );
}
