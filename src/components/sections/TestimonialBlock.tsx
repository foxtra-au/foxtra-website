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
      quote: "Foxtra's AI agents have revolutionized our customer service. We're now handling 3x more inquiries with better satisfaction rates.",
      name: "Sarah Chen",
      designation: "CEO at TechFlow Solutions",
      src: "/testimonials/person-1.jpg",
    },
    {
      quote: "The custom development team built exactly what we envisioned. Their AI-first approach resulted in a platform that's both powerful and intuitive.",
      name: "Michael Rodriguez", 
      designation: "CTO at InnovateSphere",
      src: "/testimonials/person-2.jpg",
    },
    {
      quote: "AI-powered marketing campaigns increased our lead generation by 400%. Their data-driven approach has been game-changing for our growth.",
      name: "Emily Watson",
      designation: "Marketing Director at CloudScale", 
      src: "/testimonials/person-3.jpg",
    },
    {
      quote: "Working with Foxtra has been transformative. Their expertise helped us automate workflows and improve efficiency by 60%.",
      name: "James Kim",
      designation: "Operations Manager at DataPro",
      src: "/testimonials/person-4.jpg",
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