import { ServiceBanner } from '@/components/ui/ServiceBanner'
import { ServicePageWrapper, AutomationFeatures, AutomationBenefits, AutomationTools } from '@/components/sections'
import { N8nFlowDemo } from '@/components/ui/N8nFlowDemo'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Automations | Foxtra',
  description: 'Trigger-based workflows that connect your apps and remove manual steps.',
}

export default function Automations() {
  const automationFeatures = [
    "Smart workflow triggers",
    "Multi-platform integration", 
    "Real-time monitoring",
    "Custom automation rules"
  ];

  const automationFAQ = [
    {
      question: "What types of automations can you create?",
      answer: "We can create automations for data synchronization, email marketing, lead management, customer support, inventory management, reporting, and much more. Our team specializes in connecting disparate systems and creating seamless workflows."
    },
    {
      question: "Which platforms and tools do you integrate with?",
      answer: "We integrate with 100+ popular platforms including CRM systems (Salesforce, HubSpot), marketing tools (Mailchimp, Pardot), e-commerce platforms (Shopify, WooCommerce), communication tools (Slack, Teams), and many others."
    },
    {
      question: "How long does it take to set up automation workflows?",
      answer: "Simple automations can be set up within 1-2 weeks, while complex multi-platform integrations typically take 3-6 weeks. We provide detailed timelines during our consultation phase."
    },
    {
      question: "Do you provide ongoing support and maintenance?",
      answer: "Yes, all our automation solutions include ongoing monitoring, maintenance, and optimization. We also provide training for your team and are available for support whenever you need assistance."
    },
    {
      question: "Can automations be customized as my business grows?",
      answer: "Absolutely! Our automation solutions are designed to scale with your business. We regularly review and optimize workflows to ensure they continue meeting your evolving needs."
    },
    {
      question: "What if I need to modify an existing automation?",
      answer: "We offer flexible modification services. Changes can typically be implemented within 1-2 weeks, and we ensure minimal disruption to your existing workflows during the update process."
    }
  ];

  return (
    <ServicePageWrapper>
      <ServiceBanner
        title="Automations"
        description="Trigger-based workflows that connect your apps and remove manual steps."
        badge="Foxtra • AI Agent Services"
        features={automationFeatures}
        rightComponent={<N8nFlowDemo />}
      />
      
      <AutomationFeatures />
      
      <AutomationBenefits />
      
      <AutomationTools />
      
      <div className="py-16">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="text-left mb-12">
            <h2 className="text-3xl font-bold text-white mb-4 font-sans">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-white/70 max-w-3xl font-sans">
              Get answers to common questions about our automation services
            </p>
          </div>
          <div className="space-y-4">
            {automationFAQ.map((faq, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-white mb-3 font-sans">{faq.question}</h3>
                <p className="text-white/70 font-sans">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </ServicePageWrapper>
  )
}
