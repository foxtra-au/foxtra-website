import { ServiceBanner } from '@/components/ui/ServiceBanner'
import { ServiceSections, ServicePageWrapper } from '@/components/sections'
import { FAQ } from '@/components/ui/faq-tabs'
import { AgentCard } from '@/components/ui/AgentCard'
import { aiVoiceAgentFAQ } from '@/data/faq-data'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AI Voice Agent | Foxtra',
  description: 'Phone agents for sales, support, and scheduling with call flows and CRM notes.',
}

export default function AiVoiceAgent() {
  return (
    <ServicePageWrapper>
      <ServiceBanner
        title="AI Voice Agent"
        description="Phone agents for sales, support, and scheduling with call flows and CRM notes."
        badge="Foxtra • AI Agent Services"
        features={[
          "Natural voice conversations",
          "CRM integration",
          "Call flow automation",
          "Real-time transcription"
        ]}
      />
      
      {/* Agent Cards Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Meet Our AI Agents
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our AI voice agents are ready to handle your calls with natural conversation and intelligent responses.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <AgentCard
              profileImage="/agents/lexi-receptionist.jpg"
              phoneNumber="123 456 789"
              countryCode="+61"
              flag={<span className="text-lg">🇦🇺</span>}
              agentName="Lexi"
              role="AI Receptionist"
            />
            <AgentCard
              profileImage="/agents/lexi-sales.jpg"
              phoneNumber="987 654 321"
              countryCode="+61"
              flag={<span className="text-lg">🇦🇺</span>}
              agentName="Lexi"
              role="AI Sales Agent"
            />
          </div>
        </div>
      </section>
      
      <ServiceSections />
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
