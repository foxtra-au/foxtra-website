import { ServiceBanner } from '@/components/ui/ServiceBanner'
import { ServiceSections, ServicePageWrapper, ChatDemo } from '@/components/sections'
import { ChatWindow } from '@/components/ui/ChatWindow'
import { FAQ } from '@/components/ui/faq-tabs'
import { aiChatAgentFAQ } from '@/data/faq-data'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AI Chat Agent | Foxtra',
  description: 'Website, WhatsApp, and in-app chat that answers, books, and qualifies.',
}

export default function AiChatAgent() {
  return (
    <ServicePageWrapper>
      <ServiceBanner
        title="AI Chat Agent"
        description="Website, WhatsApp, and in-app chat that answers, books, and qualifies."
        badge="Foxtra • AI Agent Services"
        features={[
          "24/7 intelligent responses",
          "Multi-platform integration",
          "Lead qualification",
          "Appointment booking"
        ]}
      />
      <ChatDemo />
      <ServiceSections />
      <FAQ 
        title="Frequently Asked Questions"
        subtitle="Everything you need to know about AI Chat Agents"
        categories={aiChatAgentFAQ.categories}
        faqData={aiChatAgentFAQ.faqData}
        className="mt-16"
      />
      <ChatWindow />
    </ServicePageWrapper>
  )
}
