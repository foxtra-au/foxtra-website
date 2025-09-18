import { ReactNode } from 'react'
import { Header } from '@/components/headers'

interface LayoutProps {
  children: ReactNode
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="relative">
        {children}
      </main>
    </div>
  )
}
