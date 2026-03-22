import { buildPageMetadata } from '@/lib/metadata';
import SpotcardCaseStudy from './SpotcardCaseStudyClient';

export const metadata = buildPageMetadata({
  title: 'Spotcard — Digital Business Card App Case Study',
  description: 'How Foxtra built Spotcard, a digital business card app with QR code sharing, 2,500+ downloads, 1,800+ monthly active users, and 10,000+ contact exchanges.',
  path: '/case-studies/spotcard',
  keywords: ['Spotcard app', 'digital business card app', 'QR code networking app', 'mobile app case study', 'business card app development'],
});

export default function SpotcardCaseStudyPage() {
  return <SpotcardCaseStudy />;
}
