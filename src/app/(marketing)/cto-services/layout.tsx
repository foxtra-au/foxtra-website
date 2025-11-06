import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'CTO Services | Foxtra',
  description: 'On-demand technology leadership, strategy, and advisory services for startups and SMEs.',
}

export default function CTOServicesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

