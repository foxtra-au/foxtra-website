import { ReactNode, useState } from 'react'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { ChevronDown, ChevronRight } from 'lucide-react'

interface SidebarItem {
  label: string
  href?: string
  icon?: ReactNode
  children?: SidebarItem[]
  active?: boolean
}

interface SidebarProps {
  items: SidebarItem[]
  className?: string
  collapsed?: boolean
  onToggle?: () => void
}

export function Sidebar({ items, className = '', collapsed = false, onToggle }: SidebarProps) {
  const [expandedItems, setExpandedItems] = useState<string[]>([])

  const toggleExpanded = (label: string) => {
    setExpandedItems(prev => 
      prev.includes(label) 
        ? prev.filter(item => item !== label)
        : [...prev, label]
    )
  }

  const renderItem = (item: SidebarItem, level = 0) => {
    const hasChildren = item.children && item.children.length > 0
    const isExpanded = expandedItems.includes(item.label)
    const indentClass = `pl-${(level + 1) * 4}`

    return (
      <div key={item.label}>
        <div className={cn('flex items-center', collapsed && 'justify-center')}>
          {hasChildren ? (
            <button
              onClick={() => toggleExpanded(item.label)}
              className={cn(
                'flex items-center w-full px-3 py-2 text-sm font-medium rounded-md transition-colors',
                'hover:bg-gray-100 hover:text-gray-900',
                item.active && 'bg-primary-100 text-primary-700',
                indentClass
              )}
            >
              {item.icon && <span className="mr-3">{item.icon}</span>}
              {!collapsed && (
                <>
                  <span className="flex-1 text-left">{item.label}</span>
                  {isExpanded ? <ChevronDown className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
                </>
              )}
            </button>
          ) : (
            <Link
              href={item.href || '#'}
              className={cn(
                'flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors',
                'hover:bg-gray-100 hover:text-gray-900',
                item.active && 'bg-primary-100 text-primary-700',
                indentClass
              )}
            >
              {item.icon && <span className="mr-3">{item.icon}</span>}
              {!collapsed && <span>{item.label}</span>}
            </Link>
          )}
        </div>
        
        {hasChildren && isExpanded && !collapsed && (
          <div className="mt-1">
            {item.children?.map(child => renderItem(child, level + 1))}
          </div>
        )}
      </div>
    )
  }

  return (
    <div className={cn(
      'flex flex-col h-full bg-white border-r border-gray-200 transition-all duration-300',
      collapsed ? 'w-16' : 'w-64',
      className
    )}>
      <div className="flex-1 overflow-y-auto py-4">
        <nav className="space-y-1">
          {items.map(item => renderItem(item))}
        </nav>
      </div>
      
      {onToggle && (
        <div className="p-4 border-t border-gray-200">
          <button
            onClick={onToggle}
            className="w-full flex items-center justify-center px-3 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-md transition-colors"
          >
            {collapsed ? 'Expand' : 'Collapse'}
          </button>
        </div>
      )}
    </div>
  )
}
