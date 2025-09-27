'use client';

import { motion } from 'framer-motion';
import { Zap, Settings, Target, TrendingUp, ArrowRight } from 'lucide-react';

export function LeadMagnetProcess() {
  const steps = [
    {
      number: "01",
      icon: <Zap className="h-6 w-6" />,
      title: "Instant Setup",
      description: "Activate your Lead Magnet on your website with our simple self-service setup. No technical knowledge required.",
      time: "2 min"
    },
    {
      number: "02", 
      icon: <Settings className="h-6 w-6" />,
      title: "Customize Form",
      description: "Configure the form fields to capture the specific information your accounting practice needs most.",
      time: "5 min"
    },
    {
      number: "03",
      icon: <Target className="h-6 w-6" />,
      title: "Start Capturing",
      description: "Your Lead Magnet goes live and starts capturing qualified leads with smart form completion and verification.",
      time: "Immediate"
    },
    {
      number: "04",
      icon: <TrendingUp className="h-6 w-6" />,
      title: "Convert & Grow",
      description: "Watch as your lead quality improves and conversion rates increase with verified, genuine prospects.",
      time: "Ongoing"
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
            Designed to Grow Your Practice
          </h2>
          <p className="text-lg text-white/70 max-w-3xl font-sans">
            By automating the initial steps of the client journey, you can focus on delivering value instead of chasing paperwork.
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
                <div className="flex items-center justify-center w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg mb-6 text-white/70 group-hover:text-white transition-colors duration-300">
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
                  <div className="mb-2">
                    <h3 className="text-xl font-semibold text-white font-sans">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-white/70 font-sans">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16">
          <div className="max-w-6xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
                {/* Left side - Title and Description (60%) */}
                <div className="lg:w-[60%] text-left">
                  <h3 className="text-2xl font-bold text-white mb-4 font-sans">
                    Ready to Transform Your Lead Capture?
                  </h3>
                  <p className="text-white/70 font-sans">
                    Start capturing higher quality leads and growing your accounting practice today with our Lead Magnet solution.
                  </p>
                </div>
                
                {/* Right side - Buttons (40%) */}
                <div className="lg:w-[40%] flex flex-row gap-4 justify-center lg:justify-end">
                  <a 
                    href="#" 
                    className="group flex-1 flex items-center justify-center px-4 py-4 text-white rounded-sm font-semibold text-lg bg-white/10 backdrop-blur-sm border border-white/20 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 hover:bg-white/20"
                  >
                    <span className="relative z-10 flex items-center">
                      <Target className="mr-2 h-5 w-5" />
                      <span className="hidden sm:inline">View Demo</span>
                      <span className="sm:hidden">Demo</span>
                    </span>
                  </a>
                  <a 
                    href="#" 
                    className="group flex-1 flex items-center justify-center px-4 py-4 text-white rounded-sm font-semibold text-lg shadow-2xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1" 
                    style={{ backgroundColor: '#FF335C', boxShadow: '0 25px 50px -12px rgba(255, 51, 92, 0.25)' }}
                  >
                    <span className="relative z-10 flex items-center">
                      <ArrowRight className="mr-2 h-5 w-5" />
                      Buy Now
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
