import { ServiceBanner } from '@/components/ui/ServiceBanner'
import { ServicePageWrapper, TestimonialBlock } from '@/components/sections'
import { buildPageMetadata } from '@/lib/metadata'

export const metadata = buildPageMetadata({
  title: 'Client Testimonials',
  description: 'What our clients say about working with us. Real stories from businesses that have transformed with our development and AI solutions.',
  path: '/testimonials',
  keywords: ['client testimonials', 'customer reviews', 'Foxtra reviews', 'development feedback'],
})

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
