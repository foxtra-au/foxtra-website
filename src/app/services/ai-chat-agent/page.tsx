import { ServiceBanner } from '@/components/ui/ServiceBanner'
import { ServicePageWrapper, ChatDemo, AiChatAgentFeatures } from '@/components/sections'
import { AiChatWindow } from '@/components/ui/AiChatWindow'
import { FAQ } from '@/components/ui/faq-tabs'
import { aiChatAgentFAQ } from '@/data/faq-data'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AI Chat Agent | Foxtra',
  description: 'Website, WhatsApp, and in-app chat that answers, books, and qualifies.',
}

export default function AiChatAgent() {
  const aiChatAgentFeatures = [
    "24/7 intelligent responses",
    "Multi-platform integration",
    "Lead qualification",
    "Appointment booking"
  ];

  return (
    <ServicePageWrapper>
      <ServiceBanner
        title="AI Chat Agent"
        description="Website, WhatsApp, and in-app chat that answers, books, and qualifies."
        badge="Foxtra • AI Agent Services"
        features={[]}
        rightComponent={<AiChatWindow />}
      />
      <AiChatAgentFeatures 
        features={aiChatAgentFeatures}
        className="mt-16"
      />
      <ChatDemo />
      <FAQ 
        title="Frequently Asked Questions"
        subtitle="Everything you need to know about AI Chat Agents"
        categories={aiChatAgentFAQ.categories}
        faqData={aiChatAgentFAQ.faqData}
        className="mt-16"
      />
    </ServicePageWrapper>
  )
}
