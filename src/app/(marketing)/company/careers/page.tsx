import { buildPageMetadata } from '@/lib/metadata';
import Careers from './CareersClient';

export const metadata = buildPageMetadata({
  title: 'Careers at Foxtra — Join Our Team',
  description: 'Join the Foxtra team and build the future of AI-powered technology. Explore open roles in engineering, design, marketing, and operations at a fast-growing tech company in Australia.',
  path: '/company/careers',
  keywords: ['Foxtra careers', 'tech jobs Australia', 'software engineer jobs', 'AI company careers', 'technology jobs Melbourne'],
});

export default function CareersPage() {
  return <Careers />;
}
