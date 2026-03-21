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
import { buildPageMetadata } from '@/lib/metadata';

export const metadata = buildPageMetadata({
  title: 'Cloud & Platform Engineering',
  description:
    'Consulting-led cloud architecture, DevOps, infrastructure as code and platform modernisation. Scalable, resilient platforms aligned to your business.',
  path: '/cloud-platform-engineering',
  keywords: ['cloud architecture', 'DevOps', 'infrastructure as code', 'platform engineering', 'cloud modernisation'],
});

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
