import { ServicePageWrapper } from '@/components/sections';
import {
  EnterpriseApplicationHero,
  EnterpriseApplicationContext,
  EnterpriseApplicationCapabilities,
  EnterpriseApplicationProcess,
  EnterpriseApplicationOutcomes,
  EnterpriseApplicationEngagements,
  EnterpriseApplicationFinalCta,
} from '@/components/sections/enterprise-application-development';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Enterprise Application Development | Foxtra',
  description:
    'Consulting-led enterprise application development. Scalable digital platforms, custom applications, integrations and workflow automation aligned to long-term business strategy.',
  robots: { index: true, follow: true },
};

export default function EnterpriseApplicationDevelopmentPage() {
  return (
    <ServicePageWrapper>
      <EnterpriseApplicationHero />
      <EnterpriseApplicationContext />
      <EnterpriseApplicationCapabilities />
      <EnterpriseApplicationProcess />
      <EnterpriseApplicationFinalCta />
      <EnterpriseApplicationOutcomes />
      <EnterpriseApplicationEngagements />
    </ServicePageWrapper>
  );
}
