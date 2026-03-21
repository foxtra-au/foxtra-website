"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

// Client logos from public/clients directory
const clientLogos = [
  { name: "A2Z Accountants", src: "/clients/a2z-accountants-logo.png", alt: "A2Z Accountants Logo" },
  { name: "AID Foundation", src: "/clients/aid-foundation-logo.jpg", alt: "AID Foundation Logo" },
  { name: "All Smiles BDS", src: "/clients/allsmilebds-logo.png", alt: "All Smiles BDS Logo" },
  { name: "Dream Rise", src: "/clients/dream-rise-logo.png", alt: "Dream Rise Logo" },
  { name: "FTM", src: "/clients/ftm-logo.png", alt: "FTM Logo" },
  { name: "Pacta Real Estate", src: "/clients/pactare-logo.webp", alt: "Pacta Real Estate Logo" },
  { name: "RealNest", src: "/clients/realnest-logo.png", alt: "RealNest Logo" },
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
    <div className="w-full py-12 sm:py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-3 sm:px-4 md:px-6">
        <div className="flex flex-col gap-6 sm:gap-10">
          <div className="text-left">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2 sm:mb-4">
              Trusted by businesses worldwide
            </h2>
            <p className="text-white/60 text-base sm:text-lg">
              Join leading companies who trust us with their digital transformation
            </p>
          </div>
          <Carousel setApi={setApi} className="w-full">
            {/* Tighter gaps on mobile so 3 logos fit cleanly in one row */}
            <CarouselContent className="-ml-2 sm:-ml-4">
              {clientLogos.map((logo, index) => (
                <CarouselItem
                  key={index}
                  className="basis-1/3 pl-2 sm:basis-1/4 sm:pl-4 lg:basis-1/6"
                >
                  <div className="flex aspect-square w-full flex-col items-center justify-center rounded-md border border-white/10 bg-white/5 p-1.5 backdrop-blur-sm transition-all duration-300 hover:bg-white/10 sm:p-3 md:p-6">
                    <div className="text-center">
                      <div className="relative mx-auto mb-0.5 h-8 w-8 sm:mb-1 sm:h-10 sm:w-10 md:h-12 md:w-12">
                        <Image
                          src={logo.src}
                          alt={logo.alt}
                          fill
                          className="object-contain"
                          sizes="(max-width: 640px) 32px, (max-width: 768px) 40px, 48px"
                        />
                      </div>
                      <span className="max-w-[95%] truncate text-[9px] font-medium leading-tight text-white/80 sm:text-[10px] md:text-xs">
                        {logo.name}
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

export { Case };
