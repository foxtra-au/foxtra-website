import { ServiceBanner } from '@/components/ui/ServiceBanner'
import { ServiceSections, ServicePageWrapper } from '@/components/sections'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'API Development | Foxtra',
  description: 'Design-first REST/GraphQL APIs, integrations, auth, and observability.',
}

export default function ApiDevelopment() {
  return (
    <ServicePageWrapper>
      <ServiceBanner
        title="API Development"
        description="Design-first REST/GraphQL APIs, integrations, auth, and observability."
        badge="Foxtra • Development Services"
        features={[
          "RESTful & GraphQL APIs",
          "Authentication systems",
          "Real-time integrations",
          "Performance monitoring"
        ]}
      />
      <ServiceSections />
    </ServicePageWrapper>
  )
}
