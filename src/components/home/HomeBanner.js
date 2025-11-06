import { HeroGeometric } from '@/components/ui/ShapeLandingHero'

export function HomeBanner() {
  return (
    <div className="relative pt-28 pb-10">
      <HeroGeometric 
        badge="Foxtra"
        title1=""
        title2="Technology Leadership."
        description="On-demand technology leadership, strategy, and advisory services for startups and SMEs. Expert guidance to align business goals with scalable architecture."
        tagline="Strategic technology leadership that scales with your business"
      />
    </div>
  )
}
