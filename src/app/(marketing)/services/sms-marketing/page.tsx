import { ServiceBanner } from '@/components/ui/ServiceBanner'
import { ServicePageWrapper, SMSMarketingFeatures } from '@/components/sections'
import { SMSTemplateDemo } from '@/components/ui/SMSTemplateDemo'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'SMS Marketing | Foxtra',
  description: 'Direct SMS campaigns and notifications to reach your customers instantly.',
}

export default function SmsMarketing() {
  const smsMarketingFeatures = [
    "SMS Campaign Creation",
    "Automation Triggers",
    "Audience Targeting",
    "Delivery Analytics"
  ];

  return (
    <ServicePageWrapper>
      <ServiceBanner
        title="SMS Marketing"
        description="Direct SMS campaigns and notifications to reach your customers instantly."
        badge="Foxtra • Marketing Services"
        features={[]}
        rightComponent={<SMSTemplateDemo />}
      />
      <SMSMarketingFeatures 
        features={smsMarketingFeatures}
        className="mt-16"
      />
    </ServicePageWrapper>
  )
}
