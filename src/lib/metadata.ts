import type { Metadata } from 'next';
import { getCanonicalUrl } from './site-config';

export interface PageMetadataOptions {
  title: string;
  description: string;
  path?: string;
  keywords?: string[];
  robots?: { index: boolean; follow: boolean };
  noIndex?: boolean;
}

/**
 * Build consistent SEO metadata for all Foxtra pages.
 * Ensures openGraph, twitter, and robots are set for proper indexing and social sharing.
 */
export function buildPageMetadata({
  title,
  description,
  path = '',
  keywords,
  robots = { index: true, follow: true },
  noIndex = false,
}: PageMetadataOptions): Metadata {
  const fullTitle = title.includes('Foxtra') ? title : `${title} | Foxtra`;
  const canonical = path ? getCanonicalUrl(path) : undefined;

  const metadata: Metadata = {
    title: fullTitle,
    description,
    ...(keywords?.length && { keywords }),
    robots: noIndex ? { index: false, follow: false } : robots,
    openGraph: {
      title: fullTitle,
      description,
      type: 'website',
      url: canonical,
      siteName: 'Foxtra',
      locale: 'en_AU',
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      site: '@foxtraai',
    },
    ...(canonical && {
      alternates: { canonical },
    }),
  };

  return metadata;
}
