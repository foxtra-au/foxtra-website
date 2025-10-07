'use client';

import { motion } from "framer-motion";
import { Bot, Code, TrendingUp, Users } from "lucide-react";

interface Feature {
  icon: React.ElementType;
  title: string;
  description: string;
}

export function HomeFeatures() {
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

  const features: Feature[] = [
    {
      icon: Bot,
      title: "AI Voice Agents",
      description: "Intelligent voice chatbots and AI agents that handle customer service automation 24/7 for Australian businesses"
    },
    {
      icon: Code,
      title: "Business Automation",
      description: "Custom AI automation solutions and smart applications that streamline your business operations"
    },
    {
      icon: TrendingUp,
      title: "Marketing Automation",
      description: "AI-powered marketing automation, SEO, and advertising campaigns that drive business growth"
    },
    {
      icon: Users,
      title: "AI Consultations",
      description: "Expert AI strategy guidance and automation planning for your business transformation in Australia"
    }
  ];

  return (
    <motion.div
      custom={2}
      variants={fadeUpVariants}
      initial="hidden"
      animate="visible"
      className="max-w-6xl mx-auto mt-8"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, index) => {
          const IconComponent = feature.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 + index * 0.1 }}
              className="flex items-center space-x-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 group"
              onMouseEnter={(e) => {
                const iconDiv = e.currentTarget.querySelector('div[data-icon]') as HTMLElement;
                if (iconDiv) iconDiv.style.backgroundColor = '#FFCC02';
              }}
              onMouseLeave={(e) => {
                const iconDiv = e.currentTarget.querySelector('div[data-icon]') as HTMLElement;
                if (iconDiv) iconDiv.style.backgroundColor = 'transparent';
              }}
            >
              <div data-icon className="flex size-8 shrink-0 items-center justify-center rounded-md border border-white/20 text-white/60 transition-all duration-300 group-hover:text-black group-hover:border-white" onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#FFCC02'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}>
                <IconComponent className="h-4 w-4 flex-none" />
              </div>
              <div className="flex-1">
                <h3 className="text-white/90 font-semibold text-lg mb-1">{feature.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{feature.description}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}
