'use client'

import { useState } from 'react'
import {
  Container,
  Grid,
  Stack,
  Navbar,
  Breadcrumb,
  Input,
  Textarea,
  Select,
  Checkbox,
  RadioGroup,
  Button,
  Card,
  Table,
  Badge,
  Avatar,
  Progress,
  Modal,
  Alert,
  Loading,
  Spinner,
  Search,
  FileUpload,
  HeroGeometric,
  MegaMenu,
} from '@/components/ui'

export default function ComponentsPage() {
  const [modalOpen, setModalOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [files, setFiles] = useState<File[]>([])

  const tableData = [
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin', status: 'Active' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'User', status: 'Inactive' },
    { id: 3, name: 'Bob Johnson', email: 'bob@example.com', role: 'Editor', status: 'Active' },
  ]

  const tableColumns = [
    { key: 'name' as const, label: 'Name', sortable: true },
    { key: 'email' as const, label: 'Email', sortable: true },
    { key: 'role' as const, label: 'Role', sortable: true },
    {
      key: 'status' as const,
      label: 'Status',
      render: (value: string) => (
        <Badge variant={value === 'Active' ? 'success' : 'secondary'}>
          {value}
        </Badge>
      ),
    },
  ]

  const selectOptions = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
  ]

  const radioOptions = [
    { value: 'radio1', label: 'Radio Option 1', description: 'This is the first option' },
    { value: 'radio2', label: 'Radio Option 2', description: 'This is the second option' },
    { value: 'radio3', label: 'Radio Option 3', description: 'This is the third option' },
  ]

  const breadcrumbItems = [
    { label: 'Components', href: '/components' },
    { label: 'UI Library' },
  ]

  const navbarItems = [
    { label: 'Home', href: '/', active: false },
    { label: 'About', href: '/about', active: false },
    { label: 'Components', href: '/components', active: true },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar
        brand={<h1 className="text-xl font-bold text-primary-600">UI Components</h1>}
        items={navbarItems}
        actions={
          <Button variant="outline" size="sm">
            Get Started
          </Button>
        }
      />

      <Container className="py-8">
        <Breadcrumb items={breadcrumbItems} className="mb-8" />

        <div className="space-y-12">
          {/* Layout Components */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Layout Components</h2>
            <Grid cols={3} gap="md">
              <Card title="Container" description="Responsive container with max-width constraints">
                <Container maxWidth="sm" padding="sm" className="bg-gray-100 rounded">
                  <p className="text-sm">Small container</p>
                </Container>
              </Card>
              <Card title="Grid" description="Flexible grid system">
                <Grid cols={2} gap="sm">
                  <div className="bg-primary-100 p-2 rounded text-center text-sm">Item 1</div>
                  <div className="bg-primary-100 p-2 rounded text-center text-sm">Item 2</div>
                </Grid>
              </Card>
              <Card title="Stack" description="Vertical and horizontal stacking">
                <Stack direction="row" spacing="sm">
                  <Badge>Badge 1</Badge>
                  <Badge variant="secondary">Badge 2</Badge>
                </Stack>
              </Card>
            </Grid>
          </section>

          {/* Form Components */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Form Components</h2>
            <Grid cols={2} gap="lg">
              <Card title="Input Fields" description="Various input components">
                <Stack spacing="md">
                  <Input label="Text Input" placeholder="Enter text..." />
                  <Textarea label="Textarea" placeholder="Enter description..." />
                  <Select
                    label="Select"
                    options={selectOptions}
                    placeholder="Choose an option"
                  />
                  <Checkbox
                    label="Checkbox"
                    description="This is a checkbox description"
                  />
                  <RadioGroup
                    name="radio"
                    label="Radio Group"
                    options={radioOptions}
                  />
                </Stack>
              </Card>
              
              <Card title="Buttons" description="Button variants and sizes">
                <Stack spacing="md">
                  <div className="flex gap-2">
                    <Button variant="primary">Primary</Button>
                    <Button variant="secondary">Secondary</Button>
                    <Button variant="outline">Outline</Button>
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm">Small</Button>
                    <Button size="md">Medium</Button>
                    <Button size="lg">Large</Button>
                  </div>
                </Stack>
              </Card>
            </Grid>
          </section>

          {/* Data Display Components */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Data Display Components</h2>
            <Grid cols={3} gap="md" className="mb-6">
              <Card title="Badges" description="Status indicators">
                <Stack direction="row" spacing="sm">
                  <Badge>Default</Badge>
                  <Badge variant="success">Success</Badge>
                  <Badge variant="warning">Warning</Badge>
                  <Badge variant="error">Error</Badge>
                </Stack>
              </Card>
              
              <Card title="Avatars" description="User profile pictures">
                <Stack direction="row" spacing="sm">
                  <Avatar fallback="JD" />
                  <Avatar fallback="JS" />
                  <Avatar fallback="BJ" />
                </Stack>
              </Card>
              
              <Card title="Progress" description="Progress indicators">
                <Stack spacing="sm">
                  <Progress value={75} showLabel />
                  <Progress value={50} variant="success" />
                  <Progress value={25} variant="warning" />
                </Stack>
              </Card>
            </Grid>

            <Card title="Data Table" description="Sortable data table">
              <Table data={tableData} columns={tableColumns} />
            </Card>
          </section>

          {/* Advanced Components */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Advanced Components</h2>
            <Grid cols={2} gap="lg" className="mb-8">
              <Card title="Search" description="Search with results">
                <Search
                  placeholder="Search users..."
                  onSearch={setSearchQuery}
                  results={[]}
                />
                <p className="text-sm text-gray-500 mt-2">
                  Search query: {searchQuery || 'None'}
                </p>
              </Card>
              
              <Card title="File Upload" description="Drag and drop file upload">
                <FileUpload
                  accept="image/*"
                  maxSize={5}
                  onFilesSelected={setFiles}
                />
                <p className="text-sm text-gray-500 mt-2">
                  Files selected: {files.length}
                </p>
              </Card>
            </Grid>

            <Card title="Hero Geometric" description="21st.dev style geometric hero section" className="mb-6">
              <div className="text-center mb-4">
                <p className="text-sm text-gray-600 mb-4">
                  A beautiful geometric hero component with animated shapes and elegant design. 
                  Currently used as the main banner on the home page.
                </p>
                <Button href="/" variant="primary">
                  View on Home Page
                </Button>
              </div>
            </Card>

            <Card title="Mega Menu" description="Advanced animated mega menu with framer-motion" className="mb-6">
              <div className="text-center mb-4">
                <p className="text-sm text-gray-600 mb-4">
                  A sophisticated mega menu with hover animations, icons, and organized sub-navigation.
                  Perfect for complex navigation structures.
                </p>
                <Button href="/mega-menu-demo" variant="primary">
                  View Mega Menu Demo
                </Button>
              </div>
            </Card>
          </section>

          {/* Feedback Components */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Feedback Components</h2>
            <Grid cols={2} gap="lg">
              <Card title="Alerts" description="Notification messages">
                <Stack spacing="md">
                  <Alert variant="info" title="Information">
                    This is an informational message.
                  </Alert>
                  <Alert variant="success" title="Success">
                    Operation completed successfully!
                  </Alert>
                  <Alert variant="warning" title="Warning">
                    Please review your input.
                  </Alert>
                  <Alert variant="error" title="Error">
                    Something went wrong.
                  </Alert>
                </Stack>
              </Card>
              
              <Card title="Loading States" description="Loading indicators">
                <Stack spacing="md">
                  <Loading text="Loading data..." />
                  <div className="flex items-center space-x-4">
                    <Spinner size="sm" />
                    <Spinner size="md" />
                    <Spinner size="lg" />
                  </div>
                </Stack>
              </Card>
            </Grid>

            <div className="mt-6">
              <Card title="Modal" description="Modal dialog">
                <Button onClick={() => setModalOpen(true)}>
                  Open Modal
                </Button>
                <Modal
                  isOpen={modalOpen}
                  onClose={() => setModalOpen(false)}
                  title="Example Modal"
                  size="md"
                >
                  <p className="text-gray-600 mb-4">
                    This is an example modal with some content. You can put any content here.
                  </p>
                  <div className="flex justify-end space-x-2">
                    <Button variant="outline" onClick={() => setModalOpen(false)}>
                      Cancel
                    </Button>
                    <Button onClick={() => setModalOpen(false)}>
                      Confirm
                    </Button>
                  </div>
                </Modal>
              </Card>
            </div>
          </section>
        </div>
      </Container>
    </div>
  )
}
