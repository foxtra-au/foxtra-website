'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FAQ } from '@/components/ui/FaqTabs';
import {
  customDevelopmentFAQ,
  aiVoiceAgentFAQ,
  aiChatAgentFAQ,
} from '@/data/faq-data';
import { mobileAppFAQ } from '@/data/mobile-app-faq-data';
import { cn } from '@/lib/utils';

const serviceTabs = [
  {
    id: 'custom-development',
    label: 'Custom Development',
    categories: customDevelopmentFAQ.categories,
    faqData: customDevelopmentFAQ.faqData,
  },
  {
    id: 'mobile-app',
    label: 'Mobile App Development',
    categories: {
      general: 'General',
      development: 'Development',
      deployment: 'Deployment',
    },
    faqData: mobileAppFAQ.faqData,
  },
  {
    id: 'ai-voice-agent',
    label: 'AI Voice Agent',
    categories: aiVoiceAgentFAQ.categories,
    faqData: aiVoiceAgentFAQ.faqData,
  },
  {
    id: 'ai-chat-agent',
    label: 'AI Chat Agent',
    categories: aiChatAgentFAQ.categories,
    faqData: aiChatAgentFAQ.faqData,
  },
] as const;

type ServiceTabId = (typeof serviceTabs)[number]['id'];

export function FAQsClient() {
  const [selectedService, setSelectedService] = useState<ServiceTabId>(serviceTabs[0].id);
  const current = serviceTabs.find((t) => t.id === selectedService)!;

  return (
    <div className="relative z-10">
      {/* Service tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 mb-8">
        {serviceTabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setSelectedService(tab.id)}
            className={cn(
              'relative overflow-hidden whitespace-nowrap rounded-lg border px-4 py-2.5 text-sm font-medium transition-colors',
              selectedService === tab.id
                ? 'border-rose-500 text-white bg-rose-500/20'
                : 'border-white/20 text-white/70 hover:text-white hover:border-white/40'
            )}
          >
            <span className="relative z-10">{tab.label}</span>
          </button>
        ))}
      </div>

      {/* FAQ content for selected service */}
      <AnimatePresence mode="wait">
        <motion.div
          key={selectedService}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.2 }}
        >
          <FAQ
            title={current.label}
            subtitle=""
            categories={current.categories}
            faqData={current.faqData}
            showHeader={false}
            showCategoryTabs={false}
            className="py-0 pt-4"
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
