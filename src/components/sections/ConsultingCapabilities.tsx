'use client';

import { motion } from 'framer-motion';
import {
  Sparkles,
  Cloud,
  Building2,
  Users,
  Brain,
  type LucideIcon,
} from 'lucide-react';

interface Capability {
  title: string;
  description: string;
  icon: LucideIcon;
}

const rowOne: Capability[] = [
  {
    title: 'Digital Transformation',
    description:
      'Helping organisations modernise legacy systems and enable scalable digital operations.',
    icon: Sparkles,
  },
  {
    title: 'Cloud & Platform Engineering',
    description:
      'Designing resilient cloud architectures, DevOps practices and high-performance platforms.',
    icon: Cloud,
  },
  {
    title: 'Enterprise Application Development',
    description:
      'Building secure, integrated software solutions tailored to complex business environments.',
    icon: Building2,
  },
];

const rowTwo: Capability[] = [
  {
    title: 'Salesforce & CRM Solutions',
    description:
      'Delivering strategic Salesforce implementations, integrations and optimisation services.',
    icon: Users,
  },
  {
    title: 'AI & Intelligent Automation',
    description:
      'Embedding AI-driven automation to improve efficiency and decision-making.',
    icon: Brain,
  },
];

function CapabilityCard({
  item,
  index,
}: {
  item: Capability;
  index: number;
}) {
  const Icon = item.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay: 0.05 * index }}
      className="group relative flex h-full flex-col overflow-hidden rounded-md border border-white/20 transition-all duration-300 hover:border-white/30"
    >
      <div className="flex flex-1 flex-col bg-black p-6">
        <div className="mb-4 flex size-12 shrink-0 items-center justify-center rounded-lg border border-white/20 text-rose-400/90">
          <Icon className="h-6 w-6" aria-hidden />
        </div>
        <h3 className="mb-2 text-lg font-semibold text-white">{item.title}</h3>
        <p className="text-sm leading-relaxed text-white/60">{item.description}</p>
      </div>
    </motion.div>
  );
}

export function ConsultingCapabilities() {
  return (
    <section
      className="relative z-10 mx-auto mt-12 max-w-6xl px-4 pb-4 sm:mt-16 md:mt-20 sm:px-6 lg:px-8"
      aria-label="Consulting capabilities"
    >
      {/* Row 1: three equal columns */}
      <div className="mb-6 grid grid-cols-1 gap-6 md:grid-cols-3">
        {rowOne.map((item, index) => (
          <CapabilityCard key={item.title} item={item} index={index} />
        ))}
      </div>

      {/* Row 2: two equal full-width halves */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {rowTwo.map((item, index) => (
          <CapabilityCard key={item.title} item={item} index={index + 3} />
        ))}
      </div>
    </section>
  );
}
