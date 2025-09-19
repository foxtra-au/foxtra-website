import { ServiceBanner } from '@/components/ui/ServiceBanner'
import { ServicePageWrapper, AIWebsitesFeatures, AIWebsitesBenefits } from '@/components/sections'
import AIWebsitesPricingNew from '@/components/ui/AIWebsitesPricingNew'
import { AIWebsitesProcess } from '@/components/sections/AIWebsitesProcess'
import { SocialMediaBannerImage } from '@/components/ui/SocialMediaBannerImage'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AI Websites | Foxtra',
  description: 'Get a professional website built by AI in just 4 hours. Smart design, fast delivery, affordable pricing starting at $499.',
}

export default function AIWebsites() {
  const aiWebsiteFeatures = [
    "AI-powered design",
    "4-hour delivery", 
    "Mobile responsive",
    "Secure & optimized"
  ];

  return (
    <ServicePageWrapper>
      <ServiceBanner
        title="AI Websites"
        description="Get a professional website built by AI in just 4 hours. Smart design, fast delivery, affordable pricing starting at $499."
        badge="Foxtra • Marketing Services"
        features={aiWebsiteFeatures}
        rightComponent={<SocialMediaBannerImage />}
      />
      
      <AIWebsitesFeatures />
      
      <AIWebsitesBenefits />
      
      <AIWebsitesProcess />
      
      <AIWebsitesPricingNew />
      
      {/* FAQ Section */}
      <div className="py-16">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="text-left mb-12">
            <h2 className="text-3xl font-bold text-white mb-4 font-sans">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-white/70 max-w-3xl font-sans">
              Get answers to common questions about our AI website service
            </p>
          </div>
          <div className="space-y-4">
            {aiWebsiteFAQ.map((faq, index) => (
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

const aiWebsiteFAQ = [
  {
    question: "How can you deliver a website in just 4 hours?",
    answer: "Our advanced AI technology automates the design and development process. We use AI to generate layouts, content, and code, then our team reviews and optimizes everything for quality and performance."
  },
  {
    question: "What's included in the $499 setup fee?",
    answer: "The setup fee includes AI-powered design generation, custom development, mobile optimization, SEO setup, SSL certificate, hosting setup, and your website going live. Everything you need to get online."
  },
  {
    question: "What does the $45/month management fee cover?",
    answer: "Monthly management includes hosting, security updates, performance monitoring, backup management, content updates, technical support, and keeping your website running smoothly."
  },
  {
    question: "Can I customize my website after it's built?",
    answer: "Yes! You'll have access to a content management system to update text, images, and content. For major design changes, we can help with additional customizations."
  },
  {
    question: "Do I need to provide content and images?",
    answer: "Our AI can generate relevant content and source appropriate images based on your business type. However, you're welcome to provide your own content and images for a more personalized touch."
  },
  {
    question: "Is my website mobile-friendly?",
    answer: "Absolutely! All our websites are built mobile-first and are fully responsive, ensuring they look and work perfectly on all devices - phones, tablets, and desktops."
  },
  {
    question: "What if I'm not satisfied with my website?",
    answer: "We offer revisions during the initial 4-hour development period. If you're not completely satisfied, we'll work with you to make adjustments until you're happy with the result."
  },
  {
    question: "Can I cancel the monthly service anytime?",
    answer: "Yes, there are no long-term contracts. You can cancel your monthly management service anytime. Your website will remain live, but you'll need to handle hosting and updates yourself."
  },
  {
    question: "Do you provide domain registration?",
    answer: "Yes, we can help you register a domain name if you don't have one. Domain registration is a separate cost (typically $10-15/year) and is not included in the setup or monthly fees."
  },
  {
    question: "What types of businesses are suitable for AI websites?",
    answer: "Our AI websites work great for small businesses, freelancers, consultants, restaurants, service providers, and any business that needs a professional online presence quickly and affordably."
  }
];
