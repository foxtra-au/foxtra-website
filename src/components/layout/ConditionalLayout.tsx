'use client';

import { ReactNode } from 'react'
import { usePathname } from 'next/navigation'
import { Header } from '@/components/headers'

interface ConditionalLayoutProps {
  children: ReactNode
}

export function ConditionalLayout({ children }: ConditionalLayoutProps) {
  const pathname = usePathname()
  
  // Check if the current path is an auth route or console route
  const isAuthRoute = pathname?.startsWith('/login') || pathname?.startsWith('/signin')
  const isConsoleRoute = pathname?.startsWith('/dashboard') || pathname?.startsWith('/agents') || pathname?.startsWith('/phone-numbers') || pathname?.startsWith('/calendar') || pathname?.startsWith('/history') || pathname?.startsWith('/billing') || pathname?.startsWith('/settings')
  
  if (isAuthRoute || isConsoleRoute) {
    // For auth routes and console routes, render without header
    return (
      <div className="min-h-screen">
        {children}
      </div>
    )
  }
  
  // For all other routes, render with header
  return (
    <div className="min-h-screen">
      <Header />
      <main className="relative">
        {children}
      </main>
    </div>
  )
}
