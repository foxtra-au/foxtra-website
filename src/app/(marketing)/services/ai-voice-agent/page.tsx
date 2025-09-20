import { ServiceBanner } from '@/components/ui/ServiceBanner'
import { ServicePageWrapper, AiVoiceAgentFeatures, AiVoiceBenefits } from '@/components/sections'
import { FAQ } from '@/components/ui/FaqTabs'
import { AgentCards } from '@/components/ui/AgentCards'
import { aiVoiceAgentFAQ } from '@/data/faq-data'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AI Voice Agent | Foxtra',
  description: 'Phone agents for sales, support, and scheduling with call flows and CRM notes.',
}

export default function AiVoiceAgent() {
  const aiVoiceAgentFeatures = [
    "Natural voice conversations",
    "CRM integration",
    "Call flow automation",
    "Real-time transcription"
  ];

  return (
    <ServicePageWrapper>
      <ServiceBanner
        title="AI Voice Agent"
        description="Phone agents for sales, support, and scheduling with call flows and CRM notes."
        badge="Foxtra • AI Agent Services"
        features={[]}
        rightComponent={<AgentCards />}
      />
      
      <AiVoiceAgentFeatures 
        features={aiVoiceAgentFeatures}
        className="mt-16"
      />
      
      <AiVoiceBenefits />
      
      <FAQ 
        title="Frequently Asked Questions"
        subtitle="Everything you need to know about AI Voice Agents"
        categories={aiVoiceAgentFAQ.categories}
        faqData={aiVoiceAgentFAQ.faqData}
        className="mt-16"
      />
    </ServicePageWrapper>
  )
}
