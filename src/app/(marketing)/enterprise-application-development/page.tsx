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
import { buildPageMetadata } from '@/lib/metadata';

export const metadata = buildPageMetadata({
  title: 'Enterprise Application Development',
  description:
    'Consulting-led enterprise application development. Scalable digital platforms, custom applications, integrations and workflow automation aligned to long-term business strategy.',
  path: '/enterprise-application-development',
  keywords: ['enterprise applications', 'custom development', 'platform integration', 'workflow automation', 'application modernisation'],
});

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
