import { buildPageMetadata } from '@/lib/metadata';
import AccountantsSolution from './AccountantsSolutionClient';

export const metadata = buildPageMetadata({
  title: 'AI-Powered Solutions for Accountants',
  description: 'Grow your accounting practice with AI voice agents, professional website design, local SEO, email marketing, Google Ads, and workflow automation tailored for accountants in Australia.',
  path: '/solutions/accountants',
  keywords: ['accountant solutions', 'AI for accountants', 'accounting practice automation', 'accountant marketing', 'accountant SEO Australia'],
});

export default function AccountantsSolutionPage() {
  return <AccountantsSolution />;
}
