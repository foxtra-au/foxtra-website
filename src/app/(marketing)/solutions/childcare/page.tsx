'use client';

import { ServicePageWrapper } from '@/components/sections';
import { motion } from 'framer-motion';
import { Circle, Calendar, Globe, Search, Phone, Zap, Mail, BarChart3 } from 'lucide-react';

export default function ChildcareSolution() {
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

  const services = [
    {
      icon: Phone,
      title: "AI Voice Agent",
      description: "Parent inquiries and enrollment scheduling with emergency contact capabilities",
      color: "from-blue-500/20 to-purple-500/20"
    },
    {
      icon: Globe,
      title: "Website Improvements",
      description: "Childcare center website with program information, enrollment forms, and parent portal",
      color: "from-green-500/20 to-teal-500/20"
    },
    {
      icon: Search,
      title: "Local SEO",
      description: "Optimize for searches like 'daycare near me' and 'childcare services' in your area",
      color: "from-orange-500/20 to-red-500/20"
    },
    {
      icon: Mail,
      title: "Parent Communication",
      description: "Automated daily reports, activity updates, and important announcements to parents",
      color: "from-purple-500/20 to-pink-500/20"
    },
    {
      icon: BarChart3,
      title: "Google Ads",
      description: "Targeted advertising for childcare services and early childhood programs",
      color: "from-yellow-500/20 to-orange-500/20"
    },
    {
      icon: Zap,
      title: "Enrollment Management",
      description: "Automated enrollment process, waitlist management, and parent onboarding workflows",
      color: "from-indigo-500/20 to-blue-500/20"
    }
  ];

  return (
    <ServicePageWrapper>
      {/* Hero Section */}
      <section className="relative w-full pt-48 pb-10 min-h-screen">
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
                Foxtra • Solutions
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
                  Solutions for Childcare
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
              <p className="text-lg md:text-xl text-white/40 mb-12 leading-relaxed font-light tracking-wide max-w-3xl mx-auto">
                Enhance your childcare center with AI solutions designed for parent communication and enrollment management.
              </p>
            </motion.div>

            {/* Services Grid */}
            <motion.div
              custom={3}
              variants={fadeUpVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
            >
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  custom={index + 4}
                  variants={fadeUpVariants}
                  initial="hidden"
                  animate="visible"
                  className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 transform hover:scale-105"
                >
                  <div className={`w-12 h-12 bg-gradient-to-br ${service.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-rose-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-white/70 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Button */}
            <motion.div
              custom={10}
              variants={fadeUpVariants}
              initial="hidden"
              animate="visible"
              className="mt-12"
            >
              <button className="group inline-flex items-center px-8 py-4 text-white rounded-sm font-semibold text-lg shadow-2xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1" style={{ backgroundColor: '#FF335C', boxShadow: '0 25px 50px -12px rgba(255, 51, 92, 0.25)' }}>
                <span className="relative z-10 flex items-center">
                  Get Started
                  <Calendar className="ml-2 h-5 w-5" />
                </span>
              </button>
            </motion.div>
          </div>
        </div>
      </section>
    </ServicePageWrapper>
  );
}
