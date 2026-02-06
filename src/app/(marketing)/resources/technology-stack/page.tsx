import { ServiceBanner } from '@/components/ui/ServiceBanner'
import { ServicePageWrapper } from '@/components/sections'
import { Container } from '@/components/ui/Container'
import { Metadata } from 'next'
import {
  Code,
  Layout,
  Database,
  Cloud,
  Wrench,
  type LucideIcon,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Technology Stack | Foxtra',
  description: 'Technologies and tools we use: Next.js, React, TypeScript, Tailwind CSS, Node.js, MongoDB, AWS, and more.',
  robots: { index: true, follow: true },
}

interface StackCategory {
  title: string
  icon: LucideIcon
  items: { name: string; description: string }[]
}

const stackCategories: StackCategory[] = [
  {
    title: 'Frontend',
    icon: Layout,
    items: [
      { name: 'Next.js', description: 'React framework with App Router, server components, and full-stack capabilities' },
      { name: 'React', description: 'UI library for component-based interfaces' },
      { name: 'TypeScript', description: 'Typed JavaScript for safer, maintainable code' },
      { name: 'Tailwind CSS', description: 'Utility-first CSS for rapid, consistent styling' },
      { name: 'Framer Motion', description: 'Animation and gesture library for React' },
      { name: 'Radix UI', description: 'Accessible, unstyled primitives for design systems' },
      { name: 'Lucide React', description: 'Icon set for clean, consistent UI icons' },
    ],
  },
  {
    title: 'Backend & API',
    icon: Code,
    items: [
      { name: 'Node.js', description: 'JavaScript runtime for server-side and API development' },
      { name: 'Next.js API Routes', description: 'Serverless API endpoints and server actions' },
      { name: 'REST & GraphQL', description: 'API design and integration patterns' },
      { name: 'Zod', description: 'Schema validation for APIs and forms' },
    ],
  },
  {
    title: 'Database & Data',
    icon: Database,
    items: [
      { name: 'MongoDB', description: 'Document database for flexible, scalable data' },
      { name: 'Mongoose', description: 'ODM for MongoDB and Node.js' },
      { name: 'PostgreSQL', description: 'Relational database for structured data and reporting' },
    ],
  },
  {
    title: 'Cloud & DevOps',
    icon: Cloud,
    items: [
      { name: 'AWS', description: 'Compute, storage, and serverless (Lambda, S3, etc.)' },
      { name: 'Vercel', description: 'Hosting and edge for Next.js applications' },
      { name: 'Docker', description: 'Containers for consistent dev and deployment' },
      { name: 'CI/CD', description: 'Automated testing and deployment pipelines' },
    ],
  },
  {
    title: 'Tools & Workflow',
    icon: Wrench,
    items: [
      { name: 'Git', description: 'Version control and collaboration' },
      { name: 'ESLint', description: 'Code quality and consistency' },
      { name: 'TypeScript', description: 'Static typing and tooling' },
      { name: 'React Hook Form', description: 'Performant forms with validation' },
    ],
  },
]

function StackSection({ category }: { category: StackCategory }) {
  const Icon = category.icon
  return (
    <section className="rounded-xl border border-white/10 bg-white/[0.02] p-4 sm:p-6">
      <div className="mb-4 sm:mb-5 flex items-center gap-2 sm:gap-3">
        <div className="flex h-9 w-9 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-lg bg-white/5">
          <Icon className="h-4 w-4 sm:h-5 sm:w-5 text-rose-500/90" />
        </div>
        <h2 className="text-lg sm:text-xl font-semibold text-white">{category.title}</h2>
      </div>
      {/* 2 cols on mobile, 4 blocks per row from sm up */}
      <ul className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
        {category.items.map((item) => (
          <li
            key={item.name}
            className="flex flex-col gap-1 rounded-lg border border-white/5 bg-white/[0.02] p-3 sm:p-4 transition hover:border-white/10 hover:bg-white/[0.04]"
          >
            <span className="font-medium text-white text-sm sm:text-base">{item.name}</span>
            <span className="text-xs sm:text-sm text-white/60 line-clamp-2">{item.description}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default function TechnologyStackPage() {
  return (
    <ServicePageWrapper>
      <ServiceBanner
        title="Technology Stack"
        description="Technologies and tools we use to build reliable, scalable software. From frontend and backend to cloud and DevOps."
        badge="Foxtra • Resources"
        features={[]}
      />
      <Container className="pb-16 sm:pb-20 pt-4 px-4 sm:px-6">
        <p className="mx-auto max-w-2xl text-center text-white/70 mb-8 sm:mb-12 text-sm sm:text-base px-1">
          We choose proven, modern technologies that fit your product and scale with you.
        </p>
        <div className="flex flex-col gap-6 sm:gap-8">
          {stackCategories.map((category) => (
            <StackSection key={category.title} category={category} />
          ))}
        </div>
      </Container>
    </ServicePageWrapper>
  )
}
