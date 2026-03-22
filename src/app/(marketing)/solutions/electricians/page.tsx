import { buildPageMetadata } from '@/lib/metadata';
import ElectriciansSolution from './ElectriciansSolutionClient';

export const metadata = buildPageMetadata({
  title: 'AI Solutions for Electricians & Electrical Contractors',
  description: 'Handle emergency service calls, rank for local electrical searches, and automate job scheduling with AI-powered tools, SMS marketing, and Google Ads for electricians.',
  path: '/solutions/electricians',
  keywords: ['electrician solutions', 'electrical contractor marketing', 'electrician SEO', 'emergency electrical AI', 'electrician booking automation'],
});

export default function ElectriciansSolutionPage() {
  return <ElectriciansSolution />;
}
