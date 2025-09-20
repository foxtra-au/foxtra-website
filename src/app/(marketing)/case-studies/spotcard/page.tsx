'use client';

import { CaseStudyLayout } from '@/components/sections';
import { Clock, Users, Target, Award, Smartphone, Zap, Shield, QrCode } from 'lucide-react';

export default function SpotcardCaseStudy() {
  const projectStats = [
    { label: 'Duration', value: '4 months', icon: Clock },
    { label: 'Team Size', value: '6 members', icon: Users },
    { label: 'Platform', value: 'Mobile App', icon: Target },
    { label: 'Success Rate', value: '500+ cards', icon: Award }
  ];

  const overview = {
    content: 'Spotcard is a digital business card solution that revolutionizes professional networking and contact management. The platform allows users to create, share, and manage digital business cards with QR code integration, making networking more efficient and environmentally friendly.',
    image: '/services/mobile-app/business-card-app.png',
    imageAlt: 'Spotcard Digital Business Card App'
  };

  const phases = [
    {
      phase: '1. Design Workshop',
      title: 'Understanding Networking Needs',
      description: 'Comprehensive research into modern networking challenges and digital solutions for contact management.',
      duration: '1 week',
      deliverables: [
        'User research and interviews',
        'Competitive analysis',
        'Feature requirements gathering',
        'Technical feasibility study'
      ],
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3'
    },
    {
      phase: '2. UX Design',
      title: 'Mobile-First Design Strategy',
      description: 'Created intuitive mobile interfaces focusing on quick card creation and seamless sharing experiences.',
      duration: '2 weeks',
      deliverables: [
        'Wireframe creation',
        'Prototype development',
        'User flow optimization',
        'QR code integration design'
      ],
      image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3'
    },
    {
      phase: '3. Development',
      title: 'Cross-Platform Development',
      description: 'Built native mobile applications with robust backend infrastructure for card management and sharing.',
      duration: '10 weeks',
      deliverables: [
        'iOS and Android development',
        'QR code generation system',
        'Contact synchronization',
        'Cloud storage integration'
      ],
      image: '/services/mobile-app/zingo-customer.png'
    },
    {
      phase: '4. Testing',
      title: 'Quality Assurance',
      description: 'Comprehensive testing across devices and platforms to ensure optimal performance and user experience.',
      duration: '1 week',
      deliverables: [
        'Device compatibility testing',
        'QR code functionality testing',
        'Performance optimization',
        'User acceptance testing'
      ],
      image: '/services/mobile-app/localfpx-customer.png'
    },
    {
      phase: '5. Hypercare',
      title: 'Launch Support',
      description: 'Dedicated support during the app store launch and initial user onboarding period.',
      duration: '1 week',
      deliverables: [
        'App store optimization',
        'User onboarding support',
        'Performance monitoring',
        'Feedback collection'
      ],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3'
    },
    {
      phase: '6. Maintenance',
      title: 'Ongoing Updates',
      description: 'Continuous feature enhancements and platform updates to keep the app competitive.',
      duration: 'Ongoing',
      deliverables: [
        'Feature updates',
        'Security patches',
        'Performance improvements',
        'User feedback implementation'
      ],
      image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3'
    }
  ];

  const keyFeatures = [
    {
      icon: Smartphone,
      title: 'Mobile App',
      description: 'Native iOS and Android applications with intuitive user interfaces.'
    },
    {
      icon: QrCode,
      title: 'QR Code Integration',
      description: 'Instant QR code generation for easy card sharing and contact exchange.'
    },
    {
      icon: Zap,
      title: 'Instant Sharing',
      description: 'Quick sharing via QR codes, links, or direct contact transfer.'
    },
    {
      icon: Shield,
      title: 'Secure Storage',
      description: 'Cloud-based contact storage with privacy protection and backup.'
    }
  ];

  const results = [
    { metric: 'Cards Created', value: '500+', description: 'Digital business cards generated' },
    { metric: 'User Downloads', value: '2,500+', description: 'App store downloads' },
    { metric: 'Active Users', value: '1,800+', description: 'Monthly active users' },
    { metric: 'Contact Exchanges', value: '10,000+', description: 'Successful card exchanges' }
  ];

  return (
    <CaseStudyLayout
      title="Spotcard"
      description="Digital business card solution revolutionizing professional networking and contact management, resulting in 500+ business cards created."
      projectStats={projectStats}
      overview={overview}
      phases={phases}
      keyFeatures={keyFeatures}
      results={results}
    />
  );
}
