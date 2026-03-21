import { ServiceBanner } from '@/components/ui/ServiceBanner'
import { ServicePageWrapper, BlogArticleFeatures } from '@/components/sections'
import { BlogArticleDemo } from '@/components/ui/BlogArticleDemo'
import { buildPageMetadata } from '@/lib/metadata'

export const metadata = buildPageMetadata({
  title: 'Blog & Article Writing',
  description: 'SEO-driven, authority-building content that engages your audience and drives organic traffic.',
  path: '/services/blog-article-writing',
  keywords: ['blog writing', 'article writing', 'content writing', 'SEO content', 'content marketing'],
})

export default function BlogArticleWriting() {
  const blogArticleFeatures = [
    "SEO-Optimized Content",
    "Authority Building",
    "Content Strategy",
    "Performance Analytics"
  ];

  return (
    <ServicePageWrapper>
      <ServiceBanner
        title="Blog & Article Writing"
        description="SEO-driven, authority-building content that engages your audience and drives organic traffic."
        badge="Foxtra • Marketing Services"
        features={[]}
        rightComponent={<BlogArticleDemo />}
      />
      <BlogArticleFeatures 
        features={blogArticleFeatures}
        className="mt-16"
      />
    </ServicePageWrapper>
  )
}
