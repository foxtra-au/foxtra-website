'use client';

import { motion } from 'framer-motion';
import {
  Building2,
  Code2,
  Plug,
  Workflow,
  Braces,
  Layers,
  type LucideIcon,
} from 'lucide-react';

const items: { label: string; icon: LucideIcon }[] = [
  { label: 'Enterprise platform architecture', icon: Building2 },
  { label: 'Custom application engineering', icon: Code2 },
  { label: 'System integration', icon: Plug },
  { label: 'Workflow automation', icon: Workflow },
  { label: 'API-driven development', icon: Braces },
  { label: 'Application modernisation', icon: Layers },
];

export function EnterpriseApplicationContext() {
  return (
    <section
      className="relative w-full py-10 md:py-14"
      aria-label="Enterprise application focus areas"
    >
      <div className="relative z-10 container mx-auto px-4 md:px-6">
        <motion.ul
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto grid max-w-6xl list-none grid-cols-1 gap-3 sm:grid-cols-3 sm:gap-4"
          aria-label="Application focus areas"
        >
          {items.map(({ label, icon: Icon }, index) => (
            <motion.li
              key={label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="flex flex-row items-center justify-start gap-3 rounded-lg border border-white/15 bg-white/[0.03] px-3 py-4 text-left backdrop-blur-sm transition-colors hover:border-white/25 hover:bg-white/[0.05]"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-white/20 text-rose-400/90">
                <Icon className="h-5 w-5" aria-hidden />
              </div>
              <span className="min-w-0 text-sm font-medium leading-snug text-white/90 md:text-base">
                {label}
              </span>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
