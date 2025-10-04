"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

// Industry data with icons from /public/industies directory
const industries = [
  { name: "Beauty", icon: "/industies/beauty.svg", alt: "Beauty Industry" },
  { name: "Real Estate", icon: "/industies/investment.svg", alt: "Real Estate Industry" },
  { name: "Accountants", icon: "/industies/accounting.svg", alt: "Accountants Industry" },
  { name: "Law Firms", icon: "/industies/law.svg", alt: "Law Firms Industry" },
  { name: "Health Care", icon: "/industies/healthcare.svg", alt: "Health Care Industry" },
  { name: "Education", icon: "/industies/school.svg", alt: "Education Industry" },
  { name: "Retail", icon: "/industies/retail.svg", alt: "Retail Industry" },
  { name: "Food", icon: "/industies/fast-food.svg", alt: "Food Industry" },
  { name: "Auto", icon: "/industies/repair.svg", alt: "Auto Industry" },
  { name: "Salon", icon: "/industies/salon.svg", alt: "Salon Industry" },
  { name: "Cleaning", icon: "/industies/cleaning.svg", alt: "Cleaning Industry" },
];

function VideoIndustries() {
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
    }, 2000); // 2 seconds for better visibility

    return () => clearTimeout(timer);
  }, [api, current]);

  return (
    <div className="w-full py-24">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="flex flex-col gap-10">
          <div className="text-left">
            <h2 className="text-3xl font-bold text-white mb-4">
              We help all the following businesses
            </h2>
            <p className="text-white/60 text-lg">
              Our video marketing services are tailored to meet the unique needs and challenges of businesses across various industries, helping them connect with their target audience through compelling visual storytelling.
            </p>
          </div>
          
          <Carousel setApi={setApi} className="w-full">
            <CarouselContent>
              {industries.map((industry, index) => (
                <CarouselItem className="basis-1/4 lg:basis-[12.5%]" key={index}>
                  <div 
                    className="flex flex-col rounded-xl aspect-square bg-white/5 backdrop-blur-sm border border-white/10 items-center justify-center p-4 hover:bg-white/10 transition-all duration-300"
                    style={{
                      background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)',
                      boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
                    }}
                  >
                    <div className="flex flex-col items-center justify-center h-full">
                      <div className="relative w-8 h-8 mb-3 bg-white/10 rounded-lg flex items-center justify-center">
                        <Image
                          src={industry.icon}
                          alt={industry.alt}
                          fill
                          className="object-contain filter brightness-0 invert p-1"
                          sizes="(max-width: 768px) 32px, 32px"
                        />
                      </div>
                      <span className="text-xs text-white/80 font-medium text-center leading-tight">
                        {industry.name}
                      </span>
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

export { VideoIndustries };
