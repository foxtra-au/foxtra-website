import { PricingContent } from '@/components/sections/PricingContent';
import { buildPageMetadata } from '@/lib/metadata';

export const metadata = buildPageMetadata({
  title: 'Pricing',
  description: 'Transparent pricing for AI agents, custom development, and marketing services.',
  path: '/pricing',
  keywords: ['pricing', 'development costs', 'AI agent pricing', 'custom development pricing'],
});

export default function Pricing() {
  return <PricingContent />;
}