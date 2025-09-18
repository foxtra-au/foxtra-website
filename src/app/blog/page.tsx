import { ServiceBanner } from '@/components/ui/ServiceBanner'
import { ServicePageWrapper } from '@/components/sections'
import { Container } from '@/components/ui/Container'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog | Foxtra',
  description: 'Latest insights, industry trends, and AI innovations.',
}

export default function Blog() {
  return (
    <ServicePageWrapper>
      <ServiceBanner
        title="Blog"
        description="Latest insights, industry trends, and AI innovations."
        badge="Foxtra • Resources"
        features={[
          "Industry insights",
          "AI innovations",
          "Best practices",
          "Case studies"
        ]}
      />
      <Container className="py-16">
        <div className="prose max-w-none text-white">
          <h2 className="text-white">Latest Posts</h2>
          <p className="text-white/70">Stay updated with the latest developments in AI technology and business growth strategies.</p>
        </div>
      </Container>
    </ServicePageWrapper>
  )
}
