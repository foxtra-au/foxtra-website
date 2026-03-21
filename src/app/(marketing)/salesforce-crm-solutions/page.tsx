import { ServicePageWrapper } from '@/components/sections';
import {
  SalesforceCrmHero,
  SalesforceCrmCapabilities,
  SalesforceCrmDelivery,
  SalesforceCrmFinalCta,
  SalesforceCrmOutcomes,
  SalesforceCrmScenarios,
} from '@/components/sections/salesforce-crm-solutions';
import { buildPageMetadata } from '@/lib/metadata';

export const metadata = buildPageMetadata({
  title: 'Salesforce & CRM Solutions',
  description:
    'Consulting-led Salesforce strategy, implementation, integration and optimisation. CRM transformation, automation and managed platform services.',
  path: '/salesforce-crm-solutions',
  keywords: ['Salesforce', 'CRM', 'CRM implementation', 'Salesforce integration', 'CRM optimisation'],
});

export default function SalesforceCrmSolutionsPage() {
  return (
    <ServicePageWrapper>
      <SalesforceCrmHero />
      <SalesforceCrmCapabilities />
      <SalesforceCrmDelivery />
      <SalesforceCrmFinalCta />
      <SalesforceCrmOutcomes />
      <SalesforceCrmScenarios />
    </ServicePageWrapper>
  );
}
