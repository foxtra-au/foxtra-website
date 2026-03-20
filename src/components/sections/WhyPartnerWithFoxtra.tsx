'use client';

import Image from 'next/image';
import { Check, Circle } from 'lucide-react';

const traits = [
  {
    title: 'Consulting-Led Engineering',
    body: 'We align technology initiatives with long-term business strategy, not just short-term delivery.',
  },
  {
    title: 'Enterprise Platform Expertise',
    body: 'Deep experience across cloud, CRM and custom platforms for complex operational environments.',
  },
  {
    title: 'Scalable & Future-Ready Solutions',
    body: 'Architectures designed to support growth, performance and evolving business needs.',
  },
  {
    title: 'Australian Market Understanding',
    body: 'Local knowledge of regulatory, operational and technology landscapes across industries.',
  },
  {
    title: 'Outcome-Focused Delivery',
    body: 'Our engagements are structured around measurable business value and operational impact.',
  },
  {
    title: 'Long-Term Technology Partnership',
    body: 'We support organisations beyond implementation through optimisation and managed services.',
  },
];

function TraitItem({ item }: { item: (typeof traits)[0] }) {
  return (
    <li className="group relative flex h-full flex-col overflow-hidden rounded-md border border-white/20 transition-all duration-300 hover:border-white/30">
      <div className="flex flex-1 flex-col bg-black p-6">
        <div className="flex gap-3 items-start">
          <div
            className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-yellow-400/50 bg-yellow-500/15"
            aria-hidden
          >
            <Check className="h-3.5 w-3.5 text-yellow-400" strokeWidth={2.5} />
          </div>
          <div className="min-w-0 flex-1">
            <h3 className="text-lg font-semibold leading-snug text-white">{item.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-white/60">{item.body}</p>
          </div>
        </div>
      </div>
    </li>
  );
}

export function WhyPartnerWithFoxtra() {
  const leftColumn = traits.slice(0, 3);
  const rightColumn = traits.slice(3, 6);

  return (
    <section
      className="relative z-10 mt-20 w-full overflow-hidden"
      aria-labelledby="why-partner-heading"
    >
      {/* Full-bleed background image at 50% opacity */}
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <Image
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1600&q=80"
          alt=""
          fill
          className="object-cover opacity-50"
          sizes="100vw"
          priority={false}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
        <div className="text-left">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.03] px-3 py-1">
            <Circle className="h-2 w-2 fill-rose-500/80" aria-hidden />
            <span className="text-sm tracking-wide text-white/60">Partnership</span>
          </div>

          <h2
            id="why-partner-heading"
            className="mb-4 text-3xl font-bold tracking-tight text-white md:text-4xl"
          >
            Why Organisations Partner with Foxtra
          </h2>

          <p className="mb-8 max-w-2xl text-lg leading-relaxed text-white/60">
            We combine strategic technology leadership with disciplined engineering delivery—so your
            investments in digital platforms, systems and automation support measurable outcomes and
            sustainable growth.
          </p>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <ul className="flex flex-col gap-6">
              {leftColumn.map((item) => (
                <TraitItem key={item.title} item={item} />
              ))}
            </ul>
            <ul className="flex flex-col gap-6">
              {rightColumn.map((item) => (
                <TraitItem key={item.title} item={item} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
