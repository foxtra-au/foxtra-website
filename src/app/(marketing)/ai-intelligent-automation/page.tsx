import { ServicePageWrapper } from '@/components/sections';
import {
  AiIntelligentAutomationHero,
  AiIntelligentAutomationCapabilities,
  AiIntelligentAutomationDelivery,
  AiIntelligentAutomationFinalCta,
  AiIntelligentAutomationOutcomes,
  AiIntelligentAutomationScenarios,
} from '@/components/sections/ai-intelligent-automation';
import { buildPageMetadata } from '@/lib/metadata';

export const metadata = buildPageMetadata({
  title: 'AI & Intelligent Automation',
  description:
    'Consulting-led AI solutions and intelligent automation. AI strategy, workflow automation, predictive analytics and digital agents for scalable enterprise adoption.',
  path: '/ai-intelligent-automation',
  keywords: ['AI automation', 'intelligent automation', 'workflow automation', 'AI strategy', 'predictive analytics', 'digital agents', 'enterprise AI'],
});

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
