'use client';

import { ServicePageWrapper } from '@/components/sections';
import { motion } from 'framer-motion';
import { Circle, Calendar, Users, Target, Award } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function CaseStudies() {
  const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        delay: 0.5 + i * 0.2,
        ease: [0.25, 0.4, 0.25, 1],
      },
    }),
  };

  const caseStudies = [
    {
      id: 'local-fox',
      title: 'Local Fox',
      description: 'A comprehensive marketplace platform connecting local businesses with customers through innovative technology.',
      category: 'Tradie Marketplace',
      duration: '6 months',
      team: '8 members',
      image: '/services/custom-development/localfox-web.png',
      href: '/case-studies/local-fox'
    },
    {
      id: 'spotcard',
      title: 'Spotcard',
      description: 'Digital business card solution revolutionizing professional networking and contact management.',
      category: 'Mobile App',
      duration: '4 months',
      team: '6 members',
      image: '/services/mobile-app/business-card-app.png',
      href: '/case-studies/spotcard'
    },
    {
      id: 'little-steps',
      title: 'Little Steps',
      description: 'Child development tracking app helping parents monitor and support their children\'s growth milestones.',
      category: 'Mobile App',
      duration: '5 months',
      team: '7 members',
      image: '/services/mobile-app/little-steps.png',
      href: '/case-studies/little-steps'
    }
  ];

  return (
    <ServicePageWrapper>
      {/* Hero Section */}
      <section className="relative w-full pt-48 pb-10">
        <div className="relative z-10 container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <motion.div
              custom={0}
              variants={fadeUpVariants}
              initial="hidden"
              animate="visible"
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] mb-8"
            >
              <Circle className="h-2 w-2 fill-rose-500/80" />
              <span className="text-sm text-white/60 tracking-wide">
                Foxtra • Case Studies
              </span>
            </motion.div>

            {/* Title */}
            <motion.div
              custom={1}
              variants={fadeUpVariants}
              initial="hidden"
              animate="visible"
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 tracking-tight">
                <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/80">
                  Success Stories
                </span>
              </h1>
            </motion.div>

            {/* Description */}
            <motion.div
              custom={2}
              variants={fadeUpVariants}
              initial="hidden"
              animate="visible"
            >
              <p className="text-lg md:text-xl text-white/40 mb-8 leading-relaxed font-light tracking-wide max-w-3xl mx-auto">
                Discover how we've helped businesses transform their digital presence through innovative technology solutions.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.id}
                custom={index}
                variants={fadeUpVariants}
                initial="hidden"
                animate="visible"
                className="group"
              >
                <Link href={study.href}>
                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden hover:bg-white/10 transition-all duration-300 transform hover:scale-105">
                    {/* Image */}
                    <div className="relative h-48 overflow-hidden bg-white">
                      <Image
                        src={study.image}
                        alt={study.title}
                        fill
                        className="object-contain group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 bg-yellow-500 text-black text-sm font-medium rounded-sm">
                          {study.category}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-rose-400 transition-colors">
                        {study.title}
                      </h3>
                      <p className="text-white/70 mb-4 text-sm leading-relaxed">
                        {study.description}
                      </p>

                      {/* Stats */}
                      <div className="flex items-center justify-between text-xs text-white/60">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          <span>{study.duration}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Users className="h-3 w-3" />
                          <span>{study.team}</span>
                        </div>
                      </div>

                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </ServicePageWrapper>
  );
}
