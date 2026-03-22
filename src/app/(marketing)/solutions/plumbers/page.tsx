import { buildPageMetadata } from '@/lib/metadata';
import PlumbersSolution from './PlumbersSolutionClient';

export const metadata = buildPageMetadata({
  title: 'AI Solutions for Plumbers & Plumbing Businesses',
  description: 'Never miss an emergency plumbing call with AI voice agents. Rank for "plumber near me" searches, automate service reminders, and grow with Google Ads and SMS marketing.',
  path: '/solutions/plumbers',
  keywords: ['plumber solutions', 'plumbing business marketing', 'plumber SEO Australia', 'emergency plumbing AI', 'plumber near me SEO'],
});

export default function PlumbersSolutionPage() {
  return <PlumbersSolution />;
}
