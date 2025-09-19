import { ServiceBanner } from '@/components/ui/ServiceBanner'
import { ServicePageWrapper, SocialMediaFeatures, SocialMediaBenefits } from '@/components/sections'
import { SocialMediaPricing } from '@/components/ui/SocialMediaPricing'
import { SocialMediaGallery } from '@/components/sections/SocialMediaGallery'
import { SocialMediaBannerImage } from '@/components/ui/SocialMediaBannerImage'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Social Media Management | Foxtra',
  description: 'Professional social media management services that build your brand, engage your audience, and drive measurable results.',
}

export default function SocialMediaManagement() {
  const socialMediaFeatures = [
    "Content creation & curation",
    "Multi-platform management", 
    "Community engagement",
    "Performance analytics"
  ];

  return (
    <ServicePageWrapper>
      <ServiceBanner
        title="Social Media Management"
        description="Professional social media management services that build your brand, engage your audience, and drive measurable results."
        badge="Foxtra • Marketing Services"
        features={socialMediaFeatures}
        rightComponent={<SocialMediaBannerImage />}
      />
      
      <SocialMediaFeatures />
      
      <SocialMediaBenefits />
      
      <SocialMediaPricing />
      
      <SocialMediaGallery />
      
      {/* FAQ Section */}
      <div className="py-16">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="text-left mb-12">
            <h2 className="text-3xl font-bold text-white mb-4 font-sans">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-white/70 max-w-3xl font-sans">
              Get answers to common questions about our social media management services
            </p>
          </div>
          <div className="space-y-4">
            {socialMediaFAQ.map((faq, index) => (
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

const socialMediaFAQ = [
  {
    question: "Which social media platforms do you manage?",
    answer: "We manage all major platforms including Instagram, Facebook, LinkedIn, Twitter, TikTok, YouTube, and Pinterest. Our team adapts strategies based on your target audience and business goals."
  },
  {
    question: "How long does it take to see results?",
    answer: "Most clients see initial engagement improvements within 2-4 weeks, with significant growth in followers and reach typically occurring within 2-3 months of consistent, strategic posting."
  },
  {
    question: "Do you provide content creation services?",
    answer: "Yes! We create original graphics, videos, captions, and other content tailored to your brand. We also curate relevant content from other sources to maintain a consistent posting schedule."
  },
  {
    question: "How do you measure success?",
    answer: "We track key metrics including follower growth, engagement rates, reach, website traffic from social media, and conversion rates. Monthly reports provide detailed insights and recommendations."
  },
  {
    question: "Can you work with our existing brand guidelines?",
    answer: "Absolutely! We adapt our content creation and posting strategies to align with your existing brand voice, visual identity, and marketing guidelines."
  },
  {
    question: "What's included in community management?",
    answer: "Community management includes responding to comments and messages, engaging with followers, monitoring brand mentions, handling customer service inquiries, and moderating content as needed."
  },
  {
    question: "Do you handle social media advertising?",
    answer: "Yes, our Professional and Enterprise plans include paid advertising management. We create, optimize, and manage campaigns across platforms to maximize your ROI."
  },
  {
    question: "How often will we communicate with your team?",
    answer: "Communication frequency depends on your plan. Starter clients receive monthly reports and email support, while Professional and Enterprise clients have scheduled calls and dedicated account managers."
  }
];