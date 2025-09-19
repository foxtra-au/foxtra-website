import React from 'react';
import { Target, TrendingUp, DollarSign, BarChart3 } from 'lucide-react';

export function SocialAdsFeatures() {
  const features = [
    {
      icon: <Target className="h-4 w-4" />,
      title: "Audience Targeting",
      description: "Precise demographic, interest, and behavioral targeting to reach your ideal customers."
    },
    {
      icon: <TrendingUp className="h-4 w-4" />,
      title: "Campaign Optimization",
      description: "Continuous monitoring and optimization to maximize ROI and reduce cost per acquisition."
    },
    {
      icon: <DollarSign className="h-4 w-4" />,
      title: "Budget Management",
      description: "Strategic budget allocation across platforms and campaigns for maximum impact."
    },
    {
      icon: <BarChart3 className="h-4 w-4" />,
      title: "Performance Analytics",
      description: "Detailed reporting and insights to track conversions, engagement, and campaign success."
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
