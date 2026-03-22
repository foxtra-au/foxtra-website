import { buildPageMetadata } from '@/lib/metadata';
import CTOServices from './CTOServicesClient';

export const metadata = buildPageMetadata({
  title: 'On-Demand CTO Services for Startups & SMEs',
  description: 'Access on-demand technology leadership, strategy, and advisory services. Virtual CTO, tech strategy, system architecture, team mentoring, cloud advisory, and AI automation — tailored for startups and SMEs.',
  path: '/cto-services',
  keywords: ['CTO services', 'virtual CTO Australia', 'fractional CTO', 'technology leadership', 'CTO for startups', 'on-demand CTO'],
});

export default function CTOServicesPage() {
  return <CTOServices />;
}
