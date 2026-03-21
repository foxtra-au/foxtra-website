import { buildPageMetadata } from '@/lib/metadata'

export const metadata = buildPageMetadata({
  title: 'CRM Setup',
  description: 'Configure and optimize CRM systems. Set up, customize, and integrate customer relationship management platforms that help you track leads, manage sales pipelines, and improve customer relationships.',
  path: '/cto-services/crm-setup',
  keywords: ['CRM setup', 'Salesforce', 'HubSpot', 'CRM integration', 'sales pipeline'],
})

export default function CRMSetupLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

