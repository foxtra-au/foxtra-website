import { buildPageMetadata } from '@/lib/metadata';
import LittleStepsCaseStudy from './LittleStepsCaseStudyClient';

export const metadata = buildPageMetadata({
  title: 'Little Steps — Child Development App Case Study',
  description: 'How Foxtra built Little Steps, a child development tracking app with 10,000+ active users, milestone tracking, smart reminders, and parent progress analytics.',
  path: '/case-studies/little-steps',
  keywords: ['Little Steps app', 'child development app', 'mobile app case study', 'parenting app development', 'milestone tracking app'],
});

export default function LittleStepsCaseStudyPage() {
  return <LittleStepsCaseStudy />;
}
