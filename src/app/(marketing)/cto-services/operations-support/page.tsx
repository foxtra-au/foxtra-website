import { buildPageMetadata } from '@/lib/metadata';
import OperationsSupport from './OperationsSupportClient';

export const metadata = buildPageMetadata({
  title: 'Ongoing Operations Support & IT Management',
  description: 'Ongoing technology operations support including 24/7 system monitoring, incident response, performance optimisation, and continuous improvement for your technology infrastructure.',
  path: '/cto-services/operations-support',
  keywords: ['operations support', 'IT operations management', 'system monitoring', 'incident response', 'technology support Australia'],
});

export default function OperationsSupportPage() {
  return <OperationsSupport />;
}
