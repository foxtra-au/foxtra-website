'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export function AiIntelligentAutomationFinalCta() {
  return (
    <section
      className="relative w-full py-12 md:py-16"
      aria-labelledby="ai-final-cta-heading"
    >
      <div className="relative z-10 container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-6xl overflow-hidden rounded-xl border border-yellow-600/25 bg-yellow-400 p-6 shadow-lg shadow-black/10 md:p-8 lg:p-10"
        >
          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-[7fr_3fr] lg:gap-8 xl:gap-10">
            <div className="min-w-0 text-left">
              <h2
                id="ai-final-cta-heading"
                className="mb-4 text-2xl font-bold tracking-tight text-neutral-900 md:text-3xl lg:text-4xl"
              >
                Enable Intelligent Automation Across Your Organisation
              </h2>
              <p className="mb-8 text-base leading-relaxed text-neutral-800/90 md:text-lg">
                Partner with Foxtra to implement practical AI solutions that deliver measurable
                operational value.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-sm border border-transparent px-6 py-2 text-base font-medium text-white shadow-sm transition-all duration-200 hover:scale-105 hover:shadow-lg drop-shadow-lg"
                style={{ backgroundColor: '#FF335C' }}
              >
                Request Consultation
              </Link>
            </div>

            <div className="relative mx-auto aspect-[4/3] w-full max-w-lg overflow-hidden rounded-xl border border-neutral-900/15 bg-neutral-900/5 lg:mx-0 lg:max-w-none">
              <Image
                src="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=900&q=80"
                alt="AI and intelligent automation"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 30vw"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
