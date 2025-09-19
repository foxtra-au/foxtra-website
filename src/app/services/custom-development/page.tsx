import { ServiceBanner } from '@/components/ui/ServiceBanner'
import { DevelopmentProcess, TechnologiesMarquee, PortfolioShowcase, ServicePageWrapper, DevelopmentFeatures } from '@/components/sections'
import { FAQ } from '@/components/ui/FaqTabs'
import { customDevelopmentFAQ } from '@/data/faq-data'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Custom Development | Foxtra',
  description: 'Custom apps that fit your workflows—designed, built, and shipped with AI-first thinking.',
}

export default function CustomDevelopment() {
  const developmentFeatures = [
    "Full-stack web applications",
    "Mobile app development", 
    "AI-powered integrations",
    "Scalable cloud architecture"
  ];

  return (
    <ServicePageWrapper>
      <ServiceBanner
        title="Custom Development"
        description="Custom apps that fit your workflows—designed, built, and shipped with AI-first thinking."
        badge="Foxtra • Development Services"
        features={[]}
      />
      <DevelopmentFeatures 
        features={developmentFeatures}
        className="mt-16"
      />
      <PortfolioShowcase />
      <TechnologiesMarquee />
      <DevelopmentProcess />
      <FAQ 
        title="Frequently Asked Questions"
        subtitle="Everything you need to know about Custom Development"
        categories={customDevelopmentFAQ.categories}
        faqData={customDevelopmentFAQ.faqData}
        className="mt-16"
      />
    </ServicePageWrapper>
  )
}
