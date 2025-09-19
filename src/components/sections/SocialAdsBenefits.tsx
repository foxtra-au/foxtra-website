import { cn } from "@/lib/utils";
import {
  Target,
  TrendingUp,
  Users,
  DollarSign,
  Clock,
  BarChart3,
  Zap,
  Shield,
} from "lucide-react";

export function SocialAdsBenefits() {
  const benefits = [
    {
      title: "Precise Audience Targeting",
      description:
        "Reach the exact customers who are most likely to convert using advanced demographic, interest, and behavioral targeting.",
      icon: <Target className="w-6 h-6" />,
    },
    {
      title: "Immediate Results",
      description:
        "See measurable results within days, not months. Social media ads deliver instant visibility and traffic to your business.",
      icon: <Zap className="w-6 h-6" />,
    },
    {
      title: "Scalable Growth",
      description:
        "Start small and scale up based on performance. Increase your ad spend as you see positive ROI and conversions.",
      icon: <TrendingUp className="w-6 h-6" />,
    },
    {
      title: "Cost-Effective Marketing",
      description:
        "Pay only for results with performance-based advertising. Much more cost-effective than traditional marketing channels.",
      icon: <DollarSign className="w-6 h-6" />,
    },
    {
      title: "24/7 Campaign Monitoring",
      description:
        "Your ads run around the clock, reaching customers at all hours while you focus on running your business.",
      icon: <Clock className="w-6 h-6" />,
    },
    {
      title: "Detailed Performance Insights",
      description:
        "Track every click, conversion, and dollar spent with comprehensive analytics and detailed performance reports.",
      icon: <BarChart3 className="w-6 h-6" />,
    },
    {
      title: "Multi-Platform Reach",
      description:
        "Connect with customers across Facebook, Instagram, LinkedIn, Twitter, and other platforms from one campaign.",
      icon: <Users className="w-6 h-6" />,
    },
    {
      title: "Professional Ad Management",
      description:
        "Let experts handle your ad campaigns while you focus on your core business. No need to learn complex ad platforms.",
      icon: <Shield className="w-6 h-6" />,
    },
  ];

  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="text-left mb-12">
          <h2 className="text-3xl font-bold text-white mb-4 font-sans">
            Why Choose Our Social Media Advertising?
          </h2>
          <p className="text-lg text-white/70 max-w-3xl font-sans">
            Transform your business with targeted social media advertising that delivers real results and measurable ROI.
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
        <div className="absolute left-0 inset-y-0 h-6 group-hover/benefit:h-8 w-1 rounded-tr-full rounded-br-full bg-yellow-500 group-hover/benefit:bg-yellow-400 transition-all duration-200 origin-center" />
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
