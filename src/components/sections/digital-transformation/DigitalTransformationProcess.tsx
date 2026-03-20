'use client';

import { Fragment } from 'react';
import { motion } from 'framer-motion';
import { Search, PenLine, Code2, Gauge } from 'lucide-react';

const fadeUpVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay: 0.2 + i * 0.08,
      ease: [0.25, 0.4, 0.25, 1],
    },
  }),
};

const steps = [
  {
    title: 'Assess',
    description:
      'Understanding current systems, business processes and transformation drivers.',
    Icon: Search,
  },
  {
    title: 'Design',
    description: 'Defining target architecture, platform strategy and implementation roadmap.',
    Icon: PenLine,
  },
  {
    title: 'Implement',
    description: 'Delivering modern platforms through agile engineering and integration.',
    Icon: Code2,
  },
  {
    title: 'Optimise',
    description:
      'Continuously improving performance, adoption and operational efficiency.',
    Icon: Gauge,
  },
];

function ProcessConnector() {
  return (
    <div
      className="flex w-full shrink-0 items-center justify-center py-2 lg:w-12 lg:max-w-[3rem] xl:w-14 xl:max-w-[3.5rem] lg:py-0"
      aria-hidden
    >
      {/* Mobile: vertical connector between stacked steps */}
      <div className="relative flex h-14 items-center justify-center lg:hidden">
        <div
          className="absolute inset-y-1 left-1/2 w-px -translate-x-1/2 bg-gradient-to-b from-white/10 via-white/40 to-white/10"
          aria-hidden
        />
        <div className="relative z-10 h-2 w-2 shrink-0 rounded-full bg-yellow-400 ring-2 ring-[#030303] shadow-[0_0_10px_rgba(250,204,21,0.45)]" />
      </div>
      {/* Desktop: horizontal line linking to next step */}
      <div className="relative hidden h-px w-full min-w-[2rem] bg-gradient-to-r from-white/30 via-white/18 to-white/08 lg:block">
        <span className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-yellow-400 ring-2 ring-[#030303] shadow-[0_0_10px_rgba(250,204,21,0.45)]" />
      </div>
    </div>
  );
}

export function DigitalTransformationProcess() {
  return (
    <section
      id="transformation-approach"
      className="relative w-full py-12 md:py-16"
      aria-labelledby="dt-process-heading"
    >
      <div className="relative z-10 container mx-auto px-4 md:px-6">
        <motion.div
          custom={0}
          variants={fadeUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mx-auto max-w-6xl"
        >
          <div className="mb-10 text-left">
            <h2
              id="dt-process-heading"
              className="mb-4 text-3xl font-bold tracking-tight text-white md:text-4xl"
            >
              Structured Transformation Delivery
            </h2>
            <p className="text-lg text-white/60">A four-step model from discovery to optimisation</p>
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
