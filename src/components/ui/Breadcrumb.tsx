import Link from 'next/link'
import { ReactNode } from 'react'
import { cn } from '@/lib/utils'
import { ChevronRight, Home } from 'lucide-react'

interface BreadcrumbItem {
  label: string
  href?: string
  icon?: ReactNode
}

interface BreadcrumbProps {
  items: BreadcrumbItem[]
  separator?: ReactNode
  showHome?: boolean
  className?: string
}

export function Breadcrumb({ 
  items, 
  separator = <ChevronRight className="h-4 w-4" />, 
  showHome = true,
  className = '' 
}: BreadcrumbProps) {
  const allItems = showHome 
    ? [{ label: 'Home', href: '/', icon: <Home className="h-4 w-4" /> }, ...items]
    : items

  return (
    <nav className={cn('flex', className)} aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-1 md:space-x-3">
        {allItems.map((item, index) => (
          <li key={index} className="inline-flex items-center">
            {index > 0 && (
              <span className="text-gray-400 mx-2">
                {separator}
              </span>
            )}
            {item.href && index < allItems.length - 1 ? (
              <Link
                href={item.href}
                className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-primary-600 transition-colors"
              >
                {item.icon && <span className="mr-1">{item.icon}</span>}
                {item.label}
              </Link>
            ) : (
              <span className="inline-flex items-center text-sm font-medium text-gray-500">
                {item.icon && <span className="mr-1">{item.icon}</span>}
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}
