'use client';

import { ReactNode } from 'react'
import { usePathname } from 'next/navigation'
import { Header } from '@/components/headers'
import Footer from '@/components/ui/Footer'

interface ConditionalLayoutProps {
  children: ReactNode
}

export function ConditionalLayout({ children }: ConditionalLayoutProps) {
  const pathname = usePathname()
  
      // Check if the current path is an auth route
      const isAuthRoute = pathname?.startsWith('/login') || pathname?.startsWith('/signin')

      if (isAuthRoute) {
        // For auth routes, render without header or footer
        return (
          <div className="min-h-screen">
            {children}
          </div>
        )
      }
  
  // For all other routes, render with header and footer
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
