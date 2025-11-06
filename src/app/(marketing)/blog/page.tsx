import { BlogClient } from './BlogClient';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Blog | Foxtra - Latest AI Automation Insights',
  description: 'Discover the latest AI automation insights and trends. Read expert articles on AI chat agents, voice automation, SEO optimization, and business transformation strategies. Stay ahead with Foxtra\'s comprehensive AI knowledge base.',
  keywords: ['AI blog', 'AI automation insights', 'AI trends', 'business automation', 'AI chat agents', 'voice automation', 'AI best practices', 'automation strategies'],
  openGraph: {
    title: 'AI Blog | Foxtra - Latest AI Automation Insights',
    description: 'Discover the latest AI automation insights and trends. Read expert articles on AI chat agents, voice automation, SEO optimization, and business transformation strategies.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Blog | Foxtra - Latest AI Automation Insights',
    description: 'Discover the latest AI automation insights and trends. Read expert articles on AI chat agents, voice automation, and business transformation strategies.',
  },
};

export default function Blog() {
  return <BlogClient />;
}