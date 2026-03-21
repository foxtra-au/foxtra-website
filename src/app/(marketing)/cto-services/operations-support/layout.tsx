import { buildPageMetadata } from '@/lib/metadata'

export const metadata = buildPageMetadata({
  title: 'Operations Support',
  description: 'Ongoing operational support and maintenance. Ensure your technology infrastructure runs smoothly with proactive monitoring, quick incident response, and continuous optimization that keeps your systems reliable and performant.',
  path: '/cto-services/operations-support',
  keywords: ['operations support', 'IT support', 'infrastructure maintenance', 'incident response'],
})

export default function OperationsSupportLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

