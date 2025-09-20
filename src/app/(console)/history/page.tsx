import { Metadata } from 'next'
import { ConsoleLayout } from '@/components/layout/ConsoleLayout'

export const metadata: Metadata = {
  title: 'History | Foxtra Console',
  description: 'View your activity history in the Foxtra console.',
}

export default function HistoryPage() {
  return (
    <ConsoleLayout pageTitle="History">
      <div className="p-6">
        <div className="mb-6">
          <p className="text-gray-600 dark:text-gray-400">View your activity and call history</p>
        </div>
        
        {/* History content will be added here */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-8">
          <div className="text-center">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Activity History
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              View your call logs, agent activities, and system history. History content can be added here.
            </p>
          </div>
        </div>
      </div>
    </ConsoleLayout>
  )
}
