import { Video, Share2, TrendingUp, BarChart3 } from 'lucide-react';

interface VideoMarketingFeaturesProps {
  features?: string[];
  className?: string;
}

export function VideoMarketingFeatures({ 
  features = [
    "Video Content Creation",
    "Social Media Videos", 
    "YouTube Optimization",
    "Video Analytics"
  ],
  className = ""
}: VideoMarketingFeaturesProps) {
  const featureIcons = {
    "Video Content Creation": Video,
    "Social Media Videos": Share2,
    "YouTube Optimization": TrendingUp,
    "Video Analytics": BarChart3,
  };

  return (
    <div className={`max-w-6xl mx-auto ${className}`}>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, index) => {
          const IconComponent = featureIcons[feature as keyof typeof featureIcons] || Video;
          
          return (
            <div 
              key={index}
              className="flex items-center space-x-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 group"
            >
              <div className="flex size-8 shrink-0 items-center justify-center rounded-md border border-white/20 text-white/60 transition-all duration-300 group-hover:text-black group-hover:border-white">
                <IconComponent className="h-4 w-4 flex-none" />
              </div>
              <span className="text-white/90 font-medium text-lg tracking-wide">{feature}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
