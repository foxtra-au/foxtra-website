import { Container } from '@/components/ui/Container'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { CompanyBanner } from '@/components/ui/CompanyBanner'
import Link from 'next/link'

export default function About() {
  return (
    <>
      <CompanyBanner
        title="About Foxtra AI"
        description="We're building the future of AI-powered web applications with cutting-edge technology and modern development practices."
        badge="Foxtra • Company"
        stats={[
          { value: "2019", label: "Founded", icon: undefined },
          { value: "10K+", label: "Happy Clients", icon: undefined },
          { value: "50+", label: "Team Members", icon: undefined },
          { value: "99%", label: "Success Rate", icon: undefined },
        ]}
      />

      {/* About Content */}
      <main className="bg-white">
        <Container className="py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              About <span className="text-primary-600">Foxtra AI</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We're building the future of AI-powered web applications with cutting-edge technology
              and modern development practices.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <Card>
              <CardHeader>
                <div className="text-4xl mb-2">🚀</div>
                <CardTitle>Our Mission</CardTitle>
                <CardDescription>
                  To create innovative AI solutions that empower businesses and individuals to achieve more.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <div className="text-4xl mb-2">🎯</div>
                <CardTitle>Our Vision</CardTitle>
                <CardDescription>
                  A world where AI seamlessly integrates with everyday applications to enhance productivity and creativity.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
              Technology Stack
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-6xl mb-4">⚛️</div>
                <h3 className="text-xl font-semibold mb-2">Next.js 14</h3>
                <p className="text-gray-600">React framework with App Router and Server Components</p>
              </div>
              <div className="text-center">
                <div className="text-6xl mb-4">🎨</div>
                <h3 className="text-xl font-semibold mb-2">Tailwind CSS</h3>
                <p className="text-gray-600">Utility-first CSS framework for rapid UI development</p>
              </div>
              <div className="text-center">
                <div className="text-6xl mb-4">🗄️</div>
                <h3 className="text-xl font-semibold mb-2">MongoDB</h3>
                <p className="text-gray-600">NoSQL database for flexible data storage</p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-gray-600 mb-8">
              Join us on this exciting journey and experience the power of modern web development.
            </p>
            <Link href="/get-started">
              <Button variant="default" size="lg">
                Start Building
              </Button>
            </Link>
          </div>
        </div>
        </Container>
      </main>
    </>
  )
}
