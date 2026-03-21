'use client';

import { motion } from 'framer-motion';
import {
  RefreshCw,
  Plug,
  HeadphonesIcon,
  Puzzle,
  DatabaseBackup,
  Gauge,
  type LucideIcon,
} from 'lucide-react';

const scenarios: { title: string; description: string; icon: LucideIcon }[] = [
  {
    title: 'CRM Transformation Programs',
    description: 'End-to-end redesign of customer engagement platforms.',
    icon: RefreshCw,
  },
  {
    title: 'Salesforce Integration Projects',
    description: 'Connecting CRM with finance, operations and data systems.',
    icon: Plug,
  },
  {
    title: 'Service Cloud Enablement',
    description: 'Improving customer support workflows and visibility.',
    icon: HeadphonesIcon,
  },
  {
    title: 'Custom Platform Extensions',
    description: 'Building tailored solutions within Salesforce ecosystem.',
    icon: Puzzle,
  },
  {
    title: 'Data Migration & Modernisation',
    description: 'Transitioning legacy CRM data into modern platforms.',
    icon: DatabaseBackup,
  },
  {
    title: 'Ongoing Platform Optimisation',
    description: 'Enhancing performance, adoption and operational efficiency.',
    icon: Gauge,
  },
];

export function SalesforceCrmScenarios() {
  return (
    <section
      className="relative w-full py-12 md:py-16"
      aria-labelledby="sf-scenarios-heading"
    >
      <div className="relative z-10 container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-6xl"
        >
          <h2
            id="sf-scenarios-heading"
            className="mb-8 text-3xl font-bold tracking-tight text-white md:text-4xl"
          >
            Salesforce Initiatives We Support
          </h2>
          <ul className="grid list-none grid-cols-1 gap-6 md:grid-cols-3 md:grid-rows-2">
            {scenarios.map(({ title, description, icon: Icon }, index) => (
              <motion.li
                key={title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-24px' }}
                transition={{ delay: 0.05 * index }}
                className="flex h-full flex-col rounded-xl border border-white/15 bg-white/[0.04] p-6 backdrop-blur-sm transition-colors hover:border-white/25 hover:bg-white/[0.06]"
              >
                <div className="mb-4 flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-white/20 text-rose-400/90">
                  <Icon className="h-5 w-5" aria-hidden />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-white">{title}</h3>
                <p className="text-sm leading-relaxed text-white/65">{description}</p>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
