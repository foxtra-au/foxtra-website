import { buildPageMetadata } from '@/lib/metadata';
import LocalFoxCaseStudy from './LocalFoxCaseStudyClient';

export const metadata = buildPageMetadata({
  title: 'Local Fox — Marketplace Platform Case Study',
  description: 'How Foxtra built Local Fox, a marketplace platform connecting local businesses with customers — achieving 300% user engagement growth, 50+ businesses, and 1,000+ customers.',
  path: '/case-studies/local-fox',
  keywords: ['Local Fox marketplace', 'marketplace platform case study', 'local business platform', 'web app development case study', 'marketplace development Australia'],
});

export default function LocalFoxCaseStudyPage() {
  return <LocalFoxCaseStudy />;
}
