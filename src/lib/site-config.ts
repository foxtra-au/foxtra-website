/**
 * Get the base URL for the site from environment variable
 * Falls back to https://www.foxtra.com.au if not set
 */
export function getBaseUrl(): string {
  return process.env.NEXT_PUBLIC_SITE_URL || 'https://www.foxtra.com.au';
}

/**
 * Get the canonical URL for a given path
 */
export function getCanonicalUrl(path: string = ''): string {
  const baseUrl = getBaseUrl();
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `${baseUrl}${cleanPath}`;
}
