'use client'

import { ServiceBanner } from '@/components/ui/ServiceBanner'
import { ServicePageWrapper } from '@/components/sections'
import { FileCheck, Settings, Users, BarChart3 } from 'lucide-react'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel'

const tiles = [
  {
    icon: FileCheck,
    title: 'CRM Configuration',
    description: 'Set up and configure CRM systems',
  },
  {
    icon: Settings,
    title: 'Customization',
    description: 'Tailor CRM to your business needs',
  },
  {
    icon: Users,
    title: 'User Training',
    description: 'Train your team on CRM usage',
  },
  {
    icon: BarChart3,
    title: 'Data Migration',
    description: 'Migrate existing data to CRM',
  },
]

// Popular CRM platforms - only include those with images in /public/crms/
const crmPlatforms = [
  { name: 'Salesforce', src: '/crms/salesforce.png', alt: 'Salesforce Logo' },
  { name: 'HubSpot', src: '/crms/hubspot.png', alt: 'HubSpot Logo' },
  { name: 'Zoho CRM', src: '/crms/zoho.png', alt: 'Zoho CRM Logo' },
  { name: 'Microsoft Dynamics', src: '/crms/dynamics.png', alt: 'Microsoft Dynamics Logo' },
  { name: 'Monday.com', src: '/crms/monday.png', alt: 'Monday.com Logo' },
  { name: 'Fresh Sales', src: '/crms/fresh-sales.png', alt: 'Fresh Sales Logo' },
  { name: 'Keap', src: '/crms/keap.png', alt: 'Keap Logo' },
  { name: 'SugarCRM', src: '/crms/Sugar.png', alt: 'SugarCRM Logo' },
  { name: 'Agile CRM', src: '/crms/agile-crm.png', alt: 'Agile CRM Logo' },
]

// CRM Logo Component with error handling
function CRMLogo({ crm }: { crm: { name: string; src: string; alt: string } }) {
  const [imageError, setImageError] = useState(false)

  return (
    <div className="relative w-24 h-24 md:w-28 md:h-28 mb-2 mx-auto">
      {imageError ? (
        <div className="w-full h-full flex items-center justify-center bg-white/5 rounded-lg">
          <span className="text-white/80 text-xs font-medium text-center px-1">{crm.name}</span>
        </div>
      ) : (
        <Image
          src={crm.src}
          alt={crm.alt}
          fill
          className="object-contain"
          sizes="(max-width: 768px) 96px, 112px"
          onError={() => setImageError(true)}
        />
      )}
    </div>
  )
}

export default function CRMSetup() {
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    if (!api) {
      return
    }

    const timer = setTimeout(() => {
      if (api.selectedScrollSnap() + 1 === api.scrollSnapList().length) {
        setCurrent(0)
        api.scrollTo(0)
      } else {
        api.scrollNext()
        setCurrent(current + 1)
      }
    }, 2000)

    return () => clearTimeout(timer)
  }, [api, current])

  return (
    <ServicePageWrapper>
      <ServiceBanner
        title="CRM Setup"
        description="Configure and optimize CRM systems. Set up, customize, and integrate customer relationship management platforms that help you track leads, manage sales pipelines, and improve customer relationships."
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

      {/* CRMs We Work With Section */}
      <section className="relative w-full py-24">
        <div className="relative z-10 container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col gap-10">
              <div className="text-left">
                <h2 className="text-3xl font-bold text-white mb-4">
                  The CRMs we work with
                </h2>
                <p className="text-white/60 text-lg">
                  We have experience setting up and customizing all major CRM platforms to fit your business needs
                </p>
              </div>
              <Carousel setApi={setApi} className="w-full">
                <CarouselContent>
                  {crmPlatforms.map((crm, index) => (
                    <CarouselItem className="basis-1/4 lg:basis-1/6" key={index}>
                      <div className="flex flex-col rounded-md aspect-square border border-white/20 overflow-hidden hover:border-white/30 transition-all duration-300 relative">
                        <div className="w-full h-full bg-white flex items-center justify-center p-6">
                          <CRMLogo crm={crm} />
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 flex items-center justify-center p-3 bg-black/60 backdrop-blur-sm">
                          <span className="text-sm text-white font-medium">{crm.name}</span>
                        </div>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>
            </div>
          </div>
        </div>
      </section>
    </ServicePageWrapper>
  )
}

