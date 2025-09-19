'use client';

import { AgentCard } from './AgentCard';

export function AgentCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      <AgentCard
        profileImage="/agents/lexi-receptionist.jpg"
        phoneNumber="123 456 789"
        countryCode="+61"
        flag={<span className="text-lg">🇦🇺</span>}
        agentName="Lexi"
        role="AI Receptionist"
        agentId="receptionist-agent-id" // Replace with actual Retell AI agent ID
      />
      <AgentCard
        profileImage="/agents/lexi-sales.jpg"
        phoneNumber="987 654 321"
        countryCode="+61"
        flag={<span className="text-lg">🇦🇺</span>}
        agentName="Lexi"
        role="AI Sales Agent"
        agentId="sales-agent-id" // Replace with actual Retell AI agent ID
      />
    </div>
  );
}
