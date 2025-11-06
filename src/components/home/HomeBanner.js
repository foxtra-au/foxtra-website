import { HeroGeometric } from '@/components/ui/ShapeLandingHero'

export function HomeBanner() {
  return (
    <div className="relative pt-28 pb-10">
      <HeroGeometric 
        badge="Foxtra"
        title1=""
        title2="Technology Partnership."
        description="At Foxtra, we partner with businesses to provide full-service technology solutions. From strategy and architecture to development and support, we're your complete technology partner."
      />
    </div>
  )
}
