import { HeroGeometric } from '@/components/ui/ShapeLandingHero'

export function HomeBanner() {
  return (
    <div className="relative pt-28 pb-10">
      <HeroGeometric 
        badge="Foxtra"
        title1=""
        title2="Technology Consulting & Solutions"
        description="Foxtra works with businesses to modernise systems and deliver reliable digital platforms. We provide strategic advisory, engineering and managed services to support long-term operational success."
      />
    </div>
  )
}
