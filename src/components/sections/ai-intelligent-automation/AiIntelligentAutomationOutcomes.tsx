'use client';

import { motion } from 'framer-motion';
import {
  Hand,
  Target,
  MessageCircle,
  Zap,
  Layers,
  TrendingUp,
  type LucideIcon,
} from 'lucide-react';

const outcomes: { text: string; icon: LucideIcon }[] = [
  { text: 'Reduced manual operational effort', icon: Hand },
  { text: 'Improved decision-making accuracy', icon: Target },
  { text: 'Enhanced customer interactions', icon: MessageCircle },
  { text: 'Faster business process execution', icon: Zap },
  { text: 'Scalable automation frameworks', icon: Layers },
  { text: 'Increased organisational productivity', icon: TrendingUp },
];

export function AiIntelligentAutomationOutcomes() {
  return (
    <section className="relative w-full py-12 md:py-16" aria-labelledby="ai-outcomes-heading">
      <div className="relative z-10 container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-6xl"
        >
          <h2
            id="ai-outcomes-heading"
            className="mb-8 text-3xl font-bold tracking-tight text-white md:text-4xl"
          >
            Automation & AI Outcomes
          </h2>
          <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {outcomes.map(({ text, icon: Icon }) => (
              <li
                key={text}
                className="flex gap-3 rounded-lg border border-white/10 bg-white/[0.03] p-4 backdrop-blur-sm"
              >
                <span
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-white/20 text-rose-400/90"
                  aria-hidden
                >
                  <Icon className="h-5 w-5" />
                </span>
                <span className="flex min-w-0 items-center text-base font-medium leading-snug text-white/85">
                  {text}
                </span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
