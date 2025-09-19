'use client';

import { cn } from "@/lib/utils";
import {
  Zap,
  Clock,
  DollarSign,
  Target,
  BarChart3,
  Shield,
  GitBranch,
  Users,
} from "lucide-react";

export function AutomationBenefits() {
  const benefits = [
    {
      title: "Instant Workflow Response",
      description:
        "Trigger immediate actions based on real-time events and conditions across your entire tech stack.",
      icon: <Zap className="w-6 h-6" />,
    },
    {
      title: "Time & Cost Savings",
      description:
        "Eliminate manual tasks and save hours of repetitive work while reducing operational costs by up to 80%.",
      icon: <Clock className="w-6 h-6" />,
    },
    {
      title: "Precision Execution",
      description:
        "Ensure consistent, error-free execution of complex workflows with built-in validation and monitoring.",
      icon: <Target className="w-6 h-6" />,
    },
    {
      title: "Performance Analytics",
      description:
        "Track automation performance with detailed analytics, insights, and optimization recommendations.",
      icon: <BarChart3 className="w-6 h-6" />,
    },
    {
      title: "Enterprise Security",
      description:
        "Enterprise-grade security with proper access controls, audit trails, and compliance standards.",
      icon: <Shield className="w-6 h-6" />,
    },
    {
      title: "Multi-Platform Integration",
      description:
        "Seamlessly connect and sync data across 100+ popular apps and services you already use.",
      icon: <GitBranch className="w-6 h-6" />,
    },
    {
      title: "Scalable Solutions",
      description:
        "Automation workflows that grow with your business and adapt to your changing needs.",
      icon: <Users className="w-6 h-6" />,
    },
    {
      title: "ROI Optimization",
      description:
        "Maximize your return on investment with strategic automation that delivers measurable business value.",
      icon: <DollarSign className="w-6 h-6" />,
    },
  ];

  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="text-left mb-12">
          <h2 className="text-3xl font-bold text-white mb-4 font-sans">
            Why Choose Our Automation Solutions?
          </h2>
          <p className="text-lg text-white/70 max-w-3xl font-sans">
            Transform your business operations with intelligent automation that scales with your growth and adapts to your needs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative z-10 py-10">
          {benefits.map((benefit, index) => (
            <Benefit key={benefit.title} {...benefit} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

const Benefit = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r border-white/10 py-10 relative group/benefit",
        (index === 0 || index === 4) && "lg:border-l border-white/10",
        index < 4 && "lg:border-b border-white/10"
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/benefit:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-white/5 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/benefit:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-white/5 to-transparent pointer-events-none" />
      )}
      
      <div className="mb-4 relative z-10 px-10 text-white/70">
        <div className="flex items-center justify-center w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white">
          {icon}
        </div>
      </div>
      
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/benefit:h-8 w-1 rounded-tr-full rounded-br-full bg-white/20 group-hover/benefit:bg-white/40 transition-all duration-200 origin-center" />
        <span className="group-hover/benefit:translate-x-2 transition duration-200 inline-block text-white">
          {title}
        </span>
      </div>
      
      <p className="text-sm text-white/70 max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};
