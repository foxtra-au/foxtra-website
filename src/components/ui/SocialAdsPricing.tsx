'use client';

import { Button } from "@/components/ui/Button";

export function SocialAdsPricing() {
  const plans = [
    {
      name: "Starter",
      price: "$599",
      period: "per month",
      description: "Perfect for small businesses getting started with social media advertising",
      features: [
        "2 Social Media Platforms",
        "Ad Campaign Setup",
        "Basic Targeting",
        "Monthly Performance Report",
        "Email Support"
      ]
    },
    {
      name: "Professional",
      price: "$999",
      period: "per month",
      description: "Ideal for growing businesses with multiple campaigns",
      popular: true,
      features: [
        "4 Social Media Platforms",
        "Advanced Campaign Setup",
        "Detailed Audience Targeting",
        "A/B Testing",
        "Bi-weekly Performance Reports",
        "Priority Support",
        "Budget Optimization"
      ]
    },
    {
      name: "Enterprise",
      price: "$1,499",
      period: "per month",
      description: "For established brands with high-volume ad campaigns",
      features: [
        "All Social Media Platforms",
        "Custom Campaign Strategy",
        "Advanced Analytics Dashboard",
        "Multi-variant Testing",
        "Weekly Performance Reports",
        "Dedicated Account Manager",
        "24/7 Support",
        "Custom Reporting"
      ]
    }
  ];

  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="text-left mb-12">
          <h2 className="text-3xl font-bold text-white mb-4 font-sans">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg text-white/70 max-w-3xl font-sans">
            Choose the perfect plan for your social media advertising needs. All plans include setup and management.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              className={`relative bg-white/5 backdrop-blur-sm border rounded-xl p-8 ${
                plan.popular 
                  ? 'border-2 border-yellow-500' 
                  : 'border-white/10'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-yellow-500 text-black px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-2 font-sans">
                  {plan.name}
                </h3>
                <div className="text-4xl font-bold text-white mb-1 font-sans">
                  {plan.price}
                  <span className="text-lg text-white/70 font-normal">/{plan.period}</span>
                </div>
                <p className="text-white/70 font-sans text-sm">
                  {plan.description}
                </p>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-white/70 font-sans">
                    <svg className="w-5 h-5 text-yellow-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              <Button
                className={`w-full ${
                  plan.popular
                    ? 'bg-rose-600 hover:bg-rose-700 text-white'
                    : 'bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 hover:bg-yellow-500 hover:text-black hover:border-yellow-400'
                }`}
              >
                Get Started
              </Button>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8">
            <h3 className="text-xl font-semibold text-white mb-4 font-sans">
              What's Included in All Plans
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6 text-white/70 font-sans">
                <h4 className="font-semibold text-white mb-2">Setup & Launch</h4>
                <p>Complete ad account setup and campaign launch</p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6 text-white/70 font-sans">
                <h4 className="font-semibold text-white mb-2">Ongoing Management</h4>
                <p>Daily monitoring and optimization of your campaigns</p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6 text-white/70 font-sans">
                <h4 className="font-semibold text-white mb-2">Performance Reports</h4>
                <p>Regular reports showing ROI and campaign performance</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
