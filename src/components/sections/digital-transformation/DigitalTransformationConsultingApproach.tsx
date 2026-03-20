'use client';

import { motion } from 'framer-motion';
import {
  Map,
  Layers,
  Workflow,
  Database,
  Building2,
  Cloud,
  type LucideIcon,
} from 'lucide-react';

const capabilities: { title: string; description: string; icon: LucideIcon }[] = [
  {
    title: 'Technology Strategy & Roadmapping',
    description:
      'Defining transformation vision, prioritising initiatives and aligning stakeholders.',
    icon: Map,
  },
  {
    title: 'Platform Modernisation',
    description: 'Re-architecting legacy systems into scalable cloud-native platforms.',
    icon: Layers,
  },
  {
    title: 'Process Automation',
    description: 'Reducing manual effort through intelligent workflows and system integration.',
    icon: Workflow,
  },
  {
    title: 'Data & Integration Enablement',
    description:
      'Connecting enterprise systems to support unified data visibility and decision making.',
    icon: Database,
  },
  {
    title: 'Customer & Operational Platforms',
    description: 'Implementing modern CRM, portals and enterprise applications.',
    icon: Building2,
  },
  {
    title: 'Cloud Transformation',
    description: 'Migrating and optimising infrastructure to improve resilience and scalability.',
    icon: Cloud,
  },
];

function ApproachCapabilityCard({
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

export function DigitalTransformationConsultingApproach() {
  return (
    <section
      id="consulting-approach"
      className="relative w-full py-12 md:py-16"
      aria-labelledby="dt-consulting-heading"
    >
      <div className="relative z-10 container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-6xl">
          <h2
            id="dt-consulting-heading"
            className="mb-4 text-3xl font-bold tracking-tight text-white md:text-4xl"
          >
            <span className="bg-gradient-to-b from-white to-white/80 bg-clip-text text-transparent">
              A Consulting-Led Approach
            </span>
          </h2>
          <p className="mb-10 max-w-3xl text-lg leading-relaxed text-white/60">
            Our transformation engagements combine strategic advisory with deep engineering expertise.
            We focus on aligning technology initiatives with measurable business outcomes, ensuring
            transformation delivers sustained operational value.
          </p>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((item, index) => (
              <ApproachCapabilityCard key={item.title} item={item} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
