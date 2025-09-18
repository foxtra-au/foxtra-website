import { NextRequest, NextResponse } from 'next/server'
import dbConnect from '@/lib/mongoose'
import Post from '@/models/Post'

export async function GET() {
  try {
    await dbConnect()
    const posts = await Post.find({}).sort({ createdAt: -1 })
    return NextResponse.json({ success: true, data: posts })
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Failed to fetch posts' },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    await dbConnect()
    const body = await request.json()
    const { title, content, author, slug, published } = body

    if (!title || !content || !author || !slug) {
      return NextResponse.json(
        { success: false, error: 'Title, content, author, and slug are required' },
        { status: 400 }
      )
    }

    const post = await Post.create({
      title,
      content,
      author,
      slug,
      published: published || false,
    })
    
    return NextResponse.json({ success: true, data: post }, { status: 201 })
  } catch (error: any) {
    if (error.code === 11000) {
      return NextResponse.json(
        { success: false, error: 'Post with this slug already exists' },
        { status: 400 }
      )
    }
    return NextResponse.json(
      { success: false, error: 'Failed to create post' },
      { status: 500 }
    )
  }
}
