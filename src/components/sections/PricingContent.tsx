'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Clock, DollarSign, FileText, Users, Circle, ArrowRight } from 'lucide-react';
import { SliderTabs } from '@/components/ui/SliderTabs';
import Link from 'next/link';


// Pricing models data
const pricingModels = [
  {
    id: 'time-material',
    icon: <Clock className="w-4 h-4" />,
    title: 'Time & Material',
    features: [
      'Unfixed budget with hourly rate specified',
      'Unfixed scope of work',
      'Flexible project adjustments',
      'Transparent time tracking'
    ],
    details: 'The Time & Material engagement model involves monthly billing based on the actual development efforts from the previous month (person-hours worked). The contract typically includes: unfixed budget with only the hourly rate specified; unfixed scope of work.'
  },
  {
    id: 'fixed-budget',
    icon: <DollarSign className="w-4 h-4" />,
    title: 'Fixed Budget',
    features: [
      'Fixed budget with hourly rate mentioned',
      'Unfixed scope with complete solution commitment',
      'Budget predictability',
      'Scope flexibility within budget'
    ],
    details: 'The Fixed Budget model is one of the most popular pricing options. It builds upon the Time & Material model, the only difference being a commitment to deliver a complete and logically structured solution within an agreed budget. The contract typically includes: fixed budget with the hourly rate mentioned; unfixed scope, with a commitment to deliver the complete solution within the budget.'
  },
  {
    id: 'fixed-price',
    icon: <FileText className="w-4 h-4" />,
    title: 'Fixed Price',
    features: [
      'Fixed budget without hourly rates',
      'Fixed scope described in detail',
      'High predictability',
      'Milestone-based payments'
    ],
    details: 'The Fixed Price model operates on a predefined sum specified in the contract, paid in parts as agreed. This model offers high predictability as the developers commit to delivering a specific scope within a specific budget. However, it is also the least flexible, as the scope cannot be altered once development begins. The contract typically includes: fixed budget without hourly rates mentioned; fixed scope, described in detail to avoid misunderstandings during acceptance.'
  },
  {
    id: 'dedicated-team',
    icon: <Users className="w-4 h-4" />,
    title: 'Dedicated Team',
    features: [
      'Fixed budget based on monthly salaries',
      'Unfixed scope managed by client',
      'Direct team management',
      'Full project control'
    ],
    details: 'The Dedicated Team model provides specialists who fully dedicate their efforts to a project. This model allows the Client to directly manage the team, assign tasks, monitor progress, and receive reports. Billing is based on the specialists\' monthly salaries. The contract typically includes: fixed budget based on the specialists\' monthly salaries and the number of specialists involved; unfixed scope, managed entirely by the Client.'
  }
];

export function PricingContent() {
  const [activeTab, setActiveTab] = useState('time-material');

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
          {/* Hero Section - Same style as blog page */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] mb-8"
            >
              <Circle className="h-2 w-2 fill-rose-500/80" />
              <span className="text-sm text-white/60 tracking-wide font-sans">
                Foxtra Pricing
              </span>
            </motion.div>

            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 font-sans">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-white/90 to-white/80">
                Pricing models we offer
              </span>
            </h1>
            <p className="text-xl text-white/70 max-w-3xl mx-auto font-sans">
              Choose the engagement model that best fits your project needs. Clear, honest pricing with no hidden fees or surprises.
            </p>
          </motion.div>

          {/* Pricing Model Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center mb-12"
          >
            <SliderTabs
              tabs={pricingModels.map(model => ({
                id: model.id,
                icon: model.icon,
                title: model.title
              }))}
              activeTab={activeTab}
              onTabChange={setActiveTab}
              className="max-w-fit"
            />
          </motion.div>

          {/* Active Pricing Model Content */}
          {pricingModels.map((model) => (
            activeTab === model.id && (
              <motion.div
                key={model.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.6 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 mb-16"
              >
                <div className="grid lg:grid-cols-2 gap-12">
                  {/* Left Side - Description */}
                  <div>
                    <h2 className="text-3xl font-bold text-white mb-6 font-sans">{model.title}</h2>
                    <p className="text-white/70 mb-6 font-sans leading-relaxed">
                      {model.details}
                    </p>
                    <Link 
                      href={`/pricing/${model.id}`}
                      className="inline-flex items-center gap-2 bg-yellow-500 hover:bg-yellow-600 text-black font-medium py-3 px-6 rounded-lg transition-colors duration-300"
                    >
                      <ArrowRight className="w-4 h-4" />
                      Learn More
                    </Link>
                  </div>

                  {/* Right Side - Features */}
                  <div>
                    <h3 className="text-xl font-bold text-white mb-6 font-sans">Key Features</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {model.features.map((feature, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.8 + index * 0.1 }}
                          className="flex items-center space-x-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-4 hover:bg-white/10 transition-all duration-300"
                        >
                          <div className="flex size-6 shrink-0 items-center justify-center rounded-md border border-white/20 text-yellow-500">
                            <Circle className="h-2 w-2 fill-current" />
                          </div>
                          <span className="text-white/90 font-medium text-sm">{feature}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          ))}

        </div>
      </div>
    </div>
  );
}