import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ConditionalLayout } from '@/components/layout'
import { HubspotTracking } from '@/components/ui/HubspotTracking'
import { GoogleAnalyticsScript } from '@/components/ui/GoogleAnalyticsScript'
import { ClickRankVerificationScript } from '@/components/ui/ClickRankVerificationScript'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Foxtra — Technology Leadership & Development Services',
  description: 'On-demand technology leadership, strategy, and development services for startups and SMEs. Expert guidance to align business goals with scalable architecture, custom development, and digital transformation.',
  keywords: ['CTO services', 'technology leadership', 'custom development', 'tech strategy', 'system architecture', 'cloud advisory', 'devops', 'mobile app development', 'web development', 'Australia technology services'],
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
    title: 'Foxtra — Technology Leadership & Development Services',
    description: 'On-demand technology leadership, strategy, and development services for startups and SMEs. Expert guidance to align business goals with scalable architecture.',
    type: 'website',
    locale: 'en_AU',
    siteName: 'Foxtra',
    url: 'https://foxtra.ai',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Foxtra — Technology Leadership & Development Services',
    description: 'On-demand technology leadership, strategy, and development services for startups and SMEs. Expert guidance to align business goals with scalable architecture.',
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
      { url: '/favicon/favicon.ico', sizes: 'any' },
      { url: '/favicon/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/favicon/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [
      { url: '/favicon/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/favicon/site.webmanifest',
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
        <HubspotTracking />
      </body>
    </html>
  )
}