import { buildPageMetadata } from '@/lib/metadata';
import ChildcareSolution from './ChildcareSolutionClient';

export const metadata = buildPageMetadata({
  title: 'AI Solutions for Childcare Centers & Daycares',
  description: 'Streamline parent inquiries, automate enrollment management, and grow your childcare center with AI voice agents, local SEO, and Google Ads tailored for daycares in Australia.',
  path: '/solutions/childcare',
  keywords: ['childcare solutions', 'daycare marketing', 'childcare automation', 'daycare SEO Australia', 'childcare enrollment management'],
});

export default function ChildcareSolutionPage() {
  return <ChildcareSolution />;
}
