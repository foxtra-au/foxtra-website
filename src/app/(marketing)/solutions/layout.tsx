import { buildPageMetadata } from '@/lib/metadata';

export const metadata = buildPageMetadata({
  title: 'Industry Solutions',
  description: 'Tailored technology solutions for accountants, healthcare, real estate, trades, and more. AI automation, custom software, and digital transformation.',
  keywords: ['industry solutions', 'accountants', 'healthcare', 'real estate', 'trade businesses', 'Foxtra solutions'],
});

export default function SolutionsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
