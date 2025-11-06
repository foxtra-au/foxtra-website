import { ServiceBanner } from '@/components/ui/ServiceBanner'
import { ServicePageWrapper } from '@/components/sections'
import { Metadata } from 'next'
import { Cloud, DollarSign, Settings, Zap } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Cloud & DevOps Advisory | Foxtra',
  description: 'Optimise cost, performance, and scalability on AWS/Azure. Expert guidance on cloud architecture, infrastructure automation, and DevOps practices that reduce operational overhead while improving reliability and speed.',
}

const tiles = [
  {
    icon: Cloud,
    title: 'Cloud Architecture',
    description: 'Expert guidance on AWS and Azure infrastructure',
  },
  {
    icon: DollarSign,
    title: 'Cost Optimization',
    description: 'Reduce cloud costs while improving performance',
  },
  {
    icon: Settings,
    title: 'Infrastructure Automation',
    description: 'Automate deployment and scaling processes',
  },
  {
    icon: Zap,
    title: 'DevOps Practices',
    description: 'Improve reliability and deployment speed',
  },
]

export default function CloudAdvisory() {
  return (
    <ServicePageWrapper>
      <ServiceBanner
        title="Cloud & DevOps Advisory"
        description="Optimise cost, performance, and scalability on AWS/Azure. Expert guidance on cloud architecture, infrastructure automation, and DevOps practices that reduce operational overhead while improving reliability and speed."
        badge="Foxtra • CTO Services"
        features={[]}
        bannerImage="/dev-ops-process.png"
      />
      
      {/* Tiles Section */}
      <section className="relative w-full py-12">
        <div className="relative z-10 container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {tiles.map((tile, index) => {
                const Icon = tile.icon
                return (
                  <div
                    key={index}
                    className="group relative p-6 rounded-xl border border-white/[0.2] backdrop-blur-xl hover:border-white/[0.3] transition-all duration-300 shadow-2xl"
                    style={{
                      background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0.08) 100%)',
                      boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.4), inset 0 1px 2px 0 rgba(255, 255, 255, 0.3), inset 0 -1px 1px 0 rgba(255, 255, 255, 0.1)',
                    }}
                  >
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="flex p-2.5 rounded-lg border border-white/[0.2] bg-white/[0.05]">
                          <Icon className="h-5 w-5 text-white" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-white group-hover:text-white/90 transition-colors">
                          {tile.title}
                        </h3>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>
    </ServicePageWrapper>
  )
}

