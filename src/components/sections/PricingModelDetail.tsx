'use client';

import { motion } from 'framer-motion';
import { 
  Clock, DollarSign, FileText, Users, Circle, ArrowRight, 
  Zap, Eye, Play, RefreshCw, CheckCircle, Star 
} from 'lucide-react';
import Link from 'next/link';

interface PricingModelData {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  benefits: {
    title: string;
    description: string;
    icon: string;
  }[];
  features: string[];
  process: {
    step: number;
    title: string;
    description: string;
  }[];
  pricing: {
    junior: string;
    mid: string;
    senior: string;
    lead: string;
  };
  bestFor: string[];
}

interface PricingModelDetailProps {
  model: PricingModelData;
}

const iconMap = {
  Clock, DollarSign, FileText, Users, Zap, Eye, Play, RefreshCw, CheckCircle, Star
};

export function PricingModelDetail({ model }: PricingModelDetailProps) {
  const IconComponent = iconMap[model.icon as keyof typeof iconMap] || Clock;

  return (
    <div className="relative w-full overflow-hidden bg-[#030303] min-h-screen">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/[0.05] via-transparent to-rose-500/[0.05] blur-3xl" />

      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: -150, rotate: -3 }}
          animate={{ opacity: 1, y: 0, rotate: 12 }}
          transition={{ duration: 2.4, delay: 0.3, ease: [0.23, 0.86, 0.39, 0.96] }}
          className="absolute left-[-10%] md:left-[-5%] top-[15%] md:top-[20%]"
        >
          <motion.div
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            className="relative w-[600px] h-[140px]"
          >
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-500/[0.15] to-transparent backdrop-blur-[2px] border-2 border-white/[0.15] shadow-[0_8px_32px_0_rgba(255,255,255,0.1)] after:absolute after:inset-0 after:rounded-full after:bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.2),transparent_70%)]" />
          </motion.div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: -150, rotate: 0 }}
          animate={{ opacity: 1, y: 0, rotate: -15 }}
          transition={{ duration: 2.4, delay: 0.5, ease: [0.23, 0.86, 0.39, 0.96] }}
          className="absolute right-[-5%] md:right-[0%] top-[70%] md:top-[75%]"
        >
          <motion.div
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            className="relative w-[500px] h-[120px]"
          >
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-rose-500/[0.15] to-transparent backdrop-blur-[2px] border-2 border-white/[0.15] shadow-[0_8px_32px_0_rgba(255,255,255,0.1)] after:absolute after:inset-0 after:rounded-full after:bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.2),transparent_70%)]" />
          </motion.div>
        </motion.div>
      </div>

      <div className="relative z-10">
        <div className="container mx-auto px-4 pt-32 pb-16 max-w-6xl">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            {/* Back Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="mb-8"
            >
              <Link 
                href="/pricing"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 backdrop-blur-sm border border-white/20 text-white/70 hover:text-white hover:bg-white/10 transition-all duration-300"
              >
                <ArrowRight className="w-4 h-4 rotate-180" />
                Back to Pricing Models
              </Link>
            </motion.div>

            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] mb-8"
            >
              <Circle className="h-2 w-2 fill-rose-500/80" />
              <span className="text-sm text-white/60 tracking-wide font-sans">
                Pricing Model
              </span>
            </motion.div>

            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-16 h-16 bg-white/5 backdrop-blur-sm border border-white/20 rounded-xl flex items-center justify-center">
                <IconComponent className="w-8 h-8 text-rose-500" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white font-sans">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-white/90 to-white/80">
                  {model.title}
                </span>
              </h1>
            </div>
            
            <p className="text-xl text-white/70 max-w-3xl mx-auto font-sans mb-4">
              {model.subtitle}
            </p>
            <p className="text-white/60 max-w-4xl mx-auto font-sans leading-relaxed">
              {model.description}
            </p>
          </motion.div>

          {/* Benefits Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-white mb-8 font-sans text-center">Key Benefits</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {model.benefits.map((benefit, index) => {
                const BenefitIcon = iconMap[benefit.icon as keyof typeof iconMap] || Star;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300"
                  >
                    <div className="w-12 h-12 bg-rose-500/20 border border-rose-500/30 rounded-lg flex items-center justify-center mb-4">
                      <BenefitIcon className="w-6 h-6 text-rose-500" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2 font-sans">{benefit.title}</h3>
                    <p className="text-white/70 text-sm">{benefit.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </motion.section>

          {/* Features & Pricing Grid */}
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Features */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8"
            >
              <h3 className="text-2xl font-bold text-white mb-6 font-sans">What's Included</h3>
              <div className="space-y-3">
                {model.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-yellow-500 flex-shrink-0" />
                    <span className="text-white/90">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Pricing */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8"
            >
              <h3 className="text-2xl font-bold text-white mb-6 font-sans">Hourly Rates</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-2 border-b border-white/10">
                  <span className="text-white/90">Junior Developer</span>
                  <span className="text-white font-semibold">{model.pricing.junior}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-white/10">
                  <span className="text-white/90">Mid-level Developer</span>
                  <span className="text-white font-semibold">{model.pricing.mid}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-white/10">
                  <span className="text-white/90">Senior Developer</span>
                  <span className="text-white font-semibold">{model.pricing.senior}</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-white/90">Tech Lead</span>
                  <span className="text-white font-semibold">{model.pricing.lead}</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Process Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-white mb-8 font-sans text-center">Our Process</h2>
            <div className="space-y-6">
              {model.process.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7 + index * 0.1 }}
                  className="flex gap-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-rose-500 text-white rounded-lg flex items-center justify-center font-bold">
                    {step.step}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2 font-sans">{step.title}</h3>
                    <p className="text-white/70">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Best For Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold text-white mb-8 font-sans">Best For</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
              {model.bestFor.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.9 + index * 0.1 }}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-4 hover:bg-white/10 transition-all duration-300"
                >
                  <Star className="w-5 h-5 text-yellow-500 mx-auto mb-2" />
                  <span className="text-white/90 text-sm">{item}</span>
                </motion.div>
              ))}
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="mt-12"
            >
              <Link 
                href="/bookings"
                className="inline-flex items-center gap-2 bg-yellow-500 hover:bg-yellow-600 text-black font-medium py-4 px-8 rounded-lg transition-colors duration-300"
              >
                <ArrowRight className="w-5 h-5" />
                Get Started with {model.title}
              </Link>
            </motion.div>
          </motion.section>
        </div>
      </div>
    </div>
  );
}
