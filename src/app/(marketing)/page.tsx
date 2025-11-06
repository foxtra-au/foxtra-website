import { HomeBanner } from '@/components/home'
import { Case } from '@/components/ui/CasesWithInfiniteScroll'
import { HomeFeatures, HomePageWrapper, TestimonialBlock, HomeBlogSection, PortfolioSection } from '@/components/sections'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Foxtra — AI Agents & Automation for Businesses',
  description: 'Boost your business with AI automation solutions from Foxtra. Get intelligent chat agents, voice automation, and custom AI development services. Transform customer service, sales, and marketing with cutting-edge AI technology in Australia.',
  keywords: ['AI agents', 'business automation', 'voice chatbots', 'chat automation', 'customer service AI', 'sales automation', 'marketing automation', 'Australia AI', 'AI voice agents', 'business AI solutions'],
  openGraph: {
    title: 'Foxtra — AI Agents & Automation for Businesses',
    description: 'Boost your business with AI automation solutions from Foxtra. Get intelligent chat agents, voice automation, and custom AI development services.',
    type: 'website',
    locale: 'en_AU',
    siteName: 'Foxtra',
    url: 'https://foxtra.ai',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Foxtra — AI Agents & Automation for Businesses',
    description: 'Boost your business with AI automation solutions from Foxtra. Get intelligent chat agents, voice automation, and custom AI development services.',
    site: '@foxtraai',
  },
}

export default function Home() {
  return (
    <HomePageWrapper>
      <HomeBanner />
      <HomeFeatures />
      <PortfolioSection />
      <TestimonialBlock />
      <HomeBlogSection />
      <Case />
    </HomePageWrapper>
  )
}
