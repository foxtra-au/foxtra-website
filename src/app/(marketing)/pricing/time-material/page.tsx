import { ServicePageWrapper } from '@/components/sections';
import { PricingModelDetail } from '@/components/sections/PricingModelDetail';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Time & Material Pricing | Foxtra',
  description: 'Learn about our Time & Material engagement model with flexible hourly billing and transparent project management.',
};

export default function TimeMaterialPricing() {
  const modelData = {
    id: 'time-material',
    title: 'Time & Material',
    subtitle: 'Flexible hourly billing based on actual development efforts',
    description: 'The Time & Material engagement model involves monthly billing based on the actual development efforts from the previous month (person-hours worked). This model offers maximum flexibility for projects where requirements may evolve during development.',
    icon: 'Clock',
    benefits: [
      {
        title: 'Maximum Flexibility',
        description: 'Adapt project scope and requirements as you learn more about your needs during development.',
        icon: 'Zap'
      },
      {
        title: 'Transparent Billing',
        description: 'Pay only for the actual hours worked with detailed time tracking and regular reports.',
        icon: 'Eye'
      },
      {
        title: 'Quick Start',
        description: 'Begin development immediately without extensive upfront planning and documentation.',
        icon: 'Play'
      },
      {
        title: 'Iterative Development',
        description: 'Perfect for agile methodologies with continuous feedback and improvements.',
        icon: 'RefreshCw'
      }
    ],
    features: [
      'Hourly rate billing model',
      'Flexible project scope',
      'Weekly progress reports',
      'Real-time communication',
      'Agile development approach',
      'Change requests accepted',
      'Detailed time tracking',
      'Monthly invoicing'
    ],
    process: [
      {
        step: 1,
        title: 'Initial Consultation',
        description: 'We discuss your project goals, requirements, and establish hourly rates for different skill levels.'
      },
      {
        step: 2,
        title: 'Team Assembly',
        description: 'We assign the right team members based on your project needs and preferred communication style.'
      },
      {
        step: 3,
        title: 'Development Begins',
        description: 'Work starts immediately with daily standups and weekly progress reviews.'
      },
      {
        step: 4,
        title: 'Continuous Delivery',
        description: 'Regular deliverables with your feedback incorporated into the next iteration.'
      },
      {
        step: 5,
        title: 'Monthly Billing',
        description: 'Detailed invoices with time breakdowns and progress summaries sent monthly.'
      }
    ],
    pricing: {
      junior: '$45-65/hour',
      mid: '$65-85/hour',
      senior: '$85-120/hour',
      lead: '$120-150/hour'
    },
    bestFor: [
      'Startups with evolving requirements',
      'Projects with unclear initial scope',
      'Long-term development partnerships',
      'Agile and iterative development',
      'Proof of concept projects',
      'Ongoing maintenance and updates'
    ]
  };

  return (
    <ServicePageWrapper>
      <PricingModelDetail model={modelData} />
    </ServicePageWrapper>
  );
}
