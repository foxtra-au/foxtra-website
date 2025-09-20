'use client';

import { motion } from "framer-motion";
import { Smartphone, Globe, Code, Zap } from 'lucide-react';

export function MobileAppTechnologies() {
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

  const technologies = [
    {
      name: "React Native",
      icon: Globe,
      description: "Cross-platform mobile development",
      color: "from-blue-500 to-cyan-500"
    },
    {
      name: "Flutter",
      icon: Smartphone,
      description: "Google's UI toolkit for mobile",
      color: "from-blue-600 to-indigo-600"
    },
    {
      name: "Swift",
      icon: Code,
      description: "Native iOS development",
      color: "from-orange-500 to-red-500"
    },
    {
      name: "Kotlin",
      icon: Zap,
      description: "Native Android development",
      color: "from-purple-500 to-pink-500"
    }
  ];

  return (
    <motion.div
      custom={5}
      variants={fadeUpVariants}
      initial="hidden"
      animate="visible"
      className="pt-24 max-w-6xl mx-auto"
    >
      <div className="text-left mb-12">
        <h2 className="text-3xl font-bold text-white mb-4">Technologies We Use</h2>
        <p className="text-white/60 text-lg">Cutting-edge frameworks and tools for mobile app development</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {technologies.map((tech, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 + index * 0.1 }}
            className="relative group"
          >
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 h-full hover:bg-white/10 transition-all duration-300">
              <div className={`w-16 h-16 bg-gradient-to-br ${tech.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <tech.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-white mb-3">{tech.name}</h3>
              <p className="text-white/70 text-sm leading-relaxed">{tech.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
