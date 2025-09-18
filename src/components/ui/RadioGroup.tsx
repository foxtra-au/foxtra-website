import { forwardRef } from 'react'
import { cn } from '@/lib/utils'

interface RadioOption {
  value: string
  label: string
  description?: string
}

interface RadioGroupProps {
  name: string
  options: RadioOption[]
  value?: string
  onChange?: (value: string) => void
  label?: string
  error?: string
  className?: string
}

export const RadioGroup = forwardRef<HTMLDivElement, RadioGroupProps>(
  ({ name, options, value, onChange, label, error, className = '' }, ref) => {
    return (
      <div className={cn('mb-4', className)} ref={ref}>
        {label && (
          <label className="block text-sm font-medium text-gray-700 mb-3">
            {label}
          </label>
        )}
        <div className="space-y-2">
          {options.map((option) => (
            <div key={option.value} className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  type="radio"
                  name={name}
                  value={option.value}
                  checked={value === option.value}
                  onChange={(e) => onChange?.(e.target.value)}
                  className={cn(
                    'w-4 h-4 text-primary-600 border-gray-300 focus:ring-primary-500',
                    error && 'border-red-500 focus:ring-red-500'
                  )}
                />
              </div>
              <div className="ml-3 text-sm">
                <label className="font-medium text-gray-700">
                  {option.label}
                </label>
                {option.description && (
                  <p className="text-gray-500">{option.description}</p>
                )}
              </div>
            </div>
          ))}
        </div>
        {error && (
          <p className="mt-2 text-sm text-red-600">{error}</p>
        )}
      </div>
    )
  }
)

RadioGroup.displayName = 'RadioGroup'
