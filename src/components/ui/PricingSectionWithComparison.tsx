import { Check, Minus, MoveRight, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";

function Pricing() {
  return (
    <div className="w-full py-20 lg:py-40">
      <div className="container mx-auto">
        <div className="text-left mb-12">
          <h2 className="text-3xl font-bold text-white mb-4 font-sans">
            SEO Plans That Scale
          </h2>
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
              <span className="text-4xl text-white">$349</span>
              <span className="text-sm text-white/70"> / month</span>
            </p>
            <Button variant="outline" className="gap-4 mt-8 border-white/20 text-white hover:bg-white/10">
              Get Started <MoveRight className="w-4 h-4" />
            </Button>
          </div>
          <div className="px-3 py-1 md:px-6 md:py-4 gap-2 flex flex-col">
            <p className="text-2xl text-white font-sans">Professional</p>
            <p className="text-sm text-white/70 font-sans">
              Comprehensive SEO solution for growing businesses that need advanced optimization, content strategy, and detailed reporting.
            </p>
            <p className="flex flex-col lg:flex-row lg:items-center gap-2 text-xl mt-8">
              <span className="text-4xl text-white">$649</span>
              <span className="text-sm text-white/70"> / month</span>
            </p>
            <Button className="gap-4 mt-8 bg-rose-600 hover:bg-rose-700 text-white">
              Get Started <MoveRight className="w-4 h-4" />
            </Button>
          </div>
          <div className="px-3 py-1 md:px-6 md:py-4 gap-2 flex flex-col">
            <p className="text-2xl text-white font-sans">Enterprise</p>
            <p className="text-sm text-white/70 font-sans">
              Full-scale SEO strategy for large businesses with complex requirements, multiple locations, and enterprise-level support.
            </p>
            <p className="flex flex-col lg:flex-row lg:items-center gap-2 text-xl mt-8">
              <span className="text-4xl text-white">$1049</span>
              <span className="text-sm text-white/70"> / month</span>
            </p>
            <Button variant="outline" className="gap-4 mt-8 border-white/20 text-white hover:bg-white/10">
              Contact us <PhoneCall className="w-4 h-4" />
            </Button>
          </div>
          <div className="px-3 lg:px-6 col-span-3 lg:col-span-1 py-4">
            <b className="text-white font-sans">Features</b>
          </div>
          <div></div>
          <div></div>
          <div></div>
          <div className="px-3 lg:px-6 col-span-3 lg:col-span-1 py-4 text-white font-sans">Technical SEO Audit</div>
          <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center">
            <Check className="w-4 h-4 text-green-400" />
          </div>
          <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center">
            <Check className="w-4 h-4 text-green-400" />
          </div>
          <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center">
            <Check className="w-4 h-4 text-green-400" />
          </div>
          <div className="px-3 lg:px-6 col-span-3 lg:col-span-1 py-4 text-white font-sans">
            AI Content Generation
          </div>
          <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center">
            <Minus className="w-4 h-4 text-white/40" />
          </div>
          <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center">
            <Check className="w-4 h-4 text-green-400" />
          </div>
          <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center">
            <Check className="w-4 h-4 text-green-400" />
          </div>
          <div className="px-3 lg:px-6 col-span-3 lg:col-span-1 py-4 text-white font-sans">
            Keyword Research & Strategy
          </div>
          <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center">
            <p className="text-white/70 text-sm font-sans">Basic</p>
          </div>
          <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center">
            <Check className="w-4 h-4 text-green-400" />
          </div>
          <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center">
            <Check className="w-4 h-4 text-green-400" />
          </div>
          <div className="px-3 lg:px-6 col-span-3 lg:col-span-1 py-4 text-white font-sans">
            On-Page Optimization
          </div>
          <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center">
            <p className="text-white/70 text-sm font-sans">Up to 10 pages</p>
          </div>
          <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center">
            <p className="text-white/70 text-sm font-sans">Up to 50 pages</p>
          </div>
          <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center">
            <p className="text-white/70 text-sm font-sans">Unlimited pages</p>
          </div>
          <div className="px-3 lg:px-6 col-span-3 lg:col-span-1 py-4 text-white font-sans">
            Local SEO Optimization
          </div>
          <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center">
            <Check className="w-4 h-4 text-green-400" />
          </div>
          <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center">
            <Check className="w-4 h-4 text-green-400" />
          </div>
          <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center">
            <Check className="w-4 h-4 text-green-400" />
          </div>
          <div className="px-3 lg:px-6 col-span-3 lg:col-span-1 py-4 text-white font-sans">
            Performance Analytics
          </div>
          <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center">
            <Minus className="w-4 h-4 text-white/40" />
          </div>
          <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center">
            <Check className="w-4 h-4 text-green-400" />
          </div>
          <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center">
            <Check className="w-4 h-4 text-green-400" />
          </div>
          <div className="px-3 lg:px-6 col-span-3 lg:col-span-1 py-4 text-white font-sans">
            Link Building Strategy
          </div>
          <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center">
            <Minus className="w-4 h-4 text-white/40" />
          </div>
          <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center">
            <p className="text-white/70 text-sm font-sans">5 links/month</p>
          </div>
          <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center">
            <p className="text-white/70 text-sm font-sans">15 links/month</p>
          </div>
          <div className="px-3 lg:px-6 col-span-3 lg:col-span-1 py-4 text-white font-sans">
            Competitor Analysis
          </div>
          <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center">
            <Minus className="w-4 h-4 text-white/40" />
          </div>
          <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center">
            <Check className="w-4 h-4 text-green-400" />
          </div>
          <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center">
            <Check className="w-4 h-4 text-green-400" />
          </div>
          <div className="px-3 lg:px-6 col-span-3 lg:col-span-1 py-4 text-white font-sans">
            Monthly Reporting
          </div>
          <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center">
            <p className="text-white/70 text-sm font-sans">Basic</p>
          </div>
          <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center">
            <Check className="w-4 h-4 text-green-400" />
          </div>
          <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center">
            <p className="text-white/70 text-sm font-sans">Advanced</p>
          </div>
          <div className="px-3 lg:px-6 col-span-3 lg:col-span-1 py-4 text-white font-sans">
            Support Level
          </div>
          <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center">
            <p className="text-white/70 text-sm font-sans">Email support</p>
          </div>
          <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center">
            <p className="text-white/70 text-sm font-sans">Priority support</p>
          </div>
          <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center">
            <p className="text-white/70 text-sm font-sans">Dedicated manager</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Pricing };