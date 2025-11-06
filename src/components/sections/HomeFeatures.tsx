'use client';

import { motion } from "framer-motion";
import { Briefcase, Code, Smartphone, Search, Target, Share2, Cloud, Brain } from "lucide-react";
import Link from "next/link";

interface Feature {
  icon: React.ElementType;
  title: string;
  description: string;
  href: string;
}

export function HomeFeatures() {
  const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        delay: 0.5 + i * 0.2,
        ease: [0.25, 0.4, 0.25, 1],
      },
    }),
  };

  const features: Feature[] = [
    {
      icon: Briefcase,
      title: "CTO Services",
      description: "Technology partnership for full-service tech solutions",
      href: "/cto-services"
    },
    {
      icon: Code,
      title: "Custom Development",
      description: "Custom apps that fit your workflows and business needs",
      href: "/services/custom-development"
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile solutions",
      href: "/services/mobile-app-development"
    },
    {
      icon: Search,
      title: "AI SEO",
      description: "Technical fixes and content at scale for better rankings",
      href: "/services/ai-seo"
    },
    {
      icon: Target,
      title: "Google Ads",
      description: "High-intent campaigns with smart bidding strategies",
      href: "/services/google-ads"
    },
    {
      icon: Share2,
      title: "Social Media Management",
      description: "Calendar, creation, and community management",
      href: "/services/social-media-management"
    },
    {
      icon: Cloud,
      title: "Cloud Management",
      description: "Architecture and DevOps optimization across AWS/Azure/GCP",
      href: "/services/cloud-management"
    },
    {
      icon: Brain,
      title: "AI & Automation",
      description: "Intelligent automation and AI agents to streamline business processes",
      href: "/cto-services/ai-automation-strategy"
    }
  ];

  return (
    <motion.div
      custom={2}
      variants={fadeUpVariants}
      initial="hidden"
      animate="visible"
      className="max-w-6xl mx-auto mt-8"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, index) => {
          const IconComponent = feature.icon;
          return (
            <Link key={index} href={feature.href} className="h-full">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + index * 0.1 }}
                className="flex flex-col items-center text-center bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 group cursor-pointer h-full min-h-[200px]"
                onMouseEnter={(e) => {
                  const iconDiv = e.currentTarget.querySelector('div[data-icon]') as HTMLElement;
                  if (iconDiv) iconDiv.style.backgroundColor = '#FFCC02';
                }}
                onMouseLeave={(e) => {
                  const iconDiv = e.currentTarget.querySelector('div[data-icon]') as HTMLElement;
                  if (iconDiv) iconDiv.style.backgroundColor = 'transparent';
                }}
              >
                <div data-icon className="flex size-12 shrink-0 items-center justify-center rounded-md border border-white/20 text-white/60 transition-all duration-300 group-hover:text-black group-hover:border-white mb-4" onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#FFCC02'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}>
                  <IconComponent className="h-6 w-6 flex-none" />
                </div>
                <div className="flex-1 flex flex-col justify-center">
                  <h3 className="text-white/90 font-semibold text-lg mb-2">{feature.title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed">{feature.description}</p>
                </div>
              </motion.div>
            </Link>
          );
        })}
      </div>
    </motion.div>
  );
}
