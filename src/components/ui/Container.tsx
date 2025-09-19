import { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface ContainerProps {
  children: ReactNode
  className?: string
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full'
  padding?: 'none' | 'sm' | 'md' | 'lg'
}

export function Container({ 
  children, 
  className = '', 
  maxWidth = 'xl',
  padding = 'md' 
}: ContainerProps) {
  const maxWidthClasses = {
    sm: 'max-w-screen-sm',
    md: 'max-w-screen-md',
    lg: 'max-w-screen-lg',
    xl: 'max-w-6xl',
    '2xl': 'max-w-screen-2xl',
    full: 'max-w-full',
  }

  const paddingClasses = {
    none: '',
    sm: 'px-4 py-2',
    md: 'px-4 py-8',
    lg: 'px-6 py-12',
  }

  return (
    <div className={cn(
      'mx-auto',
      maxWidthClasses[maxWidth],
      paddingClasses[padding],
      className
    )}>
      {children}
    </div>
  )
}
