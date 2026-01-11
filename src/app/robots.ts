import { MetadataRoute } from 'next';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.foxtra.com.au';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',
          '/login/',
          '/admin/',
          // Block all Next.js static assets and build files
          '/_next/',
          // Block favicon and manifest files (these are in HTML head but shouldn't be crawled as pages)
          '/favicon.ico',
          '/favicon/',
        ],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
