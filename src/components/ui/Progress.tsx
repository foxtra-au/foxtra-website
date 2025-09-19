import { cn } from '@/lib/utils'

interface ProgressProps {
  value: number
  max?: number
  size?: 'sm' | 'md' | 'lg'
  variant?: 'default' | 'success' | 'warning' | 'error'
  showLabel?: boolean
  label?: string
  className?: string
}

export function Progress({
  value,
  max = 100,
  size = 'md',
  variant = 'default',
  showLabel = false,
  label,
  className = ''
}: ProgressProps) {
  const percentage = Math.min(Math.max((value / max) * 100, 0), 100)

  const sizes = {
    sm: 'h-1',
    md: 'h-2',
    lg: 'h-3',
  }

  const variants = {
    default: 'bg-primary-600',
    success: 'bg-green-600',
    warning: 'bg-yellow-600',
    error: 'bg-red-600',
  }

  return (
    <div className={cn('w-full', className)}>
      {showLabel && (
        <div className="flex justify-between text-sm font-medium text-gray-700 mb-1">
          <span>{label || 'Progress'}</span>
          <span>{Math.round(percentage)}%</span>
        </div>
      )}
      <div className={cn('w-full bg-gray-200 rounded-full overflow-hidden', sizes[size])}>
        <div
          className={cn('h-full transition-all duration-300 ease-in-out', variants[variant])}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  )
}

interface CircularProgressProps {
  value: number
  max?: number
  size?: 'sm' | 'md' | 'lg' | 'xl'
  variant?: 'default' | 'success' | 'warning' | 'error'
  showLabel?: boolean
  label?: string
  className?: string
}

export function CircularProgress({
  value,
  max = 100,
  size = 'md',
  variant = 'default',
  showLabel = false,
  label,
  className = ''
}: CircularProgressProps) {
  const percentage = Math.min(Math.max((value / max) * 100, 0), 100)
  const circumference = 2 * Math.PI * 45 // radius = 45
  const strokeDashoffset = circumference - (percentage / 100) * circumference

  const sizes = {
    sm: 'h-16 w-16',
    md: 'h-20 w-20',
    lg: 'h-24 w-24',
    xl: 'h-32 w-32',
  }

  const variants = {
    default: 'text-primary-600',
    success: 'text-green-600',
    warning: 'text-yellow-600',
    error: 'text-red-600',
  }

  return (
    <div className={cn('relative inline-flex items-center justify-center', sizes[size], className)}>
      <svg className="transform -rotate-90" width="100%" height="100%" viewBox="0 0 100 100">
        <circle
          cx="50"
          cy="50"
          r="45"
          stroke="currentColor"
          strokeWidth="8"
          fill="transparent"
          className="text-gray-200"
        />
        <circle
          cx="50"
          cy="50"
          r="45"
          stroke="currentColor"
          strokeWidth="8"
          fill="transparent"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          className={cn('transition-all duration-300 ease-in-out', variants[variant])}
        />
      </svg>
      {showLabel && (
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          <span className="text-xs font-medium text-gray-600">{label}</span>
          <span className="text-lg font-bold text-gray-900">{Math.round(percentage)}%</span>
        </div>
      )}
    </div>
  )
}
