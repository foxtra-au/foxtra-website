import { Metadata } from 'next'
import { ConsoleLayout } from '@/components/layout/ConsoleLayout'

export const metadata: Metadata = {
  title: 'Agents | Foxtra Console',
  description: 'Manage your AI agents in the Foxtra console.',
}

export default function AgentsPage() {
  return (
    <ConsoleLayout pageTitle="Agents">
      <div></div>
    </ConsoleLayout>
  )
}
