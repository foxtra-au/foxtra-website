'use client';

import { motion } from 'framer-motion';
import {
  Workflow,
  MessageCircle,
  BarChart3,
  Plug,
  Bot,
  Shield,
  type LucideIcon,
} from 'lucide-react';

const scenarios: { title: string; description: string; icon: LucideIcon }[] = [
  {
    title: 'Workflow Automation Programs',
    description: 'Digitising operational processes across departments.',
    icon: Workflow,
  },
  {
    title: 'AI-Enabled Customer Experience',
    description: 'Enhancing engagement through intelligent automation.',
    icon: MessageCircle,
  },
  {
    title: 'Predictive Analytics Solutions',
    description: 'Supporting data-driven planning and forecasting.',
    icon: BarChart3,
  },
  {
    title: 'AI Integration with Enterprise Systems',
    description: 'Embedding intelligence within existing platforms.',
    icon: Plug,
  },
  {
    title: 'Digital Agent Implementation',
    description: 'Deploying conversational assistants for service operations.',
    icon: Bot,
  },
  {
    title: 'Automation Governance Frameworks',
    description: 'Ensuring scalable and compliant AI adoption.',
    icon: Shield,
  },
];

export function AiIntelligentAutomationScenarios() {
  return (
    <section
      className="relative w-full py-12 md:py-16"
      aria-labelledby="ai-scenarios-heading"
    >
      <div className="relative z-10 container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-6xl"
        >
          <h2
            id="ai-scenarios-heading"
            className="mb-8 text-3xl font-bold tracking-tight text-white md:text-4xl"
          >
            Automation Initiatives We Support
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
