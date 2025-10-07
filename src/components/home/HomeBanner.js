import { HeroGeometric } from '@/components/ui/ShapeLandingHero'

export function HomeBanner() {
  return (
    <div className="relative pt-20 pb-10">
      <HeroGeometric 
        badge="Foxtra AI"
        title1="AI Agents &"
        title2="Business Automation"
        description="Transform your business with intelligent AI agents for voice chatbots, customer service automation, and sales automation. Leading AI solutions for Australian businesses."
        tagline="Smart AI automation that works 24/7"
      />
    </div>
  )
}
