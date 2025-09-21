import React from "react";
import { Check, Minus, MoveRight, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { SeoPricingIcon } from "@/components/ui/SeoPricingIcon";

function Pricing() {
  // Helper function to determine if a row should have glossy background
  const getRowClass = (index: number) => {
    return index % 2 === 0 ? "" : "bg-white/10 backdrop-blur-sm";
  };

  // Define all features with their row index
  const features = [
    { name: "Number of Keywords", starter: "10", professional: "25", enterprise: "50", isCheck: false, index: 0 },
    { name: "Website Audit", starter: "✓", professional: "✓", enterprise: "✓", isCheck: true, index: 1 },
    { name: "Keyword Analysis & Optimization", starter: "✓", professional: "✓", enterprise: "✓", isCheck: true, index: 2 },
    { name: "Meta Tags Optimization", starter: "✓", professional: "✓", enterprise: "✓", isCheck: true, index: 3 },
    { name: "Alt Tags Optimization", starter: "✓", professional: "✓", enterprise: "✓", isCheck: true, index: 4 },
    { name: "Complete Page Optimization", starter: "✓", professional: "✓", enterprise: "✓", isCheck: true, index: 5 },
    { name: "Location & Geotargeting", starter: "✓", professional: "✓", enterprise: "✓", isCheck: true, index: 6 },
    { name: "Canonical Tags Optimization", starter: "✓", professional: "✓", enterprise: "✓", isCheck: true, index: 7 },
    { name: "Schema Markup Implementation", starter: "✓", professional: "✓", enterprise: "✓", isCheck: true, index: 8 },
    { name: "Search Console Analysis", starter: "✓", professional: "✓", enterprise: "✓", isCheck: true, index: 9 },
    { name: "Sitemap Submission", starter: "✓", professional: "✓", enterprise: "✓", isCheck: true, index: 10 },
    { name: "Robots.txt File Optimization", starter: "✓", professional: "✓", enterprise: "✓", isCheck: true, index: 11 },
    { name: "Google Analytics Setup", starter: "✓", professional: "✓", enterprise: "✓", isCheck: true, index: 12 },
    { name: "Page Speed Optimization", starter: "✓", professional: "✓", enterprise: "✓", isCheck: true, index: 13 },
    { name: "OnSite Article Post", starter: "2", professional: "3", enterprise: "5", isCheck: false, index: 14 },
    { name: "Backlinks Creation", starter: "150", professional: "300", enterprise: "500", isCheck: false, index: 15 },
    { name: "Guest Post", starter: "2", professional: "3", enterprise: "5", isCheck: false, index: 16 },
    { name: "Blog Post", starter: "2", professional: "3", enterprise: "5", isCheck: false, index: 17 },
    { name: "Reporting", starter: "Monthly", professional: "Every 15 Days", enterprise: "Weekly", isCheck: false, index: 18 },
  ];

  return (
    <div className="w-full py-20 lg:py-40">
      <div className="max-w-6xl mx-auto">
        <div className="text-left mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg flex items-center justify-center">
              <SeoPricingIcon className="w-6 h-6 text-yellow-500" />
            </div>
            <h2 className="text-3xl font-bold text-white font-sans">
              SEO Plans That Scale
            </h2>
          </div>
          <p className="text-lg text-white/70 max-w-3xl font-sans">
            Choose the perfect SEO plan for your business growth.
          </p>
        </div>
        <div className="grid text-left w-full grid-cols-3 lg:grid-cols-4 divide-x divide-white/10">
          <div className="col-span-3 lg:col-span-1"></div>
          <div className="px-3 py-1 md:px-6 md:py-4 gap-2 flex flex-col">
            <p className="text-2xl text-white font-sans">Starter</p>
            <p className="text-sm text-white/70 font-sans">
              Perfect for small businesses and startups looking to establish their online presence with essential SEO fundamentals.
            </p>
            <p className="flex flex-col lg:flex-row lg:items-center gap-2 text-xl mt-8">
              <span className="text-4xl text-white font-bold">$349</span>
              <span className="text-sm text-white/70"> / month</span>
            </p>
            <Button asChild className="gap-4 mt-8 bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 hover:bg-yellow-500 hover:text-black hover:border-yellow-400 transition-all duration-300 drop-shadow-md">
              <a href="/bookings">
                Get Started <MoveRight className="w-4 h-4" />
              </a>
            </Button>
          </div>
          <div className="px-3 py-1 md:px-6 md:py-4 gap-2 flex flex-col border-2 border-yellow-500 rounded-lg relative">
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-yellow-500 text-black px-3 py-1 rounded-full text-xs font-medium">
              Most Popular
            </div>
            <p className="text-2xl text-white font-sans">Professional</p>
            <p className="text-sm text-white/70 font-sans">
              Comprehensive SEO solution for growing businesses that need advanced optimization, content strategy, and detailed reporting.
            </p>
            <p className="flex flex-col lg:flex-row lg:items-center gap-2 text-xl mt-8">
              <span className="text-4xl text-white font-bold">$649</span>
              <span className="text-sm text-white/70"> / month</span>
            </p>
            <Button asChild className="gap-4 mt-8 bg-rose-600 hover:bg-rose-700 text-white">
              <a href="/bookings">
                Get Started <MoveRight className="w-4 h-4" />
              </a>
            </Button>
          </div>
          <div className="px-3 py-1 md:px-6 md:py-4 gap-2 flex flex-col">
            <p className="text-2xl text-white font-sans">Enterprise</p>
            <p className="text-sm text-white/70 font-sans">
              Full-scale SEO strategy for large businesses with complex requirements, multiple locations, and enterprise-level support.
            </p>
            <p className="flex flex-col lg:flex-row lg:items-center gap-2 text-xl mt-8">
              <span className="text-4xl text-white font-bold">$1049</span>
              <span className="text-sm text-white/70"> / month</span>
            </p>
            <Button asChild className="gap-4 mt-8 bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 hover:bg-yellow-500 hover:text-black hover:border-yellow-400 transition-all duration-300 drop-shadow-md">
              <a href="/bookings">
                Contact us <PhoneCall className="w-4 h-4" />
              </a>
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
                ) : (
                  <p className="text-white/70 text-sm font-sans">{feature.starter}</p>
                )}
              </div>
              <div className={`px-3 py-1 md:px-6 md:py-4 flex justify-center ${getRowClass(feature.index)}`}>
                {feature.isCheck ? (
                  <Check className="w-4 h-4 text-yellow-500" />
                ) : (
                  <p className="text-white/70 text-sm font-sans">{feature.professional}</p>
                )}
              </div>
              <div className={`px-3 py-1 md:px-6 md:py-4 flex justify-center ${getRowClass(feature.index)}`}>
                {feature.isCheck ? (
                  <Check className="w-4 h-4 text-yellow-500" />
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

export { Pricing };