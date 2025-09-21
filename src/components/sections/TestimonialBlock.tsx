'use client';

import { motion } from "framer-motion";
import { AnimatedTestimonials } from "@/components/ui/AnimatedTestimonials";

export function TestimonialBlock() {
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

  const testimonials = [
    {
      quote: "Foxtra AI has transformed our business operations completely. Their AI solutions have streamlined our processes and significantly improved our efficiency. The team's expertise and dedication to delivering quality results is outstanding.",
      name: "Lokesh M",
      designation: "CEO of Living Cluster",
      src: "/testimonials/Lokesh-lotez.png",
    },
    {
      quote: "Working with Foxtra has been a game-changer for Realnest. Their innovative AI technology and custom development solutions have helped us scale our business and serve our clients better than ever before.",
      name: "Sid Gandhi", 
      designation: "CEO of Realnest",
      src: "/testimonials/sid_realnest.png",
    },
    {
      quote: "Foxtra's AI-powered solutions have revolutionized how we operate at VHT Tech. Their expertise in automation and intelligent systems has helped us achieve remarkable growth and efficiency improvements.",
      name: "Ramesh V",
      designation: "MD of VHT Tech", 
      src: "/testimonials/vunnam-vht.png",
    },
    {
      quote: "Foxtra AI has been instrumental in helping Dreamrise Homes grow our business. Their AI solutions have improved our customer engagement and streamlined our operations significantly.",
      name: "Jith Singh",
      designation: "CEO of Dreamrise Homes",
      src: "/testimonials/jith-dreamrise.png",
    },
  ];

  return (
    <motion.div
      custom={3}
      variants={fadeUpVariants}
      initial="hidden"
      animate="visible"
      className="max-w-6xl mx-auto mt-20"
    >
      <div className="text-left mb-8 pt-6">
        <h2 className="text-3xl font-bold text-white mb-4">What Our Clients Say</h2>
        <p className="text-white/60 text-lg">
          Real stories from businesses that have transformed with our AI solutions
        </p>
      </div>
      <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 hover:bg-white/10 transition-all duration-300">
        <AnimatedTestimonials 
          testimonials={testimonials} 
          autoplay={true}
          className="py-0"
        />
      </div>
    </motion.div>
  );
}