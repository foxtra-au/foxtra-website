import { buildPageMetadata } from '@/lib/metadata';

export const metadata = buildPageMetadata({
  title: 'Book a Consultation - Schedule Your Meeting',
  description: 'Schedule a free consultation with Foxtra experts to discuss your AI automation needs. Book a personalized meeting to explore AI chat agents, voice automation, and custom AI solutions for your business.',
  path: '/bookings',
  keywords: ['book consultation', 'ai automation meeting', 'business consultation', 'foxtra meeting', 'schedule consultation', 'free ai consultation'],
});

export default function BookingsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
