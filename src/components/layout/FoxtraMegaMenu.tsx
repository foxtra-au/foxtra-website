import MegaMenu from '@/components/ui/MegaMenu'
import type { MegaMenuItem } from '@/components/ui/MegaMenu'
import {
  Cpu,
  Zap,
  Brain,
  Code,
  Database,
  Shield,
  BookOpen,
  Users,
  FileText,
  Newspaper,
  Building,
  Phone,
  Star,
} from 'lucide-react'

export function FoxtraMegaMenu() {
  const FOXTRA_NAV_ITEMS: MegaMenuItem[] = [
    {
      id: 1,
      label: "Solutions",
      subMenus: [
        {
          title: "AI Solutions",
          items: [
            {
              label: "AI Chatbot",
              description: "Intelligent customer support",
              icon: Brain,
            },
            {
              label: "AI Analytics",
              description: "Data insights and predictions",
              icon: Cpu,
            },
            {
              label: "AI Automation",
              description: "Streamline your workflows",
              icon: Zap,
            },
          ],
        },
        {
          title: "Platform",
          items: [
            {
              label: "API Access",
              description: "Integrate with our APIs",
              icon: Code,
            },
            {
              label: "Dashboard",
              description: "Manage your AI tools",
              icon: Database,
            },
            {
              label: "Security",
              description: "Enterprise-grade security",
              icon: Shield,
            },
          ],
        },
      ],
    },
    {
      id: 2,
      label: "Resources",
      subMenus: [
        {
          title: "Learn",
          items: [
            {
              label: "Documentation",
              description: "Complete API documentation",
              icon: BookOpen,
            },
            {
              label: "Tutorials",
              description: "Step-by-step guides",
              icon: FileText,
            },
            {
              label: "Blog",
              description: "Latest AI insights and news",
              icon: Newspaper,
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Developer Forum",
              description: "Connect with developers",
              icon: Users,
            },
            {
              label: "Case Studies",
              description: "Success stories from customers",
              icon: Star,
            },
          ],
        },
      ],
    },
    {
      id: 3,
      label: "Company",
      subMenus: [
        {
          title: "About",
          items: [
            {
              label: "Our Story",
              description: "How we started our journey",
              icon: Building,
            },
            {
              label: "Team",
              description: "Meet our amazing team",
              icon: Users,
            },
          ],
        },
        {
          title: "Support",
          items: [
            {
              label: "Contact Us",
              description: "Get in touch with our team",
              icon: Phone,
            },
            {
              label: "Help Center",
              description: "Find answers to common questions",
              icon: BookOpen,
            },
          ],
        },
      ],
    },
    { id: 4, label: "Pricing", link: "/pricing" },
  ]

  return (
    <div className="bg-black/90 backdrop-blur-sm">
      <MegaMenu items={FOXTRA_NAV_ITEMS} />
    </div>
  )
}
