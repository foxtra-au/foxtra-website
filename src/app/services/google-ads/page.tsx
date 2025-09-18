import { ServiceBanner } from '@/components/ui/ServiceBanner'
import { ServiceSections, ServicePageWrapper } from '@/components/sections'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Google Ads | Foxtra',
  description: 'High-intent campaigns with smart bidding and clear ROI reporting.',
}

export default function GoogleAds() {
  return (
    <ServicePageWrapper>
      <ServiceBanner
        title="Google Ads"
        description="High-intent campaigns with smart bidding and clear ROI reporting."
        badge="Foxtra • Marketing Services"
        features={[
          "Campaign optimization",
          "Smart bidding strategies",
          "ROI tracking",
          "A/B testing"
        ]}
      />
      <ServiceSections />
    </ServicePageWrapper>
  )
}
