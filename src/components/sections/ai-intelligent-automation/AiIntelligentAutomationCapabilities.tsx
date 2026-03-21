'use client';

import { motion } from 'framer-motion';
import {
  Compass,
  Workflow,
  Plug,
  BarChart3,
  MessageSquare,
  Gauge,
  type LucideIcon,
} from 'lucide-react';

const capabilities: { title: string; description: string; icon: LucideIcon }[] = [
  {
    title: 'AI Strategy & Advisory',
    description: 'Defining practical AI adoption roadmaps.',
    icon: Compass,
  },
  {
    title: 'Process Automation Solutions',
    description: 'Automating business workflows using intelligent systems.',
    icon: Workflow,
  },
  {
    title: 'AI Integration Engineering',
    description: 'Embedding AI into enterprise platforms and applications.',
    icon: Plug,
  },
  {
    title: 'Data-Driven Insights',
    description: 'Enabling predictive analytics and operational intelligence.',
    icon: BarChart3,
  },
  {
    title: 'Conversational & Digital Agents',
    description: 'Designing intelligent assistants for customer and internal operations.',
    icon: MessageSquare,
  },
  {
    title: 'Automation Platform Optimisation',
    description: 'Improving performance, governance and long-term value.',
    icon: Gauge,
  },
];

function CapabilityCard({
  item,
  index,
}: {
  item: (typeof capabilities)[0];
  index: number;
}) {
  const Icon = item.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
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

export function AiIntelligentAutomationCapabilities() {
  return (
    <section
      id="ai-capabilities"
      className="relative w-full py-12 md:py-16"
      aria-labelledby="ai-capabilities-heading"
    >
      <div className="relative z-10 container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-6xl">
          <h2
            id="ai-capabilities-heading"
            className="mb-10 text-3xl font-bold tracking-tight text-white md:text-4xl"
          >
            <span className="bg-gradient-to-b from-white to-white/80 bg-clip-text text-transparent">
              Our AI & Automation Capabilities
            </span>
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((item, index) => (
              <CapabilityCard key={item.title} item={item} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
