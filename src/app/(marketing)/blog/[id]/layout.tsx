import { Metadata } from 'next';
import { articles } from '@/data/articles-data';
import { getCanonicalUrl } from '@/lib/site-config';

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const article = articles.find(a => a.id === resolvedParams.id);
  
  if (!article) {
    return {
      title: 'Article Not Found | Foxtra',
      description: 'The requested article could not be found.',
    };
  }

  const canonicalUrl = getCanonicalUrl(`/blog/${resolvedParams.id}`);

  return {
    title: `${article.title} | Foxtra Blog`,
    description: article.description,
    keywords: [article.tag, article.category, 'AI', 'automation', 'business'],
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: `${article.title} | Foxtra Blog`,
      description: article.description,
      type: 'article',
      url: canonicalUrl,
      publishedTime: `2024-${article.date.month}-${article.date.day}`,
      authors: ['Foxtra'],
      tags: [article.tag, article.category],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${article.title} | Foxtra Blog`,
      description: article.description,
    },
  };
}

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
