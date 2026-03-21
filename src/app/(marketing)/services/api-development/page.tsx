import { ServiceBanner } from '@/components/ui/ServiceBanner'
import { ServicePageWrapper, ApiDevelopmentFeatures, ApiDatabaseDemo } from '@/components/sections'
import { buildPageMetadata } from '@/lib/metadata'

export const metadata = buildPageMetadata({
  title: 'API Development',
  description: 'Design-first REST/GraphQL APIs, integrations, auth, and observability.',
  path: '/services/api-development',
  keywords: ['API development', 'REST API', 'GraphQL', 'API integration', 'backend development'],
})

export default function ApiDevelopment() {
  const apiDevelopmentFeatures = [
    "RESTful & GraphQL APIs",
    "Authentication & Security",
    "Real-time Integrations", 
    "Performance Monitoring"
  ];

  return (
    <ServicePageWrapper>
      <ServiceBanner
        title="API Development"
        description="Design-first REST/GraphQL APIs, integrations, auth, and observability."
        badge="Foxtra • Development Services"
        features={[]}
        rightComponent={<ApiDatabaseDemo />}
      />
      <ApiDevelopmentFeatures 
        features={apiDevelopmentFeatures}
        className="mt-16"
      />
    </ServicePageWrapper>
  )
}
