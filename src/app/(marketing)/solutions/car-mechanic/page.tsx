import { buildPageMetadata } from '@/lib/metadata';
import CarMechanicSolution from './CarMechanicSolutionClient';

export const metadata = buildPageMetadata({
  title: 'AI Solutions for Car Mechanics & Auto Repair Shops',
  description: 'Automate appointment booking, boost local SEO for auto repair, and grow your car mechanic business with AI-powered tools, Google Ads, and service reminder automation.',
  path: '/solutions/car-mechanic',
  keywords: ['car mechanic solutions', 'auto repair marketing', 'mechanic AI automation', 'local SEO for mechanics', 'car repair booking system'],
});

export default function CarMechanicSolutionPage() {
  return <CarMechanicSolution />;
}
