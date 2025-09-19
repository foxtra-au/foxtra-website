import React from 'react';
import { Zap, GitBranch, Eye, Settings } from 'lucide-react';

export function AutomationFeatures() {
  const features = [
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Smart workflow triggers",
      description: "Intelligent triggers that automatically start workflows based on events, schedules, or conditions."
    },
    {
      icon: <GitBranch className="h-8 w-8" />,
      title: "Multi-platform integration",
      description: "Connect and sync data across 100+ popular apps and services you already use daily."
    },
    {
      icon: <Eye className="h-8 w-8" />,
      title: "Real-time monitoring",
      description: "Track workflow performance with live dashboards, alerts, and detailed execution logs."
    },
    {
      icon: <Settings className="h-8 w-8" />,
      title: "Custom automation rules",
      description: "Create personalized automation rules that match your specific business logic and requirements."
    }
  ];

  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="text-left mb-12">
          <h2 className="text-3xl font-bold text-white mb-4 font-sans">
            Our Automation Services
          </h2>
          <p className="text-lg text-white/70 max-w-3xl font-sans">
            We provide comprehensive automation services that transform your business processes, reduce manual work, and boost productivity.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 hover:bg-white/10 hover:border-white/20 transition-all duration-300 group"
            >
              <div className="flex items-center justify-center w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg mb-6 text-white/70 group-hover:text-white transition-colors duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-3 font-sans">
                {feature.title}
              </h3>
              <p className="text-white/70 font-sans">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
