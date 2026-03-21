import { buildPageMetadata } from '@/lib/metadata';

export const metadata = buildPageMetadata({
  title: 'Little Steps - Child Development App Case Study',
  description: 'How Foxtra built Little Steps, a child development tracking app that helps parents monitor milestones and support their children\'s growth.',
  path: '/case-studies/little-steps',
  keywords: ['Little Steps', 'child development app', 'mobile app case study', 'parenting app'],
});

export default function LittleStepsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
