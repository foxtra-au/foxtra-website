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
    label: "CTO Services",
    href: "/cto-services",
    subMenus: [
      {
        title: "CTO Services",
        items: [
          {
            label: "Virtual CTO",
            description: "On-demand technology leadership",
            href: "/cto-services/virtual-cto",
            iconName: "Briefcase",
          },
          {
            label: "Tech Strategy & Roadmap",
            description: "Align goals with scalable architecture",
            href: "/cto-services/tech-strategy",
            iconName: "Target",
          },
          {
            label: "System Architecture Review",
            description: "Audit stack, design future-ready solutions",
            href: "/cto-services/system-architecture-review",
            iconName: "Layers",
          },
          {
            label: "Team Mentoring & Leadership",
            description: "Guidance for dev and product teams",
            href: "/cto-services/team-mentoring",
            iconName: "Users",
          },
          {
            label: "Cloud & DevOps Advisory",
            description: "Optimise cost and performance on AWS/Azure",
            href: "/cto-services/cloud-advisory",
            iconName: "Cloud",
          },
          {
            label: "AI & Automation Strategy",
            description: "Integrate AI agents and automation",
            href: "/cto-services/ai-automation-strategy",
            iconName: "Brain",
          },
        ],
      },
    ],
  },
  {
    id: 2,
    label: "Development",
    subMenus: [
      {
        title: "Core Development",
        items: [
          {
            label: "Custom Development",
            description: "Custom apps that fit your workflows",
            href: "/services/custom-development",
            iconName: "Code",
          },
          {
            label: "Mobile App Development",
            description: "Native and cross-platform mobile solutions",
            href: "/services/mobile-app-development",
            iconName: "Smartphone",
          },
          {
            label: "API Development",
            description: "Design-first REST/GraphQL APIs",
            href: "/services/api-development",
            iconName: "Database",
          },
        ],
      },
      {
        title: "Infrastructure & Solutions",
        items: [
          {
            label: "Cloud Management",
            description: "Architecture and DevOps optimization",
            href: "/services/cloud-management",
            iconName: "Cloud",
          },
          {
            label: "AI Websites",
            description: "Smart websites built in 4 hours",
            href: "/services/ai-websites",
            iconName: "Globe",
          },
          {
            label: "Lead Magnet",
            description: "Lead capture plugin for accountants",
            href: "/solutions/lead-magnet",
            iconName: "Target",
          },
          {
            label: "Pricing",
            description: "Transparent pricing for all services",
            href: "/pricing",
            iconName: "DollarSign",
          },
        ],
      },
    ],
  },
  {
    id: 3,
    label: "Marketing",
    subMenus: [
      {
        title: "Digital Marketing",
        items: [
          {
            label: "AI SEO",
            description: "Technical fixes and content at scale",
            href: "/services/ai-seo",
            iconName: "Search",
          },
          {
            label: "Google Ads",
            description: "High-intent campaigns with smart bidding",
            href: "/services/google-ads",
            iconName: "Target",
          },
          {
            label: "Social Media Management",
            description: "Calendar, creation, and community",
            href: "/services/social-media-management",
            iconName: "Share2",
          },
          {
            label: "Social Media Ads",
            description: "Paid social that finds your audience",
            href: "/services/social-media-ads",
            iconName: "TrendingUp",
          },
        ],
      },
      {
        title: "Marketing Channels",
        items: [
          {
            label: "Video Marketing",
            description: "Engaging video content and campaigns",
            href: "/services/video-marketing",
            iconName: "Video",
          },
          {
            label: "Email Marketing",
            description: "Targeted email campaigns and automation",
            href: "/services/email-marketing",
            iconName: "Mail",
          },
          {
            label: "SMS Marketing",
            description: "Direct SMS campaigns and notifications",
            href: "/services/sms-marketing",
            iconName: "MessageSquare",
          },
          {
            label: "Blog & Article Writing",
            description: "SEO-driven, authority-building content",
            href: "/services/blog-article-writing",
            iconName: "FileText",
          },
        ],
      },
    ],
  },
  {
    id: 4,
    label: "Solutions",
    subMenus: [
      {
        title: "Industries",
        items: [
          {
            label: "Plumbers",
            description: "AI solutions for plumbing businesses",
            href: "/solutions/plumbers",
            iconName: "Wrench",
          },
          {
            label: "Accountants",
            description: "AI-powered accounting and bookkeeping",
            href: "/solutions/accountants",
            iconName: "FileText",
          },
          {
            label: "Lawyers",
            description: "Legal AI for law firms and attorneys",
            href: "/solutions/lawyers",
            iconName: "Scale",
          },
          {
            label: "Electricians",
            description: "AI tools for electrical contractors",
            href: "/solutions/electricians",
            iconName: "Zap",
          },
          {
            label: "Medical",
            description: "Healthcare AI solutions",
            href: "/solutions/medical",
            iconName: "Heart",
          },
          {
            label: "Real Estate",
            description: "AI for real estate professionals",
            href: "/solutions/real-estate",
            iconName: "Home",
          },
          {
            label: "Childcare",
            description: "AI solutions for childcare centers",
            href: "/solutions/childcare",
            iconName: "Users",
          },
          {
            label: "Car Wash",
            description: "AI automation for car wash businesses",
            href: "/solutions/car-wash",
            iconName: "Car",
          },
          {
            label: "Car Mechanic",
            description: "AI solutions for auto repair services",
            href: "/solutions/car-mechanic",
            iconName: "Wrench",
          },
          {
            label: "Pest Control",
            description: "AI solutions for pest control services",
            href: "/solutions/pest-control",
            iconName: "Shield",
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
        title: "Company",
        items: [
          {
            label: "Our Story",
            description: "How we started our journey",
            href: "/company/our-story",
            iconName: "Building",
          },
          {
            label: "Our Team",
            description: "Meet our talented team members",
            href: "/company/team",
            iconName: "Users",
          },
          {
            label: "Careers",
            description: "Join our growing team",
            href: "/company/careers",
            iconName: "Briefcase",
          },
          {
            label: "Blog",
            description: "Latest insights and industry trends",
            href: "/blog",
            iconName: "FileText",
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
