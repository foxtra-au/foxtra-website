import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import Link from 'next/link'

export default function Dashboard() {
  return (
    <main className="container mx-auto px-4 py-16">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Dashboard</h1>
        <p className="text-gray-600">Welcome to your Foxtra AI dashboard</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <Card>
          <CardHeader>
            <div className="text-4xl mb-2">👥</div>
            <CardTitle>Users</CardTitle>
            <CardDescription>Manage your users and their permissions</CardDescription>
          </CardHeader>
          <CardContent>
            <Link href="/dashboard/users">
              <Button variant="outline" size="sm">
                View Users
              </Button>
            </Link>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <div className="text-4xl mb-2">📝</div>
            <CardTitle>Posts</CardTitle>
            <CardDescription>Create and manage your blog posts</CardDescription>
          </CardHeader>
          <CardContent>
            <Link href="/dashboard/posts">
              <Button variant="outline" size="sm">
                View Posts
              </Button>
            </Link>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <div className="text-4xl mb-2">📊</div>
            <CardTitle>Analytics</CardTitle>
            <CardDescription>View your website analytics and insights</CardDescription>
          </CardHeader>
          <CardContent>
            <Link href="/dashboard/analytics">
              <Button variant="outline" size="sm">
                View Analytics
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Quick Actions</h2>
        <div className="flex flex-wrap gap-4">
          <Button variant="default">Create New Post</Button>
          <Button variant="secondary">Add User</Button>
          <Button variant="outline">Export Data</Button>
        </div>
      </div>
    </main>
  )
}
