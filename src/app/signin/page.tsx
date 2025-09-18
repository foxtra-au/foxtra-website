import { Container } from '@/components/ui/Container'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sign In | Foxtra',
  description: 'Sign in to your Foxtra account to access your AI-powered tools and dashboard.',
}

export default function SignIn() {
  return (
    <>
      {/* Hero Banner - 100vh */}
      <section className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-slate-50 flex items-center justify-center">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Sign In
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-4">
              Sign in to your Foxtra account to access your AI-powered tools and dashboard.
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
            <h2>Welcome Back</h2>
            <p>Sign in to continue managing your AI projects and accessing your dashboard.</p>
          </div>
        </Container>
      </main>
    </>
  )
}
