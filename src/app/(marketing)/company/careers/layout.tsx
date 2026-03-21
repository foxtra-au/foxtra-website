import { buildPageMetadata } from '@/lib/metadata';

export const metadata = buildPageMetadata({
  title: 'Careers - Join Our AI Innovation Team',
  description: 'Launch your career in AI innovation with Foxtra. Join our team of engineers, designers, and marketers building cutting-edge AI automation solutions. Remote-friendly positions available for passionate tech professionals.',
  path: '/company/careers',
  keywords: ['careers', 'jobs', 'foxtra careers', 'AI jobs', 'tech careers', 'engineering jobs', 'AI innovation', 'startup careers', 'remote jobs'],
});

export default function CareersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
