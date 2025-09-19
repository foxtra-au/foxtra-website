// 1. Install dependencies:
// npm install framer-motion lucide-react

"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { MapPin, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils"; // Your shadcn/ui utility for merging classes

// Define the types for the component props for type-safety and clarity
export interface ArticleCardProps extends React.HTMLAttributes<HTMLDivElement> {
  tag: string;
  date: {
    month: string;
    day: number;
  };
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  location: {
    city: string;
    country: string;
  };
  showLocation?: boolean;
}

const ArticleCard = React.forwardRef<HTMLDivElement, ArticleCardProps>(
  (
    {
      className,
      tag,
      date,
      title,
      description,
      imageUrl,
      imageAlt,
      location,
      showLocation = false,
      ...props
    },
    ref
  ) => {
    // Animation variants for Framer Motion
    const cardVariants = {
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
      hover: { y: -5, scale: 1.02, boxShadow: "0 25px 50px -12px rgb(0 0 0 / 0.15)" },
    };

    const imageVariants = {
      hover: { scale: 1.1 },
    };
    
    return (
      <motion.div
        ref={ref}
        className={cn(
          "w-full h-full flex flex-col overflow-hidden rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 text-white shadow-sm font-sans group",
          className
        )}
        variants={cardVariants}
        initial="initial"
        animate="animate"
        whileHover="hover"
        transition={{ duration: 0.3, ease: "easeInOut" }}
        {...props}
      >
        <div className="p-6 flex-1 flex flex-col">
          {/* Header section with tag and date */}
          <header className="mb-4 flex items-center justify-between">
            <span className="rounded-sm bg-white/10 backdrop-blur-sm border border-white/20 px-3 py-1 text-xs font-medium text-white">
              {tag}
            </span>
            <div className="flex items-center text-xs font-semibold">
              <span className="rounded-l-md bg-white/10 backdrop-blur-sm border border-white/20 px-2.5 py-1.5 text-white">
                {date.month.toUpperCase()}
              </span>
              <span className="rounded-r-md bg-yellow-500 px-2.5 py-1.5 text-black border border-yellow-500">
                {date.day}
              </span>
            </div>
          </header>

          {/* Main content section */}
          <main className="space-y-2 flex-1">
            <h3 className="text-2xl font-bold tracking-tight text-white">{title}</h3>
            <p className="text-sm text-white/70">{description}</p>
          </main>
        </div>

        {/* Image section with location overlay */}
        <div className="relative mx-6 mb-6 aspect-[16/10] overflow-hidden rounded-lg">
          <motion.img
            src={imageUrl}
            alt={imageAlt}
            className="h-full w-full object-cover"
            variants={imageVariants}
            transition={{ duration: 0.4, ease: "easeOut" }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
          
          {showLocation ? (
            <div className="absolute bottom-0 left-0 flex items-center gap-2 p-4 text-white">
              <MapPin className="h-4 w-4" />
              <div>
                <p className="text-sm font-semibold">{location.city}</p>
                <p className="text-xs">{location.country}</p>
              </div>
            </div>
          ) : (
            <div className="absolute bottom-4 right-4">
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-md p-2 group-hover:bg-rose-600 transition-all duration-300 cursor-pointer">
                <ArrowRight className="h-4 w-4 text-white" />
              </div>
            </div>
          )}
        </div>
      </motion.div>
    );
  }
);
ArticleCard.displayName = "ArticleCard";

export { ArticleCard };
