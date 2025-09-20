import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Dashboard | Foxtra Console',
  description: 'Manage your projects and track progress in the Foxtra console.',
}

export default function ConsoleDashboard() {
  return (
    <div className="min-h-screen bg-[#030303] pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">Dashboard</h1>
          <p className="text-white/70">Welcome to your Foxtra console</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Stats Cards */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-white mb-2">Active Projects</h3>
            <p className="text-3xl font-bold text-yellow-500">3</p>
            <p className="text-white/60 text-sm mt-1">2 in development</p>
          </div>
          
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-white mb-2">Completed</h3>
            <p className="text-3xl font-bold text-green-500">12</p>
            <p className="text-white/60 text-sm mt-1">This year</p>
          </div>
          
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-white mb-2">Total Hours</h3>
            <p className="text-3xl font-bold text-blue-500">1,247</p>
            <p className="text-white/60 text-sm mt-1">Logged</p>
          </div>
        </div>
        
        {/* Recent Projects */}
        <div className="mt-8">
          <h2 className="text-2xl font-bold text-white mb-6">Recent Projects</h2>
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-white/5 rounded-lg">
                <div>
                  <h3 className="font-semibold text-white">E-Commerce Mobile App</h3>
                  <p className="text-white/60 text-sm">In Development • 65% Complete</p>
                </div>
                <div className="text-right">
                  <p className="text-yellow-500 font-medium">Active</p>
                  <p className="text-white/60 text-sm">Due: Jan 15</p>
                </div>
              </div>
              
              <div className="flex items-center justify-between p-4 bg-white/5 rounded-lg">
                <div>
                  <h3 className="font-semibold text-white">AI SEO Implementation</h3>
                  <p className="text-white/60 text-sm">Completed • 100% Complete</p>
                </div>
                <div className="text-right">
                  <p className="text-green-500 font-medium">Completed</p>
                  <p className="text-white/60 text-sm">Dec 28</p>
                </div>
              </div>
              
              <div className="flex items-center justify-between p-4 bg-white/5 rounded-lg">
                <div>
                  <h3 className="font-semibold text-white">Custom Website</h3>
                  <p className="text-white/60 text-sm">In Review • 95% Complete</p>
                </div>
                <div className="text-right">
                  <p className="text-blue-500 font-medium">Review</p>
                  <p className="text-white/60 text-sm">Due: Jan 10</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}