import { ServicePageWrapper } from '@/components/sections';
import { PricingModelDetail } from '@/components/sections/PricingModelDetail';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Dedicated Team Pricing | Foxtra',
  description: 'Learn about our Dedicated Team engagement model with full team dedication and direct client management.',
};

export default function DedicatedTeamPricing() {
  const modelData = {
    id: 'dedicated-team',
    title: 'Dedicated Team',
    subtitle: 'Full team dedication with direct client management and control',
    description: 'The Dedicated Team model provides specialists who fully dedicate their efforts to your project. This model allows you to directly manage the team, assign tasks, monitor progress, and receive reports. Billing is based on the specialists\' monthly salaries with complete project control.',
    icon: 'Users',
    benefits: [
      {
        title: 'Direct Management',
        description: 'Manage the team directly as if they were your in-house employees with full control.',
        icon: 'Users'
      },
      {
        title: 'Full Dedication',
        description: 'Team members work exclusively on your project with 100% focus and commitment.',
        icon: 'Zap'
      },
      {
        title: 'Scalable Team',
        description: 'Easily scale team size up or down based on project needs and phases.',
        icon: 'RefreshCw'
      },
      {
        title: 'Long-term Partnership',
        description: 'Build lasting relationships with team members who understand your business.',
        icon: 'Star'
      }
    ],
    features: [
      'Dedicated team members',
      'Direct team management',
      'Monthly salary-based billing',
      'Flexible team scaling',
      'Daily standups and reports',
      'Direct communication channels',
      'Project management tools access',
      'Knowledge transfer sessions'
    ],
    process: [
      {
        step: 1,
        title: 'Team Requirements',
        description: 'Define your team composition needs, skills required, and management preferences.'
      },
      {
        step: 2,
        title: 'Team Assembly',
        description: 'We carefully select and assemble your dedicated team based on your specific requirements.'
      },
      {
        step: 3,
        title: 'Onboarding Process',
        description: 'Comprehensive onboarding to understand your business, processes, and project goals.'
      },
      {
        step: 4,
        title: 'Direct Collaboration',
        description: 'Begin direct collaboration with daily communication and your management oversight.'
      },
      {
        step: 5,
        title: 'Continuous Partnership',
        description: 'Ongoing partnership with regular reviews and team optimization as needed.'
      }
    ],
    pricing: {
      junior: '$3,500-4,500/month',
      mid: '$4,500-6,000/month',
      senior: '$6,000-8,500/month',
      lead: '$8,500-12,000/month'
    },
    bestFor: [
      'Long-term projects',
      'Complex applications',
      'Ongoing development needs',
      'Product development',
      'Startup technical teams',
      'Enterprise solutions'
    ]
  };

  return (
    <ServicePageWrapper>
      <PricingModelDetail model={modelData} />
    </ServicePageWrapper>
  );
}
