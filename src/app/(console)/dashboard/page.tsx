import { Metadata } from 'next'
import { ConsoleLayout } from '@/components/layout/ConsoleLayout'

export const metadata: Metadata = {
  title: 'Dashboard | Foxtra Console',
  description: 'Manage your projects and track progress in the Foxtra console.',
}

export default function ConsoleDashboard() {
  return (
    <ConsoleLayout pageTitle="Dashboard">
      <div></div>
    </ConsoleLayout>
  )
}