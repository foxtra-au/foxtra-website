import { ServiceBanner } from '@/components/ui/ServiceBanner'
import { ServicePageWrapper, PortfolioSection } from '@/components/sections'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Portfolio | Foxtra',
  description: 'Explore our web and mobile development portfolio. Real projects delivered for businesses across accounting, healthcare, real estate, and more.',
  robots: { index: true, follow: true },
}

export default function Showcase() {
  return (
    <ServicePageWrapper>
      <ServiceBanner
        title="Portfolio"
        description="Web and mobile development projects we've delivered for businesses. From accounting and healthcare to real estate and local services."
        badge="Foxtra • Work"
        features={[]}
      />
      <PortfolioSection />
    </ServicePageWrapper>
  )
}
