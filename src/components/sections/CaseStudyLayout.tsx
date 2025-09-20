'use client';

import { ServicePageWrapper } from './ServicePageWrapper';
import { motion } from 'framer-motion';
import { Circle, ArrowRight } from 'lucide-react';
import Image from 'next/image';

interface ProjectStats {
  label: string;
  value: string;
  icon: React.ComponentType<{ className?: string }>;
}

interface Phase {
  phase: string;
  title: string;
  description: string;
  duration: string;
  deliverables: string[];
  image: string;
}

interface KeyFeature {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

interface Result {
  metric: string;
  value: string;
  description: string;
}

interface CaseStudyLayoutProps {
  title: string;
  description: string;
  projectStats: ProjectStats[];
  overview: {
    content: string;
    image: string;
    imageAlt: string;
  };
  phases: Phase[];
  keyFeatures: KeyFeature[];
  results: Result[];
}

export function CaseStudyLayout({
  title,
  description,
  projectStats,
  overview,
  phases,
  keyFeatures,
  results
}: CaseStudyLayoutProps) {
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

  return (
    <ServicePageWrapper>
      {/* Hero Section */}
      <section className="relative w-full pt-48 pb-10">
        <div className="relative z-10 container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
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
                Case Study • {title}
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
                  {title}
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
              <p className="text-lg md:text-xl text-white/40 mb-8 leading-relaxed font-light tracking-wide">
                {description}
              </p>
            </motion.div>

            {/* Project Stats */}
            <motion.div
              custom={3}
              variants={fadeUpVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
            >
              {projectStats.map((stat, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-4 text-center">
                  <stat.icon className="h-6 w-6 text-rose-400 mx-auto mb-2" />
                  <div className="text-white font-semibold text-sm">{stat.value}</div>
                  <div className="text-white/60 text-xs">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Project Overview */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <motion.div
            custom={4}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Project Overview</h2>
              <p className="text-white/70 mb-8 leading-relaxed">
                {overview.content}
              </p>
            </div>
            <div className="relative">
              <Image
                src={overview.image}
                alt={overview.imageAlt}
                width={600}
                height={400}
                className="rounded-xl shadow-2xl"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Development Phases */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <motion.div
            custom={5}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">Development Process</h2>
            <p className="text-white/60 text-lg">Our systematic approach to building {title}</p>
          </motion.div>

          <div className="space-y-12">
            {phases.map((phase, index) => (
              <motion.div
                key={index}
                custom={index + 6}
                variants={fadeUpVariants}
                initial="hidden"
                animate="visible"
                className="grid lg:grid-cols-2 gap-8 items-center"
              >
                <div className={index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}>
                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-rose-400 font-bold text-lg">{phase.phase}</span>
                      <span className="text-white/60 text-sm">• {phase.duration}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-4">{phase.title}</h3>
                    <p className="text-white/70 mb-6 leading-relaxed">{phase.description}</p>
                    <ul className="space-y-2">
                      {phase.deliverables.map((deliverable, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-white/70">
                          <Circle className="h-4 w-4 text-rose-400 flex-shrink-0" />
                          <span className="text-sm">{deliverable}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className={index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}>
                  <Image
                    src={phase.image}
                    alt={phase.title}
                    width={500}
                    height={300}
                    className="rounded-xl shadow-2xl w-full"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <motion.div
            custom={phases.length + 6}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">Key Features</h2>
            <p className="text-white/60 text-lg">Innovative features that drive user engagement</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {keyFeatures.map((feature, index) => (
              <motion.div
                key={index}
                custom={phases.length + 7 + index}
                variants={fadeUpVariants}
                initial="hidden"
                animate="visible"
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center hover:bg-white/10 transition-all duration-300"
              >
                <feature.icon className="h-12 w-12 text-rose-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-white/70 text-sm leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <motion.div
            custom={phases.length + keyFeatures.length + 7}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">Project Results</h2>
            <p className="text-white/60 text-lg">Measurable impact and success metrics</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {results.map((result, index) => (
              <motion.div
                key={index}
                custom={phases.length + keyFeatures.length + 8 + index}
                variants={fadeUpVariants}
                initial="hidden"
                animate="visible"
                className="bg-gradient-to-br from-rose-500/10 to-purple-500/10 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center"
              >
                <div className="text-3xl font-bold text-rose-400 mb-2">{result.value}</div>
                <div className="text-lg font-semibold text-white mb-1">{result.metric}</div>
                <div className="text-white/70 text-sm">{result.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 md:px-6 text-center">
          <motion.div
            custom={phases.length + keyFeatures.length + results.length + 8}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
          >
            <h2 className="text-3xl font-bold text-white mb-6">Ready to Start Your Project?</h2>
            <p className="text-white/60 text-lg mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help transform your business idea into a successful digital solution.
            </p>
            <button className="group inline-flex items-center px-8 py-4 text-white rounded-sm font-semibold text-lg shadow-2xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1" style={{ backgroundColor: '#FF335C', boxShadow: '0 25px 50px -12px rgba(255, 51, 92, 0.25)' }}>
              <span className="relative z-10 flex items-center">
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </span>
            </button>
          </motion.div>
        </div>
      </section>
    </ServicePageWrapper>
  );
}
