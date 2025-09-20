import { ServiceBanner } from '@/components/ui/ServiceBanner'
import { ServicePageWrapper, CloudManagementFeatures, CloudDatabaseDemo } from '@/components/sections'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Cloud Management | Foxtra',
  description: 'Architecture, DevOps, security, and cost optimization across AWS/Azure/GCP.',
}

export default function CloudManagement() {
  const cloudManagementFeatures = [
    "Multi-Cloud Architecture",
    "DevOps Automation",
    "Security Compliance",
    "Cost Optimization"
  ];

  return (
    <ServicePageWrapper>
      <ServiceBanner
        title="Cloud Management"
        description="Architecture, DevOps, security, and cost optimization across AWS/Azure/GCP."
        badge="Foxtra • Development Services"
        features={[]}
        rightComponent={<CloudDatabaseDemo />}
      />
      <CloudManagementFeatures 
        features={cloudManagementFeatures}
        className="mt-16"
      />
    </ServicePageWrapper>
  )
}
