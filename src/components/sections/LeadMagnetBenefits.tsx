import { cn } from "@/lib/utils";
import {
  Zap,
  TrendingUp,
  Shield,
  Clock,
  CheckCircle,
  DollarSign,
  Users,
  Target,
} from "lucide-react";

export function LeadMagnetBenefits() {
  const benefits = [
    {
      title: "Instant Setup",
      description:
        "No waiting, activate it on your website right away. Get your lead capture system running in minutes, not days.",
      icon: <Zap className="w-6 h-6" />,
    },
    {
      title: "Faster Conversions",
      description:
        "Turn enquiries into clients quicker with streamlined onboarding process that reduces friction for your prospects.",
      icon: <TrendingUp className="w-6 h-6" />,
    },
    {
      title: "Higher Quality Leads",
      description:
        "Ensure only genuine prospects reach your business with SMS verification and smart form validation.",
      icon: <Shield className="w-6 h-6" />,
    },
    {
      title: "Professional Image",
      description:
        "Show your clients you are modern, responsive, and efficient with a sophisticated lead capture experience.",
      icon: <Users className="w-6 h-6" />,
    },
    {
      title: "Reduced Admin Time",
      description:
        "Automate the initial steps of the client journey so you can focus on delivering value instead of chasing paperwork.",
      icon: <Clock className="w-6 h-6" />,
    },
    {
      title: "Smart Data Collection",
      description:
        "Capture comprehensive client information including business details, location, and specific needs in one form.",
      icon: <Target className="w-6 h-6" />,
    },
    {
      title: "Spam Protection",
      description:
        "Built-in verification systems protect your business from fake enquiries and ensure you only deal with genuine prospects.",
      icon: <CheckCircle className="w-6 h-6" />,
    },
    {
      title: "Cost Effective",
      description:
        "Increase your lead conversion rate without expensive marketing campaigns or complex lead generation systems.",
      icon: <DollarSign className="w-6 h-6" />,
    },
  ];

  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="text-left mb-12">
          <h2 className="text-3xl font-bold text-white mb-4 font-sans">
            Benefits for Your Firm
          </h2>
          <p className="text-lg text-white/70 max-w-3xl font-sans">
            Our Lead Magnet doesn't just collect data—it builds trust, reduces admin time, and makes your firm more approachable to new clients.
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
        <div className="absolute left-0 inset-y-0 h-6 group-hover/benefit:h-8 w-1 rounded-tr-full rounded-br-full bg-rose-600 group-hover/benefit:bg-rose-500 transition-all duration-200 origin-center" />
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
