'use client';

import { motion } from 'framer-motion';
import { MessageSquare, Target, Play, BarChart3 } from 'lucide-react';

export function SocialAdsProcess() {
  const steps = [
    {
      number: "01",
      icon: <MessageSquare className="h-8 w-8" />,
      title: "Discovery & Strategy",
      description: "We analyze your business goals, target audience, and competition to create a winning ad strategy."
    },
    {
      number: "02", 
      icon: <Target className="h-8 w-8" />,
      title: "Campaign Setup",
      description: "We set up your ad accounts, create compelling ad creatives, and configure precise audience targeting."
    },
    {
      number: "03",
      icon: <Play className="h-8 w-8" />,
      title: "Launch & Monitor",
      description: "Your campaigns go live and we continuously monitor performance, making real-time optimizations."
    },
    {
      number: "04",
      icon: <BarChart3 className="h-8 w-8" />,
      title: "Optimize & Scale",
      description: "Based on performance data, we optimize campaigns and scale successful strategies for maximum ROI."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="text-left mb-16">
          <h2 className="text-3xl font-bold text-white mb-4 font-sans">
            Our Proven Process
          </h2>
          <p className="text-lg text-white/70 max-w-3xl font-sans">
            From strategy to optimization, we follow a proven process to ensure your social media advertising delivers results.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              variants={itemVariants}
              className="relative"
            >
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 hover:bg-white/10 transition-all duration-300 group h-full">
                {/* Step Number */}
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center">
                  <span className="text-black font-bold text-lg">{step.number}</span>
                </div>

                {/* Icon */}
                <div className="flex items-center justify-center w-16 h-16 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg mb-6 text-white/70 group-hover:text-white transition-colors duration-300">
                  {step.icon}
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-white mb-4 font-sans">
                  {step.title}
                </h3>
                <p className="text-white/70 font-sans">
                  {step.description}
                </p>
              </div>

              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-white/20 transform -translate-y-1/2">
                  <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-4 border-l-white/20 border-t-2 border-t-transparent border-b-2 border-b-transparent"></div>
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Timeline for Mobile */}
        <div className="lg:hidden mt-12">
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-white/20"></div>
            {steps.map((step, index) => (
              <div key={step.number} className="relative flex items-start mb-12 last:mb-0">
                <div className="flex-shrink-0 w-16 h-16 bg-yellow-500 rounded-lg flex items-center justify-center mr-6 z-10">
                  <span className="text-black font-bold text-lg">{step.number}</span>
                </div>
                <div className="flex-1 pt-2">
                  <h3 className="text-xl font-semibold text-white mb-2 font-sans">
                    {step.title}
                  </h3>
                  <p className="text-white/70 font-sans">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
