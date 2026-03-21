/**
 * Footer navigation (curated columns).
 * Services column: only these five practice areas (keep in sync with nav Services).
 */

export const footerColumns: { title: string; links: { text: string; href: string }[] }[] = [
  {
    title: 'Services',
    links: [
      { text: 'Digital Transformation', href: '/digital-transformation' },
      { text: 'Cloud & Platform Engineering', href: '/cloud-platform-engineering' },
      { text: 'Enterprise Application Development', href: '/enterprise-application-development' },
      { text: 'Salesforce & CRM Solutions', href: '/salesforce-crm-solutions' },
      { text: 'AI & Intelligent Automation', href: '/ai-intelligent-automation' },
    ],
  },
  {
    title: 'Company',
    links: [
      { text: 'About Foxtra', href: '/about' },
      { text: 'Careers', href: '/company/careers' },
      { text: 'Case Studies', href: '/case-studies' },
      { text: 'Blog / Insights', href: '/blog' },
    ],
  },
  {
    title: 'Industries',
    links: [
      { text: 'Financial Services', href: '/solutions/accountants' },
      { text: 'Healthcare', href: '/solutions/medical' },
      { text: 'Real Estate', href: '/solutions/real-estate' },
      { text: 'Professional Services', href: '/solutions/lawyers' },
    ],
  },
  {
    title: 'Support',
    links: [
      { text: 'FAQs', href: '/resources/faqs' },
      { text: 'Support', href: '/support/contact' },
      { text: 'Contact', href: '/contact' },
    ],
  },
];

export const footerLegalLinks = [
  { text: 'Terms of Service', href: '/terms' },
  { text: 'Privacy Policy', href: '/privacy' },
  { text: 'Cookie Settings', href: '/cookies' },
  { text: 'Accessibility', href: '/accessibility' },
];
