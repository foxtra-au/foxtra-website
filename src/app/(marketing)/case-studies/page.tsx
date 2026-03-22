import { buildPageMetadata } from '@/lib/metadata';
import CaseStudies from './CaseStudiesClient';

export const metadata = buildPageMetadata({
  title: 'Client Success Stories & Case Studies',
  description: 'Explore Foxtra case studies showcasing real-world results — from marketplace platforms and mobile apps to digital business card solutions for growing businesses.',
  path: '/case-studies',
  keywords: ['case studies', 'client success stories', 'Foxtra portfolio', 'software development results', 'technology case studies Australia'],
});

export default function CaseStudiesPage() {
  return <CaseStudies />;
}
