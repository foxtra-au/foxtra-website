import { cn } from "@/lib/utils";
import {
  Clock,
  DollarSign,
  TrendingUp,
  Users,
  Zap,
  Shield,
  Globe,
  BarChart3,
} from "lucide-react";

export function AIWebsitesBenefits() {
  const benefits = [
    {
      title: "4-Hour Delivery",
      description:
        "Get your professional website live in just 4 hours. No waiting weeks or months for development.",
      icon: <Clock className="w-6 h-6" />,
    },
    {
      title: "Affordable Pricing",
      description:
        "Professional website for just $499 with low monthly management fees. No hidden costs or surprises.",
      icon: <DollarSign className="w-6 h-6" />,
    },
    {
      title: "AI-Powered Efficiency",
      description:
        "Leverage advanced AI technology to create beautiful, functional websites faster than traditional methods.",
      icon: <Zap className="w-6 h-6" />,
    },
    {
      title: "Professional Design",
      description:
        "Get a modern, professional website that builds trust with your customers and reflects your brand quality.",
      icon: <Globe className="w-6 h-6" />,
    },
    {
      title: "Mobile-First Approach",
      description:
        "Your website will look perfect on all devices, ensuring you don't lose customers due to poor mobile experience.",
      icon: <Users className="w-6 h-6" />,
    },
    {
      title: "SEO Optimized",
      description:
        "Built with SEO best practices to help your website rank higher in search results and attract more customers.",
      icon: <TrendingUp className="w-6 h-6" />,
    },
    {
      title: "Secure & Reliable",
      description:
        "Enterprise-grade security and hosting ensures your website is always available and protected from threats.",
      icon: <Shield className="w-6 h-6" />,
    },
    {
      title: "Performance Analytics",
      description:
        "Track your website's performance with built-in analytics to understand your visitors and optimize accordingly.",
      icon: <BarChart3 className="w-6 h-6" />,
    },
  ];

  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="text-left mb-12">
          <h2 className="text-3xl font-bold text-white mb-4 font-sans">
            Why Choose Our AI Website Service?
          </h2>
          <p className="text-lg text-white/70 max-w-3xl font-sans">
            Get a professional website that works for your business without the wait time, complexity, or high costs of traditional web development.
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
