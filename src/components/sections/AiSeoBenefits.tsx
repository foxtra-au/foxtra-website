'use client';

import {
  Search,
  TrendingUp,
  FileText,
  BarChart3,
  Globe,
  Zap,
} from "lucide-react";

import { BentoCard, BentoGrid } from "@/components/ui/BentoGrid";

const seoBenefits = [
  {
    Icon: Search,
    name: "Technical SEO Audits",
    description: "Comprehensive analysis of your website's technical performance, crawlability, and search engine optimization factors.",
    href: "#",
    cta: "Learn more",
    background: (
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 flex items-center justify-center">
        <Search className="w-32 h-32 text-blue-400/20" />
      </div>
    ),
    className: "lg:row-start-1 lg:row-end-4 lg:col-start-2 lg:col-end-3",
  },
  {
    Icon: FileText,
    name: "AI Content Generation",
    description: "High-quality, SEO-optimized content created by AI that ranks well and engages your target audience.",
    href: "#",
    cta: "Learn more",
    background: (
      <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-teal-500/10 flex items-center justify-center">
        <FileText className="w-32 h-32 text-green-400/20" />
      </div>
    ),
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3",
  },
  {
    Icon: TrendingUp,
    name: "Keyword Optimization",
    description: "Strategic keyword research and optimization to improve your search rankings and drive targeted traffic.",
    href: "#",
    cta: "Learn more",
    background: (
      <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-red-500/10 flex items-center justify-center">
        <TrendingUp className="w-32 h-32 text-orange-400/20" />
      </div>
    ),
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4",
  },
  {
    Icon: BarChart3,
    name: "Performance Tracking",
    description: "Real-time monitoring and detailed analytics to track your SEO progress and ROI.",
    href: "#",
    cta: "Learn more",
    background: (
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 flex items-center justify-center">
        <BarChart3 className="w-32 h-32 text-purple-400/20" />
      </div>
    ),
    className: "lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-2",
  },
  {
    Icon: Globe,
    name: "Global SEO Strategy",
    description: "Multi-language and multi-region SEO strategies to expand your reach worldwide.",
    href: "#",
    cta: "Learn more",
    background: (
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 flex items-center justify-center">
        <Globe className="w-32 h-32 text-cyan-400/20" />
      </div>
    ),
    className: "lg:col-start-3 lg:col-end-3 lg:row-start-2 lg:row-end-4",
  },
];

export function AiSeoBenefits() {
  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="text-left mb-12">
          <h2 className="text-3xl font-bold text-white mb-4 font-sans">
            Why Choose Our AI SEO Services?
          </h2>
          <p className="text-lg text-white/70 max-w-3xl font-sans">
            Transform your online presence with our comprehensive AI-powered SEO solutions that deliver measurable results.
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <BentoGrid className="lg:grid-rows-3">
            {seoBenefits.map((benefit) => (
              <BentoCard key={benefit.name} {...benefit} />
            ))}
          </BentoGrid>
        </div>
      </div>
    </section>
  );
}
