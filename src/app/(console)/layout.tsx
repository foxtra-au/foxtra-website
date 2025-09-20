import { ReactNode } from 'react'

interface ConsoleLayoutProps {
  children: ReactNode
}

export default function ConsoleLayout({ children }: ConsoleLayoutProps) {
  return (
    <div className="min-h-screen">
      {children}
    </div>
  )
}
