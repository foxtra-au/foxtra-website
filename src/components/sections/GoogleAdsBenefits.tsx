'use client';

import {
  Target,
  TrendingUp,
  BarChart3,
  Zap,
  DollarSign,
} from "lucide-react";

import { BentoCard, BentoGrid } from "@/components/ui/BentoGrid";

const googleAdsBenefits = [
  {
    Icon: Target,
    name: "Precision Targeting",
    description: "Reach your ideal customers with advanced targeting options including demographics, interests, and behaviors.",
    href: "#",
    cta: "Learn more",
    background: (
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 flex items-center justify-center">
        <Target className="w-32 h-32 text-blue-400/20" />
      </div>
    ),
    className: "lg:row-start-1 lg:row-end-4 lg:col-start-2 lg:col-end-3",
  },
  {
    Icon: TrendingUp,
    name: "Campaign Optimization",
    description: "Continuous optimization of ad campaigns using AI-driven insights and performance data.",
    href: "#",
    cta: "Learn more",
    background: (
      <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-teal-500/10 flex items-center justify-center">
        <TrendingUp className="w-32 h-32 text-green-400/20" />
      </div>
    ),
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3",
  },
  {
    Icon: BarChart3,
    name: "Performance Analytics",
    description: "Detailed reporting and analytics to track ROI, conversions, and campaign effectiveness.",
    href: "#",
    cta: "Learn more",
    background: (
      <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-red-500/10 flex items-center justify-center">
        <BarChart3 className="w-32 h-32 text-orange-400/20" />
      </div>
    ),
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4",
  },
  {
    Icon: Zap,
    name: "Smart Bidding",
    description: "Automated bidding strategies that maximize your ad spend efficiency and campaign performance.",
    href: "#",
    cta: "Learn more",
    background: (
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 flex items-center justify-center">
        <Zap className="w-32 h-32 text-purple-400/20" />
      </div>
    ),
    className: "lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-2",
  },
  {
    Icon: DollarSign,
    name: "Cost Optimization",
    description: "Maximize your advertising budget with strategic cost management and ROI optimization.",
    href: "#",
    cta: "Learn more",
    background: (
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 flex items-center justify-center">
        <DollarSign className="w-32 h-32 text-cyan-400/20" />
      </div>
    ),
    className: "lg:col-start-3 lg:col-end-3 lg:row-start-2 lg:row-end-4",
  },
];

export function GoogleAdsBenefits() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-left mb-12">
          <h2 className="text-3xl font-bold text-white mb-4 font-sans">
            Why Choose Our Google Ads Services?
          </h2>
          <p className="text-lg text-white/70 max-w-3xl font-sans">
            Drive qualified traffic and maximize conversions with our data-driven Google Ads management.
          </p>
        </div>
        
        <div className="max-w-7xl mx-auto">
          <BentoGrid className="lg:grid-rows-3">
            {googleAdsBenefits.map((benefit) => (
              <BentoCard key={benefit.name} {...benefit} />
            ))}
          </BentoGrid>
        </div>
      </div>
    </section>
  );
}
