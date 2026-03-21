'use client';

import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const items: { title: string; body: string }[] = [
  {
    title: 'Enterprise portal development',
    body: 'Single-sign-on portals that unite internal teams, partners and stakeholders around shared data and workflows.',
  },
  {
    title: 'Internal operations platform design',
    body: 'Custom platforms to manage workflows, approvals and reporting across departments.',
  },
  {
    title: 'Legacy application modernisation',
    body: 'Replacing or wrapping legacy systems with modern architectures and user experiences.',
  },
  {
    title: 'Customer experience platform implementation',
    body: 'Omnichannel platforms for customer self-service, support and engagement.',
  },
  {
    title: 'Integration of fragmented systems',
    body: 'Connecting CRM, ERP and operational systems into a unified application landscape.',
  },
  {
    title: 'Workflow automation programs',
    body: 'Digitising manual processes and orchestrating workflows for efficiency and auditability.',
  },
];

export function EnterpriseApplicationEngagements() {
  return (
    <section className="relative w-full py-12 md:py-16" aria-labelledby="ea-engagements-heading">
      <div className="relative z-10 container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-6xl"
        >
          <h2
            id="ea-engagements-heading"
            className="mb-8 text-3xl font-bold tracking-tight text-white md:text-4xl"
          >
            Application Initiatives We Support
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
