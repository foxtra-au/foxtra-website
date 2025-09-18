import { ServiceBanner } from '@/components/ui/ServiceBanner'
import { ServicePageWrapper } from '@/components/sections'
import { Container } from '@/components/ui/Container'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Tutorials | Foxtra',
  description: 'Step-by-step learning resources for mastering Foxtra AI services.',
}

export default function Tutorials() {
  return (
    <ServicePageWrapper>
      <ServiceBanner
        title="Tutorials"
        description="Step-by-step learning resources for mastering Foxtra AI services."
        badge="Foxtra • Resources"
        features={[
          "Step-by-step guides",
          "Video tutorials",
          "Best practices",
          "Expert tips"
        ]}
      />
      <Container className="py-16">
        <div className="prose max-w-none text-white">
          <h2 className="text-white">Tutorial Categories</h2>
          <p className="text-white/70">Browse our comprehensive tutorial library organized by skill level and topic.</p>
        </div>
      </Container>
    </ServicePageWrapper>
  )
}
