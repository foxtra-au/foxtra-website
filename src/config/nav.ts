export interface NavItem {
  id: number
  label: string
  href?: string
  subMenus?: {
    title: string
    items: {
      label: string
      description: string
      href: string
      iconName: string
    }[]
  }[]
}

export const navigationConfig: NavItem[] = [
  {
    id: 1,
    label: "Services",
    subMenus: [
      {
        title: "What we build",
        items: [
          {
            label: "Web Applications",
            description: "Custom web applications built for scale and performance",
            href: "/services/web-app-development",
            iconName: "Globe",
          },
          {
            label: "Mobile Applications",
            description: "Native and cross-platform mobile solutions",
            href: "/services/mobile-app-development",
            iconName: "Smartphone",
          },
          {
            label: "APIs & Integrations",
            description: "Design-first REST/GraphQL APIs and integrations",
            href: "/services/api-development",
            iconName: "Plug",
          },
          {
            label: "Cloud & DevOps",
            description: "Deploy and scale with modern cloud infrastructure",
            href: "/services/cloud-management",
            iconName: "Cloud",
          },
        ],
      },
      {
        title: "What we build",
        items: [
          {
            label: "UI/UX Design",
            description: "Design interfaces that users love and businesses trust",
            href: "/services/custom-development",
            iconName: "Palette",
          },
          {
            label: "System Architecture & Solution Design",
            description: "Scalable system architecture and technical solution design",
            href: "/cto-services/system-architecture-review",
            iconName: "Layout",
          },
          {
            label: "QA and Testing",
            description: "Quality assurance, automated and manual testing for reliable software",
            href: "/services/qa-and-testing",
            iconName: "FileCheck",
          },
          {
            label: "Maintenance & Support",
            description: "Keep your software running smoothly with ongoing support",
            href: "/services/software-maintenance",
            iconName: "Wrench",
          },
        ],
      },
    ],
  },
  {
    id: 2,
    label: "Work",
    subMenus: [
      {
        title: "Proof & credibility",
        items: [
          {
            label: "Portfolio",
            description: "Explore our web and mobile development projects",
            href: "/showcase",
            iconName: "Briefcase",
          },
          {
            label: "Case Studies",
            description: "Detailed stories of successful projects",
            href: "/case-studies",
            iconName: "FileText",
          },
          {
            label: "Client Testimonials",
            description: "What our clients say about working with us",
            href: "/testimonials",
            iconName: "Star",
          },
        ],
      },
    ],
  },
  {
    id: 3,
    label: "Process",
    subMenus: [
      {
        title: "How we work",
        items: [
          {
            label: "Our Development Process",
            description: "Discovery, design, build, launch, and support",
            href: "/services/custom-development",
            iconName: "Workflow",
          },
          {
            label: "Engagement Models",
            description: "Flexible engagement options to fit your needs",
            href: "/pricing",
            iconName: "Users",
          },
          {
            label: "Pricing & Packages",
            description: "Transparent pricing for all development services",
            href: "/pricing",
            iconName: "DollarSign",
          },
        ],
      },
    ],
  },
  {
    id: 4,
    label: "Industries",
    subMenus: [
      {
        title: "Relevance without clutter",
        items: [
          {
            label: "Finance & FinTech",
            description: "Financial services and fintech solutions",
            href: "/solutions/accountants",
            iconName: "DollarSign",
          },
          {
            label: "Real Estate",
            description: "Real estate technology solutions",
            href: "/solutions/real-estate",
            iconName: "Home",
          },
          {
            label: "Healthcare",
            description: "Healthcare and medical practice solutions",
            href: "/solutions/medical",
            iconName: "Heart",
          },
          {
            label: "Government & Enterprise",
            description: "Enterprise-grade solutions for large organizations",
            href: "/services/custom-development",
            iconName: "Building",
          },
          {
            label: "Startups & SaaS",
            description: "Rapid development for startups and SaaS companies",
            href: "/services/custom-development",
            iconName: "Rocket",
          },
        ],
      },
    ],
  },
  {
    id: 5,
    label: "Company",
    subMenus: [
      {
        title: "Who we are",
        items: [
          {
            label: "About Foxtra",
            description: "Learn about our mission and values",
            href: "/about",
            iconName: "Building",
          },
          {
            label: "Our Story",
            description: "How we started our journey",
            href: "/company/our-story",
            iconName: "BookOpen",
          },
          {
            label: "Careers",
            description: "Join our growing team",
            href: "/company/careers",
            iconName: "Briefcase",
          },
          {
            label: "Contact",
            description: "Get in touch with our team",
            href: "/contact",
            iconName: "Headphones",
          },
        ],
      },
    ],
  },
  {
    id: 6,
    label: "Resources",
    subMenus: [
      {
        title: "Authority & SEO",
        items: [
          {
            label: "Engineering Insights (Blog)",
            description: "Latest insights and industry trends",
            href: "/blog",
            iconName: "FileText",
          },
          {
            label: "FAQs",
            description: "Frequently asked questions about our services",
            href: "/resources/faqs",
            iconName: "HelpCircle",
          },
          {
            label: "Technology Stack",
            description: "Technologies and tools we use",
            href: "/resources/technology-stack",
            iconName: "Code",
          },
        ],
      },
    ],
  },
]

export interface AuthLink {
  label: string
  href: string
  isPrimary?: boolean
}

export const authLinks: AuthLink[] = [
  {
    label: "Sign in",
    href: "/login",
  },
  {
    label: "Book Meeting",
    href: "/bookings",
    isPrimary: true,
  },
]
