import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Projects | Foxtra Console',
  description: 'Manage and track all your projects in one place.',
}

export default function ConsoleProjects() {
  return (
    <div className="min-h-screen bg-[#030303] pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">Projects</h1>
          <p className="text-white/70">Manage and track all your projects</p>
        </div>
        
        {/* Project Filters */}
        <div className="flex flex-wrap gap-4 mb-8">
          <button className="bg-yellow-500 text-black px-4 py-2 rounded-lg font-medium">
            All Projects
          </button>
          <button className="bg-white/10 text-white px-4 py-2 rounded-lg font-medium hover:bg-white/20">
            Active
          </button>
          <button className="bg-white/10 text-white px-4 py-2 rounded-lg font-medium hover:bg-white/20">
            Completed
          </button>
          <button className="bg-white/10 text-white px-4 py-2 rounded-lg font-medium hover:bg-white/20">
            On Hold
          </button>
        </div>
        
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Project Card 1 */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
            <div className="flex items-center justify-between mb-4">
              <span className="bg-yellow-500/20 text-yellow-400 px-3 py-1 rounded-full text-sm font-medium">
                In Development
              </span>
              <span className="text-white/60 text-sm">65%</span>
            </div>
            
            <h3 className="text-xl font-bold text-white mb-2">E-Commerce Mobile App</h3>
            <p className="text-white/70 text-sm mb-4">
              Cross-platform mobile application for online shopping with real-time inventory management.
            </p>
            
            <div className="mb-4">
              <div className="w-full bg-white/10 rounded-full h-2">
                <div className="bg-yellow-500 h-2 rounded-full" style={{width: '65%'}}></div>
              </div>
            </div>
            
            <div className="flex items-center justify-between text-sm text-white/60">
              <span>Started: Dec 1, 2024</span>
              <span>Due: Jan 15, 2025</span>
            </div>
          </div>
          
          {/* Project Card 2 */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
            <div className="flex items-center justify-between mb-4">
              <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm font-medium">
                Completed
              </span>
              <span className="text-white/60 text-sm">100%</span>
            </div>
            
            <h3 className="text-xl font-bold text-white mb-2">AI SEO Implementation</h3>
            <p className="text-white/70 text-sm mb-4">
              Complete SEO overhaul with AI-powered content optimization and technical improvements.
            </p>
            
            <div className="mb-4">
              <div className="w-full bg-white/10 rounded-full h-2">
                <div className="bg-green-500 h-2 rounded-full" style={{width: '100%'}}></div>
              </div>
            </div>
            
            <div className="flex items-center justify-between text-sm text-white/60">
              <span>Started: Nov 15, 2024</span>
              <span>Completed: Dec 28, 2024</span>
            </div>
          </div>
          
          {/* Project Card 3 */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
            <div className="flex items-center justify-between mb-4">
              <span className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm font-medium">
                In Review
              </span>
              <span className="text-white/60 text-sm">95%</span>
            </div>
            
            <h3 className="text-xl font-bold text-white mb-2">Custom Website</h3>
            <p className="text-white/70 text-sm mb-4">
              Professional website with custom design, responsive layout, and integrated CMS.
            </p>
            
            <div className="mb-4">
              <div className="w-full bg-white/10 rounded-full h-2">
                <div className="bg-blue-500 h-2 rounded-full" style={{width: '95%'}}></div>
              </div>
            </div>
            
            <div className="flex items-center justify-between text-sm text-white/60">
              <span>Started: Dec 10, 2024</span>
              <span>Due: Jan 10, 2025</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
