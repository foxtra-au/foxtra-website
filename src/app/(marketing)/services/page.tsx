import { ServiceBanner } from '@/components/ui/ServiceBanner'
import { ServicePageWrapper, HomeFeatures } from '@/components/sections'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Services | Foxtra',
  description:
    'Technology consulting, engineering, and managed services: CTO services, custom development, web and mobile apps, APIs, cloud, QA, and AI automation.',
  robots: { index: true, follow: true },
}

export default function ServicesPage() {
  return (
    <ServicePageWrapper>
      <ServiceBanner
        title="Services"
        description="Explore how we help modernise systems and deliver reliable digital platforms—from strategic advisory and engineering to managed support."
        badge="Foxtra"
        features={[]}
      />
      <HomeFeatures className="pb-20" />
    </ServicePageWrapper>
  )
}
