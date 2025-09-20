import { ServiceBanner } from '@/components/ui/ServiceBanner'
import { ServicePageWrapper, GoogleAdsFeatures, GoogleAdsBenefits, GoogleAdsTools, GoogleAdServiceBenefit } from '@/components/sections'
import { GoogleAdsPricing } from '@/components/ui/GoogleAdsPricing'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Google Ads | Foxtra',
  description: 'High-intent campaigns with smart bidding and clear ROI reporting.',
}

export default function GoogleAds() {
  const googleAdsFeatures = [
    "Campaign Optimization",
    "Smart Bidding Strategies", 
    "ROI Tracking & Analytics",
    "A/B Testing & Optimization"
  ];

  return (
    <ServicePageWrapper>
      <ServiceBanner
        title="Google Ads"
        description="High-intent campaigns with smart bidding and clear ROI reporting."
        badge="Foxtra • Marketing Services"
        features={[]}
      />
      <GoogleAdsFeatures 
        features={googleAdsFeatures}
        className="mt-16"
      />
      <GoogleAdServiceBenefit />
      <GoogleAdsPricing />
      <GoogleAdsTools />
    </ServicePageWrapper>
  )
}
