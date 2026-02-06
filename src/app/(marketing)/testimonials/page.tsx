import { ServiceBanner } from '@/components/ui/ServiceBanner'
import { ServicePageWrapper, TestimonialBlock } from '@/components/sections'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Client Testimonials | Foxtra',
  description: 'What our clients say about working with us. Real stories from businesses that have transformed with our development and AI solutions.',
  robots: { index: true, follow: true },
}

export default function TestimonialsPage() {
  return (
    <ServicePageWrapper>
      <ServiceBanner
        title="Client Testimonials"
        description="What our clients say about working with us. Real stories from businesses we've helped grow."
        badge="Foxtra • Work"
        features={[]}
      />
      <TestimonialBlock />
    </ServicePageWrapper>
  )
}
