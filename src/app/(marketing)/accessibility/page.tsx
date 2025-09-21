import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Accessibility Statement | Foxtra AI',
  description: 'Foxtra AI is committed to making our website and services accessible to all users, including those with disabilities.',
}

export default function Accessibility() {
  return (
        <div className="min-h-screen bg-[#030303] text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-40 pb-16">
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4">Accessibility Statement</h1>
          <p className="text-white/60 text-lg">
            Our commitment to digital accessibility and inclusive design
          </p>
        </div>

        <div className="prose prose-invert max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Our Commitment</h2>
            <p className="text-white/80 mb-4">
              FOXTRA AI PTY LTD (ABN: 90 690 257 508) trading as Foxtra is committed to ensuring 
              digital accessibility for all users, including those with disabilities. We strive 
              to provide an inclusive experience that meets or exceeds the Web Content Accessibility 
              Guidelines (WCAG) 2.1 AA standards.
            </p>
            <div className="bg-white/5 rounded-lg p-6 mb-4">
              <p className="text-white/80 mb-2"><strong>Company:</strong> FOXTRA AI PTY LTD</p>
              <p className="text-white/80 mb-2"><strong>ABN:</strong> 90 690 257 508</p>
              <p className="text-white/80 mb-2"><strong>Address:</strong> U217 14 Lexington Drive, Bella Vista, NSW 2153</p>
              <p className="text-white/80"><strong>Contact:</strong> 0422 222 444</p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Accessibility Features</h2>
            <p className="text-white/80 mb-4">
              Our website and services include the following accessibility features:
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-white/5 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-3 text-green-400">Visual Accessibility</h3>
                <ul className="list-disc pl-4 text-white/80 text-sm space-y-2">
                  <li>High contrast color schemes and sufficient color contrast ratios</li>
                  <li>Scalable text and responsive design for different screen sizes</li>
                  <li>Alternative text for images and meaningful alt attributes</li>
                  <li>Clear typography and readable font sizes</li>
                  <li>Visual indicators for interactive elements</li>
                </ul>
              </div>
              
              <div className="bg-white/5 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-3 text-blue-400">Navigation & Interaction</h3>
                <ul className="list-disc pl-4 text-white/80 text-sm space-y-2">
                  <li>Keyboard navigation support for all interactive elements</li>
                  <li>Logical tab order and focus indicators</li>
                  <li>Skip links for main content areas</li>
                  <li>Consistent navigation structure</li>
                  <li>Accessible form controls and labels</li>
                </ul>
              </div>
              
              <div className="bg-white/5 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-3 text-purple-400">Content & Structure</h3>
                <ul className="list-disc pl-4 text-white/80 text-sm space-y-2">
                  <li>Semantic HTML markup and proper heading hierarchy</li>
                  <li>Descriptive link text and meaningful page titles</li>
                  <li>Structured content with clear sections and headings</li>
                  <li>Accessible tables with proper headers and captions</li>
                  <li>Error messages and form validation feedback</li>
                </ul>
              </div>
              
              <div className="bg-white/5 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-3 text-orange-400">Assistive Technology</h3>
                <ul className="list-disc pl-4 text-white/80 text-sm space-y-2">
                  <li>Screen reader compatibility</li>
                  <li>ARIA labels and landmarks for complex interactions</li>
                  <li>Voice control and speech recognition support</li>
                  <li>Compatibility with assistive devices</li>
                  <li>Alternative formats for multimedia content</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">AI Services Accessibility</h2>
            <p className="text-white/80 mb-4">
              Our AI-powered services are designed with accessibility in mind:
            </p>
            
            <div className="space-y-6">
              <div className="bg-white/5 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-3">AI Chat Agents</h3>
                <ul className="list-disc pl-4 text-white/80 text-sm space-y-2">
                  <li>Voice-to-text and text-to-speech capabilities</li>
                  <li>Multiple communication channels (text, voice, video)</li>
                  <li>Clear conversation flow and context awareness</li>
                  <li>Alternative response formats (text, audio, visual)</li>
                  <li>Customizable interface for different accessibility needs</li>
                </ul>
              </div>
              
              <div className="bg-white/5 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-3">Website Development</h3>
                <ul className="list-disc pl-4 text-white/80 text-sm space-y-2">
                  <li>Accessible website design and development</li>
                  <li>WCAG 2.1 AA compliance implementation</li>
                  <li>Responsive design for all devices and screen sizes</li>
                  <li>Accessibility testing and validation</li>
                  <li>Ongoing accessibility maintenance and updates</li>
                </ul>
              </div>
              
              <div className="bg-white/5 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-3">Mobile Applications</h3>
                <ul className="list-disc pl-4 text-white/80 text-sm space-y-2">
                  <li>Native accessibility features integration</li>
                  <li>Voice control and gesture support</li>
                  <li>Adaptive layouts for different screen sizes</li>
                  <li>Accessible touch targets and navigation</li>
                  <li>Platform-specific accessibility guidelines compliance</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Browser and Device Support</h2>
            <p className="text-white/80 mb-4">
              Our website and services are designed to work with:
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mb-4">
              <div className="bg-white/5 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-3">Browsers</h3>
                <ul className="list-disc pl-4 text-white/80 text-sm space-y-1">
                  <li>Chrome (latest versions)</li>
                  <li>Firefox (latest versions)</li>
                  <li>Safari (latest versions)</li>
                  <li>Edge (latest versions)</li>
                  <li>Mobile browsers</li>
                </ul>
              </div>
              
              <div className="bg-white/5 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-3">Assistive Technologies</h3>
                <ul className="list-disc pl-4 text-white/80 text-sm space-y-1">
                  <li>Screen readers (NVDA, JAWS, VoiceOver)</li>
                  <li>Voice recognition software</li>
                  <li>Switch navigation devices</li>
                  <li>Magnification software</li>
                  <li>Alternative input devices</li>
                </ul>
              </div>
              
              <div className="bg-white/5 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-3">Devices</h3>
                <ul className="list-disc pl-4 text-white/80 text-sm space-y-1">
                  <li>Desktop computers</li>
                  <li>Laptops and tablets</li>
                  <li>Mobile phones</li>
                  <li>Assistive devices</li>
                  <li>Smart TVs and other platforms</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Accessibility Testing</h2>
            <p className="text-white/80 mb-4">
              We regularly test our website and services for accessibility compliance:
            </p>
            
            <div className="bg-white/5 rounded-lg p-6 mb-4">
              <h3 className="text-lg font-semibold mb-3">Testing Methods</h3>
              <ul className="list-disc pl-4 text-white/80 text-sm space-y-2">
                <li><strong>Automated Testing:</strong> Using accessibility testing tools and validators</li>
                <li><strong>Manual Testing:</strong> Human evaluation of accessibility features</li>
                <li><strong>User Testing:</strong> Testing with users who have disabilities</li>
                <li><strong>Expert Review:</strong> Accessibility consultant reviews</li>
                <li><strong>Ongoing Monitoring:</strong> Regular accessibility audits and updates</li>
              </ul>
            </div>
            
            <div className="bg-white/5 rounded-lg p-6 mb-4">
              <h3 className="text-lg font-semibold mb-3">Standards Compliance</h3>
              <ul className="list-disc pl-4 text-white/80 text-sm space-y-2">
                <li><strong>WCAG 2.1 AA:</strong> Web Content Accessibility Guidelines</li>
                <li><strong>Section 508:</strong> US Federal accessibility standards</li>
                <li><strong>ADA:</strong> Americans with Disabilities Act compliance</li>
                <li><strong>EN 301 549:</strong> European accessibility standard</li>
                <li><strong>DDA:</strong> Australian Disability Discrimination Act</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Known Limitations</h2>
            <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-6 mb-4">
              <p className="text-white/80 mb-4">
                While we strive to make our website and services fully accessible, we acknowledge 
                that some areas may have limitations:
              </p>
              <ul className="list-disc pl-4 text-white/80 text-sm space-y-2">
                <li>Third-party content and embedded services may not be fully accessible</li>
                <li>Some complex interactive elements may require keyboard navigation improvements</li>
                <li>Older browser versions may have limited accessibility support</li>
                <li>Certain multimedia content may require additional accessibility features</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Feedback and Support</h2>
            <p className="text-white/80 mb-4">
              We welcome feedback on the accessibility of our website and services. If you 
              encounter any accessibility barriers or have suggestions for improvement, 
              please contact us:
            </p>
            
            <div className="bg-white/5 rounded-lg p-6 mb-4">
              <h3 className="text-lg font-semibold mb-3">Contact Information</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <p className="text-white/80 mb-2"><strong>Accessibility Officer:</strong></p>
                  <p className="text-white/80 mb-2">admin@foxtra.ai</p>
                  <p className="text-white/80 mb-2">0422 222 444</p>
                </div>
                <div>
                  <p className="text-white/80 mb-2"><strong>Technical Support:</strong></p>
                  <p className="text-white/80 mb-2">support@foxtra.ai</p>
                  <p className="text-white/80 mb-2">U217 14 Lexington Drive, Bella Vista, NSW 2153</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white/5 rounded-lg p-6 mb-4">
              <h3 className="text-lg font-semibold mb-3">Response Time</h3>
              <p className="text-white/80 mb-4">
                We aim to respond to accessibility feedback within 5 business days and will 
                work with you to resolve any accessibility issues.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Alternative Access Methods</h2>
            <p className="text-white/80 mb-4">
              If you need assistance accessing our content or services, we offer several 
              alternative methods:
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 mb-4">
              <div className="bg-white/5 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-3">Communication</h3>
                <ul className="list-disc pl-4 text-white/80 text-sm space-y-2">
                  <li>Phone support: 0422 222 444</li>
                  <li>Email assistance: support@foxtra.ai</li>
                  <li>Live chat during business hours</li>
                  <li>Video calls with screen sharing</li>
                  <li>Alternative document formats</li>
                </ul>
              </div>
              
              <div className="bg-white/5 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-3">Service Delivery</h3>
                <ul className="list-disc pl-4 text-white/80 text-sm space-y-2">
                  <li>Custom accessibility solutions</li>
                  <li>Alternative interface designs</li>
                  <li>Accessible documentation and training</li>
                  <li>Dedicated accessibility support</li>
                  <li>Flexible service delivery methods</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Ongoing Commitment</h2>
            <p className="text-white/80 mb-4">
              Accessibility is an ongoing commitment at Foxtra AI. We continuously work to:
            </p>
            <ul className="list-disc pl-4 text-white/80 text-sm space-y-2 mb-4">
              <li>Monitor and improve accessibility compliance</li>
              <li>Stay updated with accessibility standards and best practices</li>
              <li>Train our team on accessibility principles</li>
              <li>Incorporate accessibility into all new developments</li>
              <li>Regularly review and update our accessibility policies</li>
              <li>Engage with the accessibility community for feedback and guidance</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Legal Compliance</h2>
            <p className="text-white/80 mb-4">
              Our accessibility commitment aligns with applicable laws and regulations:
            </p>
            <ul className="list-disc pl-4 text-white/80 text-sm space-y-2 mb-4">
              <li><strong>Disability Discrimination Act 1992 (Australia):</strong> Ensuring equal access to goods and services</li>
              <li><strong>Web Content Accessibility Guidelines (WCAG) 2.1:</strong> International accessibility standards</li>
              <li><strong>Accessible Technology Act:</strong> Promoting accessible technology adoption</li>
              <li><strong>Universal Design Principles:</strong> Designing for the widest possible audience</li>
            </ul>
          </section>

          <div className="border-t border-white/10 pt-8 mt-12">
            <p className="text-white/60 text-sm mb-2">
              Last updated: December 19, 2024
            </p>
            <p className="text-white/60 text-sm">
              This accessibility statement will be reviewed and updated regularly to reflect 
              our ongoing commitment to digital accessibility.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
