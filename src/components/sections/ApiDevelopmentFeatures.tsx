'use client';

import { motion } from "framer-motion";
import { Code, Database, Shield, Zap } from "lucide-react";

interface ApiDevelopmentFeaturesProps {
  features: string[];
  title?: string;
  className?: string;
}

export function ApiDevelopmentFeatures({ 
  features, 
  title = "What You Get",
  className = "" 
}: ApiDevelopmentFeaturesProps) {
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

  // Map features to appropriate API development related icons
  const getFeatureIcon = (feature: string, index: number) => {
    const iconMap = [Code, Database, Shield, Zap];
    const IconComponent = iconMap[index] || Code;
    return IconComponent;
  };

  return (
    <motion.div
      custom={2}
      variants={fadeUpVariants}
      initial="hidden"
      animate="visible"
      className={`max-w-6xl mx-auto ${className}`}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, index) => (
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
              {(() => {
                const IconComponent = getFeatureIcon(feature, index);
                return <IconComponent className="h-4 w-4 flex-none" />;
              })()}
            </div>
            <span className="text-white/90 font-medium text-lg tracking-wide">{feature}</span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
