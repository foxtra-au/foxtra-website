import { ServiceBanner } from '@/components/ui/ServiceBanner'
import { DevelopmentProcess, TechnologiesMarquee, PortfolioShowcase, ServicePageWrapper, DevelopmentFeatures } from '@/components/sections'
import { FAQ } from '@/components/ui/FaqTabs'
import { customDevelopmentFAQ } from '@/data/faq-data'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Web App Development Sydney | Foxtra',
  description: 'Custom web applications built for scale and performance. Full-stack web development services in Sydney, Australia.',
  robots: {
    index: true,
    follow: true,
  },
}

export default function WebAppDevelopment() {
  const developmentFeatures = [
    "Full-stack web applications",
    "Responsive design & UI/UX",
    "Cloud-native architecture",
    "Scalable backend systems"
  ];

  return (
    <ServicePageWrapper>
      <ServiceBanner
        title="Web App Development Sydney"
        description="Custom web applications built for scale and performance. Full-stack web development services in Sydney, Australia."
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
        subtitle="Everything you need to know about Web App Development"
        categories={customDevelopmentFAQ.categories}
        faqData={customDevelopmentFAQ.faqData}
        className="mt-16"
      />
    </ServicePageWrapper>
  )
}
