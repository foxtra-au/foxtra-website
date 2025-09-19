'use client';

import { motion } from "framer-motion";
import { Check } from "lucide-react";

interface SEOPricingProps {
  className?: string;
}

export function SEOPricing({ className = "" }: SEOPricingProps) {
  const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: 0.2 + i * 0.1,
        ease: [0.25, 0.4, 0.25, 1],
      },
    }),
  };

  const plans = [
    {
      name: "Starter",
      price: "$349",
      period: "month",
      keywords: "10",
      description: "Perfect for small businesses starting their SEO journey",
      popular: false,
      features: [
        "Website Audit",
        "Keyword Analysis & Optimization",
        "Meta Tags Optimization",
        "Alt Tags Optimization",
        "Complete Page Optimization",
        "Location & Geotargeting",
        "Canonical Tags Optimization",
        "Schema Markup Implementation",
        "Search Console Analysis",
        "Sitemap Submission",
        "Robots.txt File Optimization",
        "Google Analytics Setup",
        "Page Speed Optimization",
        "OnSite Article Post: 2",
        "Backlinks Creation: 150",
        "Guest Post: 2",
        "Blog Post: 2",
        "Reporting: Monthly"
      ]
    },
    {
      name: "Professional",
      price: "$649",
      period: "month",
      keywords: "25",
      description: "Ideal for growing businesses with competitive markets",
      popular: true,
      features: [
        "Website Audit",
        "Keyword Analysis & Optimization",
        "Meta Tags Optimization",
        "Alt Tags Optimization",
        "Complete Page Optimization",
        "Location & Geotargeting",
        "Canonical Tags Optimization",
        "Schema Markup Implementation",
        "Search Console Analysis",
        "Sitemap Submission",
        "Robots.txt File Optimization",
        "Google Analytics Setup",
        "Page Speed Optimization",
        "OnSite Article Post: 3",
        "Backlinks Creation: 300",
        "Guest Post: 3",
        "Blog Post: 3",
        "Reporting: Every 15 Days"
      ]
    },
    {
      name: "Enterprise",
      price: "$1049",
      period: "month",
      keywords: "50",
      description: "Comprehensive SEO solution for large businesses",
      popular: false,
      features: [
        "Website Audit",
        "Keyword Analysis & Optimization",
        "Meta Tags Optimization",
        "Alt Tags Optimization",
        "Complete Page Optimization",
        "Location & Geotargeting",
        "Canonical Tags Optimization",
        "Schema Markup Implementation",
        "Search Console Analysis",
        "Sitemap Submission",
        "Robots.txt File Optimization",
        "Google Analytics Setup",
        "Page Speed Optimization",
        "OnSite Article Post: 5",
        "Backlinks Creation: 500",
        "Guest Post: 5",
        "Blog Post: 5",
        "Reporting: Weekly"
      ]
    }
  ];

  return (
    <section className={`py-16 ${className}`}>
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          custom={0}
          variants={fadeUpVariants}
          initial="hidden"
          animate="visible"
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            AI SEO Pricing Plans
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Choose the perfect SEO plan to boost your online visibility and drive organic traffic to your business.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              custom={index + 1}
              variants={fadeUpVariants}
              initial="hidden"
              animate="visible"
              className={`relative bg-white/5 backdrop-blur-sm border rounded-xl p-8 hover:bg-white/10 transition-all duration-300 ${
                plan.popular 
                  ? 'border-yellow-500 shadow-lg shadow-yellow-500/20 scale-105' 
                  : 'border-white/10'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-yellow-500 text-black px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-white/70 mb-6">{plan.description}</p>
                
                <div className="mb-4">
                  <span className="text-5xl font-bold text-white">{plan.price}</span>
                  <span className="text-white/60">/{plan.period}</span>
                </div>
                
                <div className="bg-white/10 rounded-lg p-4 mb-6">
                  <span className="text-white/90 font-medium">Keywords: </span>
                  <span className="text-yellow-500 font-bold text-xl">{plan.keywords}</span>
                </div>
              </div>

              <div className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start space-x-3">
                    <div className="flex-shrink-0 mt-0.5">
                      <Check className="w-5 h-5 text-green-500" />
                    </div>
                    <span className="text-white/90 text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                  plan.popular
                    ? 'bg-yellow-500 text-black hover:bg-yellow-400'
                    : 'bg-white/10 text-white border border-white/20 hover:bg-white/20'
                }`}
              >
                Get Started
              </motion.button>
            </motion.div>
          ))}
        </div>

        <motion.div
          custom={4}
          variants={fadeUpVariants}
          initial="hidden"
          animate="visible"
          className="text-center mt-12"
        >
          <p className="text-white/60 mb-4">
            All plans include 30-day money-back guarantee
          </p>
          <p className="text-white/60 text-sm">
            Need a custom plan? <span className="text-yellow-500 cursor-pointer hover:underline">Contact us</span> for enterprise solutions.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
