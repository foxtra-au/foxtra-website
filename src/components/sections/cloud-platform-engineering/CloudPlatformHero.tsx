'use client';

import { MessageCircle } from 'lucide-react';
import { HeroGeometric } from '@/components/ui/ShapeLandingHero';

export function CloudPlatformHero() {
  return (
    <div className="relative pt-32 pb-10 sm:pt-36 md:pt-40 md:pb-14">
      <HeroGeometric
        badge="Foxtra. Cloud & platform"
        title1="Cloud & Platform"
        title2="Engineering"
        description="Designing scalable, resilient and high-performance technology platforms."
        tagline="Consulting-led architecture and engineering to support modern digital operations."
        showButtons
        showSecondaryButton={false}
        showBackground={false}
        primaryCtaHref="/contact"
        primaryCtaLabel="Talk to Expert"
        primaryCtaIcon={<MessageCircle className="mr-2 h-4 w-4" />}
      />
    </div>
  );
}
