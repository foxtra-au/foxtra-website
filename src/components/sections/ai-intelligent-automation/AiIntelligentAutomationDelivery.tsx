'use client';

import { Fragment } from 'react';
import { motion } from 'framer-motion';
import { ClipboardList, PenLine, Boxes, Sparkles } from 'lucide-react';

const steps = [
  {
    title: 'Assess',
    description: 'Evaluating automation opportunities and data readiness.',
    Icon: ClipboardList,
  },
  {
    title: 'Design',
    description: 'Defining AI architecture and integration strategy.',
    Icon: PenLine,
  },
  {
    title: 'Implement',
    description: 'Deploying intelligent solutions aligned with workflows.',
    Icon: Boxes,
  },
  {
    title: 'Optimise',
    description: 'Monitoring outcomes and improving adoption.',
    Icon: Sparkles,
  },
];

function ProcessConnector() {
  return (
    <div
      className="flex w-full shrink-0 items-center justify-center py-2 lg:w-12 lg:max-w-[3rem] xl:w-14 xl:max-w-[3.5rem] lg:py-0"
      aria-hidden
    >
      <div className="relative flex h-14 items-center justify-center lg:hidden">
        <div
          className="absolute inset-y-1 left-1/2 w-px -translate-x-1/2 bg-gradient-to-b from-white/10 via-white/40 to-white/10"
          aria-hidden
        />
        <div className="relative z-10 h-2 w-2 shrink-0 rounded-full bg-yellow-400 ring-2 ring-[#030303] shadow-[0_0_10px_rgba(250,204,21,0.45)]" />
      </div>
      <div className="relative hidden h-px w-full min-w-[2rem] bg-gradient-to-r from-white/30 via-white/18 to-white/08 lg:block">
        <span className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-yellow-400 ring-2 ring-[#030303] shadow-[0_0_10px_rgba(250,204,21,0.45)]" />
      </div>
    </div>
  );
}

export function AiIntelligentAutomationDelivery() {
  return (
    <section
      id="ai-delivery"
      className="relative w-full py-12 md:py-16"
      aria-labelledby="ai-delivery-heading"
    >
      <div className="relative z-10 container mx-auto px-4 md:px-6">
        <motion.div className="mx-auto max-w-6xl">
          <div className="mb-10 text-left">
            <h2
              id="ai-delivery-heading"
              className="mb-4 text-3xl font-bold tracking-tight text-white md:text-4xl"
            >
              Structured AI Implementation Approach
            </h2>
            <p className="text-lg text-white/60">From assessment through optimisation</p>
          </div>

          <div className="relative flex flex-col lg:flex-row lg:items-stretch">
            {steps.map((step, index) => {
              const Icon = step.Icon;
              return (
                <Fragment key={step.title}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.15 + index * 0.1 }}
                    className="relative z-10 min-w-0 flex-1 rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all duration-300 hover:bg-white/10"
                  >
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg border border-white/20 bg-white/5 text-rose-400/90">
                      <Icon className="h-6 w-6" aria-hidden />
                    </div>
                    <h3 className="mb-2 text-lg font-semibold text-white">{step.title}</h3>
                    <p className="text-sm leading-relaxed text-white/70">{step.description}</p>
                  </motion.div>
                  {index < steps.length - 1 ? <ProcessConnector /> : null}
                </Fragment>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
