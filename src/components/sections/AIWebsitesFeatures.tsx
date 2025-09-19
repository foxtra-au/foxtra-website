import React from 'react';
import { Globe, Zap, Smartphone, Shield } from 'lucide-react';

export function AIWebsitesFeatures() {
  const features = [
    {
      icon: <Globe className="h-4 w-4" />,
      title: "AI-Powered Design",
      description: "Intelligent design generation that creates beautiful, professional websites tailored to your brand."
    },
    {
      icon: <Zap className="h-4 w-4" />,
      title: "Lightning Fast Delivery",
      description: "Get your website live in just 4 hours with our advanced AI development process."
    },
    {
      icon: <Smartphone className="h-4 w-4" />,
      title: "Mobile Responsive",
      description: "Perfect display across all devices with responsive design that adapts to any screen size."
    },
    {
      icon: <Shield className="h-4 w-4" />,
      title: "Secure & Optimized",
      description: "Built with security best practices and optimized for speed, SEO, and performance."
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
