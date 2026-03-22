import { buildPageMetadata } from '@/lib/metadata';
import PestControlSolution from './PestControlSolutionClient';

export const metadata = buildPageMetadata({
  title: 'AI Solutions for Pest Control Businesses',
  description: 'Handle emergency infestation calls 24/7, dominate local search, and automate service reminders for your pest control business with AI tools and Google Ads.',
  path: '/solutions/pest-control',
  keywords: ['pest control solutions', 'pest control marketing', 'pest control SEO', 'pest control booking automation', 'local SEO pest control'],
});

export default function PestControlSolutionPage() {
  return <PestControlSolution />;
}
