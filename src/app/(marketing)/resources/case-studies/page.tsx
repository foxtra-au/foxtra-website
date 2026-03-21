import { ServiceBanner } from '@/components/ui/ServiceBanner'
import { ServicePageWrapper } from '@/components/sections'
import { Container } from '@/components/ui/Container'
import { buildPageMetadata } from '@/lib/metadata'

export const metadata = buildPageMetadata({
  title: 'Case Studies',
  description: 'Success stories from our clients and real-world results from our development and AI solutions.',
  path: '/resources/case-studies',
  keywords: ['case studies', 'client success', 'implementation results', 'Foxtra projects'],
})

export default function CaseStudies() {
  return (
    <ServicePageWrapper>
      <ServiceBanner
        title="Case Studies"
        description="Success stories from our clients and real-world results."
        badge="Foxtra • Resources"
        features={[
          "Client success stories",
          "Real-world results",
          "Implementation details",
          "ROI metrics"
        ]}
      />
      <Container className="py-16">
        <div className="prose max-w-none text-white">
          <h2 className="text-white">Client Success Stories</h2>
          <p className="text-white/70">Discover how our clients have transformed their businesses with Foxtra solutions.</p>
        </div>
      </Container>
    </ServicePageWrapper>
  )
}
