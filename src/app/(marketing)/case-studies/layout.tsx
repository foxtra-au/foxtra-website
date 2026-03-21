import { buildPageMetadata } from '@/lib/metadata';

export const metadata = buildPageMetadata({
  title: 'Case Studies',
  description: 'Success stories and real-world results from our clients. Discover how Foxtra has helped businesses transform with AI and custom development.',
  path: '/case-studies',
  keywords: ['case studies', 'client success', 'project results', 'Foxtra projects'],
});

export default function CaseStudiesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
