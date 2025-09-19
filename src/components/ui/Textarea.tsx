import { forwardRef } from 'react'
import { cn } from '@/lib/utils'

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string
  error?: string
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, error, className = '', ...props }, ref) => {
    return (
      <div className="mb-4">
        {label && (
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {label}
          </label>
        )}
        <textarea
          ref={ref}
          className={cn(
            'w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm resize-none',
            'focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500',
            'placeholder:text-gray-400',
            error && 'border-red-500 focus:ring-red-500 focus:border-red-500',
            className
          )}
          rows={4}
          {...props}
        />
        {error && (
          <p className="mt-1 text-sm text-red-600">{error}</p>
        )}
      </div>
    )
  }
)

Textarea.displayName = 'Textarea'
