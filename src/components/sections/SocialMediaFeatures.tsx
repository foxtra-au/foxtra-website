import React from 'react';
import { MessageSquare, TrendingUp, Calendar, BarChart3 } from 'lucide-react';

export function SocialMediaFeatures() {
  const features = [
    {
      icon: <MessageSquare className="h-4 w-4" />,
      title: "Content Creation & Curation",
      description: "Professional content creation, graphic design, and curated posts tailored to your brand voice and audience."
    },
    {
      icon: <TrendingUp className="h-4 w-4" />,
      title: "Growth & Engagement Strategy",
      description: "Strategic planning to increase followers, boost engagement rates, and build a loyal community around your brand."
    },
    {
      icon: <Calendar className="h-4 w-4" />,
      title: "Content Calendar & Scheduling",
      description: "Organized content calendars with optimal posting times and automated scheduling across all platforms."
    },
    {
      icon: <BarChart3 className="h-4 w-4" />,
      title: "Analytics & Performance Tracking",
      description: "Detailed performance reports with insights, ROI tracking, and data-driven recommendations for improvement."
    }
  ];

  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex items-center space-x-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 group"
            >
              <div className="flex size-8 shrink-0 items-center justify-center rounded-md border border-white/20 text-white/60 transition-all duration-300 group-hover:text-black group-hover:border-white">
                {feature.icon}
              </div>
              <span className="text-white/90 font-medium text-lg tracking-wide">{feature.title}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
