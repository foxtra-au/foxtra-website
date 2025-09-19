import { Container } from '@/components/ui/Container'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'
import { Grid } from '@/components/ui/Grid'
import { Stack } from '@/components/ui/Stack'
import Link from 'next/link'

export default function Showcase() {
  return (
    <main className="bg-gradient-to-br from-blue-50 to-indigo-100 min-h-screen">
      <Container className="py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Component <span className="text-primary-600">Showcase</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore our comprehensive UI component library built for modern web applications.
          </p>
        </div>

        <Grid cols={3} gap="lg" className="mb-16">
          <Card>
            <CardHeader>
              <div className="text-4xl mb-2">📐</div>
              <CardTitle>Layout Components</CardTitle>
              <CardDescription>Responsive containers, grids, and stacking utilities</CardDescription>
            </CardHeader>
            <CardContent>
              <Stack spacing="sm">
                <Badge>Container</Badge>
                <Badge variant="secondary">Grid</Badge>
                <Badge variant="outline">Stack</Badge>
              </Stack>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="text-4xl mb-2">🧭</div>
              <CardTitle>Navigation</CardTitle>
              <CardDescription>Headers, sidebars, and navigation elements</CardDescription>
            </CardHeader>
            <CardContent>
              <Stack spacing="sm">
                <Badge>Navbar</Badge>
                <Badge variant="secondary">Sidebar</Badge>
                <Badge variant="outline">Breadcrumb</Badge>
              </Stack>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="text-4xl mb-2">📝</div>
              <CardTitle>Forms</CardTitle>
              <CardDescription>Input fields, buttons, and form controls</CardDescription>
            </CardHeader>
            <CardContent>
              <Stack spacing="sm">
                <Badge>Input</Badge>
                <Badge variant="secondary">Button</Badge>
                <Badge variant="outline">Select</Badge>
              </Stack>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="text-4xl mb-2">📊</div>
              <CardTitle>Data Display</CardTitle>
              <CardDescription>Tables, badges, avatars, and progress indicators</CardDescription>
            </CardHeader>
            <CardContent>
              <Stack spacing="sm">
                <Badge>Table</Badge>
                <Badge variant="secondary">Badge</Badge>
                <Badge variant="outline">Avatar</Badge>
              </Stack>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="text-4xl mb-2">💬</div>
              <CardTitle>Feedback</CardTitle>
              <CardDescription>Modals, alerts, loading states, and toasts</CardDescription>
            </CardHeader>
            <CardContent>
              <Stack spacing="sm">
                <Badge>Modal</Badge>
                <Badge variant="secondary">Alert</Badge>
                <Badge variant="outline">Loading</Badge>
              </Stack>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="text-4xl mb-2">⚡</div>
              <CardTitle>Advanced</CardTitle>
              <CardDescription>Search, file upload, and interactive components</CardDescription>
            </CardHeader>
            <CardContent>
              <Stack spacing="sm">
                <Badge>Search</Badge>
                <Badge variant="secondary">FileUpload</Badge>
                <Badge variant="outline">Toast</Badge>
              </Stack>
            </CardContent>
          </Card>
        </Grid>

        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Ready to Explore?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Check out our comprehensive component library and start building amazing interfaces.
          </p>
          <div className="flex gap-4 justify-center">
            <Link href="/components">
              <Button variant="default" size="lg">
                View All Components
              </Button>
            </Link>
            <Link href="/get-started">
              <Button variant="outline" size="lg">
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </Container>
    </main>
  )
}
