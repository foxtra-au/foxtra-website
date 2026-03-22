import { buildPageMetadata } from '@/lib/metadata';
import CookieSettings from './CookieSettingsClient';

export const metadata = buildPageMetadata({
  title: 'Cookie Settings',
  description: 'Manage your cookie preferences on the Foxtra website. Control analytics, functional, and marketing cookies to customise your browsing experience.',
  path: '/cookies',
  noIndex: true,
});

export default function CookieSettingsPage() {
  return <CookieSettings />;
}
