'use client';

import { motion } from 'framer-motion';
import { MessageSquare, Cog, Zap, Globe } from 'lucide-react';

export function AIWebsitesProcess() {
  const steps = [
    {
      number: "01",
      icon: <MessageSquare className="h-6 w-6" />,
      title: "Brief & Requirements",
      description: "Tell us about your business, goals, and preferences. Our AI analyzes your needs in minutes.",
      time: "15 min"
    },
    {
      number: "02", 
      icon: <Cog className="h-6 w-6" />,
      title: "AI Design Generation",
      description: "Our AI creates your custom website design, content, and layout based on your requirements.",
      time: "2 hours"
    },
    {
      number: "03",
      icon: <Zap className="h-6 w-6" />,
      title: "Development & Testing",
      description: "We build your website, optimize for performance, and ensure everything works perfectly.",
      time: "1.5 hours"
    },
    {
      number: "04",
      icon: <Globe className="h-6 w-6" />,
      title: "Launch & Handover",
      description: "Your website goes live and you receive full access with training on how to manage it.",
      time: "15 min"
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
            Your Website in 4 Hours
          </h2>
          <p className="text-lg text-white/70 max-w-3xl font-sans">
            Our streamlined AI-powered process delivers your professional website in just 4 hours from start to finish.
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

        {/* Total Time Summary */}
        <div className="mt-16 text-center">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4 font-sans">
              Total Delivery Time: 4 Hours
            </h3>
            <p className="text-white/70 font-sans mb-6">
              From your initial brief to a live, professional website - all in just 4 hours.
            </p>
            <div className="flex justify-center items-center space-x-4 text-white/60">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <span className="text-sm">AI-Powered</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-sm">Fast Delivery</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                <span className="text-sm">Professional Quality</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
