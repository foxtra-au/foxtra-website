import { buildPageMetadata } from '@/lib/metadata'

export const metadata = buildPageMetadata({
  title: 'Process Setup',
  description: 'Streamline workflows and operations. Design, document, and optimize business processes that improve efficiency, reduce errors, and enable scalable growth for your organization.',
  path: '/cto-services/process-setup',
  keywords: ['process setup', 'workflow optimization', 'business processes', 'operations efficiency'],
})

export default function ProcessSetupLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

