import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Process Setup | Foxtra',
  description: 'Streamline workflows and operations. Design, document, and optimize business processes that improve efficiency, reduce errors, and enable scalable growth for your organization.',
}

export default function ProcessSetupLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

