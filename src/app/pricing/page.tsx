import { ServiceBanner } from '@/components/ui/ServiceBanner'
import { ServicePageWrapper } from '@/components/sections'
import { FAQ } from '@/components/ui/FaqTabs'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Pricing | Foxtra',
  description: 'Transparent pricing for AI agents, custom development, and marketing services.',
}

// FAQ data for pricing
const pricingFAQ = {
  categories: {
    "general": "General Pricing",
    "development": "Development Pricing",
    "agents": "AI Agent Pricing",
    "marketing": "Marketing Pricing"
  },
  faqData: {
    "general": [
      {
        question: "How is pricing structured?",
        answer: "Our pricing is transparent and varies by service type. We offer project-based pricing for development work, monthly subscriptions for AI agents, and performance-based pricing for marketing services. Contact us for a detailed quote tailored to your needs."
      },
      {
        question: "Do you offer custom pricing packages?",
        answer: "Yes! We understand every business has unique needs. We offer custom pricing packages that combine multiple services, volume discounts for larger projects, and flexible payment terms for enterprise clients."
      },
      {
        question: "Are there any setup fees?",
        answer: "Setup fees vary by service complexity. Simple AI agent deployments often have minimal setup costs, while complex custom development projects may include one-time setup and configuration fees. All fees are disclosed upfront in your quote."
      },
      {
        question: "What payment methods do you accept?",
        answer: "We accept major credit cards, bank transfers, and for enterprise clients, we can arrange invoicing with NET 30 terms. All payments are processed securely through our encrypted payment systems."
      }
    ],
    "development": [
      {
        question: "How much does custom development cost?",
        answer: "Custom development projects typically range from $5,000 to $50,000+ depending on complexity, features, and timeline. We provide detailed estimates after understanding your requirements during our discovery phase."
      },
      {
        question: "What's included in development pricing?",
        answer: "Our development pricing includes project planning, design, development, testing, deployment, documentation, and 30 days of post-launch support. Ongoing maintenance and additional features are available as separate packages."
      },
      {
        question: "Can I get a fixed-price quote?",
        answer: "Yes, we provide fixed-price quotes for well-defined projects. For complex or evolving requirements, we also offer time-and-materials pricing with regular milestone reviews to ensure transparency and control."
      },
      {
        question: "Do you offer payment plans for development?",
        answer: "Yes, we structure payments in milestones tied to project deliverables. Typically 25% upfront, 50% at key milestones, and 25% upon completion. This ensures you only pay as value is delivered."
      }
    ],
    "agents": [
      {
        question: "How much do AI agents cost per month?",
        answer: "AI agent pricing starts at $299/month for basic chat agents and $499/month for voice agents. Pricing scales with usage, features, and integrations. Enterprise packages with unlimited usage start at $1,999/month."
      },
      {
        question: "What's included in the monthly AI agent fee?",
        answer: "Monthly fees include hosting, maintenance, regular updates, basic support, and a set amount of conversations/minutes. Additional usage, premium features, and priority support are available as add-ons."
      },
      {
        question: "Are there usage limits for AI agents?",
        answer: "Basic plans include generous usage allowances (e.g., 1,000 conversations/month for chat agents). Overage charges apply beyond limits, or you can upgrade to higher tiers with increased allowances or unlimited usage."
      },
      {
        question: "Can I cancel my AI agent subscription?",
        answer: "Yes, you can cancel anytime with 30 days notice. We'll provide data export and transition support. No long-term contracts required, though annual plans offer significant discounts."
      }
    ],
    "marketing": [
      {
        question: "How does marketing service pricing work?",
        answer: "Marketing services combine monthly management fees ($1,500-$5,000) plus ad spend budgets. SEO services start at $2,000/month. We also offer performance-based pricing where fees are tied to results achieved."
      },
      {
        question: "What's the minimum ad spend budget?",
        answer: "Minimum ad spend varies by platform and campaign type. Google Ads campaigns typically start at $3,000/month, while social media campaigns can start at $1,500/month. We'll recommend budgets based on your goals and market."
      },
      {
        question: "Do you charge setup fees for marketing?",
        answer: "Initial setup fees range from $500-$2,000 depending on campaign complexity, number of platforms, and required integrations. This covers account setup, tracking implementation, and initial campaign creation."
      },
      {
        question: "How do performance-based pricing models work?",
        answer: "For performance-based pricing, we set specific KPIs (leads, sales, traffic) and tie our fees to achieving those goals. Base fees are lower, with bonus payments for exceeding targets. This aligns our success with yours."
      }
    ]
  }
};

