import { buildPageMetadata } from '@/lib/metadata';

export const metadata = buildPageMetadata({
  title: 'Cookie Settings - Manage Your Privacy',
  description: 'Control your privacy settings with Foxtra cookie preferences. Manage essential, analytics, functional, and marketing cookies to personalize your browsing experience and data protection.',
  path: '/cookies',
  keywords: ['cookie settings', 'privacy preferences', 'data protection', 'foxtra cookies', 'privacy management', 'gdpr compliance'],
});

export default function CookiesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
