import { Container } from '@/components/ui/Container'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'
import { Grid } from '@/components/ui/Grid'
import { Stack } from '@/components/ui/Stack'

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
          <Card
            title="Layout Components"
            description="Responsive containers, grids, and stacking utilities"
            icon="📐"
          >
            <Stack spacing="sm">
              <Badge>Container</Badge>
              <Badge variant="secondary">Grid</Badge>
              <Badge variant="outline">Stack</Badge>
            </Stack>
          </Card>

          <Card
            title="Navigation"
            description="Headers, sidebars, and navigation elements"
            icon="🧭"
          >
            <Stack spacing="sm">
              <Badge>Navbar</Badge>
              <Badge variant="secondary">Sidebar</Badge>
              <Badge variant="outline">Breadcrumb</Badge>
            </Stack>
          </Card>

          <Card
            title="Forms"
            description="Input fields, buttons, and form controls"
            icon="📝"
          >
            <Stack spacing="sm">
              <Badge>Input</Badge>
              <Badge variant="secondary">Button</Badge>
              <Badge variant="outline">Select</Badge>
            </Stack>
          </Card>

          <Card
            title="Data Display"
            description="Tables, badges, avatars, and progress indicators"
            icon="📊"
          >
            <Stack spacing="sm">
              <Badge>Table</Badge>
              <Badge variant="secondary">Badge</Badge>
              <Badge variant="outline">Avatar</Badge>
            </Stack>
          </Card>

          <Card
            title="Feedback"
            description="Modals, alerts, loading states, and toasts"
            icon="💬"
          >
            <Stack spacing="sm">
              <Badge>Modal</Badge>
              <Badge variant="secondary">Alert</Badge>
              <Badge variant="outline">Loading</Badge>
            </Stack>
          </Card>

          <Card
            title="Advanced"
            description="Search, file upload, and interactive components"
            icon="⚡"
          >
            <Stack spacing="sm">
              <Badge>Search</Badge>
              <Badge variant="secondary">FileUpload</Badge>
              <Badge variant="outline">Toast</Badge>
            </Stack>
          </Card>
        </Grid>

        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Ready to Explore?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Check out our comprehensive component library and start building amazing interfaces.
          </p>
          <div className="flex gap-4 justify-center">
            <Button href="/components" variant="primary" size="lg">
              View All Components
            </Button>
            <Button href="/get-started" variant="outline" size="lg">
              Get Started
            </Button>
          </div>
        </div>
      </Container>
    </main>
  )
}
