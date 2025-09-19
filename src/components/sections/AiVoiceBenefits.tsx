'use client';

import { cn } from "@/lib/utils";
import {
  Phone,
  Clock,
  Shield,
  Zap,
  Users,
  Headphones,
  DollarSign,
  Heart,
} from "lucide-react";

export function AiVoiceBenefits() {
  const benefits = [
    {
      title: "24/7 Voice Support",
      description:
        "Never miss a customer call again with our AI voice agents working around the clock.",
      icon: <Phone className="w-6 h-6" />,
    },
    {
      title: "Instant Response",
      description:
        "Customers get immediate answers without waiting in queues or navigating complex menus.",
      icon: <Zap className="w-6 h-6" />,
    },
    {
      title: "Cost Effective",
      description:
        "Reduce operational costs by up to 80% compared to traditional call centers.",
      icon: <DollarSign className="w-6 h-6" />,
    },
    {
      title: "Scalable Solution",
      description: "Handle unlimited calls simultaneously without hiring additional staff.",
      icon: <Users className="w-6 h-6" />,
    },
    {
      title: "Natural Conversations",
      description: "AI agents sound human with natural speech patterns and emotional intelligence.",
      icon: <Headphones className="w-6 h-6" />,
    },
    {
      title: "Reliable Uptime",
      description: "99.9% uptime guarantee ensures your customers can always reach you.",
      icon: <Shield className="w-6 h-6" />,
    },
    {
      title: "Easy Integration",
      description:
        "Seamlessly integrate with your existing phone systems and CRM platforms.",
      icon: <Clock className="w-6 h-6" />,
    },
    {
      title: "Customer Satisfaction",
      description: "Improve customer experience with consistent, professional service every time.",
      icon: <Heart className="w-6 h-6" />,
    },
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-left mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            Why Choose AI Voice Agents?
          </h2>
          <p className="text-lg text-white/70 max-w-3xl">
            Transform your customer service with intelligent voice agents that deliver exceptional experiences while reducing costs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative z-10 py-10 max-w-7xl mx-auto">
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
        <div className="absolute left-0 inset-y-0 h-6 group-hover/benefit:h-8 w-1 rounded-tr-full rounded-br-full bg-white/20 group-hover/benefit:bg-blue-500 transition-all duration-200 origin-center" />
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
