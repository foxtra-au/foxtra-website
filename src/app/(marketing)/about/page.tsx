import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { CompanyBanner } from '@/components/ui/CompanyBanner'
import { ServicePageWrapper } from '@/components/sections'
import Link from 'next/link'

export default function About() {
  return (
    <ServicePageWrapper>
      <CompanyBanner
        title="About Foxtra"
        description="We're building the future of AI-powered web applications with cutting-edge technology and modern development practices."
        badge="Foxtra • Company"
        stats={[
          { value: "2019", label: "Founded", icon: undefined },
          { value: "10K+", label: "Happy Clients", icon: undefined },
          { value: "50+", label: "Team Members", icon: undefined },
          { value: "99%", label: "Success Rate", icon: undefined },
        ]}
      />

      <main className="relative z-10">
        <Container className="py-16">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <div className="rounded-xl border border-white/10 bg-white/[0.02] p-6 md:p-8 backdrop-blur-sm hover:bg-white/[0.04] transition-colors">
                <div className="text-4xl mb-4">🚀</div>
                <h2 className="text-xl font-semibold text-white mb-2">Our Mission</h2>
                <p className="text-white/60">
                  To create innovative AI solutions that empower businesses and individuals to achieve more.
                </p>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/[0.02] p-6 md:p-8 backdrop-blur-sm hover:bg-white/[0.04] transition-colors">
                <div className="text-4xl mb-4">🎯</div>
                <h2 className="text-xl font-semibold text-white mb-2">Our Vision</h2>
                <p className="text-white/60">
                  A world where AI seamlessly integrates with everyday applications to enhance productivity and creativity.
                </p>
              </div>
            </div>

            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-8 mb-16 backdrop-blur-sm">
              <h2 className="text-2xl font-bold text-white mb-6 text-center">
                Technology Stack
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center p-4 rounded-lg bg-white/[0.02] border border-white/5">
                  <div className="text-5xl mb-3">⚛️</div>
                  <h3 className="text-lg font-semibold text-white mb-1">Next.js</h3>
                  <p className="text-sm text-white/60">React framework with App Router and Server Components</p>
                </div>
                <div className="text-center p-4 rounded-lg bg-white/[0.02] border border-white/5">
                  <div className="text-5xl mb-3">🎨</div>
                  <h3 className="text-lg font-semibold text-white mb-1">Tailwind CSS</h3>
                  <p className="text-sm text-white/60">Utility-first CSS for rapid UI development</p>
                </div>
                <div className="text-center p-4 rounded-lg bg-white/[0.02] border border-white/5">
                  <div className="text-5xl mb-3">🗄️</div>
                  <h3 className="text-lg font-semibold text-white mb-1">MongoDB</h3>
                  <p className="text-sm text-white/60">NoSQL database for flexible data storage</p>
                </div>
              </div>
              <p className="text-center mt-6">
                <Link
                  href="/resources/technology-stack"
                  className="text-sm text-rose-400 hover:text-rose-300 transition-colors"
                >
                  View full technology stack →
                </Link>
              </p>
            </div>

            <div className="text-center">
              <h2 className="text-2xl font-bold text-white mb-4">Ready to Get Started?</h2>
              <p className="text-white/60 mb-6">
                Join us on this exciting journey and experience the power of modern web development.
              </p>
              <Link href="/get-started">
                <Button variant="default" size="lg" className="bg-rose-600 hover:bg-rose-500 text-white">
                  Start Building
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </main>
    </ServicePageWrapper>
  )
}
