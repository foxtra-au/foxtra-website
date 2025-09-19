import { ServiceBanner } from '@/components/ui/ServiceBanner'
import { ServicePageWrapper, AiSeoFeatures, AiSeoBenefits } from '@/components/sections'
import { Pricing } from '@/components/ui/PricingSectionWithComparison'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AI SEO | Foxtra',
  description: 'Technical fixes, content at scale, and analytics-driven growth.',
}

export default function AiSeo() {
  const seoFeatures = [
    "Technical SEO audits",
    "AI-generated content",
    "Keyword optimization",
    "Performance tracking"
  ];

  return (
    <ServicePageWrapper>
      <ServiceBanner
        title="AI SEO"
        description="Technical fixes, content at scale, and analytics-driven growth."
        badge="Foxtra • Marketing Services"
        features={[]}
      />
      <AiSeoFeatures 
        features={seoFeatures}
        className="mt-16"
      />
      <AiSeoBenefits />
      <Pricing />
    </ServicePageWrapper>
  )
}
