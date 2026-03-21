import { buildPageMetadata } from '@/lib/metadata';

export const metadata = buildPageMetadata({
  title: 'Spotcard - Digital Business Card App Case Study',
  description: 'How Foxtra built Spotcard, a digital business card solution with QR code integration for professional networking and contact management.',
  path: '/case-studies/spotcard',
  keywords: ['Spotcard', 'digital business card', 'QR code app', 'networking app', 'case study'],
});

export default function SpotcardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
