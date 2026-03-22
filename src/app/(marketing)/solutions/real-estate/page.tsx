import { buildPageMetadata } from '@/lib/metadata';
import RealEstateSolution from './RealEstateSolutionClient';

export const metadata = buildPageMetadata({
  title: 'AI Solutions for Real Estate Professionals',
  description: 'Capture and nurture property leads with AI automation, optimise real estate SEO, showcase listings with professional websites, and run targeted Google Ads for real estate in Australia.',
  path: '/solutions/real-estate',
  keywords: ['real estate solutions', 'real estate marketing Australia', 'property listing SEO', 'real estate lead automation', 'real estate Google Ads'],
});

export default function RealEstateSolutionPage() {
  return <RealEstateSolution />;
}
