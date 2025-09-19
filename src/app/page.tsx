import { HomeBanner } from '@/components/home'
import { Case } from '@/components/ui/CasesWithInfiniteScroll'
import { HomeFeatures, HomePageWrapper, TestimonialBlock } from '@/components/sections'

export default function Home() {
  return (
    <HomePageWrapper>
      <HomeBanner />
      <HomeFeatures />
      <TestimonialBlock />
      <Case />
    </HomePageWrapper>
  )
}
