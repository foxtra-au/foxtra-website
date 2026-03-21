import { ServiceBanner } from '@/components/ui/ServiceBanner'
import { ServicePageWrapper, SMSMarketingFeatures } from '@/components/sections'
import { SMSTemplateDemo } from '@/components/ui/SMSTemplateDemo'
import { buildPageMetadata } from '@/lib/metadata'

export const metadata = buildPageMetadata({
  title: 'SMS Marketing',
  description: 'Direct SMS campaigns and notifications to reach your customers instantly.',
  path: '/services/sms-marketing',
  keywords: ['SMS marketing', 'text messaging', 'SMS campaigns', 'SMS automation'],
})

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
