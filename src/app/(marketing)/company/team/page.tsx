import { OurTeamClient } from './OurTeamClient';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Team | Foxtra',
  description: 'Meet the talented team behind Foxtra\'s innovative AI solutions.',
};

export default function OurTeam() {
  return <OurTeamClient />;
}

