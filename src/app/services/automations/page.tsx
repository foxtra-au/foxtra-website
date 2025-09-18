import { ServiceBanner } from '@/components/ui/ServiceBanner'
import { ServiceSections, ServicePageWrapper } from '@/components/sections'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Automations | Foxtra',
  description: 'Trigger-based workflows that connect your apps and remove manual steps.',
}

export default function Automations() {
  return (
    <ServicePageWrapper>
      <ServiceBanner
        title="Automations"
        description="Trigger-based workflows that connect your apps and remove manual steps."
        badge="Foxtra • AI Agent Services"
        features={[
          "Custom workflow design",
          "Multi-app integrations",
          "Smart triggers",
          "Real-time monitoring"
        ]}
      />
      <ServiceSections />
    </ServicePageWrapper>
  )
}
