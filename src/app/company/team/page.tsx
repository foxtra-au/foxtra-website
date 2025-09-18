import { Container } from '@/components/ui/Container'
import { CompanyBanner } from '@/components/ui/CompanyBanner'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Team | Foxtra',
  description: 'Meet the talented team behind Foxtra\'s AI innovations.',
}

export default function Team() {
  return (
    <>
      <CompanyBanner
        title="Our Team"
        description="Meet the talented team behind Foxtra's AI innovations."
        badge="Foxtra • Company"
        stats={[
          { value: "50+", label: "Team Members" },
          { value: "15+", label: "AI Specialists" },
          { value: "20+", label: "Countries" },
          { value: "24/7", label: "Support" },
        ]}
      />

      {/* Content */}
      <main className="bg-white">
        <Container className="py-16">
          <div className="prose max-w-none">
            <h2>Leadership Team</h2>
            <p>Our experienced leadership team brings decades of expertise in AI, technology, and business growth.</p>
            
            <h2>Engineering Team</h2>
            <p>World-class engineers and AI specialists dedicated to building cutting-edge solutions.</p>
          </div>
        </Container>
      </main>
    </>
  )
}
