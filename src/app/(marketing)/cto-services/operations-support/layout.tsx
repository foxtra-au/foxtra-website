import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Operations Support | Foxtra',
  description: 'Ongoing operational support and maintenance. Ensure your technology infrastructure runs smoothly with proactive monitoring, quick incident response, and continuous optimization that keeps your systems reliable and performant.',
}

export default function OperationsSupportLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

