import { ReactNode, useState } from 'react'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { Button } from './Button'
import { Menu, X } from 'lucide-react'

interface NavItem {
  label: string
  href: string
  active?: boolean
}

interface NavbarProps {
  brand?: ReactNode
  items?: NavItem[]
  actions?: ReactNode
  className?: string
}

export function Navbar({ brand, items = [], actions, className = '' }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className={cn('bg-white shadow-sm border-b', className)}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            {brand && (
              <div className="flex-shrink-0">
                {brand}
              </div>
            )}
            <div className="hidden md:ml-6 md:flex md:space-x-8">
              {items.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className={cn(
                    'inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium transition-colors',
                    item.active
                      ? 'border-primary-500 text-gray-900'
                      : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                  )}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="hidden md:flex md:items-center md:space-x-4">
            {actions}
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="pt-2 pb-3 space-y-1">
            {items.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className={cn(
                  'block pl-3 pr-4 py-2 border-l-4 text-base font-medium transition-colors',
                  item.active
                    ? 'bg-primary-50 border-primary-500 text-primary-700'
                    : 'border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700'
                )}
              >
                {item.label}
              </Link>
            ))}
          </div>
          {actions && (
            <div className="pt-4 pb-3 border-t border-gray-200">
              <div className="flex items-center px-4 space-x-3">
                {actions}
              </div>
            </div>
          )}
        </div>
      )}
    </nav>
  )
}
