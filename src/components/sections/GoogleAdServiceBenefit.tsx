'use client';

import { motion } from "framer-motion";
import { StatusCard } from "@/components/ui/StatusCard";
import { Target, TrendingUp, BarChart3, Zap, DollarSign, Users } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function GoogleAdServiceBenefit() {
  const benefits = [
    {
      icon: <Target className="h-6 w-6" />,
      title: "Precision Targeting",
      description: "Reach your ideal customers with advanced demographic, interest, and behavioral targeting options.",
      illustration: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop&auto=format"
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "Campaign Growth",
      description: "Scale your campaigns effectively with data-driven optimization and performance insights.",
      illustration: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop&auto=format"
    },
    {
      icon: <BarChart3 className="h-6 w-6" />,
      title: "Performance Analytics",
      description: "Track every metric that matters with comprehensive reporting and ROI analysis.",
      illustration: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop&auto=format"
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Smart Automation",
      description: "Leverage AI-powered bidding strategies and automated optimizations for maximum efficiency.",
      illustration: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=300&fit=crop&auto=format"
    },
    {
      icon: <DollarSign className="h-6 w-6" />,
      title: "Cost Efficiency",
      description: "Maximize your advertising budget with strategic cost management and bid optimization.",
      illustration: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop&auto=format"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Expert Management",
      description: "Dedicated Google Ads specialists managing your campaigns for optimal performance.",
      illustration: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=300&fit=crop&auto=format"
    }
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto max-w-6xl">
        <div className="text-left mb-12">
          <h2 className="text-3xl font-bold text-white mb-4 font-sans">
            Why Choose Our Google Ads Services?
          </h2>
          <p className="text-lg text-white/70 max-w-3xl font-sans">
            Drive qualified traffic and maximize conversions with our comprehensive Google Ads management services.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <StatusCard
                icon={
                  <div className="w-8 h-8 bg-white/10 backdrop-blur-sm border border-white/20 rounded-md flex items-center justify-center group-hover:bg-yellow-500 group-hover:border-yellow-400 transition-all duration-300">
                    <div className="text-white group-hover:text-black transition-colors duration-300">
                      {benefit.icon}
                    </div>
                  </div>
                }
                title={benefit.title}
                description={benefit.description}
                illustration={benefit.illustration}
                illustrationAlt={`${benefit.title} illustration`}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
