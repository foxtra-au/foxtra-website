import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cookie Settings | Foxtra - Manage Your Privacy',
  description: 'Control your privacy settings with Foxtra cookie preferences. Manage essential, analytics, functional, and marketing cookies to personalize your browsing experience and data protection.',
  keywords: ['cookie settings', 'privacy preferences', 'data protection', 'foxtra cookies', 'privacy management', 'gdpr compliance'],
  openGraph: {
    title: 'Cookie Settings | Foxtra - Manage Your Privacy',
    description: 'Control your privacy settings with Foxtra cookie preferences. Manage essential, analytics, functional, and marketing cookies.',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Cookie Settings | Foxtra - Manage Your Privacy',
    description: 'Control your privacy settings with Foxtra cookie preferences.',
  },
};

export default function CookiesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
