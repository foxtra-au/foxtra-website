import { ServiceBanner } from '@/components/ui/ServiceBanner'
import { ServiceSections, ServicePageWrapper } from '@/components/sections'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Social Media Management | Foxtra',
  description: 'Calendar, creation, and community—done for you.',
}

export default function SocialMediaManagement() {
  return (
    <ServicePageWrapper>
      <ServiceBanner
        title="Social Media Management"
        description="Calendar, creation, and community—done for you."
        badge="Foxtra • Marketing Services"
        features={[
          "Content calendar planning",
          "Post creation & design",
          "Community engagement",
          "Analytics & reporting"
        ]}
      />
      <ServiceSections />
    </ServicePageWrapper>
  )
}
