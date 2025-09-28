import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ConditionalLayout } from '@/components/layout'
import { HubspotTracking } from '@/components/ui/HubspotTracking'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Foxtra AI Website',
  description: 'Modern AI-powered website built with Next.js 14',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/icon-192.svg', sizes: '192x192', type: 'image/svg+xml' },
    ],
    apple: [
      { url: '/apple-touch-icon.svg', sizes: '180x180', type: 'image/svg+xml' },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ConditionalLayout>
          {children}
        </ConditionalLayout>
        <HubspotTracking />
      </body>
    </html>
  )
}
