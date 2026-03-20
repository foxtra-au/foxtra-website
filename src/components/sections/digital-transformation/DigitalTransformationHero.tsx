'use client';

import { HeroGeometric } from '@/components/ui/ShapeLandingHero';

const combinedDescription =
  'Helping organisations modernise systems, optimise operations and build scalable digital capabilities. Foxtra partners with businesses to transform legacy technology landscapes into modern, integrated and future-ready platforms.';

const heroHighlights = [
  'Legacy modernisation',
  'Cloud transformation',
  'Platform engineering',
  'Process automation',
  'Data enablement',
];

export function DigitalTransformationHero() {
  return (
    <div className="relative pt-36 pb-12 sm:pt-40 md:pt-44 md:pb-16">
      <HeroGeometric
        badge="Foxtra. Digital transformation"
        title1="Digital Transformation"
        title2="Consulting"
        description={combinedDescription}
        highlights={heroHighlights}
        showBackground={false}
      />
    </div>
  );
}
