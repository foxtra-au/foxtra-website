import { ServicePageWrapper } from '@/components/sections';
import { PricingModelDetail } from '@/components/sections/PricingModelDetail';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Fixed Budget Pricing | Foxtra',
  description: 'Learn about our Fixed Budget engagement model with budget commitment and flexible scope delivery.',
};

export default function FixedBudgetPricing() {
  const modelData = {
    id: 'fixed-budget',
    title: 'Fixed Budget',
    subtitle: 'Budget commitment with flexible scope and complete solution delivery',
    description: 'The Fixed Budget model is one of our most popular pricing options. It builds upon the Time & Material model with a commitment to deliver a complete and logically structured solution within an agreed budget, offering the perfect balance of cost predictability and scope flexibility.',
    icon: 'DollarSign',
    benefits: [
      {
        title: 'Budget Certainty',
        description: 'Know your total investment upfront with a fixed budget that won\'t exceed the agreed amount.',
        icon: 'CheckCircle'
      },
      {
        title: 'Scope Flexibility',
        description: 'Adjust features and requirements during development while staying within budget.',
        icon: 'RefreshCw'
      },
      {
        title: 'Complete Solution',
        description: 'Get a fully functional, production-ready solution that meets your business objectives.',
        icon: 'Star'
      },
      {
        title: 'Value Optimization',
        description: 'Our team maximizes value delivery within your budget constraints.',
        icon: 'Zap'
      }
    ],
    features: [
      'Fixed total project cost',
      'Flexible feature prioritization',
      'Complete solution delivery',
      'Regular milestone reviews',
      'Budget utilization reports',
      'Quality assurance included',
      'Post-launch support',
      'Documentation provided'
    ],
    process: [
      {
        step: 1,
        title: 'Requirements Analysis',
        description: 'We analyze your needs and define the core objectives within your budget parameters.'
      },
      {
        step: 2,
        title: 'Budget Allocation',
        description: 'Strategic allocation of budget across different project phases and feature priorities.'
      },
      {
        step: 3,
        title: 'Development Planning',
        description: 'Create a detailed development plan that maximizes value within the fixed budget.'
      },
      {
        step: 4,
        title: 'Iterative Delivery',
        description: 'Deliver working features in iterations with regular budget and progress reviews.'
      },
      {
        step: 5,
        title: 'Solution Completion',
        description: 'Final delivery of the complete solution with all agreed features and documentation.'
      }
    ],
    pricing: {
      junior: 'Included in budget',
      mid: 'Optimized allocation',
      senior: 'Strategic oversight',
      lead: 'Project leadership'
    },
    bestFor: [
      'Businesses with fixed budgets',
      'Projects with clear objectives',
      'Medium to large applications',
      'Feature-rich platforms',
      'MVP development',
      'Budget-conscious organizations'
    ]
  };

  return (
    <ServicePageWrapper>
      <PricingModelDetail model={modelData} />
    </ServicePageWrapper>
  );
}
