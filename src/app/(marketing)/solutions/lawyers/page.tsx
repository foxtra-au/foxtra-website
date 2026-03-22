import { buildPageMetadata } from '@/lib/metadata';
import LawyersSolution from './LawyersSolutionClient';

export const metadata = buildPageMetadata({
  title: 'AI Solutions for Law Firms & Legal Practices',
  description: 'Attract more clients with legal SEO, automate intake with AI phone systems, and streamline case management for law firms with tailored digital marketing and automation.',
  path: '/solutions/lawyers',
  keywords: ['law firm solutions', 'legal SEO', 'lawyer marketing Australia', 'law firm automation', 'legal client intake AI'],
});

export default function LawyersSolutionPage() {
  return <LawyersSolution />;
}
