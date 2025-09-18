import { Container } from '@/components/ui/Container'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Careers | Foxtra',
  description: 'Join our team and help shape the future of AI technology.',
}

export default function Careers() {
  return (
    <>
      {/* Hero Banner - 100vh */}
      <section className="min-h-screen bg-gradient-to-br from-rose-50 via-white to-pink-50 flex items-center justify-center">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Careers
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-4">
              Join our team and help shape the future of AI technology.
            </p>
            <p className="text-lg text-gray-500 mb-8">
              AI-powered development, agents, and marketing—built to grow your business.
            </p>
          </div>
        </Container>
      </section>

      {/* Content */}
      <main className="bg-white">
        <Container className="py-16">
          <div className="prose max-w-none">
            <h2>Open Positions</h2>
            <p>We're always looking for talented individuals to join our growing team.</p>
            
            <h2>Why Work at Foxtra</h2>
            <p>Join a team that's passionate about innovation, growth, and making a real impact in the AI industry.</p>
          </div>
        </Container>
      </main>
    </>
  )
}
