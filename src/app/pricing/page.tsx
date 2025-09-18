import { Container } from '@/components/ui/Container'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'
import { PricingBanner } from '@/components/ui/PricingBanner'

export default function Pricing() {
  return (
    <>
      <PricingBanner
        title="Choose Your AI Plan"
        description="Start free and scale as you grow. No hidden fees, no surprises. Cancel anytime."
        badge="Simple, Transparent Pricing"
      />

      {/* Pricing Content */}
      <main className="bg-white">
        <Container className="py-16">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card
              title="Starter"
              description="Perfect for individuals and small projects"
              className="border-2 border-gray-200"
            >
              <div className="text-center mb-6">
                <div className="text-3xl font-bold text-gray-900 mb-2">Free</div>
                <div className="text-sm text-gray-500">No credit card required</div>
              </div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  <span className="text-sm">1,000 API calls/month</span>
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  <span className="text-sm">Basic AI models</span>
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  <span className="text-sm">Community support</span>
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  <span className="text-sm">Documentation access</span>
                </li>
              </ul>
              <Button variant="outline" className="w-full">
                Start Free Trial
              </Button>
            </Card>

            <Card
              title="Professional"
              description="For growing businesses and teams"
              className="border-2 border-primary-500 relative"
            >
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <Badge variant="success">Most Popular</Badge>
              </div>
              <div className="text-center mb-6">
                <div className="text-3xl font-bold text-gray-900 mb-2">$29</div>
                <div className="text-sm text-gray-500">per month</div>
              </div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  <span className="text-sm">50,000 API calls/month</span>
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  <span className="text-sm">Advanced AI models</span>
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  <span className="text-sm">Priority support</span>
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  <span className="text-sm">Custom integrations</span>
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  <span className="text-sm">Analytics dashboard</span>
                </li>
              </ul>
              <Button variant="primary" className="w-full">
                Start Professional Plan
              </Button>
            </Card>

            <Card
              title="Enterprise"
              description="For large organizations with custom needs"
              className="border-2 border-gray-200"
            >
              <div className="text-center mb-6">
                <div className="text-3xl font-bold text-gray-900 mb-2">Custom</div>
                <div className="text-sm text-gray-500">Contact sales</div>
              </div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  <span className="text-sm">Unlimited API calls</span>
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  <span className="text-sm">Custom AI models</span>
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  <span className="text-sm">Dedicated support</span>
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  <span className="text-sm">On-premise deployment</span>
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  <span className="text-sm">SLA guarantee</span>
                </li>
              </ul>
              <Button variant="outline" className="w-full">
                Contact Sales
              </Button>
            </Card>
          </div>

          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Frequently Asked Questions
            </h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="text-left">
                <h3 className="text-lg font-semibold mb-2">Can I change plans anytime?</h3>
                <p className="text-gray-600">Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately.</p>
              </div>
              <div className="text-left">
                <h3 className="text-lg font-semibold mb-2">What payment methods do you accept?</h3>
                <p className="text-gray-600">We accept all major credit cards, PayPal, and bank transfers for enterprise customers.</p>
              </div>
              <div className="text-left">
                <h3 className="text-lg font-semibold mb-2">Is there a free trial?</h3>
                <p className="text-gray-600">Yes, our Starter plan is completely free with no time limit. Perfect for testing our platform.</p>
              </div>
              <div className="text-left">
                <h3 className="text-lg font-semibold mb-2">Do you offer refunds?</h3>
                <p className="text-gray-600">We offer a 30-day money-back guarantee for all paid plans. No questions asked.</p>
              </div>
            </div>
          </div>
        </Container>
      </main>
    </>
  )
}
