# Foxtra AI Website

A modern AI-powered website built with Next.js 14, Tailwind CSS, and MongoDB.

## Features

- ⚡ **Next.js 14** with App Router and Server Components
- 🎨 **Tailwind CSS** for modern, responsive design
- 🗄️ **MongoDB** integration with Mongoose ODM
- 📝 **TypeScript** for type safety
- 🎯 **API Routes** for backend functionality
- 🧩 **Reusable Components** with modern UI patterns

## Tech Stack

- **Framework**: Next.js 14
- **Styling**: Tailwind CSS
- **Database**: MongoDB with Mongoose
- **Language**: TypeScript
- **Package Manager**: npm

## Getting Started

### Prerequisites

- Node.js 18+ installed
- MongoDB running locally or MongoDB Atlas connection string

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd foxtra-ai-website
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env.local
```

Edit `.env.local` and add your MongoDB connection string:
```
MONGODB_URI=mongodb://localhost:27017/foxtra-ai-website
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-secret-key-here
NODE_ENV=development
```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/                    # Next.js 14 App Router
│   ├── api/               # API routes
│   ├── about/             # About page
│   ├── dashboard/         # Dashboard page
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/
│   └── ui/                # Reusable UI components
├── lib/                   # Utility functions
│   ├── mongodb.ts         # MongoDB connection (native driver)
│   └── mongoose.ts        # Mongoose connection
└── models/                # Database models
    ├── User.ts
    └── Post.ts
```

## API Routes

### Users
- `GET /api/users` - Get all users
- `POST /api/users` - Create a new user
- `GET /api/users/[id]` - Get user by ID
- `PUT /api/users/[id]` - Update user by ID
- `DELETE /api/users/[id]` - Delete user by ID

### Posts
- `GET /api/posts` - Get all posts
- `POST /api/posts` - Create a new post

## Database Models

### User Model
```typescript
{
  name: string
  email: string (unique)
  createdAt: Date
  updatedAt: Date
}
```

### Post Model
```typescript
{
  title: string
  content: string
  author: string
  slug: string (unique)
  published: boolean
  createdAt: Date
  updatedAt: Date
}
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Deployment

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

Make sure to add your environment variables in your deployment platform.

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License.
# Deployment fix
