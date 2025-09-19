import { HeroGeometric } from '@/components/ui/ShapeLandingHero'

export function HomeBanner() {
  return (
    <div className="relative pt-20 pb-10">
      <HeroGeometric 
        badge="Foxtra AI"
        title1="Build the Future"
        title2="AI Power"
        description="Transform your ideas into reality with cutting-edge AI technology. Build, deploy, and scale intelligent applications faster than ever before."
        tagline=""
      />
    </div>
  )
}
