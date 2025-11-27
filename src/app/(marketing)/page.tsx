import { HomeBanner } from '@/components/home'
import { Case } from '@/components/ui/CasesWithInfiniteScroll'
import { HomeFeatures, HomePageWrapper, TestimonialBlock, HomeBlogSection, PortfolioSection } from '@/components/sections'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Foxtra — Technology Leadership & Development Services',
  description: 'On-demand technology leadership, strategy, and development services for startups and SMEs. Expert guidance to align business goals with scalable architecture, custom development, and digital transformation.',
  keywords: ['CTO services', 'technology leadership', 'custom development', 'tech strategy', 'system architecture', 'cloud advisory', 'devops', 'mobile app development', 'web development', 'Australia technology services'],
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
}

export default function Home() {
  return (
    <HomePageWrapper>
      <HomeBanner />
      <HomeFeatures />
      <PortfolioSection />
      <div className="hidden">
        <TestimonialBlock />
      </div>
      <HomeBlogSection />
      <Case />
    </HomePageWrapper>
  )
}
