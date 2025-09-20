'use client';

import { motion } from "framer-motion";
import { ImageAutoSlider } from '@/components/ui/ImageAutoSlider';

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

  const mobileAppImages = [
    "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2340&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=2340&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1611224923853-80b023f02d71?q=80&w=2340&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?q=80&w=2126&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2340&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=2340&auto=format&fit=crop"
  ];

  return (
    <motion.div
      custom={4}
      variants={fadeUpVariants}
      initial="hidden"
      animate="visible"
      className="pt-24 max-w-6xl mx-auto"
    >
      {/* Title Section at Bottom */}
      <div className="text-center mb-6">
        <h2 className="text-3xl font-bold text-white mb-4">Our Mobile Apps</h2>
        <p className="text-white/60 text-lg">Showcasing innovative mobile applications across different industries</p>
      </div>
      
      {/* Scrolling Images */}
      <section className="relative">
        <ImageAutoSlider 
          images={mobileAppImages}
          duration={25}
          imageSize="md"
          className="[&>div:first-child]:py-2 lg:[&>div:first-child]:py-1"
        />
      </section>
    </motion.div>
  );
}
