import { ServiceBanner } from '@/components/ui/ServiceBanner'
import { ServicePageWrapper, AiVoiceAgentFeatures, AiVoiceBenefits, RelatedBlogPosts } from '@/components/sections'
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

  const relatedBlogPosts = [
    {
      id: "9",
      title: "The Future of Voice-Powered Customer Service",
      description: "Exploring how AI voice agents are reshaping phone-based customer interactions.",
      category: "Voice Technology",
      readTime: "6 min read"
    },
    {
      id: "10",
      title: "Building Natural Conversations with AI Voice",
      description: "Creating human-like voice interactions that customers love and trust.",
      category: "AI Innovation",
      readTime: "5 min read"
    },
    {
      id: "11",
      title: "Voice Agent Integration Best Practices",
      description: "How to seamlessly integrate AI voice agents into your existing phone systems.",
      category: "Integration",
      readTime: "7 min read"
    }
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
      
      <RelatedBlogPosts 
        posts={relatedBlogPosts}
        title="AI Voice Agent Insights"
        subtitle="Discover the latest trends and best practices in voice automation"
        className="mt-16"
      />
      
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
