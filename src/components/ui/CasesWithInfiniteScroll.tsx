"use client";

import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

// Sample company logos with Lucide icons for now
const sampleLogos = [
  { name: "TechCorp", icon: "🚀" },
  { name: "InnovateLab", icon: "⚡" },
  { name: "DataFlow", icon: "📊" },
  { name: "CloudSync", icon: "☁️" },
  { name: "AI Solutions", icon: "🤖" },
  { name: "WebForge", icon: "🔧" },
  { name: "AppCraft", icon: "📱" },
  { name: "CodeBase", icon: "💻" },
  { name: "DevStudio", icon: "🎨" },
  { name: "TechFlow", icon: "🌊" },
  { name: "ByteWorks", icon: "⚙️" },
  { name: "PixelPro", icon: "🎯" },
  { name: "NetCore", icon: "🌐" },
  { name: "DataVault", icon: "🔒" },
  { name: "SyncLabs", icon: "🔄" },
];

function Case() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    const timer = setTimeout(() => {
      if (api.selectedScrollSnap() + 1 === api.scrollSnapList().length) {
        setCurrent(0);
        api.scrollTo(0);
      } else {
        api.scrollNext();
        setCurrent(current + 1);
      }
    }, 2000); // Increased to 2 seconds for better visibility

    return () => clearTimeout(timer);
  }, [api, current]);

  return (
    <div className="w-full py-20 lg:py-40">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="flex flex-col gap-10">
          <div className="text-left">
            <h2 className="text-3xl font-bold text-white mb-4">
              Trusted by businesses worldwide
            </h2>
            <p className="text-white/60 text-lg">
              Join leading companies who trust us with their digital transformation
            </p>
          </div>
          <Carousel setApi={setApi} className="w-full">
            <CarouselContent>
              {sampleLogos.map((logo, index) => (
                <CarouselItem className="basis-1/4 lg:basis-1/6" key={index}>
                  <div className="flex rounded-md aspect-square bg-white/5 backdrop-blur-sm border border-white/10 items-center justify-center p-6 hover:bg-white/10 transition-all duration-300">
                    <div className="text-center">
                      <div className="text-2xl mb-2">{logo.icon}</div>
                      <span className="text-sm text-white/80 font-medium">{logo.name}</span>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </div>
  );
}

export { Case };
