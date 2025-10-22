import { ServiceBanner } from '@/components/ui/ServiceBanner'
import { ServicePageWrapper, ChatDemo, AiChatAgentFeatures, RelatedBlogPosts } from '@/components/sections'
import { AiChatWindow } from '@/components/ui/AiChatWindow'
import { FAQ } from '@/components/ui/FaqTabs'
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

  const relatedBlogPosts = [
    {
      id: "1",
      title: "Revolutionizing Customer Service with AI Chat Agents",
      description: "How AI-powered chat agents are transforming customer interactions and boosting satisfaction rates.",
      category: "AI Innovation",
      readTime: "5 min read"
    },
    {
      id: "2",
      title: "24/7 Customer Support: The AI Advantage",
      description: "Implementing round-the-clock customer support with intelligent AI chat agents.",
      category: "Automation",
      readTime: "4 min read"
    },
    {
      id: "3",
      title: "Seamless CRM Integration with AI Chat",
      description: "Connect your AI chat agents directly to your CRM for enhanced lead management.",
      category: "Integration",
      readTime: "6 min read"
    }
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
      <RelatedBlogPosts 
        posts={relatedBlogPosts}
        title="AI Chat Agent Insights"
        subtitle="Learn how to implement and optimize AI chat agents for your business"
        className="mt-16"
      />
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
