'use client';

import { HeroGeometric } from '@/components/ui/ShapeLandingHero';

export function AiIntelligentAutomationHero() {
  return (
    <div className="relative pt-32 pb-10 sm:pt-36 md:pt-40 md:pb-14">
      <HeroGeometric
        badge="Foxtra. AI & automation"
        title1="AI & Intelligent"
        title2="Automation"
        description="Embedding intelligent automation to enhance operational efficiency and decision-making."
        tagline="Consulting-led AI solutions designed for scalable enterprise adoption."
        showButtons={false}
        showBackground={false}
        highlights={[
          'AI strategy & readiness',
          'Workflow automation',
          'Intelligent process optimisation',
          'AI-powered insights',
          'Platform-integrated AI solutions',
          'Automation governance',
        ]}
      />
    </div>
  );
}
