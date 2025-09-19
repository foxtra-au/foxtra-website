import React from "react";
import { Check, Minus, MoveRight, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";

function GoogleAdsPricing() {
  // Helper function to determine if a row should have glossy background
  const getRowClass = (index: number) => {
    return index % 2 === 0 ? "" : "bg-white/10 backdrop-blur-sm";
  };

  // Define all features with their row index
  const features = [
    { name: "Monthly Ad Spend Management", starter: "Up to $5K", professional: "Up to $15K", enterprise: "Unlimited", isCheck: false, index: 0 },
    { name: "Campaign Setup & Optimization", starter: "✓", professional: "✓", enterprise: "✓", isCheck: true, index: 1 },
    { name: "Keyword Research & Strategy", starter: "✓", professional: "✓", enterprise: "✓", isCheck: true, index: 2 },
    { name: "Ad Copy Creation", starter: "5 variations", professional: "15 variations", enterprise: "Unlimited", isCheck: false, index: 3 },
    { name: "Landing Page Optimization", starter: "✓", professional: "✓", enterprise: "✓", isCheck: true, index: 4 },
    { name: "Conversion Tracking Setup", starter: "✓", professional: "✓", enterprise: "✓", isCheck: true, index: 5 },
    { name: "A/B Testing", starter: "Basic", professional: "Advanced", enterprise: "Advanced", isCheck: false, index: 6 },
    { name: "Audience Research", starter: "✓", professional: "✓", enterprise: "✓", isCheck: true, index: 7 },
    { name: "Bid Management", starter: "Manual", professional: "Automated", enterprise: "AI-Powered", isCheck: false, index: 8 },
    { name: "Performance Reporting", starter: "Monthly", professional: "Weekly", enterprise: "Daily", isCheck: false, index: 9 },
    { name: "Account Management", starter: "Email", professional: "Priority", enterprise: "Dedicated Manager", isCheck: false, index: 10 },
    { name: "Shopping Campaigns", starter: "—", professional: "✓", enterprise: "✓", isCheck: false, index: 11 },
    { name: "Display Network", starter: "—", professional: "✓", enterprise: "✓", isCheck: false, index: 12 },
    { name: "Video Campaigns", starter: "—", professional: "Basic", enterprise: "Advanced", isCheck: false, index: 13 },
  ];

  return (
    <div className="w-full py-20 lg:py-40">
      <div className="container mx-auto max-w-6xl">
        <div className="text-left mb-12">
          <h2 className="text-3xl font-bold text-white mb-4 font-sans">
            Google Ads Management Plans
          </h2>
          <p className="text-lg text-white/70 max-w-3xl font-sans">
            Choose the perfect Google Ads management plan to drive qualified traffic and maximize your ROI.
          </p>
        </div>
        <div className="grid text-left w-full grid-cols-3 lg:grid-cols-4 divide-x divide-white/10">
          <div className="col-span-3 lg:col-span-1"></div>
          <div className="px-3 py-1 md:px-6 md:py-4 gap-2 flex flex-col">
            <p className="text-2xl text-white font-sans">Starter</p>
            <p className="text-sm text-white/70 font-sans">
              Perfect for small businesses starting with Google Ads to drive initial traffic and leads.
            </p>
            <p className="flex flex-col lg:flex-row lg:items-center gap-2 text-xl mt-8">
              <span className="text-4xl text-white">$899</span>
              <span className="text-sm text-white/70"> / month</span>
            </p>
            <Button className="gap-4 mt-8 bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 hover:bg-yellow-500 hover:text-black hover:border-yellow-400 transition-all duration-300 drop-shadow-md">
              Get Started <MoveRight className="w-4 h-4" />
            </Button>
          </div>
          <div className="px-3 py-1 md:px-6 md:py-4 gap-2 flex flex-col border-2 border-yellow-500 rounded-lg relative">
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-yellow-500 text-black px-3 py-1 rounded-full text-xs font-medium">
              Most Popular
            </div>
            <p className="text-2xl text-white font-sans">Professional</p>
            <p className="text-sm text-white/70 font-sans">
              Comprehensive Google Ads management for growing businesses with advanced optimization and reporting.
            </p>
            <p className="flex flex-col lg:flex-row lg:items-center gap-2 text-xl mt-8">
              <span className="text-4xl text-white">$1,499</span>
              <span className="text-sm text-white/70"> / month</span>
            </p>
            <Button className="gap-4 mt-8 bg-rose-600 hover:bg-rose-700 text-white">
              Get Started <MoveRight className="w-4 h-4" />
            </Button>
          </div>
          <div className="px-3 py-1 md:px-6 md:py-4 gap-2 flex flex-col">
            <p className="text-2xl text-white font-sans">Enterprise</p>
            <p className="text-sm text-white/70 font-sans">
              Full-scale Google Ads strategy for large businesses with unlimited ad spend and dedicated support.
            </p>
            <p className="flex flex-col lg:flex-row lg:items-center gap-2 text-xl mt-8">
              <span className="text-4xl text-white">$2,499</span>
              <span className="text-sm text-white/70"> / month</span>
            </p>
            <Button className="gap-4 mt-8 bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 hover:bg-yellow-500 hover:text-black hover:border-yellow-400 transition-all duration-300 drop-shadow-md">
              Contact us <PhoneCall className="w-4 h-4" />
            </Button>
          </div>
          <div className="px-3 lg:px-6 col-span-3 lg:col-span-1 py-4">
            <b className="text-white font-sans">Features</b>
          </div>
          <div></div>
          <div></div>
          <div></div>
          
          {features.map((feature) => (
            <React.Fragment key={feature.name}>
              <div className={`px-3 lg:px-6 col-span-3 lg:col-span-1 py-4 text-white font-sans ${getRowClass(feature.index)}`}>
                {feature.name}
              </div>
              <div className={`px-3 py-1 md:px-6 md:py-4 flex justify-center ${getRowClass(feature.index)}`}>
                {feature.isCheck ? (
                  <Check className="w-4 h-4 text-yellow-500" />
                ) : feature.starter === "—" ? (
                  <Minus className="w-4 h-4 text-white/40" />
                ) : (
                  <p className="text-white/70 text-sm font-sans">{feature.starter}</p>
                )}
              </div>
              <div className={`px-3 py-1 md:px-6 md:py-4 flex justify-center ${getRowClass(feature.index)}`}>
                {feature.isCheck ? (
                  <Check className="w-4 h-4 text-yellow-500" />
                ) : feature.professional === "—" ? (
                  <Minus className="w-4 h-4 text-white/40" />
                ) : (
                  <p className="text-white/70 text-sm font-sans">{feature.professional}</p>
                )}
              </div>
              <div className={`px-3 py-1 md:px-6 md:py-4 flex justify-center ${getRowClass(feature.index)}`}>
                {feature.isCheck ? (
                  <Check className="w-4 h-4 text-yellow-500" />
                ) : feature.enterprise === "—" ? (
                  <Minus className="w-4 h-4 text-white/40" />
                ) : (
                  <p className="text-white/70 text-sm font-sans">{feature.enterprise}</p>
                )}
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}

export { GoogleAdsPricing };
