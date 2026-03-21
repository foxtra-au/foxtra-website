import { OurTeamClient } from './OurTeamClient';
import { buildPageMetadata } from '@/lib/metadata';

export const metadata = buildPageMetadata({
  title: 'Our Team',
  description: "Meet the talented team behind Foxtra's innovative AI solutions.",
  path: '/company/team',
  keywords: ['Foxtra team', 'technology team', 'AI experts', 'development team'],
});

export default function OurTeam() {
  return <OurTeamClient />;
}

