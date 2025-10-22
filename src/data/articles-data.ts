import { ArticleCardProps } from "@/components/ui/ArticleCard";

export interface Article {
  id: string;
  tag: string;
  date: {
    month: string;
    day: number;
  };
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  location: {
    city: string;
    country: string;
  };
  category: string;
}

export const articles: Article[] = [
  // AI Agents Articles (8 - Chat + Voice)
  {
    id: "1",
    category: "AI Agents",
    tag: "AI Innovation",
    date: { month: "JAN", day: 15 },
    title: "Revolutionizing Customer Service with AI Chat Agents",
    description: "How AI-powered chat agents are transforming customer interactions and boosting satisfaction rates.",
    imageUrl: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800&h=500&fit=crop",
    imageAlt: "AI Chat Interface",
    location: { city: "San Francisco", country: "California, USA" }
  },
  {
    id: "2",
    category: "AI Agents",
    tag: "Automation",
    date: { month: "JAN", day: 22 },
    title: "24/7 Customer Support: The AI Advantage",
    description: "Implementing round-the-clock customer support with intelligent AI chat agents.",
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop",
    imageAlt: "24/7 Support",
    location: { city: "New York", country: "New York, USA" }
  },
  {
    id: "3",
    category: "AI Agents",
    tag: "Integration",
    date: { month: "FEB", day: 5 },
    title: "Seamless CRM Integration with AI Chat",
    description: "Connect your AI chat agents directly to your CRM for enhanced lead management.",
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop",
    imageAlt: "CRM Integration",
    location: { city: "Austin", country: "Texas, USA" }
  },
  {
    id: "4",
    category: "AI Agents",
    tag: "Analytics",
    date: { month: "FEB", day: 12 },
    title: "Data-Driven Insights from AI Conversations",
    description: "Leverage conversation analytics to improve customer experience and business outcomes.",
    imageUrl: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=500&fit=crop",
    imageAlt: "Analytics Dashboard",
    location: { city: "Seattle", country: "Washington, USA" }
  },
  {
    id: "5",
    category: "AI Agents",
    tag: "Personalization",
    date: { month: "FEB", day: 20 },
    title: "Personalizing AI Chat Responses",
    description: "Train your AI chat agents to understand your brand voice and customer preferences.",
    imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=500&fit=crop",
    imageAlt: "Personalization",
    location: { city: "Boston", country: "Massachusetts, USA" }
  },
  {
    id: "6",
    category: "AI Agents",
    tag: "Efficiency",
    date: { month: "MAR", day: 3 },
    title: "Reducing Response Time with Smart AI",
    description: "How AI chat agents can reduce average response time from hours to seconds.",
    imageUrl: "https://images.unsplash.com/photo-1553775282-20af80779df7?w=800&h=500&fit=crop",
    imageAlt: "Fast Response",
    location: { city: "Denver", country: "Colorado, USA" }
  },
  {
    id: "7",
    category: "AI Agents",
    tag: "ROI",
    date: { month: "MAR", day: 10 },
    title: "Measuring ROI of AI Chat Implementation",
    description: "Calculate the return on investment when implementing AI chat agents in your business.",
    imageUrl: "https://images.unsplash.com/photo-1589254065878-42c9da997008?w=800&h=500&fit=crop",
    imageAlt: "ROI Metrics",
    location: { city: "Chicago", country: "Illinois, USA" }
  },
  {
    id: "8",
    category: "AI Agents",
    tag: "Best Practices",
    date: { month: "MAR", day: 18 },
    title: "Best Practices for AI Chat Agent Training",
    description: "Essential guidelines for training AI chat agents to deliver exceptional customer service.",
    imageUrl: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=500&fit=crop",
    imageAlt: "AI Training",
    location: { city: "Miami", country: "Florida, USA" }
  },

  // AI Voice Agent Articles (8)
  {
    id: "9",
    category: "AI Voice Agent",
    tag: "Voice Technology",
    date: { month: "MAR", day: 25 },
    title: "The Future of Voice-Powered Customer Service",
    description: "Exploring how AI voice agents are reshaping phone-based customer interactions.",
    imageUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&h=500&fit=crop",
    imageAlt: "Voice Technology",
    location: { city: "Los Angeles", country: "California, USA" }
  },
  {
    id: "10",
    category: "AI Voice Agent",
    tag: "Natural Language",
    date: { month: "APR", day: 2 },
    title: "Natural Conversations with AI Voice Agents",
    description: "Creating human-like voice interactions that feel natural and engaging.",
    imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=500&fit=crop",
    imageAlt: "Natural Language",
    location: { city: "Portland", country: "Oregon, USA" }
  },
  {
    id: "11",
    category: "AI Voice Agent",
    tag: "Call Center",
    date: { month: "APR", day: 9 },
    title: "Transforming Call Centers with AI Voice",
    description: "How AI voice agents are revolutionizing traditional call center operations.",
    imageUrl: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=500&fit=crop",
    imageAlt: "Call Center",
    location: { city: "Phoenix", country: "Arizona, USA" }
  },
  {
    id: "12",
    category: "AI Voice Agent",
    tag: "Multilingual",
    date: { month: "APR", day: 16 },
    title: "Multilingual AI Voice Support",
    description: "Providing customer support in multiple languages with AI voice technology.",
    imageUrl: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=500&fit=crop",
    imageAlt: "Multilingual Support",
    location: { city: "Las Vegas", country: "Nevada, USA" }
  },
  {
    id: "13",
    category: "AI Voice Agent",
    tag: "Integration",
    date: { month: "APR", day: 23 },
    title: "Integrating AI Voice with Existing Systems",
    description: "Seamlessly connect AI voice agents with your current business infrastructure.",
    imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=500&fit=crop",
    imageAlt: "System Integration",
    location: { city: "Atlanta", country: "Georgia, USA" }
  },
  {
    id: "14",
    category: "AI Voice Agent",
    tag: "Performance",
    date: { month: "MAY", day: 1 },
    title: "Optimizing AI Voice Agent Performance",
    description: "Tips and strategies for maximizing the effectiveness of your AI voice agents.",
    imageUrl: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=500&fit=crop",
    imageAlt: "Performance Optimization",
    location: { city: "Dallas", country: "Texas, USA" }
  },
  {
    id: "15",
    category: "AI Voice Agent",
    tag: "Security",
    date: { month: "MAY", day: 8 },
    title: "Security Considerations for AI Voice Systems",
    description: "Ensuring data privacy and security in AI voice agent implementations.",
    imageUrl: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=500&fit=crop",
    imageAlt: "Voice Security",
    location: { city: "Nashville", country: "Tennessee, USA" }
  },
  {
    id: "16",
    category: "AI Voice Agent",
    tag: "Innovation",
    date: { month: "MAY", day: 15 },
    title: "Next-Gen Voice AI Technologies",
    description: "Exploring emerging technologies in AI voice processing and natural language understanding.",
    imageUrl: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&h=500&fit=crop",
    imageAlt: "Voice Innovation",
    location: { city: "San Diego", country: "California, USA" }
  },

  // AI SEO Articles (8)
  {
    id: "17",
    category: "AI SEO",
    tag: "Search Optimization",
    date: { month: "MAY", day: 22 },
    title: "AI-Powered SEO: The Complete Guide",
    description: "Comprehensive guide to using artificial intelligence for search engine optimization.",
    imageUrl: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=800&h=500&fit=crop",
    imageAlt: "SEO Strategy",
    location: { city: "Salt Lake City", country: "Utah, USA" }
  },
  {
    id: "18",
    category: "AI SEO",
    tag: "Content Creation",
    date: { month: "MAY", day: 29 },
    title: "AI Content Generation for SEO Success",
    description: "Creating high-quality, SEO-optimized content using artificial intelligence tools.",
    imageUrl: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=500&fit=crop",
    imageAlt: "Content Creation",
    location: { city: "Minneapolis", country: "Minnesota, USA" }
  },
  {
    id: "19",
    category: "AI SEO",
    tag: "Keyword Research",
    date: { month: "JUN", day: 5 },
    title: "Advanced Keyword Research with AI",
    description: "Leverage AI tools to discover high-impact keywords and optimize your content strategy.",
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop",
    imageAlt: "Keyword Research",
    location: { city: "Tampa", country: "Florida, USA" }
  },
  {
    id: "20",
    category: "AI SEO",
    tag: "Technical SEO",
    date: { month: "JUN", day: 12 },
    title: "Technical SEO Audits with AI Tools",
    description: "Automate technical SEO audits using AI-powered analysis and recommendations.",
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop",
    imageAlt: "Technical SEO",
    location: { city: "Charlotte", country: "North Carolina, USA" }
  },
  {
    id: "21",
    category: "AI SEO",
    tag: "Analytics",
    date: { month: "JUN", day: 19 },
    title: "AI-Enhanced SEO Analytics and Reporting",
    description: "Transform your SEO reporting with AI-powered insights and predictive analytics.",
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop",
    imageAlt: "SEO Analytics",
    location: { city: "Indianapolis", country: "Indiana, USA" }
  },
  {
    id: "22",
    category: "AI SEO",
    tag: "Local SEO",
    date: { month: "JUN", day: 26 },
    title: "Local SEO Optimization with AI",
    description: "Boost local search rankings using AI-driven local SEO strategies and tools.",
    imageUrl: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=500&fit=crop",
    imageAlt: "Local SEO",
    location: { city: "Kansas City", country: "Missouri, USA" }
  },
  {
    id: "23",
    category: "AI SEO",
    tag: "Link Building",
    date: { month: "JUL", day: 3 },
    title: "AI-Driven Link Building Strategies",
    description: "Discover how AI can identify and secure high-quality backlink opportunities.",
    imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=500&fit=crop",
    imageAlt: "Link Building",
    location: { city: "Columbus", country: "Ohio, USA" }
  },
  {
    id: "24",
    category: "AI SEO",
    tag: "Future Trends",
    date: { month: "JUL", day: 10 },
    title: "The Future of SEO: AI and Machine Learning",
    description: "Exploring upcoming trends in AI-powered SEO and their impact on digital marketing.",
    imageUrl: "https://images.unsplash.com/photo-1553775282-20af80779df7?w=800&h=500&fit=crop",
    imageAlt: "Future SEO",
    location: { city: "San Antonio", country: "Texas, USA" }
  },

  // Custom Development Articles (8)
  {
    id: "25",
    category: "Custom Development",
    tag: "Web Development",
    date: { month: "JUL", day: 17 },
    title: "Building Scalable Web Applications",
    description: "Best practices for developing web applications that can grow with your business.",
    imageUrl: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=500&fit=crop",
    imageAlt: "Web Development",
    location: { city: "Portland", country: "Oregon, USA" }
  },
  {
    id: "26",
    category: "Custom Development",
    tag: "Mobile Apps",
    date: { month: "JUL", day: 24 },
    title: "Cross-Platform Mobile App Development",
    description: "Creating mobile applications that work seamlessly across iOS and Android platforms.",
    imageUrl: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=500&fit=crop",
    imageAlt: "Mobile Development",
    location: { city: "San Jose", country: "California, USA" }
  },
  {
    id: "27",
    category: "Custom Development",
    tag: "Architecture",
    date: { month: "JUL", day: 31 },
    title: "Microservices Architecture Design",
    description: "Designing robust microservices architectures for enterprise applications.",
    imageUrl: "https://images.unsplash.com/photo-1589254065878-42c9da997008?w=800&h=500&fit=crop",
    imageAlt: "Architecture Design",
    location: { city: "Raleigh", country: "North Carolina, USA" }
  },
  {
    id: "28",
    category: "Custom Development",
    tag: "Performance",
    date: { month: "AUG", day: 7 },
    title: "Optimizing Application Performance",
    description: "Techniques and tools for improving the speed and efficiency of custom applications.",
    imageUrl: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=500&fit=crop",
    imageAlt: "Performance Optimization",
    location: { city: "Louisville", country: "Kentucky, USA" }
  },
  {
    id: "29",
    category: "Custom Development",
    tag: "Security",
    date: { month: "AUG", day: 14 },
    title: "Security Best Practices in Development",
    description: "Implementing robust security measures in custom software development projects.",
    imageUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&h=500&fit=crop",
    imageAlt: "Development Security",
    location: { city: "Memphis", country: "Tennessee, USA" }
  },
  {
    id: "30",
    category: "Custom Development",
    tag: "Testing",
    date: { month: "AUG", day: 21 },
    title: "Automated Testing in Custom Development",
    description: "Implementing comprehensive testing strategies for reliable software delivery.",
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop",
    imageAlt: "Automated Testing",
    location: { city: "Baltimore", country: "Maryland, USA" }
  },
  {
    id: "31",
    category: "Custom Development",
    tag: "DevOps",
    date: { month: "AUG", day: 28 },
    title: "DevOps Integration for Custom Projects",
    description: "Streamlining development workflows with DevOps practices and automation.",
    imageUrl: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=500&fit=crop",
    imageAlt: "DevOps Integration",
    location: { city: "Milwaukee", country: "Wisconsin, USA" }
  },
  {
    id: "32",
    category: "Custom Development",
    tag: "Innovation",
    date: { month: "SEP", day: 4 },
    title: "Emerging Technologies in Custom Development",
    description: "Exploring cutting-edge technologies and their applications in custom software development.",
    imageUrl: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=500&fit=crop",
    imageAlt: "Tech Innovation",
    location: { city: "Albuquerque", country: "New Mexico, USA" }
  }
];

export const categories = ["All", "AI Agents", "AI SEO", "Custom Development"];