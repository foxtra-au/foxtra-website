'use client';

import { motion } from 'framer-motion';
import {
  Scaling,
  Rocket,
  Shield,
  Wallet,
  Lock,
  Users,
  type LucideIcon,
} from 'lucide-react';

const outcomes: { text: string; icon: LucideIcon }[] = [
  { text: 'Improved system scalability', icon: Scaling },
  { text: 'Faster deployment cycles', icon: Rocket },
  { text: 'Enhanced platform reliability', icon: Shield },
  { text: 'Reduced operational overhead', icon: Wallet },
  { text: 'Stronger security posture', icon: Lock },
  { text: 'Better development productivity', icon: Users },
];

export function CloudPlatformOutcomes() {
  return (
    <section className="relative w-full py-12 md:py-16" aria-labelledby="cp-outcomes-heading">
      <div className="relative z-10 container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-6xl"
        >
          <h2
            id="cp-outcomes-heading"
            className="mb-8 text-3xl font-bold tracking-tight text-white md:text-4xl"
          >
            Platform Engineering Outcomes
          </h2>
          <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {outcomes.map(({ text, icon: Icon }) => (
              <li
                key={text}
                className="flex gap-3 rounded-lg border border-white/10 bg-white/[0.03] p-4 backdrop-blur-sm"
              >
                <span
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-white/20 text-rose-400/90"
                  aria-hidden
                >
                  <Icon className="h-5 w-5" />
                </span>
                <span className="flex min-w-0 items-center text-base font-medium leading-snug text-white/85">
                  {text}
                </span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
