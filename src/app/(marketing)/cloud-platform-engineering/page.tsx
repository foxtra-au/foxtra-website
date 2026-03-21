import { ServicePageWrapper } from '@/components/sections';
import {
  CloudPlatformHero,
  CloudPlatformContext,
  CloudPlatformCapabilities,
  CloudPlatformProcess,
  CloudPlatformOutcomes,
  CloudPlatformEngagements,
  CloudPlatformFinalCta,
} from '@/components/sections/cloud-platform-engineering';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cloud & Platform Engineering | Foxtra',
  description:
    'Consulting-led cloud architecture, DevOps, infrastructure as code and platform modernisation. Scalable, resilient platforms aligned to your business.',
  robots: { index: true, follow: true },
};

export default function CloudPlatformEngineeringPage() {
  return (
    <ServicePageWrapper>
      <CloudPlatformHero />
      <CloudPlatformContext />
      <CloudPlatformCapabilities />
      <CloudPlatformProcess />
      <CloudPlatformFinalCta />
      <CloudPlatformOutcomes />
      <CloudPlatformEngagements />
    </ServicePageWrapper>
  );
}
