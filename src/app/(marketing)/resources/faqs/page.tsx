import { ServiceBanner } from '@/components/ui/ServiceBanner'
import { ServicePageWrapper } from '@/components/sections'
import { FAQsClient } from './FAQsClient'
import { buildPageMetadata } from '@/lib/metadata'

export const metadata = buildPageMetadata({
  title: 'FAQs',
  description: 'Frequently asked questions about our development services: custom development, mobile apps, AI voice and chat agents, and more.',
  path: '/resources/faqs',
  keywords: ['FAQs', 'frequently asked questions', 'development services', 'AI agents', 'Foxtra support'],
})

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
