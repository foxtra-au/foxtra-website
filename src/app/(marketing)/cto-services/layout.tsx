import { buildPageMetadata } from '@/lib/metadata'

export const metadata = buildPageMetadata({
  title: 'CTO Services',
  description: 'On-demand technology leadership, strategy, and advisory services for startups and SMEs.',
  path: '/cto-services',
  keywords: ['CTO services', 'virtual CTO', 'tech strategy', 'technology leadership', 'startup advisory'],
})

export default function CTOServicesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

