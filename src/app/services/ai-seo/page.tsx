import { ServiceBanner } from '@/components/ui/ServiceBanner'
import { ServiceSections, ServicePageWrapper } from '@/components/sections'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AI SEO | Foxtra',
  description: 'Technical fixes, content at scale, and analytics-driven growth.',
}

export default function AiSeo() {
  return (
    <ServicePageWrapper>
      <ServiceBanner
        title="AI SEO"
        description="Technical fixes, content at scale, and analytics-driven growth."
        badge="Foxtra • Marketing Services"
        features={[
          "Technical SEO audits",
          "AI-generated content",
          "Keyword optimization",
          "Performance tracking"
        ]}
      />
      <ServiceSections />
    </ServicePageWrapper>
  )
}
