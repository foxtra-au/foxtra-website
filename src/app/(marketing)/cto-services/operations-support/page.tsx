'use client'

import { ServiceBanner } from '@/components/ui/ServiceBanner'
import { ServicePageWrapper } from '@/components/sections'
import { Headphones, Shield, Clock, Zap } from 'lucide-react'

const tiles = [
  {
    icon: Headphones,
    title: '24/7 Support',
    description: 'Round-the-clock operational support',
  },
  {
    icon: Shield,
    title: 'System Monitoring',
    description: 'Proactive monitoring and maintenance',
  },
  {
    icon: Clock,
    title: 'Incident Response',
    description: 'Quick response to technical issues',
  },
  {
    icon: Zap,
    title: 'Performance Optimization',
    description: 'Continuous improvement and optimization',
  },
]

export default function OperationsSupport() {
  return (
    <ServicePageWrapper>
      <ServiceBanner
        title="Operations Support"
        description="Ongoing operational support and maintenance. Ensure your technology infrastructure runs smoothly with proactive monitoring, quick incident response, and continuous optimization that keeps your systems reliable and performant."
        badge="Foxtra • CTO Services"
        features={[]}
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

