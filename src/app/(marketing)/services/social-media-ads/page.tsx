import { ServiceBanner } from '@/components/ui/ServiceBanner'
import { ServicePageWrapper, SocialAdsFeatures, SocialAdsBenefits } from '@/components/sections'
import { SocialAdsPricing } from '@/components/ui/SocialAdsPricing'
import { SocialAdsProcess } from '@/components/sections/SocialAdsProcess'
import { SocialMediaBannerImage } from '@/components/ui/SocialMediaBannerImage'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Social Media Advertising | Foxtra',
  description: 'Professional social media advertising services that drive targeted traffic, generate leads, and maximize your ROI across all platforms.',
}

export default function SocialMediaAds() {
  const socialAdsFeatures = [
    "Audience targeting",
    "Campaign optimization", 
    "Budget management",
    "Performance analytics"
  ];

  return (
    <ServicePageWrapper>
      <ServiceBanner
        title="Social Media Advertising"
        description="Professional social media advertising services that drive targeted traffic, generate leads, and maximize your ROI across all platforms."
        badge="Foxtra • Marketing Services"
        features={socialAdsFeatures}
        rightComponent={<SocialMediaBannerImage />}
      />
      
      <SocialAdsFeatures />
      
      <SocialAdsBenefits />
      
      <SocialAdsProcess />
      
      <SocialAdsPricing />
      
      {/* FAQ Section */}
      <div className="py-16">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="text-left mb-12">
            <h2 className="text-3xl font-bold text-white mb-4 font-sans">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-white/70 max-w-3xl font-sans">
              Get answers to common questions about our social media advertising services
            </p>
          </div>
          <div className="space-y-4">
            {socialAdsFAQ.map((faq, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-white mb-3 font-sans">{faq.question}</h3>
                <p className="text-white/70 font-sans">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </ServicePageWrapper>
  );
}

const socialAdsFAQ = [
  {
    question: "Which social media platforms do you advertise on?",
    answer: "We run ads on Facebook, Instagram, LinkedIn, Twitter, TikTok, Pinterest, and Snapchat. We'll recommend the best platforms based on your target audience and business goals."
  },
  {
    question: "How quickly will I see results from my ads?",
    answer: "Most clients see initial results within 24-48 hours, with optimized performance typically achieved within 1-2 weeks as we gather data and refine targeting."
  },
  {
    question: "What's included in your ad management service?",
    answer: "Our service includes ad account setup, campaign creation, audience targeting, ad creative development, daily monitoring, optimization, and detailed performance reporting."
  },
  {
    question: "How do you determine my ad budget?",
    answer: "We work with your total budget and allocate it strategically across platforms and campaigns based on your goals, audience size, and industry benchmarks."
  },
  {
    question: "Do you create the ad content and images?",
    answer: "Yes! We create compelling ad copy, design graphics, and produce videos. We can also work with your existing brand assets and content."
  },
  {
    question: "How do you measure ad performance?",
    answer: "We track key metrics including cost per click (CPC), cost per acquisition (CPA), return on ad spend (ROAS), click-through rates, and conversion rates."
  },
  {
    question: "Can I pause or modify my campaigns?",
    answer: "Absolutely. You have full control over your campaigns and can request changes at any time. We also provide regular recommendations for optimization."
  },
  {
    question: "What's the minimum contract length?",
    answer: "We require a minimum 3-month commitment to properly test and optimize your campaigns. Most clients see the best results with 6-12 month campaigns."
  }
];