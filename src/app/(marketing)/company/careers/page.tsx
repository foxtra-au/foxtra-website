'use client';

import { ServicePageWrapper } from '@/components/sections';
import { ServiceBanner } from '@/components/ui/ServiceBanner';
import { Briefcase, Users, Zap, Award, Globe, Heart, Circle, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Careers() {
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
      {/* Custom Single Column Centered Banner */}
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
                Foxtra • Careers
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
                  Join Our Team
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
                Be part of the AI revolution. We're looking for passionate individuals to help us build the future of technology.
              </p>
            </motion.div>

            {/* CTA Button */}
            <motion.div
              custom={3}
              variants={fadeUpVariants}
              initial="hidden"
              animate="visible"
            >
              <button className="group inline-flex items-center px-8 py-4 text-white rounded-sm font-semibold text-lg shadow-2xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1" style={{ backgroundColor: '#FF335C', boxShadow: '0 25px 50px -12px rgba(255, 51, 92, 0.25)' }}>
                <span className="relative z-10 flex items-center">
                  <Calendar className="mr-2 h-5 w-5" />
                  Book Appointment
                </span>
              </button>
            </motion.div>
          </div>
        </div>
      </section>
      
      <div className="py-16">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          {/* Career Categories - 4 in a row */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {/* Engineering */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6 text-center hover:bg-white/10 transition-all duration-300">
              <div className="w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Zap className="h-6 w-6 text-white/70" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2 font-sans">
                Engineering
              </h3>
              <p className="text-white/70 font-sans text-sm">
                Full-stack development, AI/ML engineering, and DevOps roles
              </p>
            </div>

            {/* Design */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6 text-center hover:bg-white/10 transition-all duration-300">
              <div className="w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Globe className="h-6 w-6 text-white/70" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2 font-sans">
                Design
              </h3>
              <p className="text-white/70 font-sans text-sm">
                UI/UX design, product design, and user research positions
              </p>
            </div>

            {/* Marketing */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6 text-center hover:bg-white/10 transition-all duration-300">
              <div className="w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Users className="h-6 w-6 text-white/70" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2 font-sans">
                Marketing
              </h3>
              <p className="text-white/70 font-sans text-sm">
                Digital marketing, content creation, and growth roles
              </p>
            </div>

            {/* Operations */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6 text-center hover:bg-white/10 transition-all duration-300">
              <div className="w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Briefcase className="h-6 w-6 text-white/70" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2 font-sans">
                Operations
              </h3>
              <p className="text-white/70 font-sans text-sm">
                Business operations, customer success, and support roles
              </p>
            </div>
          </div>

          {/* Why Join Us Section */}
          <div className="mb-16">
            <div className="text-left mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Why Join Foxtra?</h2>
              <p className="text-white/60 text-lg max-w-3xl">
                We're building the future of AI technology and looking for talented individuals to join our mission.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Innovation */}
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 text-center">
                <div className="w-16 h-16 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg flex items-center justify-center mx-auto mb-6">
                  <Zap className="h-8 w-8 text-white/70" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Innovation First</h3>
                <p className="text-white/70 leading-relaxed">
                  Work on cutting-edge AI technologies and be part of groundbreaking projects that shape the future.
                </p>
              </div>

              {/* Growth */}
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 text-center">
                <div className="w-16 h-16 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg flex items-center justify-center mx-auto mb-6">
                  <Award className="h-8 w-8 text-white/70" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Career Growth</h3>
                <p className="text-white/70 leading-relaxed">
                  Accelerate your career with mentorship, learning opportunities, and challenging projects.
                </p>
              </div>

              {/* Culture */}
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 text-center">
                <div className="w-16 h-16 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg flex items-center justify-center mx-auto mb-6">
                  <Heart className="h-8 w-8 text-white/70" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Great Culture</h3>
                <p className="text-white/70 leading-relaxed">
                  Join a supportive team that values collaboration, creativity, and work-life balance.
                </p>
              </div>
            </div>
          </div>

          {/* Open Positions */}
          <div className="text-left">
            <h2 className="text-3xl font-bold text-white mb-4">Open Positions</h2>
            <p className="text-white/60 text-lg mb-8">
              Ready to join our team? Check out our current openings.
            </p>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 w-full">
              <div className="flex items-center gap-8">
                <div className="w-[70%]">
                  <p className="text-white/70">
                    We're always looking for talented individuals to join our growing team. 
                    Don't see a position that matches your skills? We'd still love to hear from you!
                  </p>
                </div>
                <div className="w-[30%] flex justify-end">
                  <a 
                    href="mailto:careers@foxtra.ai"
                    className="inline-flex items-center px-8 py-4 text-white rounded-sm font-semibold text-lg shadow-2xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1"
                    style={{ backgroundColor: '#FF335C', boxShadow: '0 25px 50px -12px rgba(255, 51, 92, 0.25)' }}
                  >
                    <span className="relative z-10 flex items-center">
                      <Briefcase className="mr-2 h-5 w-5" />
                      Send Your Resume
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ServicePageWrapper>
  );
}