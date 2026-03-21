import { buildPageMetadata } from '@/lib/metadata';

export const metadata = buildPageMetadata({
  title: 'Local Fox - Local Business Platform Case Study',
  description: 'How Foxtra built Local Fox, a platform connecting local businesses with customers. Web and mobile solutions delivering 300% growth.',
  path: '/case-studies/local-fox',
  keywords: ['Local Fox', 'local business platform', 'case study', 'web and mobile development'],
});

export default function LocalFoxLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
