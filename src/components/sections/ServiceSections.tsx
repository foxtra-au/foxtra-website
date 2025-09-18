import { Container } from '@/components/ui/Container'
import { Card } from '@/components/ui/Card'

interface WhatYouGetItem {
  icon: string
  title: string
  description: string
}

interface ServiceSectionsProps {
  whatYouGet?: WhatYouGetItem[]
}

export function ServiceSections({ whatYouGet }: ServiceSectionsProps) {
  const defaultWhatYouGet = [
    {
      icon: "🎯",
      title: "Professional Results",
      description: "High-quality deliverables that exceed expectations and drive real business results."
    },
    {
      icon: "👥",
      title: "Expert Team",
      description: "Work with experienced professionals who understand your industry and challenges."
    },
    {
      icon: "🛠️",
      title: "Ongoing Support",
      description: "Continuous support and optimization to ensure long-term success."
    },
    {
      icon: "📈",
      title: "Measurable Growth",
      description: "Track progress with clear metrics and regular performance reports."
    }
  ]

  const displayItems = whatYouGet || defaultWhatYouGet
  return (
    <div className="space-y-16">
      {/* What you get - only show if whatYouGet is provided */}
      {whatYouGet && (
        <section>
          <Container>
            <h2 className="text-3xl font-bold text-white mb-8 text-left">What You Get</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {displayItems.map((item, index) => (
                <Card
                  key={index}
                  title={item.title}
                  description={item.description}
                  icon={item.icon}
                />
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* How it works */}
      <section className="bg-transparent">
        <Container>
          <h2 className="text-3xl font-bold text-white mb-8 text-left">How It Works</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">1</div>
              <h3 className="text-lg font-semibold mb-2 text-white">Discovery</h3>
              <p className="text-gray-300">We understand your needs and goals through detailed consultation.</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">2</div>
              <h3 className="text-lg font-semibold mb-2 text-white">Strategy</h3>
              <p className="text-gray-300">We develop a comprehensive plan tailored to your requirements.</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">3</div>
              <h3 className="text-lg font-semibold mb-2 text-white">Implementation</h3>
              <p className="text-gray-300">Our team executes the plan with precision and attention to detail.</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">4</div>
              <h3 className="text-lg font-semibold mb-2 text-white">Optimization</h3>
              <p className="text-gray-300">We monitor, analyze, and continuously improve performance.</p>
            </div>
          </div>
        </Container>
      </section>

      {/* Integrations */}
      <section>
        <Container>
          <h2 className="text-3xl font-bold text-white mb-8 text-left">Integrations</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <Card title="CRM Systems" description="Salesforce, HubSpot, Pipedrive" icon="📊" />
            <Card title="Communication" description="Slack, Teams, Discord" icon="💬" />
            <Card title="Analytics" description="Google Analytics, Mixpanel" icon="📈" />
            <Card title="Payment" description="Stripe, PayPal, Square" icon="💳" />
          </div>
        </Container>
      </section>

      {/* Deliverables */}
      <section className="bg-transparent">
        <Container>
          <h2 className="text-3xl font-bold text-white mb-8 text-left">Deliverables</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-white">What You'll Receive</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="text-green-400 mr-2">✓</span>
                  <span className="text-gray-300">Complete project documentation</span>
                </li>
                <li className="flex items-center">
                  <span className="text-green-400 mr-2">✓</span>
                  <span className="text-gray-300">Source code and deployment guides</span>
                </li>
                <li className="flex items-center">
                  <span className="text-green-400 mr-2">✓</span>
                  <span className="text-gray-300">Training materials and best practices</span>
                </li>
                <li className="flex items-center">
                  <span className="text-green-400 mr-2">✓</span>
                  <span className="text-gray-300">Ongoing support and maintenance</span>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-white">Quality Assurance</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="text-green-400 mr-2">✓</span>
                  <span className="text-gray-300">Comprehensive testing and QA</span>
                </li>
                <li className="flex items-center">
                  <span className="text-green-400 mr-2">✓</span>
                  <span className="text-gray-300">Performance optimization</span>
                </li>
                <li className="flex items-center">
                  <span className="text-green-400 mr-2">✓</span>
                  <span className="text-gray-300">Security best practices</span>
                </li>
                <li className="flex items-center">
                  <span className="text-green-400 mr-2">✓</span>
                  <span className="text-gray-300">Scalability planning</span>
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </section>

    </div>
  )
}
