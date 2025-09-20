import { Container } from '@/components/ui/Container'
import { CompanyBanner } from '@/components/ui/CompanyBanner'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Our Story | Foxtra',
  description: 'Learn about Foxtra\'s journey and mission to democratize AI technology.',
}

export default function OurStory() {
  return (
    <>
      <CompanyBanner
        title="Our Story"
        description="Learn about Foxtra's journey and mission to democratize AI technology."
        badge="Foxtra • Company"
        stats={[
          { value: "2025", label: "Founded" },
          { value: "20+", label: "Projects Delivered" },
          { value: "12", label: "Happy Clients" },
          { value: "99%", label: "Client Satisfaction" },
        ]}
      />

      {/* Vision and Mission */}
      <main className="relative w-full overflow-hidden bg-[#030303]">
        {/* Same background as CompanyBanner */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/[0.05] via-transparent to-rose-500/[0.05] blur-3xl" />
        
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-rose-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-yellow-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>

        <div className="relative z-10 py-4">
          <Container>
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Vision Box */}
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8">
                  <div className="w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg flex items-center justify-center mb-6">
                    <svg className="h-6 w-6 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold text-white mb-4 font-sans">Our Vision</h2>
                  <p className="text-white/70 leading-relaxed font-sans">
                    To make AI technology accessible to every business, regardless of size or technical expertise.
                  </p>
                </div>

                {/* Mission Box */}
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8">
                  <div className="w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg flex items-center justify-center mb-6">
                    <svg className="h-6 w-6 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold text-white mb-4 font-sans">Our Mission</h2>
                  <p className="text-white/70 leading-relaxed font-sans">
                    To deliver cutting-edge AI solutions that transform how businesses operate and grow.
                  </p>
                </div>
              </div>
            </div>
          </Container>
        </div>
      </main>
    </>
  )
}
