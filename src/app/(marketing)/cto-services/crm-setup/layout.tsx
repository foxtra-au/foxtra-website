import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'CRM Setup | Foxtra',
  description: 'Configure and optimize CRM systems. Set up, customize, and integrate customer relationship management platforms that help you track leads, manage sales pipelines, and improve customer relationships.',
}

export default function CRMSetupLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

