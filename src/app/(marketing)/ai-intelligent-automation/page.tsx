import { ServicePageWrapper } from '@/components/sections';
import {
  AiIntelligentAutomationHero,
  AiIntelligentAutomationCapabilities,
  AiIntelligentAutomationDelivery,
  AiIntelligentAutomationFinalCta,
  AiIntelligentAutomationOutcomes,
  AiIntelligentAutomationScenarios,
} from '@/components/sections/ai-intelligent-automation';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI & Intelligent Automation | Foxtra',
  description:
    'Consulting-led AI solutions and intelligent automation. AI strategy, workflow automation, predictive analytics and digital agents for scalable enterprise adoption.',
  robots: { index: true, follow: true },
};

export default function AiIntelligentAutomationPage() {
  return (
    <ServicePageWrapper>
      <AiIntelligentAutomationHero />
      <AiIntelligentAutomationCapabilities />
      <AiIntelligentAutomationDelivery />
      <AiIntelligentAutomationFinalCta />
      <AiIntelligentAutomationOutcomes />
      <AiIntelligentAutomationScenarios />
    </ServicePageWrapper>
  );
}
