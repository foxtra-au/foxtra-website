import { ServicePageWrapper } from '@/components/sections';
import {
  SalesforceCrmHero,
  SalesforceCrmCapabilities,
  SalesforceCrmDelivery,
  SalesforceCrmFinalCta,
  SalesforceCrmOutcomes,
  SalesforceCrmScenarios,
} from '@/components/sections/salesforce-crm-solutions';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Salesforce & CRM Solutions | Foxtra',
  description:
    'Consulting-led Salesforce strategy, implementation, integration and optimisation. CRM transformation, automation and managed platform services.',
  robots: { index: true, follow: true },
};

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
