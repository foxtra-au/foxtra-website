import { forwardRef } from 'react'
import { cn } from '@/lib/utils'

interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: string
  error?: string
  description?: string
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ label, error, description, className = '', ...props }, ref) => {
    return (
      <div className="mb-4">
        <div className="flex items-start">
          <div className="flex items-center h-5">
            <input
              ref={ref}
              type="checkbox"
              className={cn(
                'w-4 h-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500',
                error && 'border-red-500 focus:ring-red-500',
                className
              )}
              {...props}
            />
          </div>
          <div className="ml-3 text-sm">
            {label && (
              <label className="font-medium text-gray-700">
                {label}
              </label>
            )}
            {description && (
              <p className="text-gray-500">{description}</p>
            )}
            {error && (
              <p className="text-red-600">{error}</p>
            )}
          </div>
        </div>
      </div>
    )
  }
)

Checkbox.displayName = 'Checkbox'
