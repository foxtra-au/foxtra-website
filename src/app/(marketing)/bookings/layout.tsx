import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Book a Consultation | Foxtra - Schedule Your Meeting',
  description: 'Schedule a free consultation with Foxtra experts to discuss your AI automation needs. Book a personalized meeting to explore AI chat agents, voice automation, and custom AI solutions for your business.',
  keywords: ['book consultation', 'ai automation meeting', 'business consultation', 'foxtra ai meeting', 'schedule consultation', 'free ai consultation'],
  openGraph: {
    title: 'Book a Consultation | Foxtra - Schedule Your Meeting',
    description: 'Schedule a free consultation with Foxtra experts to discuss your AI automation needs.',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Book a Consultation | Foxtra - Schedule Your Meeting',
    description: 'Schedule a free consultation with Foxtra experts to discuss your AI automation needs.',
  },
};

export default function BookingsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
