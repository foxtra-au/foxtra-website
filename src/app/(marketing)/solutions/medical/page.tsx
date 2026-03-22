import { buildPageMetadata } from '@/lib/metadata';
import MedicalSolution from './MedicalSolutionClient';

export const metadata = buildPageMetadata({
  title: 'AI Solutions for Medical & Healthcare Practices',
  description: 'Automate patient appointment scheduling, manage medical SEO, send automated reminders, and grow your healthcare practice with AI-powered tools and Google Ads in Australia.',
  path: '/solutions/medical',
  keywords: ['medical practice solutions', 'healthcare AI automation', 'medical SEO Australia', 'patient appointment automation', 'healthcare marketing'],
});

export default function MedicalSolutionPage() {
  return <MedicalSolution />;
}
