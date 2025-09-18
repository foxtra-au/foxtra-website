import { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface AvatarProps {
  src?: string
  alt?: string
  fallback?: ReactNode
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  shape?: 'circle' | 'square'
  className?: string
}

export function Avatar({ 
  src, 
  alt = '', 
  fallback, 
  size = 'md',
  shape = 'circle',
  className = '' 
}: AvatarProps) {
  const sizes = {
    xs: 'h-6 w-6 text-xs',
    sm: 'h-8 w-8 text-sm',
    md: 'h-10 w-10 text-base',
    lg: 'h-12 w-12 text-lg',
    xl: 'h-16 w-16 text-xl',
  }

  const shapes = {
    circle: 'rounded-full',
    square: 'rounded-lg',
  }

  return (
    <div className={cn(
      'relative inline-flex items-center justify-center bg-gray-500 text-white font-medium overflow-hidden',
      sizes[size],
      shapes[shape],
      className
    )}>
      {src ? (
        <img
          src={src}
          alt={alt}
          className="h-full w-full object-cover"
        />
      ) : (
        <span className="flex items-center justify-center">
          {fallback}
        </span>
      )}
    </div>
  )
}

interface AvatarGroupProps {
  children: ReactNode
  max?: number
  className?: string
}

export function AvatarGroup({ children, max = 3, className = '' }: AvatarGroupProps) {
  const childrenArray = Array.isArray(children) ? children : [children]
  const visibleAvatars = childrenArray.slice(0, max)
  const remainingCount = childrenArray.length - max

  return (
    <div className={cn('flex -space-x-2', className)}>
      {visibleAvatars.map((avatar, index) => (
        <div key={index} className="relative">
          {avatar}
        </div>
      ))}
      {remainingCount > 0 && (
        <div className="relative">
          <div className="h-10 w-10 rounded-full bg-gray-200 border-2 border-white flex items-center justify-center text-xs font-medium text-gray-600">
            +{remainingCount}
          </div>
        </div>
      )}
    </div>
  )
}
