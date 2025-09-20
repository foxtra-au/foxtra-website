import { ServicePageWrapper } from '@/components/sections';
import { PricingModelDetail } from '@/components/sections/PricingModelDetail';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Fixed Price Pricing | Foxtra',
  description: 'Learn about our Fixed Price engagement model with predefined scope and guaranteed delivery.',
};

export default function FixedPricePricing() {
  const modelData = {
    id: 'fixed-price',
    title: 'Fixed Price',
    subtitle: 'Predefined scope with guaranteed delivery and maximum predictability',
    description: 'The Fixed Price model operates on a predefined sum specified in the contract, paid in parts as agreed. This model offers the highest predictability as developers commit to delivering a specific scope within a specific budget. Perfect for well-defined projects with clear requirements.',
    icon: 'FileText',
    benefits: [
      {
        title: 'Maximum Predictability',
        description: 'Know exactly what you\'ll pay and what you\'ll receive before the project starts.',
        icon: 'Eye'
      },
      {
        title: 'Risk Mitigation',
        description: 'We assume the delivery risk, ensuring you get the agreed scope within budget.',
        icon: 'CheckCircle'
      },
      {
        title: 'Clear Deliverables',
        description: 'Detailed specifications ensure no ambiguity about project deliverables.',
        icon: 'FileText'
      },
      {
        title: 'Milestone Payments',
        description: 'Pay as we deliver with structured milestone-based payment schedule.',
        icon: 'DollarSign'
      }
    ],
    features: [
      'Fixed total project cost',
      'Detailed project specification',
      'Guaranteed scope delivery',
      'Milestone-based payments',
      'Comprehensive documentation',
      'Quality assurance testing',
      'User acceptance testing',
      'Deployment and launch support'
    ],
    process: [
      {
        step: 1,
        title: 'Detailed Specification',
        description: 'Create comprehensive project documentation with detailed requirements and acceptance criteria.'
      },
      {
        step: 2,
        title: 'Fixed Quote Preparation',
        description: 'Provide detailed fixed price quote based on the agreed specification and timeline.'
      },
      {
        step: 3,
        title: 'Contract Finalization',
        description: 'Finalize contract with clear deliverables, timeline, and payment milestones.'
      },
      {
        step: 4,
        title: 'Structured Development',
        description: 'Execute development according to the agreed specification with regular milestone reviews.'
      },
      {
        step: 5,
        title: 'Final Delivery',
        description: 'Complete delivery with all agreed features, testing, and documentation.'
      }
    ],
    pricing: {
      junior: 'Included in quote',
      mid: 'Optimized team mix',
      senior: 'Quality assurance',
      lead: 'Project delivery'
    },
    bestFor: [
      'Well-defined projects',
      'Regulatory compliance needs',
      'Enterprise applications',
      'System integrations',
      'Migration projects',
      'Fixed budget requirements'
    ]
  };

  return (
    <ServicePageWrapper>
      <PricingModelDetail model={modelData} />
    </ServicePageWrapper>
  );
}
