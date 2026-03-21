import { ServiceBanner } from '@/components/ui/ServiceBanner'
import { MobileAppProcess, MobileAppTechnologies, MobileAppShowcase, ServicePageWrapper, MobileAppFeatures } from '@/components/sections'
import { FAQ } from '@/components/ui/FaqTabs'
import { mobileAppFAQ } from '@/data/mobile-app-faq-data'
import { buildPageMetadata } from '@/lib/metadata'

export const metadata = buildPageMetadata({
  title: 'Mobile App Development',
  description: 'Native and cross-platform mobile solutions that deliver exceptional user experiences across iOS and Android.',
  path: '/services/mobile-app-development',
  keywords: ['mobile app development', 'iOS apps', 'Android apps', 'cross-platform', 'React Native'],
})

export default function MobileAppDevelopment() {
  const mobileAppFeatures = [
    "Native iOS & Android apps",
    "Cross-platform solutions", 
    "UI/UX design integration",
    "App store deployment"
  ];

  return (
    <ServicePageWrapper>
      <ServiceBanner
        title="Mobile App Development"
        description="Native and cross-platform mobile solutions that deliver exceptional user experiences across iOS and Android."
        badge="Foxtra • Development Services"
        features={[]}
        bannerImage="/services/mobile-app/mobile-app-development.webp"
      />
      <MobileAppFeatures 
        features={mobileAppFeatures}
        className="mt-16"
      />
      <MobileAppShowcase />
      <MobileAppTechnologies />
      <MobileAppProcess />
      <FAQ 
        title="Frequently Asked Questions"
        subtitle="Everything you need to know about Mobile App Development"
        categories={{
          general: "General",
          development: "Development", 
          deployment: "Deployment"
        }}
        faqData={mobileAppFAQ.faqData}
        className="mt-16"
      />
    </ServicePageWrapper>
  )
}
