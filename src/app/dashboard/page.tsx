import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'

export default function Dashboard() {
  return (
    <main className="container mx-auto px-4 py-16">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Dashboard</h1>
        <p className="text-gray-600">Welcome to your Foxtra AI dashboard</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <Card
          title="Users"
          description="Manage your users and their permissions"
          icon="👥"
        >
          <Button href="/dashboard/users" variant="outline" size="sm">
            View Users
          </Button>
        </Card>
        
        <Card
          title="Posts"
          description="Create and manage your blog posts"
          icon="📝"
        >
          <Button href="/dashboard/posts" variant="outline" size="sm">
            View Posts
          </Button>
        </Card>
        
        <Card
          title="Analytics"
          description="View your website analytics and insights"
          icon="📊"
        >
          <Button href="/dashboard/analytics" variant="outline" size="sm">
            View Analytics
          </Button>
        </Card>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Quick Actions</h2>
        <div className="flex flex-wrap gap-4">
          <Button variant="primary">Create New Post</Button>
          <Button variant="secondary">Add User</Button>
          <Button variant="outline">Export Data</Button>
        </div>
      </div>
    </main>
  )
}
