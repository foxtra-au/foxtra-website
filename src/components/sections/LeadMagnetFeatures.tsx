import React from 'react';
import { Target, Zap, Shield, Users } from 'lucide-react';

export function LeadMagnetFeatures() {
  const features = [
    {
      icon: <Target className="h-4 w-4" />,
      title: "Seamless Lead Capture",
      description: "Collect both personal and business enquiry details along with client needs in one smart form—making your onboarding process faster and more efficient."
    },
    {
      icon: <Zap className="h-4 w-4" />,
      title: "Smarter Form Experience",
      description: "Built-in smart completion elements like business name and location auto-fill ensure a smooth experience for your prospects."
    },
    {
      icon: <Shield className="h-4 w-4" />,
      title: "Verified, Genuine Leads",
      description: "Integrated SMS confirmation validates client details so your business stays protected from spam and fake enquiries."
    },
    {
      icon: <Users className="h-4 w-4" />,
      title: "Enhanced Client Confidence",
      description: "Prospects feel assured when their enquiry is acknowledged instantly, giving them the confidence to move forward with you."
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
