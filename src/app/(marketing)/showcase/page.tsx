import { ServiceBanner } from '@/components/ui/ServiceBanner'
import { ServicePageWrapper, PortfolioSection } from '@/components/sections'
import { buildPageMetadata } from '@/lib/metadata'

export const metadata = buildPageMetadata({
  title: 'Portfolio',
  description: 'Explore our web and mobile development portfolio. Real projects delivered for businesses across accounting, healthcare, real estate, and more.',
  path: '/showcase',
  keywords: ['portfolio', 'web development', 'mobile app development', 'case studies', 'Foxtra projects'],
})

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
