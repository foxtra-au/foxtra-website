import { ServicePageWrapper } from '@/components/sections';
import {
  DigitalTransformationHero,
  DigitalTransformationConsultingApproach,
  DigitalTransformationEngagement,
  DigitalTransformationProcess,
  DigitalTransformationBusinessImpact,
  DigitalTransformationScenarios,
} from '@/components/sections/digital-transformation';
import { buildPageMetadata } from '@/lib/metadata';

export const metadata = buildPageMetadata({
  title: 'Digital Transformation Consulting',
  description:
    'Modernise systems, optimise operations and build scalable digital capabilities. Consulting-led transformation roadmaps, platform modernisation and measurable outcomes.',
  path: '/digital-transformation',
  keywords: ['digital transformation', 'platform modernisation', 'transformation consulting', 'digital strategy'],
});

export default function DigitalTransformationPage() {
  return (
    <ServicePageWrapper>
      <DigitalTransformationHero />
      <DigitalTransformationConsultingApproach />
      <DigitalTransformationEngagement />
      <DigitalTransformationProcess />
      <DigitalTransformationBusinessImpact />
      <DigitalTransformationScenarios />
    </ServicePageWrapper>
  );
}
