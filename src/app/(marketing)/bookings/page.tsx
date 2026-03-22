import { buildPageMetadata } from '@/lib/metadata';
import BookingsPage from './BookingsPageClient';

export const metadata = buildPageMetadata({
  title: 'Book a Free Consultation',
  description: 'Book a free strategy consultation with the Foxtra team. Get personalised technology advice, project scoping, and actionable insights for your business in 30 minutes.',
  path: '/bookings',
  keywords: ['book consultation', 'free technology consultation', 'Foxtra booking', 'tech strategy session', 'CTO consultation Australia'],
});

export default function BookingsPageWrapper() {
  return <BookingsPage />;
}
