import { ServiceBanner } from '@/components/ui/ServiceBanner'
import { ServicePageWrapper, EmailMarketingFeatures } from '@/components/sections'
import { EmailTemplateDemo } from '@/components/ui/EmailTemplateDemo'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Email Marketing | Foxtra',
  description: 'Targeted email campaigns and automation to engage your audience.',
}

export default function EmailMarketing() {
  const emailMarketingFeatures = [
    "Email Campaign Design",
    "Automation Workflows",
    "Audience Segmentation",
    "Performance Analytics"
  ];

  return (
    <ServicePageWrapper>
      <ServiceBanner
        title="Email Marketing"
        description="Targeted email campaigns and automation to engage your audience."
        badge="Foxtra • Marketing Services"
        features={[]}
        rightComponent={<EmailTemplateDemo />}
      />
      <EmailMarketingFeatures 
        features={emailMarketingFeatures}
        className="mt-16"
      />
    </ServicePageWrapper>
  )
}
