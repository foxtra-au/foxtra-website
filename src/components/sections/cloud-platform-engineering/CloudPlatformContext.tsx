'use client';

import { motion } from 'framer-motion';
import {
  Cloud,
  Layers,
  GitBranch,
  Cog,
  Gauge,
  ShieldCheck,
  type LucideIcon,
} from 'lucide-react';

const items: { label: string; icon: LucideIcon }[] = [
  { label: 'Cloud architecture design', icon: Cloud },
  { label: 'Platform modernisation', icon: Layers },
  { label: 'DevOps enablement', icon: GitBranch },
  { label: 'Infrastructure automation', icon: Cog },
  { label: 'Performance optimisation', icon: Gauge },
  { label: 'Platform governance', icon: ShieldCheck },
];

export function CloudPlatformContext() {
  return (
    <section className="relative w-full py-10 md:py-14" aria-label="Platform focus areas">
      <div className="relative z-10 container mx-auto px-4 md:px-6">
        <motion.ul
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto grid max-w-6xl list-none grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {items.map(({ label, icon: Icon }, index) => (
            <motion.li
              key={label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="flex gap-4 rounded-lg border border-white/15 bg-white/[0.03] p-4 backdrop-blur-sm transition-colors hover:border-white/25 hover:bg-white/[0.05]"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-white/20 text-rose-400/90">
                <Icon className="h-5 w-5" aria-hidden />
              </div>
              <span className="flex min-w-0 items-center text-left text-base font-medium leading-snug text-white/90">
                {label}
              </span>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
