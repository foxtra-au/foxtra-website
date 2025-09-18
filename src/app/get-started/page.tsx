import { Container } from '@/components/ui/Container'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'

export default function GetStarted() {
  return (
    <main className="bg-gradient-to-br from-blue-50 to-indigo-100 min-h-screen">
      <Container className="py-16">
        <div className="text-center mb-16">
          <Badge variant="success" className="mb-4">
            🚀 Ready to Get Started?
          </Badge>
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Start Your AI Journey with <span className="text-primary-600">Foxtra</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Choose the plan that's right for you and begin building amazing AI-powered applications today.
          </p>
        </div>

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
            Why Choose Foxtra AI?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-lg font-semibold mb-2">Lightning Fast</h3>
              <p className="text-gray-600">Get AI responses in milliseconds with our optimized infrastructure.</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🔒</div>
              <h3 className="text-lg font-semibold mb-2">Secure & Reliable</h3>
              <p className="text-gray-600">Enterprise-grade security with 99.9% uptime guarantee.</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-lg font-semibold mb-2">Easy Integration</h3>
              <p className="text-gray-600">Simple APIs and SDKs for quick integration into your apps.</p>
            </div>
          </div>
        </div>
      </Container>
    </main>
  )
}
