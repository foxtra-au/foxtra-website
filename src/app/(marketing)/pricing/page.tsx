import { PricingContent } from '@/components/sections/PricingContent';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pricing | Foxtra',
  description: 'Transparent pricing for AI agents, custom development, and marketing services.',
};

export default function Pricing() {
  return <PricingContent />;
}