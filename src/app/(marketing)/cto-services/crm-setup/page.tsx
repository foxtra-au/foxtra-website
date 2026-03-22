import { buildPageMetadata } from '@/lib/metadata';
import CRMSetup from './CRMSetupClient';

export const metadata = buildPageMetadata({
  title: 'CRM Setup & Configuration Services',
  description: 'Expert CRM setup, configuration, and optimisation for Salesforce, HubSpot, Zoho, Microsoft Dynamics, and more. Includes data migration, user training, and ongoing CRM support.',
  path: '/cto-services/crm-setup',
  keywords: ['CRM setup', 'CRM configuration', 'Salesforce setup', 'HubSpot setup', 'CRM implementation Australia'],
});

export default function CRMSetupPage() {
  return <CRMSetup />;
}
