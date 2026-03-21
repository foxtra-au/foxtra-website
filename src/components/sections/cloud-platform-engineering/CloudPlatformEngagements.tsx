'use client';

import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const items: { title: string; body: string }[] = [
  {
    title: 'Enterprise cloud migration programs',
    body: 'Assessment, landing zone design, workload migration and validation aligned with your risk and uptime requirements.',
  },
  {
    title: 'DevOps transformation initiatives',
    body: 'Pipeline design, toolchain integration and team enablement for repeatable, observable delivery.',
  },
  {
    title: 'Infrastructure modernisation projects',
    body: 'Upgrading legacy infrastructure patterns toward cloud-native, automated and cost-aware operations.',
  },
  {
    title: 'High-availability platform design',
    body: 'Architecting for resilience, failover and performance under production load and growth.',
  },
  {
    title: 'Cloud cost optimisation strategies',
    body: 'Rightsizing, observability and governance to align spend with business value.',
  },
  {
    title: 'Platform performance engineering',
    body: 'Profiling, tuning and capacity planning so platforms stay fast and predictable as demand changes.',
  },
];

export function CloudPlatformEngagements() {
  return (
    <section className="relative w-full py-12 md:py-16" aria-labelledby="cp-engagements-heading">
      <div className="relative z-10 container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-6xl"
        >
          <h2
            id="cp-engagements-heading"
            className="mb-8 text-3xl font-bold tracking-tight text-white md:text-4xl"
          >
            Platform Initiatives We Support
          </h2>
          <div className="divide-y divide-white/10 rounded-xl border border-white/10 bg-white/[0.02] overflow-hidden">
            {items.map((item) => (
              <details
                key={item.title}
                className="group border-0 border-white/10 [&_summary::-webkit-details-marker]:hidden"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 text-left transition-colors hover:bg-white/[0.04] md:px-6 md:py-5">
                  <span className="text-base font-semibold text-white md:text-lg">{item.title}</span>
                  <ChevronDown
                    className="h-5 w-5 shrink-0 text-white/50 transition-transform duration-200 group-open:rotate-180"
                    aria-hidden
                  />
                </summary>
                <div className="border-t border-white/5 px-5 pb-5 pt-0 md:px-6 md:pb-6">
                  <p className="pt-3 text-sm leading-relaxed text-white/65 md:text-base">{item.body}</p>
                </div>
              </details>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
