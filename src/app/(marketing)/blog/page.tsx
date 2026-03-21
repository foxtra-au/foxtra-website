import { BlogClient } from './BlogClient';
import { buildPageMetadata } from '@/lib/metadata';

export const metadata = buildPageMetadata({
  title: 'AI Blog - Latest AI Automation Insights',
  description: 'Discover the latest AI automation insights and trends. Read expert articles on AI chat agents, voice automation, SEO optimization, and business transformation strategies. Stay ahead with Foxtra\'s comprehensive AI knowledge base.',
  path: '/blog',
  keywords: ['AI blog', 'AI automation insights', 'AI trends', 'business automation', 'AI chat agents', 'voice automation', 'AI best practices', 'automation strategies'],
});

export default function Blog() {
  return <BlogClient />;
}