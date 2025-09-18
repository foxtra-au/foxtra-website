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
          { value: "2019", label: "Founded" },
          { value: "10K+", label: "Projects Delivered" },
          { value: "50+", label: "Countries Served" },
          { value: "99%", label: "Client Satisfaction" },
        ]}
      />

      {/* Content */}
      <main className="bg-white">
        <Container className="py-16">
          <div className="prose max-w-none">
            <h2>Our Mission</h2>
            <p>At Foxtra, we believe AI should be accessible to every business, regardless of size or technical expertise.</p>
            
            <h2>Our Journey</h2>
            <p>Founded with the vision of democratizing AI technology, we've helped thousands of businesses transform their operations.</p>
          </div>
        </Container>
      </main>
    </>
  )
}
