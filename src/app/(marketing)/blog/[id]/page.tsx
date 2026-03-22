import { buildPageMetadata } from '@/lib/metadata';
import { Metadata } from 'next';
import BlogDetailClient from './BlogDetailClient';
import { articles } from '@/data/articles-data';

type Props = { params: Promise<{ id: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const article = articles.find(a => a.id === id);

  if (!article) {
    return buildPageMetadata({
      title: 'Article Not Found',
      description: 'The article you are looking for could not be found.',
      path: '/blog',
    });
  }

  return buildPageMetadata({
    title: article.title,
    description: article.description,
    path: `/blog/${article.id}`,
  });
}

export default function BlogDetailPage({ params }: Props) {
  return <BlogDetailClient params={params} />;
}