export default function Pricing() {
  return (
    <ServicePageWrapper>
      <ServiceBanner
        title="Transparent Pricing"
        description="Clear, honest pricing for AI agents, custom development, and marketing services. No hidden fees, no surprises."
        badge="Foxtra • Pricing"
        features={[
          "Transparent pricing structure",
          "Custom packages available", 
          "Flexible payment terms",
          "No hidden fees"
        ]}
      />
      
      {/* Pricing Cards Section */}
      <section className="max-w-6xl mx-auto mt-16 px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Choose Your Service</h2>
          <p className="text-white/60 text-lg">Select the service that best fits your business needs</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {/* AI Agents Pricing */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 hover:bg-white/10 transition-all duration-300">
            <div className="text-center">
              <h3 className="text-xl font-bold text-white mb-2">AI Agents</h3>
              <p className="text-white/60 mb-6">Intelligent chat and voice agents</p>
              <div className="mb-6">
                <span className="text-3xl font-bold text-white">$299</span>
                <span className="text-white/60">/month</span>
              </div>
              <ul className="space-y-3 text-left mb-8">
                <li className="flex items-center text-white/80">
                  <span className="text-green-400 mr-3">✓</span>
                  Chat or Voice Agent
                </li>
                <li className="flex items-center text-white/80">
                  <span className="text-green-400 mr-3">✓</span>
                  1,000 conversations/month
                </li>
                <li className="flex items-center text-white/80">
                  <span className="text-green-400 mr-3">✓</span>
                  Basic CRM integration
                </li>
                <li className="flex items-center text-white/80">
                  <span className="text-green-400 mr-3">✓</span>
                  24/7 support
                </li>
              </ul>
              <button className="w-full py-3 px-6 text-white rounded-lg font-semibold transition-all duration-300 transform hover:scale-105" style={{ backgroundColor: '#FF335C' }}>
                Get Started
              </button>
            </div>
          </div>

          {/* Custom Development Pricing */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 hover:bg-white/10 transition-all duration-300 relative">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <span className="bg-yellow-500 text-black px-4 py-1 rounded-full text-sm font-semibold">
                Most Popular
              </span>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold text-white mb-2">Custom Development</h3>
              <p className="text-white/60 mb-6">Tailored applications and solutions</p>
              <div className="mb-6">
                <span className="text-3xl font-bold text-white">$5K</span>
                <span className="text-white/60">+</span>
              </div>
              <ul className="space-y-3 text-left mb-8">
                <li className="flex items-center text-white/80">
                  <span className="text-green-400 mr-3">✓</span>
                  Custom web/mobile apps
                </li>
                <li className="flex items-center text-white/80">
                  <span className="text-green-400 mr-3">✓</span>
                  API development
                </li>
                <li className="flex items-center text-white/80">
                  <span className="text-green-400 mr-3">✓</span>
                  Cloud deployment
                </li>
                <li className="flex items-center text-white/80">
                  <span className="text-green-400 mr-3">✓</span>
                  30 days support
                </li>
              </ul>
              <button className="w-full py-3 px-6 text-white rounded-lg font-semibold transition-all duration-300 transform hover:scale-105" style={{ backgroundColor: '#FF335C' }}>
                Get Quote
              </button>
            </div>
          </div>

          {/* Marketing Pricing */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 hover:bg-white/10 transition-all duration-300">
            <div className="text-center">
              <h3 className="text-xl font-bold text-white mb-2">Marketing</h3>
              <p className="text-white/60 mb-6">AI-powered marketing campaigns</p>
              <div className="mb-6">
                <span className="text-3xl font-bold text-white">$1.5K</span>
                <span className="text-white/60">/month</span>
              </div>
              <ul className="space-y-3 text-left mb-8">
                <li className="flex items-center text-white/80">
                  <span className="text-green-400 mr-3">✓</span>
                  SEO optimization
                </li>
                <li className="flex items-center text-white/80">
                  <span className="text-green-400 mr-3">✓</span>
                  Social media management
                </li>
                <li className="flex items-center text-white/80">
                  <span className="text-green-400 mr-3">✓</span>
                  Paid advertising
                </li>
                <li className="flex items-center text-white/80">
                  <span className="text-green-400 mr-3">✓</span>
                  Monthly reports
                </li>
              </ul>
              <button className="w-full py-3 px-6 text-white rounded-lg font-semibold transition-all duration-300 transform hover:scale-105" style={{ backgroundColor: '#FF335C' }}>
                Get Started
              </button>
            </div>
          </div>
        </div>
      </section>

      <FAQ 
        title="Frequently Asked Questions"
        subtitle="Everything you need to know about our pricing"
        categories={pricingFAQ.categories}
        faqData={pricingFAQ.faqData}
        className="mt-16"
      />
    </ServicePageWrapper>
  )
}