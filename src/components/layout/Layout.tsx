import { ReactNode } from 'react'
import { Header } from '@/components/headers'
import Footer from '@/components/ui/Footer'

interface LayoutProps {
  children: ReactNode
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="relative flex-1">
        {children}
      </main>
      <Footer variant="newsletter" />
    </div>
  )
}
