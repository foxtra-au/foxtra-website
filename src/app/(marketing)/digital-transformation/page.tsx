import { ServicePageWrapper } from '@/components/sections';
import {
  DigitalTransformationHero,
  DigitalTransformationConsultingApproach,
  DigitalTransformationEngagement,
  DigitalTransformationProcess,
  DigitalTransformationBusinessImpact,
  DigitalTransformationScenarios,
} from '@/components/sections/digital-transformation';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Digital Transformation Consulting | Foxtra',
  description:
    'Modernise systems, optimise operations and build scalable digital capabilities. Consulting-led transformation roadmaps, platform modernisation and measurable outcomes.',
  robots: { index: true, follow: true },
};

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
