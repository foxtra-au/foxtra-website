'use client';

import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

interface Tab {
  id: string;
  icon: React.ReactNode;
  title: string;
}

interface SliderTabsProps {
  tabs: Tab[];
  activeTab: string;
  onTabChange: (tabId: string) => void;
  className?: string;
}

export function SliderTabs({ tabs, activeTab, onTabChange, className = '' }: SliderTabsProps) {
  const [sliderStyle, setSliderStyle] = useState({ left: 0, width: 0 });
  const tabsRef = useRef<(HTMLButtonElement | null)[]>([]);

  useEffect(() => {
    const activeIndex = tabs.findIndex(tab => tab.id === activeTab);
    const activeTabElement = tabsRef.current[activeIndex];
    
    if (activeTabElement) {
      const { offsetLeft, offsetWidth } = activeTabElement;
      setSliderStyle({
        left: offsetLeft,
        width: offsetWidth,
      });
    }
  }, [activeTab, tabs]);

  return (
    <div className={`relative ${className}`}>
      {/* Tab Container */}
      <div className="relative flex items-center gap-1 bg-white/5 backdrop-blur-sm border border-white/20 rounded-lg p-1">
        {/* Animated Slider Background */}
        <motion.div
          className="absolute top-1 bottom-1 bg-rose-600 rounded-md"
          animate={{
            left: sliderStyle.left,
            width: sliderStyle.width,
          }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 30,
          }}
        />
        
        {/* Tab Buttons */}
        {tabs.map((tab, index) => (
          <button
            key={tab.id}
            ref={(el) => (tabsRef.current[index] = el)}
            onClick={() => onTabChange(tab.id)}
            className={`relative z-10 flex items-center gap-3 px-6 py-3 rounded-md transition-all duration-300 font-medium ${
              activeTab === tab.id
                ? 'text-white'
                : 'text-white/70 hover:text-white'
            }`}
          >
            <div className={`w-8 h-8 backdrop-blur-sm border rounded-md flex items-center justify-center transition-all duration-300 ${
              activeTab === tab.id
                ? 'bg-white/20 border-white/30'
                : 'bg-white/10 border-white/20'
            }`}>
              {tab.icon}
            </div>
            {tab.title}
          </button>
        ))}
      </div>
    </div>
  );
}
