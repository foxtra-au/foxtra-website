import { ServiceBanner } from '@/components/ui/ServiceBanner'
import { ServicePageWrapper, ApiDevelopmentFeatures } from '@/components/sections'
import { buildPageMetadata } from '@/lib/metadata'

export const metadata = buildPageMetadata({
  title: 'QA and Testing',
  description: 'Quality assurance, automated and manual testing for reliable software. Test strategy, CI/CD pipelines, and regression testing.',
  path: '/services/qa-and-testing',
  keywords: ['QA', 'quality assurance', 'software testing', 'automated testing', 'CI/CD testing'],
})

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
