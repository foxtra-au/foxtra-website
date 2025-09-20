import { Metadata } from 'next'
import { ConsoleLayout } from '@/components/layout/ConsoleLayout'

export const metadata: Metadata = {
  title: 'Phone Numbers | Foxtra Console',
  description: 'Manage your phone numbers in the Foxtra console.',
}

export default function PhoneNumbersPage() {
  return (
    <ConsoleLayout pageTitle="Phone Numbers">
      <div className="p-6">
        <div className="mb-6">
          <p className="text-gray-600 dark:text-gray-400">Manage your phone numbers and their settings</p>
        </div>
        
        {/* Phone Numbers content will be added here */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-8">
          <div className="text-center">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Phone Numbers Management
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Add, configure, and manage your phone numbers. Phone number content can be added here.
            </p>
          </div>
        </div>
      </div>
    </ConsoleLayout>
  )
}
