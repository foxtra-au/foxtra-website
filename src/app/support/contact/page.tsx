import { ServiceBanner } from '@/components/ui/ServiceBanner'
import { ServicePageWrapper } from '@/components/sections'
import { Container } from '@/components/ui/Container'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact | Foxtra',
  description: 'Get in touch with our team for support, sales, or partnership inquiries.',
}

export default function Contact() {
  return (
    <ServicePageWrapper>
      <ServiceBanner
        title="Contact"
        description="Get in touch with our team for support, sales, or partnership inquiries."
        badge="Foxtra • Support"
        features={[
          "Technical support",
          "Sales inquiries",
          "Partnership opportunities",
          "General questions"
        ]}
      />
      <Container className="py-16">
        <div className="prose max-w-none text-white">
          <h2 className="text-white">Get in Touch</h2>
          <p className="text-white/70">We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>
          
          <h2 className="text-white">Office Hours</h2>
          <p className="text-white/70">Monday - Friday: 9:00 AM - 6:00 PM (PST)</p>
        </div>
      </Container>
    </ServicePageWrapper>
  )
}
