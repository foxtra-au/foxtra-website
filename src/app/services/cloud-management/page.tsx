import { ServiceBanner } from '@/components/ui/ServiceBanner'
import { ServiceSections, ServicePageWrapper } from '@/components/sections'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Cloud Management | Foxtra',
  description: 'Architecture, DevOps, security, and cost optimization across AWS/Azure/GCP.',
}

export default function CloudManagement() {
  return (
    <ServicePageWrapper>
      <ServiceBanner
        title="Cloud Management"
        description="Architecture, DevOps, security, and cost optimization across AWS/Azure/GCP."
        badge="Foxtra • Development Services"
        features={[
          "Multi-cloud architecture",
          "DevOps automation",
          "Security compliance",
          "Cost optimization"
        ]}
      />
      <ServiceSections />
    </ServicePageWrapper>
  )
}
