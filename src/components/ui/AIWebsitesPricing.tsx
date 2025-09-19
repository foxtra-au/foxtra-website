'use client';

import { Button } from "@/components/ui/Button";

export function AIWebsitesPricing() {
  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="text-left mb-12">
          <h2 className="text-3xl font-bold text-white mb-4 font-sans">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg text-white/70 max-w-3xl font-sans">
            One-time setup fee with affordable monthly management. No hidden costs, no surprises.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 relative">
            {/* Popular Badge */}
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <span className="bg-yellow-500 text-black px-4 py-1 rounded-full text-sm font-medium">
                Most Popular Choice
              </span>
            </div>
            
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-white mb-4 font-sans">
                AI Website Package
              </h3>
              
              {/* Pricing */}
              <div className="mb-6">
                <div className="text-4xl font-bold text-white mb-2 font-sans">
                  $499
                  <span className="text-lg text-white/70 font-normal"> setup fee</span>
                </div>
                <div className="text-xl text-white/70 font-sans">
                  + $45/month management
                </div>
              </div>

              <p className="text-white/70 font-sans mb-8">
                Professional AI-powered website delivered in 4 hours with ongoing management and support.
              </p>
            </div>

            {/* Features */}
            <div className="space-y-4 mb-8">
              <h4 className="text-lg font-semibold text-white mb-4 font-sans">What's Included:</h4>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div className="flex items-center text-white/70 font-sans">
                    <svg className="w-5 h-5 text-yellow-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    AI-Powered Website Design
                  </div>
                  <div className="flex items-center text-white/70 font-sans">
                    <svg className="w-5 h-5 text-yellow-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    4-Hour Delivery Promise
                  </div>
                  <div className="flex items-center text-white/70 font-sans">
                    <svg className="w-5 h-5 text-yellow-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Mobile Responsive Design
                  </div>
                  <div className="flex items-center text-white/70 font-sans">
                    <svg className="w-5 h-5 text-yellow-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    SEO Optimization
                  </div>
                  <div className="flex items-center text-white/70 font-sans">
                    <svg className="w-5 h-5 text-yellow-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Fast Loading Speed
                  </div>
                  <div className="flex items-center text-white/70 font-sans">
                    <svg className="w-5 h-5 text-yellow-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Secure Hosting
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center text-white/70 font-sans">
                    <svg className="w-5 h-5 text-yellow-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    SSL Certificate
                  </div>
                  <div className="flex items-center text-white/70 font-sans">
                    <svg className="w-5 h-5 text-yellow-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Performance Analytics
                  </div>
                  <div className="flex items-center text-white/70 font-sans">
                    <svg className="w-5 h-5 text-yellow-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Monthly Updates & Maintenance
                  </div>
                  <div className="flex items-center text-white/70 font-sans">
                    <svg className="w-5 h-5 text-yellow-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Content Management System
                  </div>
                  <div className="flex items-center text-white/70 font-sans">
                    <svg className="w-5 h-5 text-yellow-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Email Support
                  </div>
                  <div className="flex items-center text-white/70 font-sans">
                    <svg className="w-5 h-5 text-yellow-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Domain Setup (if needed)
                  </div>
                </div>
              </div>
            </div>

            <Button className="w-full bg-rose-600 hover:bg-rose-700 text-white">
              Get Your AI Website Now
            </Button>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8">
            <h3 className="text-xl font-semibold text-white mb-4 font-sans">
              No Hidden Fees, No Surprises
            </h3>
            <div className="grid md:grid-cols-3 gap-6 text-white/70 font-sans">
              <div>
                <h4 className="font-semibold text-white mb-2">One-Time Setup</h4>
                <p>Pay $499 once and your website is built and delivered in 4 hours</p>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-2">Monthly Management</h4>
                <p>Just $45/month for hosting, updates, maintenance, and support</p>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-2">Cancel Anytime</h4>
                <p>No long-term contracts. Cancel your monthly service anytime</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
