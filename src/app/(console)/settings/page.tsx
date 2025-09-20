import { Metadata } from 'next'
import { ConsoleLayout } from '@/components/layout/ConsoleLayout'

export const metadata: Metadata = {
  title: 'Settings | Foxtra Console',
  description: 'Manage your account settings in the Foxtra console.',
}

export default function SettingsPage() {
  return (
    <ConsoleLayout pageTitle="Settings">
      <div className="p-6">
        <div className="mb-6">
          <p className="text-gray-600 dark:text-gray-400">Manage your account and application settings</p>
        </div>
        
        {/* Settings content will be added here */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-8">
          <div className="text-center">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Account Settings
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Configure your account preferences, security settings, and application options. Settings content can be added here.
            </p>
          </div>
        </div>
      </div>
    </ConsoleLayout>
  )
}
