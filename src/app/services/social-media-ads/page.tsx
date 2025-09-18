import { ServiceBanner } from '@/components/ui/ServiceBanner'
import { ServiceSections, ServicePageWrapper } from '@/components/sections'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Social Media Ads | Foxtra',
  description: 'Paid social that finds your audience and converts.',
}

export default function SocialMediaAds() {
  return (
    <ServicePageWrapper>
      <ServiceBanner
        title="Social Media Ads"
        description="Paid social that finds your audience and converts."
        badge="Foxtra • Marketing Services"
        features={[
          "Targeted audience reach",
          "Creative ad design",
          "Performance optimization",
          "ROI tracking"
        ]}
      />
      <ServiceSections />
    </ServicePageWrapper>
  )
}
