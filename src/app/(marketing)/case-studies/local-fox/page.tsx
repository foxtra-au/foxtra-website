'use client';

import { ServicePageWrapper } from '@/components/sections';
import { motion } from 'framer-motion';
import { Circle, Calendar, Users, Target, Award, CheckCircle, ArrowRight, Clock, Zap, Shield, Wrench, BarChart3 } from 'lucide-react';
import Image from 'next/image';

export default function LocalFoxCaseStudy() {
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

  const projectStats = [
    { label: 'Duration', value: '6 months', icon: Clock },
    { label: 'Team Size', value: '8 members', icon: Users },
    { label: 'Platform', value: 'Web & Mobile', icon: Target },
    { label: 'Success Rate', value: '300% growth', icon: Award }
  ];

  const phases = [
    {
      phase: '1. Design Workshop',
      title: 'Understanding Business Model & Vision',
      description: 'Comprehensive discovery session to understand Local Fox\'s business model, goals, and vision for connecting local businesses with customers.',
      duration: '2 weeks',
      deliverables: [
        'Business model analysis',
        'Stakeholder interviews',
        'Competitive research',
        'User persona development',
        'Project roadmap creation'
      ],
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3'
    },
    {
      phase: '2. UX Design',
      title: 'User Experience & Walkthrough Design',
      description: 'Created intuitive user flows and wireframes focusing on seamless interaction between businesses and customers.',
      duration: '3 weeks',
      deliverables: [
        'User journey mapping',
        'Wireframe creation',
        'Prototype development',
        'Usability testing',
        'Design system establishment'
      ],
      image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3'
    },
    {
      phase: '3. Development',
      title: 'Full-Stack Development',
      description: 'Built a robust platform with modern technologies ensuring scalability and performance.',
      duration: '12 weeks',
      deliverables: [
        'Frontend development (React/Next.js)',
        'Backend API development (Node.js)',
        'Database design & implementation',
        'Payment integration',
        'Real-time messaging system'
      ],
      image: '/services/custom-development/localfox-admin.png'
    },
    {
      phase: '4. Testing',
      title: 'Quality Assurance & Testing',
      description: 'Comprehensive testing across all platforms and devices to ensure optimal performance.',
      duration: '2 weeks',
      deliverables: [
        'Unit & integration testing',
        'User acceptance testing',
        'Performance optimization',
        'Security testing',
        'Cross-browser compatibility'
      ],
      image: 'https://images.unsplash.com/photo-1556075798-4825dfaaf498?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3'
    },
    {
      phase: '5. Hypercare',
      title: 'Launch Support & Monitoring',
      description: 'Dedicated support during the critical launch period to ensure smooth operation.',
      duration: '2 weeks',
      deliverables: [
        '24/7 monitoring',
        'Bug fixes & hotfixes',
        'Performance monitoring',
        'User feedback collection',
        'Launch optimization'
      ],
      image: '/services/custom-development/localfox-partner.png'
    },
    {
      phase: '6. Maintenance',
      title: 'Ongoing Support & Updates',
      description: 'Continuous maintenance and feature updates to keep the platform running smoothly.',
      duration: 'Ongoing',
      deliverables: [
        'Regular security updates',
        'Feature enhancements',
        'Performance monitoring',
        'Technical support',
        'Scalability improvements'
      ],
      image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3'
    }
  ];

  const keyFeatures = [
    {
      icon: Users,
      title: 'Multi-User Platform',
      description: 'Separate dashboards for businesses and customers with role-based access control.'
    },
    {
      icon: Zap,
      title: 'Real-time Messaging',
      description: 'Instant communication between businesses and customers with notification system.'
    },
    {
      icon: BarChart3,
      title: 'Analytics Dashboard',
      description: 'Comprehensive business insights and customer engagement metrics.'
    },
    {
      icon: Shield,
      title: 'Secure Payments',
      description: 'Integrated payment gateway with secure transaction processing.'
    }
  ];

  const results = [
    { metric: 'User Engagement', value: '100%', description: 'Increase in platform usage' },
    { metric: 'Business Signups', value: '50+', description: 'Local businesses onboarded' },
    { metric: 'Customer Base', value: '1000+', description: 'Active customers' },
    { metric: 'Platform stability', value: '100%', description: 'Total processed transactions' }
  ];

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
                Case Study • Local Fox
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
                  Local Fox
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
                A comprehensive marketplace platform connecting local businesses with customers through innovative technology, resulting in 300% user engagement growth.
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
              <p className="text-white/70 mb-6 leading-relaxed">
                Local Fox is a comprehensive marketplace platform designed to connect local businesses with customers in their community. 
                The platform features separate interfaces for businesses and customers, real-time messaging, payment processing, and 
                analytics dashboards.
              </p>
              <p className="text-white/70 mb-8 leading-relaxed">
                Our approach focused on understanding the unique needs of local businesses and creating an intuitive platform 
                that would drive engagement and facilitate meaningful connections within the community.
              </p>
            </div>
            <div className="relative">
              <Image
                src="/services/custom-development/localfox-web.png"
                alt="Local Fox Platform"
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
            <p className="text-white/60 text-lg">Our systematic approach to building Local Fox</p>
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
                          <CheckCircle className="h-4 w-4 text-rose-400 flex-shrink-0" />
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
            custom={12}
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
                custom={index + 13}
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
            custom={17}
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
                custom={index + 18}
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
            custom={22}
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
