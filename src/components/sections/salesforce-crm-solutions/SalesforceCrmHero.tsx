'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { MessageCircle, Circle } from 'lucide-react';
import {
  RefreshCw,
  Cloud,
  Plug,
  Workflow,
  BarChart3,
  Settings2,
  type LucideIcon,
} from 'lucide-react';
import { cn } from '@/lib/utils';

const items: {
  label: string;
  icon: LucideIcon;
  cardBorder: string;
  cardBg: string;
  cardHover: string;
  iconBorder: string;
  iconText: string;
}[] = [
  {
    label: 'CRM transformation strategy',
    icon: RefreshCw,
    cardBorder: 'border-sky-400/35',
    cardBg: 'bg-sky-500/[0.08]',
    cardHover: 'hover:border-sky-400/55 hover:bg-sky-500/[0.12]',
    iconBorder: 'border-sky-400/45',
    iconText: 'text-sky-400',
  },
  {
    label: 'Salesforce implementation',
    icon: Cloud,
    cardBorder: 'border-emerald-400/35',
    cardBg: 'bg-emerald-500/[0.08]',
    cardHover: 'hover:border-emerald-400/55 hover:bg-emerald-500/[0.12]',
    iconBorder: 'border-emerald-400/45',
    iconText: 'text-emerald-400',
  },
  {
    label: 'Platform integration',
    icon: Plug,
    cardBorder: 'border-amber-400/35',
    cardBg: 'bg-amber-500/[0.08]',
    cardHover: 'hover:border-amber-400/55 hover:bg-amber-500/[0.12]',
    iconBorder: 'border-amber-400/45',
    iconText: 'text-amber-400',
  },
  {
    label: 'Workflow automation',
    icon: Workflow,
    cardBorder: 'border-violet-400/35',
    cardBg: 'bg-violet-500/[0.08]',
    cardHover: 'hover:border-violet-400/55 hover:bg-violet-500/[0.12]',
    iconBorder: 'border-violet-400/45',
    iconText: 'text-violet-400',
  },
  {
    label: 'Data visibility & reporting',
    icon: BarChart3,
    cardBorder: 'border-rose-400/35',
    cardBg: 'bg-rose-500/[0.08]',
    cardHover: 'hover:border-rose-400/55 hover:bg-rose-500/[0.12]',
    iconBorder: 'border-rose-400/45',
    iconText: 'text-rose-400',
  },
  {
    label: 'Managed platform optimisation',
    icon: Settings2,
    cardBorder: 'border-cyan-400/35',
    cardBg: 'bg-cyan-500/[0.08]',
    cardHover: 'hover:border-cyan-400/55 hover:bg-cyan-500/[0.12]',
    iconBorder: 'border-cyan-400/45',
    iconText: 'text-cyan-400',
  },
];

export function SalesforceCrmHero() {
  return (
    <div className="relative pt-32 pb-10 sm:pt-36 md:pt-40 md:pb-14">
      <div className="relative z-10 container mx-auto px-4 md:px-6">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-12 lg:items-center">
          {/* Left: Title section */}
          <div className="flex flex-col text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex w-fit items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.03] px-3 py-1"
            >
              <Circle className="h-2 w-2 fill-rose-500/80" />
              <span className="text-sm tracking-wide text-white/60">Foxtra. Salesforce & CRM</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
            >
              <span className="bg-gradient-to-b from-white to-white/80 bg-clip-text text-transparent">
                Salesforce &
              </span>
              <br />
              <span className="bg-gradient-to-r from-indigo-300 via-white/90 to-rose-300 bg-clip-text text-transparent">
                CRM Solutions
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-4 text-base text-white/40 sm:text-lg md:text-xl"
            >
              Transforming customer operations through scalable CRM platforms.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="mt-2 text-sm italic text-white/30 sm:text-base"
            >
              Consulting-led Salesforce strategy, implementation and optimisation services.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-8"
            >
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-sm border border-transparent px-6 py-2 text-base font-medium text-white shadow-sm transition-all duration-200 hover:scale-105 hover:shadow-lg drop-shadow-lg"
                style={{ backgroundColor: '#FF335C' }}
              >
                <MessageCircle className="mr-2 h-4 w-4" />
                Talk to Expert
              </Link>
            </motion.div>
          </div>

          {/* Right: 6 items */}
          <motion.ul
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mx-0 grid list-none grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4"
            aria-label="CRM focus areas"
          >
            {items.map(
              (
                { label, icon: Icon, cardBorder, cardBg, cardHover, iconBorder, iconText },
                index
              ) => (
                <motion.li
                  key={label}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.05 }}
                  className={cn(
                    'flex flex-row items-center justify-start gap-3 rounded-lg border p-4 backdrop-blur-sm transition-colors',
                    cardBorder,
                    cardBg,
                    cardHover
                  )}
                >
                  <div
                    className={cn(
                      'flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border',
                      iconBorder,
                      iconText
                    )}
                  >
                    <Icon className="h-5 w-5" aria-hidden />
                  </div>
                  <span className="min-w-0 text-left text-base font-medium leading-snug text-white/90">
                    {label}
                  </span>
                </motion.li>
              )
            )}
          </motion.ul>
        </div>
      </div>
    </div>
  );
}
