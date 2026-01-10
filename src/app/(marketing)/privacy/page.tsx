import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy | Foxtra',
  description: 'Privacy Policy for Foxtra - How we collect, use, and protect your personal information.',
}

export default function PrivacyPolicy() {
  return (
        <div className="min-h-screen bg-[#030303] text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-40 pb-16">
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-white/60 text-lg">
            Last updated: December 19, 2024
          </p>
        </div>

        <div className="prose prose-invert max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
            <p className="text-white/80 mb-4">
              FOXTRA AI PTY LTD (ABN: 90 690 257 508) trading as Foxtra ("we," "us," or "our") 
              is committed to protecting your privacy and personal information. This Privacy Policy 
              explains how we collect, use, disclose, and safeguard your information when you use 
              our AI-powered business solutions and services.
            </p>
            <div className="bg-white/5 rounded-lg p-6 mb-4">
              <p className="text-white/80 mb-2"><strong>Company:</strong> FOXTRA AI PTY LTD</p>
              <p className="text-white/80 mb-2"><strong>ABN:</strong> 90 690 257 508</p>
              <p className="text-white/80 mb-2"><strong>Address:</strong> U217 14 Lexington Drive, Bella Vista, NSW 2153</p>
              <p className="text-white/80"><strong>Contact:</strong> 0422 222 444</p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">2. Information We Collect</h2>
            
            <h3 className="text-xl font-semibold mb-3">2.1 Personal Information</h3>
            <p className="text-white/80 mb-4">
              We may collect the following types of personal information:
            </p>
            <ul className="list-disc pl-6 text-white/80 mb-4 space-y-2">
              <li>Name, email address, phone number, and mailing address</li>
              <li>Company name, job title, and business contact information</li>
              <li>Payment and billing information (processed securely through third-party providers)</li>
              <li>Account credentials and preferences</li>
              <li>Communication records and support interactions</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3">2.2 Business Information</h3>
            <ul className="list-disc pl-6 text-white/80 mb-4 space-y-2">
              <li>Business requirements and project specifications</li>
              <li>Technical documentation and system information</li>
              <li>Performance metrics and analytics data</li>
              <li>Content and materials provided for AI processing</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3">2.3 Technical Information</h3>
            <ul className="list-disc pl-6 text-white/80 mb-4 space-y-2">
              <li>IP addresses, browser type, and device information</li>
              <li>Website usage patterns and interaction data</li>
              <li>Cookies and similar tracking technologies</li>
              <li>Server logs and system performance data</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">3. How We Use Your Information</h2>
            <p className="text-white/80 mb-4">
              We use your information for the following purposes:
            </p>
            <ul className="list-disc pl-6 text-white/80 mb-4 space-y-2">
              <li><strong>Service Delivery:</strong> Providing AI agents, custom development, and digital marketing services</li>
              <li><strong>Communication:</strong> Responding to inquiries, providing support, and sending service updates</li>
              <li><strong>Billing:</strong> Processing payments and managing account billing</li>
              <li><strong>Improvement:</strong> Enhancing our services and developing new AI solutions</li>
              <li><strong>Analytics:</strong> Understanding usage patterns and optimizing service performance</li>
              <li><strong>Compliance:</strong> Meeting legal obligations and regulatory requirements</li>
              <li><strong>Security:</strong> Protecting against fraud and unauthorized access</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">4. Information Sharing and Disclosure</h2>
            <p className="text-white/80 mb-4">
              We do not sell, trade, or rent your personal information to third parties. We may share 
              your information only in the following circumstances:
            </p>
            <ul className="list-disc pl-6 text-white/80 mb-4 space-y-2">
              <li><strong>Service Providers:</strong> Trusted third parties who assist in service delivery (payment processors, hosting providers, analytics services)</li>
              <li><strong>Legal Requirements:</strong> When required by law, court order, or government request</li>
              <li><strong>Business Transfers:</strong> In connection with mergers, acquisitions, or asset sales</li>
              <li><strong>Consent:</strong> When you have given explicit consent for specific sharing</li>
              <li><strong>Protection:</strong> To protect our rights, property, or safety, or that of our users</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">5. AI and Data Processing</h2>
            <p className="text-white/80 mb-4">
              As an AI service provider, we process data to deliver our services:
            </p>
            <ul className="list-disc pl-6 text-white/80 mb-4 space-y-2">
              <li><strong>AI Training:</strong> We may use anonymized, aggregated data to improve our AI models</li>
              <li><strong>Processing:</strong> Your content is processed through our AI systems to deliver requested services</li>
              <li><strong>Retention:</strong> Data is retained only as long as necessary for service delivery and legal compliance</li>
              <li><strong>Security:</strong> All AI processing occurs in secure, encrypted environments</li>
              <li><strong>Transparency:</strong> We provide clear information about how your data is used in AI processing</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">6. Data Security</h2>
            <p className="text-white/80 mb-4">
              We implement comprehensive security measures to protect your information:
            </p>
            <ul className="list-disc pl-6 text-white/80 mb-4 space-y-2">
              <li>Encryption of data in transit and at rest</li>
              <li>Regular security audits and vulnerability assessments</li>
              <li>Access controls and authentication mechanisms</li>
              <li>Secure data centers and cloud infrastructure</li>
              <li>Employee training on data protection and security</li>
              <li>Incident response procedures and breach notification</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">7. Your Rights and Choices</h2>
            <p className="text-white/80 mb-4">
              You have the following rights regarding your personal information:
            </p>
            <ul className="list-disc pl-6 text-white/80 mb-4 space-y-2">
              <li><strong>Access:</strong> Request access to your personal information we hold</li>
              <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
              <li><strong>Deletion:</strong> Request deletion of your personal information (subject to legal obligations)</li>
              <li><strong>Portability:</strong> Request transfer of your data to another service provider</li>
              <li><strong>Objection:</strong> Object to certain types of processing</li>
              <li><strong>Restriction:</strong> Request restriction of processing under certain circumstances</li>
              <li><strong>Withdrawal:</strong> Withdraw consent where processing is based on consent</li>
            </ul>
            <p className="text-white/80 mb-4">
              To exercise these rights, contact us at <a href="mailto:admin@foxtra.com.au" className="text-rose-500 hover:text-rose-400">admin@foxtra.com.au</a>
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">8. Cookies and Tracking</h2>
            <p className="text-white/80 mb-4">
              We use cookies and similar technologies to enhance your experience:
            </p>
            <ul className="list-disc pl-6 text-white/80 mb-4 space-y-2">
              <li><strong>Essential Cookies:</strong> Required for website functionality and security</li>
              <li><strong>Analytics Cookies:</strong> Help us understand website usage and performance</li>
              <li><strong>Preference Cookies:</strong> Remember your settings and preferences</li>
              <li><strong>Marketing Cookies:</strong> Used for targeted advertising (with consent)</li>
            </ul>
            <p className="text-white/80 mb-4">
              You can manage cookie preferences through our Cookie Settings page or your browser settings.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">9. International Data Transfers</h2>
            <p className="text-white/80 mb-4">
              Your information may be transferred to and processed in countries other than Australia. 
              We ensure appropriate safeguards are in place for international transfers, including:
            </p>
            <ul className="list-disc pl-6 text-white/80 mb-4 space-y-2">
              <li>Adequacy decisions by relevant data protection authorities</li>
              <li>Standard contractual clauses for data protection</li>
              <li>Binding corporate rules and certification schemes</li>
              <li>Other appropriate safeguards as required by law</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">10. Data Retention</h2>
            <p className="text-white/80 mb-4">
              We retain your information for as long as necessary to:
            </p>
            <ul className="list-disc pl-6 text-white/80 mb-4 space-y-2">
              <li>Provide our services and maintain your account</li>
              <li>Comply with legal obligations and regulatory requirements</li>
              <li>Resolve disputes and enforce our agreements</li>
              <li>Improve our services and develop new features</li>
            </ul>
            <p className="text-white/80 mb-4">
              When information is no longer needed, we securely delete or anonymize it.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">11. Children's Privacy</h2>
            <p className="text-white/80 mb-4">
              Our services are not intended for children under 16 years of age. We do not knowingly 
              collect personal information from children under 16. If we become aware that we have 
              collected such information, we will take steps to delete it promptly.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">12. Contact Information</h2>
            <div className="bg-white/5 rounded-lg p-6 mb-4">
              <p className="text-white/80 mb-2"><strong>Privacy Officer:</strong> admin@foxtra.com.au</p>
              <p className="text-white/80 mb-2"><strong>General Questions:</strong> admin@foxtra.com.au</p>
              <p className="text-white/80 mb-2"><strong>Technical Support:</strong> support@foxtra.com.au</p>
              <p className="text-white/80 mb-2"><strong>Phone:</strong> 0422 222 444</p>
              <p className="text-white/80"><strong>Address:</strong> U217 14 Lexington Drive, Bella Vista, NSW 2153</p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">13. Changes to This Policy</h2>
            <p className="text-white/80 mb-4">
              We may update this Privacy Policy from time to time. Changes will be posted on this 
              page with an updated "Last updated" date. We will notify you of significant changes 
              via email or through our services.
            </p>
          </section>

          <div className="border-t border-white/10 pt-8 mt-12">
            <p className="text-white/60 text-sm">
              If you have any questions about this Privacy Policy or our data practices, please contact us at 
              <a href="mailto:admin@foxtra.com.au" className="text-rose-500 hover:text-rose-400 ml-1">
                admin@foxtra.com.au
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
