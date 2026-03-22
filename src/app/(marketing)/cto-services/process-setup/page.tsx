import { buildPageMetadata } from '@/lib/metadata';
import ProcessSetup from './ProcessSetupClient';

export const metadata = buildPageMetadata({
  title: 'Process Setup & Workflow Optimisation',
  description: 'Streamline your business operations with expert process design, documentation, and workflow optimisation. CTO-led process setup for startups and SMEs looking to scale efficiently.',
  path: '/cto-services/process-setup',
  keywords: ['process setup', 'workflow optimisation', 'business process design', 'process documentation', 'CTO process consulting'],
});

export default function ProcessSetupPage() {
  return <ProcessSetup />;
}
