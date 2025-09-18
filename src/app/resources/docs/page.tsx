import { ServiceBanner } from '@/components/ui/ServiceBanner'
import { ServicePageWrapper } from '@/components/sections'
import { Container } from '@/components/ui/Container'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Documentation | Foxtra',
  description: 'Complete guides and API references for all Foxtra services.',
}

export default function Documentation() {
  return (
    <ServicePageWrapper>
      <ServiceBanner
        title="Documentation"
        description="Complete guides and API references for all Foxtra services."
        badge="Foxtra • Resources"
        features={[
          "API references",
          "Integration guides",
          "SDKs and libraries",
          "Code examples"
        ]}
      />
      <Container className="py-16">
        <div className="prose max-w-none text-white">
          <h2 className="text-white">Getting Started</h2>
          <p className="text-white/70">Welcome to the Foxtra documentation. Here you'll find everything you need to integrate and use our AI-powered services.</p>
          
          <h2 className="text-white">API Reference</h2>
          <p className="text-white/70">Comprehensive API documentation for all our services including authentication, endpoints, and examples.</p>
          
          <h2 className="text-white">SDKs and Libraries</h2>
          <p className="text-white/70">Official SDKs and libraries for popular programming languages and frameworks.</p>
        </div>
      </Container>
    </ServicePageWrapper>
  )
}
