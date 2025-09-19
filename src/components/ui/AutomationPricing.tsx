import React from "react";
import { Check, Minus, MoveRight, Zap } from "lucide-react";
import { Button } from "@/components/ui/Button";

function AutomationPricing() {
  // Helper function to determine if a row should have glossy background
  const getRowClass = (index: number) => {
    return index % 2 === 0 ? "" : "bg-white/10 backdrop-blur-sm";
  };

  const plans = [
    {
      name: "Starter",
      price: "$299",
      description: "Perfect for small businesses getting started with automation",
      features: [
        { name: "Up to 5 workflows", included: true },
        { name: "Basic integrations", included: true },
        { name: "Email support", included: true },
        { name: "Monthly reports", included: true },
        { name: "Custom triggers", included: false },
        { name: "Advanced analytics", included: false },
        { name: "Priority support", included: false },
        { name: "API access", included: false },
      ],
      buttonText: "Get Started",
      buttonVariant: "glossy" as const,
    },
    {
      name: "Professional",
      price: "$599",
      description: "Ideal for growing businesses with complex automation needs",
      features: [
        { name: "Up to 20 workflows", included: true },
        { name: "Premium integrations", included: true },
        { name: "Priority support", included: true },
        { name: "Weekly reports", included: true },
        { name: "Custom triggers", included: true },
        { name: "Advanced analytics", included: true },
        { name: "Dedicated manager", included: false },
        { name: "API access", included: false },
      ],
      buttonText: "Most Popular",
      buttonVariant: "rose" as const,
      popular: true,
    },
    {
      name: "Enterprise",
      price: "$999",
      description: "For large organizations requiring enterprise-grade automation",
      features: [
        { name: "Unlimited workflows", included: true },
        { name: "All integrations", included: true },
        { name: "24/7 support", included: true },
        { name: "Real-time reports", included: true },
        { name: "Custom triggers", included: true },
        { name: "Advanced analytics", included: true },
        { name: "Dedicated manager", included: true },
        { name: "API access", included: true },
      ],
      buttonText: "Contact Sales",
      buttonVariant: "glossy" as const,
    },
  ];

  const featureRows = [
    "Workflows",
    "Integrations",
    "Support Level",
    "Reporting",
    "Custom Triggers",
    "Analytics",
    "Dedicated Manager",
    "API Access",
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-left mb-12">
          <h2 className="text-3xl font-bold text-white mb-4 font-sans">
            Automation Pricing Plans
          </h2>
          <p className="text-lg text-white/70 max-w-4xl font-sans">
            Choose the perfect automation plan that scales with your business needs and growth.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm">
            {/* Header */}
            <div className="grid grid-cols-4 divide-x divide-white/10">
              <div className="p-6">
                <h3 className="text-lg font-semibold text-white font-sans">Features</h3>
              </div>
              {plans.map((plan, index) => (
                <div key={plan.name} className={`p-6 ${plan.popular ? 'bg-yellow-500/10 border-2 border-yellow-500 rounded-lg' : ''}`}>
                  <div className="text-center">
                    {plan.popular && (
                      <span className="inline-block px-3 py-1 text-xs font-medium bg-yellow-500 text-black rounded-full mb-2">
                        Most Popular
                      </span>
                    )}
                    <h3 className="text-xl font-bold text-white mb-2 font-sans">{plan.name}</h3>
                    <div className="text-3xl font-bold text-white mb-2 font-sans">{plan.price}</div>
                    <p className="text-sm text-white/70 mb-4 font-sans">{plan.description}</p>
                    <Button
                      variant={plan.buttonVariant === "rose" ? "default" : "outline"}
                      className={`w-full ${
                        plan.buttonVariant === "rose"
                          ? "bg-rose-600 hover:bg-rose-700 text-white border-rose-600"
                          : plan.buttonVariant === "glossy"
                          ? "bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 hover:bg-yellow-500 hover:text-black hover:border-yellow-400"
                          : "bg-yellow-500 hover:bg-yellow-600 text-black border-yellow-500"
                      }`}
                    >
                      {plan.buttonText}
                    </Button>
                  </div>
                </div>
              ))}
            </div>

            {/* Feature Rows */}
            {featureRows.map((feature, rowIndex) => (
              <div key={feature} className={`grid grid-cols-4 divide-x divide-white/10 ${getRowClass(rowIndex)}`}>
                <div className="p-6">
                  <span className="text-white font-medium font-sans">{feature}</span>
                </div>
                {plans.map((plan) => {
                  const planFeature = plan.features.find(f => 
                    f.name.toLowerCase().includes(feature.toLowerCase()) ||
                    feature.toLowerCase().includes(f.name.toLowerCase().split(' ')[0])
                  );
                  const included = planFeature?.included ?? false;
                  
                  return (
                    <div key={plan.name} className="p-6 flex items-center justify-center">
                      {included ? (
                        <Check className="h-5 w-5 text-yellow-500" />
                      ) : (
                        <Minus className="h-5 w-5 text-white/40" />
                      )}
                    </div>
                  );
                })}
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <p className="text-white/70 font-sans">
              All plans include 30-day money-back guarantee and free migration assistance.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export { AutomationPricing };
