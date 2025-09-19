import { cn } from "@/lib/utils";
import {
  Clock,
  Target,
  TrendingUp,
  Users,
  Shield,
  Zap,
  DollarSign,
  BarChart3,
} from "lucide-react";

export function SocialMediaBenefits() {
  const benefits = [
    {
      title: "Save 20+ Hours Weekly",
      description:
        "Focus on your core business while we handle content creation, posting, and community management.",
      icon: <Clock className="w-6 h-6" />,
    },
    {
      title: "Expert Strategy & Execution",
      description:
        "Leverage our team's expertise in social media algorithms, trends, and platform-specific best practices.",
      icon: <Target className="w-6 h-6" />,
    },
    {
      title: "Consistent Brand Presence",
      description:
        "Maintain a professional, cohesive brand image across all platforms with regular, high-quality content.",
      icon: <Users className="w-6 h-6" />,
    },
    {
      title: "Measurable Growth Results",
      description:
        "Track and optimize performance with detailed analytics, leading to increased followers and engagement.",
      icon: <TrendingUp className="w-6 h-6" />,
    },
    {
      title: "24/7 Community Management",
      description:
        "Respond to comments, messages, and mentions promptly to build stronger customer relationships.",
      icon: <Shield className="w-6 h-6" />,
    },
    {
      title: "Stay Ahead of Trends",
      description:
        "Our team monitors social media trends and implements viral content strategies before your competitors.",
      icon: <Zap className="w-6 h-6" />,
    },
    {
      title: "Cost-Effective Solution",
      description:
        "Avoid hiring in-house social media managers and expensive tools while getting professional results.",
      icon: <DollarSign className="w-6 h-6" />,
    },
    {
      title: "Data-Driven Decisions",
      description:
        "Make informed marketing decisions based on comprehensive analytics and performance insights.",
      icon: <BarChart3 className="w-6 h-6" />,
    },
  ];

  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="text-left mb-12">
          <h2 className="text-3xl font-bold text-white mb-4 font-sans">
            Why Delegate Your Social Media Management?
          </h2>
          <p className="text-lg text-white/70 max-w-3xl font-sans">
            Social media management is time-consuming and requires constant attention. Here's why delegating to experts makes business sense.
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
