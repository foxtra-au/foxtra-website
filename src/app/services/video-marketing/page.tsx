import { ServiceBanner } from '@/components/ui/ServiceBanner'
import { ServicePageWrapper, VideoMarketingFeatures } from '@/components/sections'
import { VideoTemplateDemo } from '@/components/ui/VideoTemplateDemo'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Video Marketing | Foxtra',
  description: 'Engaging video content and campaigns to boost your brand visibility.',
}

export default function VideoMarketing() {
  const videoMarketingFeatures = [
    "Video Content Creation",
    "Social Media Videos",
    "YouTube Optimization",
    "Video Analytics"
  ];

  return (
    <ServicePageWrapper>
      <ServiceBanner
        title="Video Marketing"
        description="Engaging video content and campaigns to boost your brand visibility."
        badge="Foxtra • Marketing Services"
        features={[]}
        rightComponent={<VideoTemplateDemo />}
      />
      <VideoMarketingFeatures 
        features={videoMarketingFeatures}
        className="mt-16"
      />
    </ServicePageWrapper>
  )
}
