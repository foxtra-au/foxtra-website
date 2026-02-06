import { ServiceBanner } from '@/components/ui/ServiceBanner'
import { ServicePageWrapper, ApiDevelopmentFeatures } from '@/components/sections'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'QA and Testing | Foxtra',
  description: 'Quality assurance, automated and manual testing for reliable software. Test strategy, CI/CD pipelines, and regression testing.',
  robots: {
    index: true,
    follow: true,
  },
}

export default function QaAndTesting() {
  const qaTestingFeatures = [
    'Manual & Automated Testing',
    'Test Strategy & Planning',
    'CI/CD Test Pipelines',
    'Regression & UAT',
  ]

  return (
    <ServicePageWrapper>
      <ServiceBanner
        title="QA and Testing"
        description="Quality assurance, automated and manual testing for reliable software. We help you ship with confidence through test strategy, automation, and continuous quality checks."
        badge="Foxtra • Development Services"
        features={[]}
      />
      <ApiDevelopmentFeatures
        features={qaTestingFeatures}
        title="What You Get"
        className="mt-16"
      />
    </ServicePageWrapper>
  )
}
