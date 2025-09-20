'use client';

import { motion } from "framer-motion";
import { ImageAutoSlider } from '@/components/ui/ImageAutoSlider';

export function PortfolioShowcase() {
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

  const portfolioImages = [
    "/services/custom-development/a2z-accountants.png",
    "/services/custom-development/aid-foundation-v2.png",
    "/services/custom-development/aid-foundation.png",
    "/services/custom-development/all-smiles-bds.png",
    "/services/custom-development/fintax-mates.png",
    "/services/custom-development/localfox-admin.png",
    "/services/custom-development/localfox-partner.png",
    "/services/custom-development/localfox-web.png",
    "/services/custom-development/ozkindy.png",
    "/services/custom-development/pacta-realestate.png",
    "/services/custom-development/realnest.png",
    "/services/custom-development/recruitement.png",
    "/services/custom-development/redcart.png"
  ];

  return (
    <motion.div
      custom={4}
      variants={fadeUpVariants}
      initial="hidden"
      animate="visible"
      className="pt-24 max-w-6xl mx-auto"
    >
      <div className="text-left mb-6">
        <h2 className="text-3xl font-bold text-white mb-4">Our Portfolio</h2>
        <p className="text-white/60 text-lg">Showcasing innovative projects and successful implementations</p>
      </div>
      <section className="relative">
        <ImageAutoSlider 
          images={portfolioImages}
          duration={25}
          imageSize="md"
          className="[&>div:first-child]:py-2 lg:[&>div:first-child]:py-1"
        />
      </section>
    </motion.div>
  );
}
