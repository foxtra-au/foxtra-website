import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ConditionalLayout } from '@/components/layout'
import { HubspotTracking } from '@/components/ui/HubspotTracking'
import { GoogleAnalyticsScript } from '@/components/ui/GoogleAnalyticsScript'
import { ClickRankVerificationScript } from '@/components/ui/ClickRankVerificationScript'
import { PersistentVoiceAgent } from '@/components/ui/PersistentVoiceAgent'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Foxtra AI — AI Agents & Automation for Businesses',
  description: 'Foxtra AI helps businesses automate voice and chat using smart AI agents for customer service, sales, and marketing. Transform your business with AI automation in Australia.',
  keywords: ['AI agents', 'business automation', 'voice chatbots', 'chat automation', 'customer service AI', 'sales automation', 'marketing automation', 'Australia AI', 'AI voice agents', 'business AI solutions'],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: 'Foxtra AI — AI Agents & Automation for Businesses',
    description: 'Foxtra AI helps businesses automate voice and chat using smart AI agents for customer service, sales, and marketing.',
    type: 'website',
    locale: 'en_AU',
    siteName: 'Foxtra AI',
    url: 'https://foxtra.ai',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Foxtra AI — AI Agents & Automation for Businesses',
    description: 'Foxtra AI helps businesses automate voice and chat using smart AI agents for customer service, sales, and marketing.',
    site: '@foxtraai',
  },
  other: {
    'youtube:channel': 'https://www.youtube.com/@foxtra-ai',
    'instagram:site': 'https://www.instagram.com/foxtra.ai/',
    'facebook:app_id': 'foxtraai',
    'linkedin:company': 'https://www.linkedin.com/company/foxtra-ai',
  },
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
      <head>
        <meta name="robots" content="index, follow" />
        <GoogleAnalyticsScript />
        <ClickRankVerificationScript />
      </head>
      <body className={inter.className}>
        <ConditionalLayout>
          {children}
        </ConditionalLayout>
        <PersistentVoiceAgent />
        <HubspotTracking />
      </body>
    </html>
  )
}