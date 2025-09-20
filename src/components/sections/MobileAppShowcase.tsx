'use client';

import { motion } from "framer-motion";
import { ImageAutoSlider } from '@/components/ui/ImageAutoSlider';
import Image from 'next/image';

export function MobileAppShowcase() {
  const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        delay: 0.5 + i * 0.2,
        ease: [0.25, 0.4, 0.25, 1],
      },
    }),
  };

  const mobileApps = [
    {
      image: "/services/mobile-app/little-steps.png",
      name: "Little Steps"
    },
    {
      image: "/services/mobile-app/localfpx-partner.png", 
      name: "Local Fox"
    },
    {
      image: "/services/mobile-app/localfpx-customer.png",
      name: "Local Fox"
    },
    {
      image: "/services/mobile-app/zingo-customer.png",
      name: "Zingo"
    },
    {
      image: "/services/mobile-app/Business-card-app.png",
      name: "Spotcard"
    }
  ];

  // Duplicate for seamless scrolling
  const mobileAppImages = [...mobileApps, ...mobileApps].map(app => app.image);

  return (
    <motion.div
      custom={4}
      variants={fadeUpVariants}
      initial="hidden"
      animate="visible"
      className="pt-24 max-w-6xl mx-auto"
    >
      {/* Title Section at Bottom */}
      <div className="text-left mb-6">
        <h2 className="text-3xl font-bold text-white mb-4">Our Mobile Apps</h2>
        <p className="text-white/60 text-lg">Showcasing innovative mobile applications across different industries</p>
      </div>
      
      {/* Scrolling Images */}
      <section className="relative">
        <div className="w-full relative overflow-hidden flex items-center justify-center">
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
                  animation: 'scroll-right 25s linear infinite'
                }}
              >
                {[...mobileApps, ...mobileApps].map((app, index) => (
                  <div
                    key={index}
                    className="flex-shrink-0 rounded-xl overflow-hidden shadow-2xl relative transition-transform duration-300 hover:scale-105 hover:brightness-110 w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80"
                  >
                    <Image
                      src={app.image}
                      alt={`${app.name} mobile app`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 128px, (max-width: 1024px) 160px, 192px"
                    />
                    {/* App Name Label */}
                    <div className="absolute bottom-0 left-0 right-0 bg-black/60 backdrop-blur-sm p-2">
                      <p className="text-white text-sm font-medium text-center">{app.name}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
