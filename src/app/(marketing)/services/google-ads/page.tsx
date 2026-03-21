import { ServiceBanner } from '@/components/ui/ServiceBanner'
import { ServicePageWrapper, GoogleAdsFeatures, GoogleAdsBenefits, GoogleAdsTools, GoogleAdServiceBenefit } from '@/components/sections'
import { GoogleAdsPricing } from '@/components/ui/GoogleAdsPricing'
import { buildPageMetadata } from '@/lib/metadata'

export const metadata = buildPageMetadata({
  title: 'Google Ads',
  description: 'High-intent campaigns with smart bidding and clear ROI reporting.',
  path: '/services/google-ads',
  keywords: ['Google Ads', 'PPC', 'paid search', 'campaign optimization', 'ROI marketing'],
})

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
