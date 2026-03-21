import { ServiceBanner } from '@/components/ui/ServiceBanner'
import { ServicePageWrapper, AiSeoFeatures, AiSeoBenefits, SeoTools } from '@/components/sections'
import { Pricing } from '@/components/ui/PricingSectionWithComparison'
import { buildPageMetadata } from '@/lib/metadata'

export const metadata = buildPageMetadata({
  title: 'AI SEO',
  description: 'Technical fixes, content at scale, and analytics-driven growth.',
  path: '/services/ai-seo',
  keywords: ['AI SEO', 'search engine optimization', 'technical SEO', 'content SEO'],
})

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
      <SeoTools />
    </ServicePageWrapper>
  )
}
