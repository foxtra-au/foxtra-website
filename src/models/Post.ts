import mongoose, { Document, Model, Schema } from 'mongoose'

export interface IPost extends Document {
  title: string
  content: string
  author: string
  slug: string
  published: boolean
  createdAt: Date
  updatedAt: Date
}

const PostSchema: Schema = new Schema(
  {
    title: {
      type: String,
      required: [true, 'Please provide a title'],
      maxlength: [100, 'Title cannot be more than 100 characters'],
    },
    content: {
      type: String,
      required: [true, 'Please provide content'],
    },
    author: {
      type: String,
      required: [true, 'Please provide an author'],
    },
    slug: {
      type: String,
      required: [true, 'Please provide a slug'],
      unique: true,
    },
    published: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
)

const Post: Model<IPost> = mongoose.models.Post || mongoose.model<IPost>('Post', PostSchema)

export default Post
