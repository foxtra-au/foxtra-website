'use client';

import { CaseStudyLayout } from '@/components/sections';
import { Clock, Users, Target, Award, Heart, Calendar, BarChart3, Camera } from 'lucide-react';

export default function LittleStepsCaseStudy() {
  const projectStats = [
    { label: 'Duration', value: '5 months', icon: Clock },
    { label: 'Team Size', value: '7 members', icon: Users },
    { label: 'Platform', value: 'Mobile App', icon: Target },
    { metric: 'Active Users', value: '10,000+', icon: Award }
  ];

  const overview = {
    content: 'Little Steps is a child development tracking app designed to help parents monitor and support their children\'s growth milestones. The platform combines developmental psychology insights with modern technology to provide comprehensive tracking, milestone alerts, and expert guidance for child development.',
    image: '/services/mobile-app/little-steps.png',
    imageAlt: 'Little Steps Child Development App'
  };

  const phases = [
    {
      phase: '1. Design Workshop',
      title: 'Understanding Child Development',
      description: 'Extensive research into child development stages, parental needs, and existing tracking methods.',
      duration: '2 weeks',
      deliverables: [
        'Child development research',
        'Parent interviews and surveys',
        'Pediatric expert consultations',
        'Competitive analysis'
      ],
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3'
    },
    {
      phase: '2. UX Design',
      title: 'Family-Friendly Interface Design',
      description: 'Created intuitive interfaces that work for busy parents while maintaining child-friendly elements.',
      duration: '3 weeks',
      deliverables: [
        'User journey mapping',
        'Wireframe creation',
        'Prototype development',
        'Accessibility considerations'
      ],
      image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3'
    },
    {
      phase: '3. Development',
      title: 'Mobile App Development',
      description: 'Built comprehensive mobile applications with milestone tracking, photo storage, and notification systems.',
      duration: '12 weeks',
      deliverables: [
        'iOS and Android development',
        'Milestone tracking algorithms',
        'Photo and video storage',
        'Push notification system'
      ],
      image: '/services/mobile-app/localfpx-partner.png'
    },
    {
      phase: '4. Testing',
      title: 'Quality Assurance',
      description: 'Thorough testing with families and child development experts to ensure accuracy and usability.',
      duration: '2 weeks',
      deliverables: [
        'Beta testing with families',
        'Expert review and validation',
        'Performance optimization',
        'Security testing'
      ],
      image: '/services/mobile-app/localfpx-customer.png'
    },
    {
      phase: '5. Hypercare',
      title: 'Launch Support',
      description: 'Dedicated support during app launch with family onboarding and expert guidance.',
      duration: '2 weeks',
      deliverables: [
        'App store optimization',
        'Family onboarding support',
        'Expert consultation setup',
        'Community building'
      ],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3'
    },
    {
      phase: '6. Maintenance',
      title: 'Ongoing Support',
      description: 'Continuous updates based on child development research and user feedback.',
      duration: 'Ongoing',
      deliverables: [
        'Research-based updates',
        'Feature enhancements',
        'Expert content updates',
        'Community support'
      ],
      image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3'
    }
  ];

  const keyFeatures = [
    {
      icon: Heart,
      title: 'Milestone Tracking',
      description: 'Comprehensive tracking of developmental milestones across all age groups.'
    },
    {
      icon: Camera,
      title: 'Photo & Video Storage',
      description: 'Secure storage of precious moments with automatic milestone tagging.'
    },
    {
      icon: Calendar,
      title: 'Smart Reminders',
      description: 'Intelligent reminders for checkups, vaccinations, and milestone assessments.'
    },
    {
      icon: BarChart3,
      title: 'Progress Analytics',
      description: 'Visual progress tracking and insights into your child\'s development journey.'
    }
  ];

  const results = [
    { metric: 'Active Users', value: '10,000+', description: 'Parents actively tracking milestones' },
    { metric: 'Milestones Tracked', value: '50,000+', description: 'Developmental milestones recorded' },
    { metric: 'Photos Stored', value: '100,000+', description: 'Precious moments captured' },
    { metric: 'Expert Consultations', value: '500+', description: 'Professional guidance sessions' }
  ];

  return (
    <CaseStudyLayout
      title="Little Steps"
      description="Child development tracking app helping parents monitor and support their children's growth milestones, with 10,000+ active users."
      projectStats={projectStats}
      overview={overview}
      phases={phases}
      keyFeatures={keyFeatures}
      results={results}
    />
  );
}
