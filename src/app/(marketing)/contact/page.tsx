import { ServicePageWrapper } from '@/components/sections';
import { ServiceBanner } from '@/components/ui/ServiceBanner';
import ContactForm from '@/components/ui/ContactForm';
import { MapPin, Phone, Wrench, Mail, Handshake, HelpCircle } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us | Foxtra AI - Get in Touch',
  description: 'Reach out to Foxtra AI for AI automation solutions. Get technical support, sales inquiries, partnerships, and general questions answered by our expert team in Australia.',
  keywords: ['contact foxtra ai', 'ai automation support', 'business consultation', 'technical support', 'sales inquiry', 'australia ai support'],
  openGraph: {
    title: 'Contact Us | Foxtra AI - Get in Touch',
    description: 'Reach out to Foxtra AI for AI automation solutions. Get technical support, sales inquiries, partnerships, and general questions answered by our expert team in Australia.',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Contact Us | Foxtra AI - Get in Touch',
    description: 'Reach out to Foxtra AI for AI automation solutions. Get expert support and consultation.',
  },
};

export default function Contact() {
  return (
    <ServicePageWrapper>
      <ServiceBanner
        title="Have Any Questions for Us?"
        description="If you have any questions or need further information, please do not hesitate to reach out."
        badge="Foxtra • Contact"
        rightComponent={<ContactForm />}
        leftComponent={
          <div className="mt-8 mb-8">
            {/* Address and Contact Sections */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Address Section */}
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-md p-4">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-4 w-4 text-white/70" />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-white mb-1 font-sans">Address</h4>
                    <p className="text-sm text-white/70 font-sans">
                      U217 14 Lexington Drive<br />
                      Bella Vista, NSW 2153
                    </p>
                  </div>
                </div>
              </div>

              {/* Contact Number Section */}
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-md p-4">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="h-4 w-4 text-white/70" />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-white mb-1 font-sans">Contact</h4>
                    <a href="tel:+61422222444" className="text-sm text-white/70 font-sans hover:text-white transition-colors">
                      +61 422 222 444
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        }
      />
      
      <div className="py-16">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          {/* Contact Blocks - 4 in a row */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {/* Technical Support */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6 text-center hover:bg-white/10 transition-all duration-300">
              <div className="w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Wrench className="h-6 w-6 text-white/70" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2 font-sans">
                Technical Support
              </h3>
              <a href="mailto:support@foxtra.ai" className="text-white/70 font-sans hover:text-white transition-colors">
                support@foxtra.ai
              </a>
            </div>

            {/* Sales Inquiries */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6 text-center hover:bg-white/10 transition-all duration-300">
              <div className="w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Mail className="h-6 w-6 text-white/70" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2 font-sans">
                Sales Inquiries
              </h3>
              <a href="mailto:sales@foxtra.ai" className="text-white/70 font-sans hover:text-white transition-colors">
                sales@foxtra.ai
              </a>
            </div>

            {/* Partnerships */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6 text-center hover:bg-white/10 transition-all duration-300">
              <div className="w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Handshake className="h-6 w-6 text-white/70" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2 font-sans">
                Partnerships
              </h3>
              <a href="mailto:partnerships@foxtra.ai" className="text-white/70 font-sans hover:text-white transition-colors">
                partnerships@foxtra.ai
              </a>
            </div>

            {/* General Questions */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6 text-center hover:bg-white/10 transition-all duration-300">
              <div className="w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <HelpCircle className="h-6 w-6 text-white/70" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2 font-sans">
                General Questions
              </h3>
              <a href="mailto:admin@foxtra.ai" className="text-white/70 font-sans hover:text-white transition-colors">
                admin@foxtra.ai
              </a>
            </div>
          </div>


        </div>
      </div>
    </ServicePageWrapper>
  );
}
