'use client'

import { ServiceBanner } from '@/components/ui/ServiceBanner'
import { ServicePageWrapper } from '@/components/sections'
import Link from 'next/link'
import { Briefcase, Target, Layers, Users, Cloud, Brain, ArrowRight, TrendingUp, Shield, Zap } from 'lucide-react'
import { motion } from 'framer-motion'

const services = [
  {
    title: 'Virtual CTO',
    description: 'On-demand technology leadership for startups and SMEs',
    href: '/cto-services/virtual-cto',
    icon: Briefcase,
    color: 'from-indigo-500/20 to-blue-500/20'
  },
  {
    title: 'Tech Strategy & Roadmap',
    description: 'Align business goals with scalable architecture',
    href: '/cto-services/tech-strategy',
    icon: Target,
    color: 'from-rose-500/20 to-pink-500/20'
  },
  {
    title: 'System Architecture Review',
    description: 'Audit your current stack, design future-ready solutions',
    href: '/cto-services/system-architecture-review',
    icon: Layers,
    color: 'from-violet-500/20 to-purple-500/20'
  },
  {
    title: 'Team Mentoring & Leadership',
    description: 'Guidance for in-house dev and product teams',
    href: '/cto-services/team-mentoring',
    icon: Users,
    color: 'from-amber-500/20 to-orange-500/20'
  },
  {
    title: 'Cloud & DevOps Advisory',
    description: 'Optimise cost, performance, and scalability on AWS/Azure',
    href: '/cto-services/cloud-advisory',
    icon: Cloud,
    color: 'from-cyan-500/20 to-teal-500/20'
  },
  {
    title: 'AI & Automation Strategy',
    description: 'How to integrate AI agents, automation, and analytics',
    href: '/cto-services/ai-automation-strategy',
    icon: Brain,
    color: 'from-emerald-500/20 to-green-500/20'
  },
]

const valueBoxes = [
  {
    icon: TrendingUp,
    title: 'Strategic Growth',
    description: 'Scale your technology with expert guidance',
    color: 'from-indigo-500/20 to-blue-500/20'
  },
  {
    icon: Shield,
    title: 'Risk Mitigation',
    description: 'Avoid costly mistakes with proven strategies',
    color: 'from-rose-500/20 to-pink-500/20'
  },
  {
    icon: Zap,
    title: 'Faster Execution',
    description: 'Accelerate development with clear roadmaps',
    color: 'from-amber-500/20 to-orange-500/20'
  },
  {
    icon: Users,
    title: 'Team Excellence',
    description: 'Build high-performing technical teams',
    color: 'from-emerald-500/20 to-green-500/20'
  }
]

function CTOValueBoxes() {
  const fadeUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: 0.3 + i * 0.1,
        ease: [0.25, 0.4, 0.25, 1],
      },
    }),
  }

  return (
    <div className="grid grid-cols-2 gap-4">
      {valueBoxes.map((value, index) => {
        const Icon = value.icon
        return (
          <motion.div
            key={index}
            custom={index}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
            className="group relative p-4 rounded-xl border border-white/[0.15] bg-white/[0.08] backdrop-blur-md hover:bg-white/[0.12] hover:border-white/[0.25] transition-all duration-300 shadow-lg shadow-black/20"
            style={{
              background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)',
              boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.37), inset 0 1px 1px 0 rgba(255, 255, 255, 0.2)',
            }}
          >
            <div className="inline-flex p-2.5 rounded-lg bg-yellow-500 mb-3 shadow-lg">
              <Icon className="h-5 w-5 text-black" />
            </div>
            <h3 className="text-base font-semibold mb-1.5 text-white group-hover:text-white/90 transition-colors">
              {value.title}
            </h3>
            <p className="text-white/60 text-xs leading-relaxed">
              {value.description}
            </p>
          </motion.div>
        )
      })}
    </div>
  )
}

export default function CTOServices() {
  const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        delay: 0.5 + i * 0.1,
        ease: [0.25, 0.4, 0.25, 1],
      },
    }),
  }

  return (
    <ServicePageWrapper>
      <ServiceBanner
        title="CTO Services"
        description="On-demand technology leadership, strategy, and advisory services for startups and SMEs."
        badge="Foxtra • CTO Services"
        features={[]}
        rightComponent={<CTOValueBoxes />}
      />
      
      {/* Services Grid */}
      <section className="relative w-full py-20">
        <div className="relative z-10 container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <motion.div
              custom={0}
              variants={fadeUpVariants}
              initial="hidden"
              animate="visible"
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
                <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/80">
                  Our CTO Services
                </span>
              </h2>
              <p className="text-lg text-white/60 max-w-2xl mx-auto">
                Comprehensive technology leadership and advisory services to help your business scale
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => {
                const Icon = service.icon
                return (
                  <motion.div
                    key={service.href}
                    custom={index + 1}
                    variants={fadeUpVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    <Link href={service.href}>
                      <div className="group relative h-full p-6 rounded-xl border border-white/[0.08] bg-white/[0.03] backdrop-blur-sm hover:bg-white/[0.05] hover:border-white/[0.12] transition-all duration-300">
                        <div className={`inline-flex p-3 rounded-lg bg-gradient-to-br ${service.color} mb-4`}>
                          <Icon className="h-6 w-6 text-white" />
                        </div>
                        <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-white/90 transition-colors">
                          {service.title}
                        </h3>
                        <p className="text-white/60 mb-4 text-sm leading-relaxed">
                          {service.description}
                        </p>
                        <div className="flex items-center text-rose-500 group-hover:text-rose-400 transition-colors">
                          <span className="text-sm font-medium">Learn more</span>
                          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </div>
      </section>
    </ServicePageWrapper>
  )
}

