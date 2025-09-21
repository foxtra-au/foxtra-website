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
    <div className="w-full py-24">
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
              {clientLogos.map((logo, index) => (
                <CarouselItem className="basis-1/4 lg:basis-1/6" key={index}>
                  <div className="flex rounded-md aspect-square bg-white/5 backdrop-blur-sm border border-white/10 items-center justify-center p-6 hover:bg-white/10 transition-all duration-300">
                    <div className="text-center">
                      <div className="relative w-16 h-16 mb-2 mx-auto">
                        <Image
                          src={logo.src}
                          alt={logo.alt}
                          fill
                          className="object-contain"
                          sizes="(max-width: 768px) 64px, 64px"
                        />
                      </div>
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
