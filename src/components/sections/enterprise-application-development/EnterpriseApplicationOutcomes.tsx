'use client';

import { motion } from 'framer-motion';
import {
  Zap,
  Scaling,
  Plug,
  Hand,
  Users,
  Lightbulb,
  type LucideIcon,
} from 'lucide-react';

const outcomes: { text: string; icon: LucideIcon }[] = [
  { text: 'Improved operational efficiency', icon: Zap },
  { text: 'Scalable digital platforms', icon: Scaling },
  { text: 'Better system integration', icon: Plug },
  { text: 'Reduced manual processes', icon: Hand },
  { text: 'Enhanced user experience', icon: Users },
  { text: 'Faster business innovation', icon: Lightbulb },
];

export function EnterpriseApplicationOutcomes() {
  return (
    <section className="relative w-full py-12 md:py-16" aria-labelledby="ea-outcomes-heading">
      <div className="relative z-10 container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-6xl"
        >
          <h2
            id="ea-outcomes-heading"
            className="mb-8 text-3xl font-bold tracking-tight text-white md:text-4xl"
          >
            Application Transformation Outcomes
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
