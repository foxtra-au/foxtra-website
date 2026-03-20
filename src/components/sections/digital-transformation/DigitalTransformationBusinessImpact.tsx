'use client';

import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const outcomes = [
  'Improved operational efficiency and process visibility',
  'Scalable digital platforms supporting business growth',
  'Enhanced customer experience and engagement',
  'Reduced technology complexity and maintenance overhead',
  'Better data accessibility for informed decision making',
  'Increased organisational agility and innovation capability',
];

export function DigitalTransformationBusinessImpact() {
  return (
    <section className="relative w-full py-12 md:py-16" aria-labelledby="dt-impact-heading">
      <div className="relative z-10 container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-6xl"
        >
          <h2
            id="dt-impact-heading"
            className="mb-8 text-3xl font-bold tracking-tight text-white md:text-4xl"
          >
            Delivering Measurable Transformation Outcomes
          </h2>
          <ul className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-5">
            {outcomes.map((text) => (
              <li
                key={text}
                className="flex gap-3 rounded-lg border border-white/10 bg-white/[0.03] p-4 backdrop-blur-sm"
              >
                <span
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-yellow-400/50 bg-yellow-500/15"
                  aria-hidden
                >
                  <Check className="h-4 w-4 text-yellow-400" strokeWidth={2.5} />
                </span>
                <span className="pt-0.5 text-base leading-relaxed text-white/80">{text}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
