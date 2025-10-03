import { ServicePageWrapper } from '@/components/sections'
import { LeadMagnetFeatures, LeadMagnetBenefits, LeadMagnetProcess } from '@/components/sections'
import { LeadMagnetHero } from '@/components/sections/LeadMagnetHero'
import { SocialMediaBannerImage } from '@/components/ui/SocialMediaBannerImage'
import LeadMagnetPricing from '@/components/ui/LeadMagnetPricing'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Lead Magnet for Accountants | Foxtra',
  description: 'Capture leads instantly with our lead magnet plugin for accountants. Seamless lead capture, verified leads, and enhanced client confidence.',
}

export default function LeadMagnet() {
  const leadMagnetFeatures = [
    "Instant Setup",
    "Smart Form Experience", 
    "Verified Leads",
    "Enhanced Client Confidence",
    "24/7 Lead Capture"
  ];

  return (
    <ServicePageWrapper>
      <LeadMagnetHero
        title="Instantly Activate Your Lead Magnet for Accountants"
        description="Capture Leads. Build Trust. Onboard Faster."
        badge="Foxtra • Lead Capture Solutions"
        features={leadMagnetFeatures}
        rightComponent={<SocialMediaBannerImage />}
      />
      
      <LeadMagnetFeatures />
      
      <LeadMagnetBenefits />
      
      <LeadMagnetProcess />
      
      <LeadMagnetPricing />
      
      {/* FAQ Section */}
      <div className="py-16">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="text-left mb-12">
            <h2 className="text-3xl font-bold text-white mb-4 font-sans">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-white/70 max-w-3xl font-sans">
              Get answers to common questions about our Lead Magnet for Accountants
            </p>
          </div>
          <div className="space-y-4">
            {leadMagnetFAQ.map((faq, index) => (
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

const leadMagnetFAQ = [
  {
    question: "How quickly can I set up the Lead Magnet?",
    answer: "The Lead Magnet can be activated instantly with our simple self-service setup. You can have it running on your website and capturing leads within minutes."
  },
  {
    question: "What information does the form capture?",
    answer: "Our smart form collects both personal and business enquiry details along with client needs, including business name, location, and specific requirements - all in one streamlined form."
  },
  {
    question: "How does the SMS verification work?",
    answer: "Integrated SMS confirmation validates client details automatically, ensuring you only receive genuine leads and protecting your business from spam and fake enquiries."
  },
  {
    question: "Will this work on my existing website?",
    answer: "Yes! Our Lead Magnet is designed to integrate seamlessly with any existing website. It's a simple plugin that can be added to any site without disrupting your current setup."
  },
  {
    question: "What makes this different from regular contact forms?",
    answer: "Unlike basic contact forms, our Lead Magnet includes smart completion elements, automatic business name and location auto-fill, SMS verification, and instant acknowledgment - creating a professional, trustworthy experience for prospects."
  },
  {
    question: "How does this improve my conversion rate?",
    answer: "By providing instant acknowledgment, smart form completion, and a professional experience, prospects feel more confident and are more likely to move forward with your services."
  },
  {
    question: "Is there ongoing support included?",
    answer: "Yes, we provide ongoing support to ensure your Lead Magnet continues to work optimally and help you capture the highest quality leads for your accounting practice."
  },
  {
    question: "What happens to the lead data?",
    answer: "All lead data is securely collected and can be exported or integrated with your existing CRM systems. You maintain full control over your client information."
  },
  {
    question: "Can I track the performance of my Lead Magnet?",
    answer: "Yes, you'll have access to analytics that show you how many leads are being captured, conversion rates, and other valuable insights to help optimize your lead generation efforts."
  }
];
