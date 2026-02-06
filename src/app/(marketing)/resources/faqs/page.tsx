import { ServiceBanner } from '@/components/ui/ServiceBanner'
import { ServicePageWrapper } from '@/components/sections'
import { FAQsClient } from './FAQsClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'FAQs | Foxtra',
  description: 'Frequently asked questions about our development services: custom development, mobile apps, AI voice and chat agents, and more.',
  robots: { index: true, follow: true },
}

export default function FAQsPage() {
  return (
    <ServicePageWrapper>
      <ServiceBanner
        title="FAQs"
        description="Frequently asked questions about our services. Select a service to see common questions and answers."
        badge="Foxtra • Resources"
        features={[]}
      />
      <div className="relative z-10 px-4 pb-20">
        <FAQsClient />
      </div>
    </ServicePageWrapper>
  )
}
