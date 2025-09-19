'use client'

import { useEffect, useState, useCallback } from 'react'
import { cn } from '@/lib/utils'
import { CheckCircle, AlertCircle, Info, XCircle, X } from 'lucide-react'

export interface Toast {
  id: string
  title?: string
  message: string
  type?: 'success' | 'error' | 'warning' | 'info'
  duration?: number
  action?: {
    label: string
    onClick: () => void
  }
}

interface ToastProps {
  toast: Toast
  onRemove: (id: string) => void
}

export function ToastComponent({ toast, onRemove }: ToastProps) {
  const [isVisible, setIsVisible] = useState(false)

  const handleRemove = useCallback(() => {
    setIsVisible(false)
    setTimeout(() => onRemove(toast.id), 150)
  }, [onRemove, toast.id])

  useEffect(() => {
    setIsVisible(true)
    
    if (toast.duration !== 0) {
      const timer = setTimeout(() => {
        handleRemove()
      }, toast.duration || 5000)

      return () => clearTimeout(timer)
    }
  }, [toast.duration, handleRemove])

  const icons = {
    success: <CheckCircle className="h-5 w-5 text-green-400" />,
    error: <XCircle className="h-5 w-5 text-red-400" />,
    warning: <AlertCircle className="h-5 w-5 text-yellow-400" />,
    info: <Info className="h-5 w-5 text-blue-400" />,
  }

  const styles = {
    success: 'bg-green-50 border-green-200 text-green-800',
    error: 'bg-red-50 border-red-200 text-red-800',
    warning: 'bg-yellow-50 border-yellow-200 text-yellow-800',
    info: 'bg-blue-50 border-blue-200 text-blue-800',
  }

  return (
    <div
      className={cn(
        'max-w-sm w-full bg-white shadow-lg rounded-lg pointer-events-auto ring-1 ring-black ring-opacity-5 overflow-hidden transform transition-all duration-300',
        isVisible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0',
        styles[toast.type || 'info']
      )}
    >
      <div className="p-4">
        <div className="flex items-start">
          <div className="flex-shrink-0">
            {icons[toast.type || 'info']}
          </div>
          <div className="ml-3 w-0 flex-1">
            {toast.title && (
              <p className="text-sm font-medium">
                {toast.title}
              </p>
            )}
            <p className={cn('text-sm', toast.title ? 'mt-1' : '')}>
              {toast.message}
            </p>
            {toast.action && (
              <div className="mt-3">
                <button
                  onClick={toast.action.onClick}
                  className="text-sm font-medium underline hover:no-underline"
                >
                  {toast.action.label}
                </button>
              </div>
            )}
          </div>
          <div className="ml-4 flex-shrink-0 flex">
            <button
              onClick={handleRemove}
              className="rounded-md inline-flex text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

interface ToastContainerProps {
  toasts: Toast[]
  onRemove: (id: string) => void
}

export function ToastContainer({ toasts, onRemove }: ToastContainerProps) {
  return (
    <div className="fixed top-0 right-0 z-50 p-4 space-y-2">
      {toasts.map((toast) => (
        <ToastComponent key={toast.id} toast={toast} onRemove={onRemove} />
      ))}
    </div>
  )
}

// Toast hook for easy usage
export function useToast() {
  const [toasts, setToasts] = useState<Toast[]>([])

  const addToast = (toast: Omit<Toast, 'id'>) => {
    const id = Math.random().toString(36).substr(2, 9)
    setToasts(prev => [...prev, { ...toast, id }])
  }

  const removeToast = (id: string) => {
    setToasts(prev => prev.filter(toast => toast.id !== id))
  }

  const toast = {
    success: (message: string, options?: Partial<Toast>) => 
      addToast({ ...options, message, type: 'success' }),
    error: (message: string, options?: Partial<Toast>) => 
      addToast({ ...options, message, type: 'error' }),
    warning: (message: string, options?: Partial<Toast>) => 
      addToast({ ...options, message, type: 'warning' }),
    info: (message: string, options?: Partial<Toast>) => 
      addToast({ ...options, message, type: 'info' }),
  }

  return {
    toasts,
    toast,
    removeToast,
  }
}
