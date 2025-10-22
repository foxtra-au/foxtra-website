import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Careers | Foxtra AI - Join Our AI Innovation Team',
  description: 'Launch your career in AI innovation with Foxtra AI. Join our team of engineers, designers, and marketers building cutting-edge AI automation solutions. Remote-friendly positions available for passionate tech professionals.',
  keywords: ['careers', 'jobs', 'foxtra ai careers', 'AI jobs', 'tech careers', 'engineering jobs', 'AI innovation', 'startup careers', 'remote jobs'],
  openGraph: {
    title: 'Careers | Foxtra AI - Join Our AI Innovation Team',
    description: 'Launch your career in AI innovation with Foxtra AI. Join our team of engineers, designers, and marketers building cutting-edge AI automation solutions.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Careers | Foxtra AI - Join Our AI Innovation Team',
    description: 'Launch your career in AI innovation with Foxtra AI. Join our team building cutting-edge AI automation solutions.',
  },
};

export default function CareersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
