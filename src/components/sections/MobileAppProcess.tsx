'use client';

import { motion } from "framer-motion";
import { Smartphone, Palette, Code, Upload } from 'lucide-react';

export function MobileAppProcess() {
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

  const processSteps = [
    {
      step: "01",
      title: "Discovery & Planning",
      description: "We analyze your requirements, target audience, and platform preferences to create a comprehensive development plan.",
      icon: Smartphone,
      color: "bg-yellow-500"
    },
    {
      step: "02", 
      title: "UI/UX Design",
      description: "Our designers create intuitive, user-friendly interfaces that follow platform guidelines and best practices.",
      icon: Palette,
      color: "bg-rose-500"
    },
    {
      step: "03",
      title: "Development",
      description: "We build your app using the most suitable technology stack, ensuring optimal performance and scalability.",
      icon: Code,
      color: "bg-blue-500"
    },
    {
      step: "04",
      title: "Testing & Launch",
      description: "Rigorous testing across devices, app store submission, and launch support to ensure successful deployment.",
      icon: Upload,
      color: "bg-green-500"
    }
  ];

  return (
    <motion.div
      custom={6}
      variants={fadeUpVariants}
      initial="hidden"
      animate="visible"
      className="pt-24 max-w-6xl mx-auto"
    >
      <div className="text-left mb-12">
        <h2 className="text-3xl font-bold text-white mb-4">Our Development Process</h2>
        <p className="text-white/60 text-lg">A structured approach to delivering exceptional mobile applications</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {processSteps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 + index * 0.1 }}
            className="relative"
          >
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 h-full hover:bg-white/10 transition-all duration-300 group">
              {/* Step number */}
              <div className="absolute -top-4 left-8">
                <div className={`w-8 h-8 ${step.color} rounded-lg flex items-center justify-center text-white font-bold text-sm`}>
                  {step.step}
                </div>
              </div>
              
              {/* Icon */}
              <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-white/20 transition-all duration-300">
                <step.icon className="w-8 h-8 text-white" />
              </div>
              
              {/* Content */}
              <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
              <p className="text-white/70 text-sm leading-relaxed">{step.description}</p>
            </div>
            
            {/* Connector line for desktop */}
            {index < processSteps.length - 1 && (
              <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-white/20 transform -translate-y-1/2" />
            )}
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
