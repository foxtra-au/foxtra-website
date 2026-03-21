import { ServiceBanner } from '@/components/ui/ServiceBanner'
import { DevelopmentProcess, TechnologiesMarquee, ServicePageWrapper, DevelopmentFeatures } from '@/components/sections'
import { FAQ } from '@/components/ui/FaqTabs'
import { customDevelopmentFAQ } from '@/data/faq-data'
import { buildPageMetadata } from '@/lib/metadata'

export const metadata = buildPageMetadata({
  title: 'Portal Development',
  description: 'Custom portal solutions for clients, partners, and internal teams. Secure, scalable, and user-friendly portal development.',
  path: '/services/portal-development',
  keywords: ['portal development', 'customer portal', 'partner portal', 'web portal'],
})

export default function PortalDevelopment() {
  const portalFeatures = [
    "Client portals",
    "Partner portals",
    "Admin dashboards",
    "Secure authentication"
  ];

  return (
    <ServicePageWrapper>
      <ServiceBanner
        title="Portal Development"
        description="Custom portal solutions for clients, partners, and internal teams. Secure, scalable, and user-friendly portal development."
        badge="Foxtra • Development Services"
        features={[]}
      />
      <DevelopmentFeatures 
        features={portalFeatures}
        className="mt-16"
      />
      <TechnologiesMarquee />
      <DevelopmentProcess />
      <FAQ 
        title="Frequently Asked Questions"
        subtitle="Everything you need to know about Portal Development"
        categories={customDevelopmentFAQ.categories}
        faqData={customDevelopmentFAQ.faqData}
        className="mt-16"
      />
    </ServicePageWrapper>
  )
}
