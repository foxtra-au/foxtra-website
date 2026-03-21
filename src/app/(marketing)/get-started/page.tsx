import { Container } from '@/components/ui/Container'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'
import { DesignShowcase } from '@/components/ui/DesignShowcase'
import { buildPageMetadata } from '@/lib/metadata'

export const metadata = buildPageMetadata({
  title: 'Get Started',
  description: 'Start your project with Foxtra. Explore our services and get a quote for your next digital initiative.',
  path: '/get-started',
  keywords: ['get started', 'project quote', 'start project', 'Foxtra services'],
})

export default function GetStarted() {
  return (
    <main className="min-h-screen">
      <DesignShowcase />
    </main>
  )
}
