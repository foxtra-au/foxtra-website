import { buildPageMetadata } from '@/lib/metadata';
import CarWashSolution from './CarWashSolutionClient';

export const metadata = buildPageMetadata({
  title: 'AI Booking & Digital Solutions for Car Wash Businesses',
  description: 'Grow your car wash business with AI-powered online booking, loyalty programs, local SEO, customer retention automation, and Google Ads management.',
  path: '/solutions/car-wash',
  keywords: ['car wash solutions', 'car wash booking system', 'car wash marketing', 'local SEO for car wash', 'car wash automation'],
});

export default function CarWashSolutionPage() {
  return <CarWashSolution />;
}
