'use client';

import { motion } from 'framer-motion';

const scenarios = [
  'Enterprise CRM transformation programs',
  'Legacy system modernisation to cloud platforms',
  'Custom digital platform development',
  'Integration of fragmented enterprise systems',
  'Automation of business-critical workflows',
  'Digital enablement of customer service operations',
];

export function DigitalTransformationScenarios() {
  return (
    <section className="relative w-full py-12 md:py-16" aria-labelledby="dt-scenarios-heading">
      <div className="relative z-10 container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-6xl"
        >
          <h2
            id="dt-scenarios-heading"
            className="mb-8 text-3xl font-bold tracking-tight text-white md:text-4xl"
          >
            Transformation Initiatives We Support
          </h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {scenarios.map((label) => (
              <div
                key={label}
                className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/5 p-4 backdrop-blur-sm transition-colors hover:bg-white/[0.08]"
              >
                <span className="h-2 w-2 shrink-0 rounded-full bg-rose-500/90" aria-hidden />
                <span className="text-sm font-medium leading-snug text-white/85 md:text-base">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
