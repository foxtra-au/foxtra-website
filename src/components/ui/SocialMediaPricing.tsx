'use client';

import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Check, X } from "lucide-react";

export function SocialMediaPricing() {
  const plans = [
    {
      name: "Starter",
      price: "$899",
      description: "Perfect for small businesses getting started",
      features: [
        { name: "2 Social Media Platforms", included: true },
        { name: "15 Posts per Month", included: true },
        { name: "Basic Content Creation", included: true },
        { name: "Monthly Analytics Report", included: true },
        { name: "Community Management", included: true },
        { name: "Hashtag Research", included: true },
        { name: "Content Calendar", included: true },
        { name: "Email Support", included: true },
        { name: "Custom Graphics (5/month)", included: true },
        { name: "Video Content", included: false },
        { name: "Influencer Outreach", included: false },
        { name: "Paid Ad Management", included: false },
        { name: "Advanced Analytics", included: false },
        { name: "Priority Support", included: false },
        { name: "Strategy Consultation", included: false }
      ]
    },
    {
      name: "Professional",
      price: "$1,499",
      description: "Ideal for growing businesses",
      popular: true,
      features: [
        { name: "4 Social Media Platforms", included: true },
        { name: "30 Posts per Month", included: true },
        { name: "Advanced Content Creation", included: true },
        { name: "Bi-weekly Analytics Reports", included: true },
        { name: "Community Management", included: true },
        { name: "Hashtag Research", included: true },
        { name: "Content Calendar", included: true },
        { name: "Priority Support", included: true },
        { name: "Custom Graphics (15/month)", included: true },
        { name: "Video Content (5/month)", included: true },
        { name: "Influencer Outreach", included: true },
        { name: "Paid Ad Management", included: true },
        { name: "Advanced Analytics", included: true },
        { name: "Strategy Consultation", included: true },
        { name: "Competitor Analysis", included: true }
      ]
    },
    {
      name: "Enterprise",
      price: "$2,499",
      description: "For established brands with high volume needs",
      features: [
        { name: "Unlimited Social Platforms", included: true },
        { name: "60 Posts per Month", included: true },
        { name: "Premium Content Creation", included: true },
        { name: "Weekly Analytics Reports", included: true },
        { name: "24/7 Community Management", included: true },
        { name: "Advanced Hashtag Strategy", included: true },
        { name: "Multi-channel Content Calendar", included: true },
        { name: "Dedicated Account Manager", included: true },
        { name: "Unlimited Custom Graphics", included: true },
        { name: "Video Content (20/month)", included: true },
        { name: "Advanced Influencer Outreach", included: true },
        { name: "Full Paid Ad Management", included: true },
        { name: "Custom Analytics Dashboard", included: true },
        { name: "White-glove Support", included: true },
        { name: "Monthly Strategy Sessions", included: true }
      ]
    }
  ];

  const getRowClass = (index: number) => {
    return index % 2 === 1 ? "bg-white/10 backdrop-blur-sm" : "";
  };

  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="text-left mb-12">
          <Badge className="mb-4 bg-white/10 text-white border-white/20">
            Social Media Management
          </Badge>
          <h2 className="text-3xl font-bold text-white mb-4 font-sans">
            Choose Your Perfect Plan
          </h2>
          <p className="text-lg text-white/70 max-w-4xl font-sans">
            Transparent pricing for comprehensive social media management services. Scale your social presence with our proven strategies.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
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
                  <Badge className="bg-yellow-500 text-black px-4 py-1">
                    Most Popular
                  </Badge>
                </div>
              )}
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-2 font-sans">
                  {plan.name}
                </h3>
                <div className="text-4xl font-bold text-white mb-2 font-sans">
                  {plan.price}
                  <span className="text-lg text-white/70 font-normal">/month</span>
                </div>
                <p className="text-white/70 font-sans">
                  {plan.description}
                </p>
              </div>

              <Button
                className={`w-full mb-8 ${
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

        {/* Comparison Table */}
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left p-6 text-white font-semibold font-sans">
                    Features
                  </th>
                  {plans.map((plan) => (
                    <th key={plan.name} className="text-center p-6 text-white font-semibold font-sans">
                      {plan.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {plans[0].features.map((feature, index) => (
                  <tr key={feature.name} className={getRowClass(index)}>
                    <td className="p-6 text-white/70 font-sans">
                      {feature.name}
                    </td>
                    {plans.map((plan) => (
                      <td key={plan.name} className="p-6 text-center">
                        {plan.features[index].included ? (
                          <Check className="h-5 w-5 text-yellow-500 mx-auto" />
                        ) : (
                          <X className="h-5 w-5 text-white/40 mx-auto" />
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
