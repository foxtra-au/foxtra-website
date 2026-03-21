'use client';

import { MessageCircle } from 'lucide-react';
import { HeroGeometric } from '@/components/ui/ShapeLandingHero';

export function EnterpriseApplicationHero() {
  return (
    <div className="relative pt-32 pb-10 sm:pt-36 md:pt-40 md:pb-14">
      <HeroGeometric
        badge="Foxtra. Enterprise applications"
        title1="Enterprise Application"
        title2="Development"
        description="Designing and building scalable digital platforms for complex business environments."
        tagline="Consulting-led engineering to deliver secure, integrated and future-ready enterprise applications."
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
