"use client";

import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { Circle } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";



function HeroGeometric({
    badge = "Design Collective",
    title1 = "Elevate Your Digital Vision",
    title2 = "Crafting Exceptional Websites",
    description = "Crafting exceptional digital experiences through innovative design and cutting-edge technology.",
    tagline,
    showButtons = false,
}: {
    badge?: string;
    title1?: string;
    title2?: string;
    description?: string;
    tagline?: string;
    showButtons?: boolean;
}) {
    const fadeUpVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: (i: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                duration: 1,
                delay: 0.5 + i * 0.2,
                ease: [0.25, 0.4, 0.25, 1],
            },
        }),
    };

    return (
        <div className="relative w-full flex items-center justify-center">

            <div className="relative z-10 container mx-auto px-4 md:px-6">
                <div className="max-w-3xl mx-auto text-center">
                    <motion.div
                        custom={0}
                        variants={fadeUpVariants}
                        initial="hidden"
                        animate="visible"
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] mb-2"
                    >
                        <Circle className="h-2 w-2 fill-rose-500/80" />
                        <span className="text-sm text-white/60 tracking-wide">
                            {badge}
                        </span>
                    </motion.div>

                    <motion.div
                        custom={1}
                        variants={fadeUpVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold mb-6 md:mb-8 tracking-tight">
                            <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/80">
                                {title1}
                            </span>
                            <br />
                            <span
                                className={cn(
                                    "bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-white/90 to-rose-300 "
                                )}
                            >
                                {title2}
                            </span>
                        </h1>
                    </motion.div>

                    <motion.div
                        custom={2}
                        variants={fadeUpVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        <p className="text-base sm:text-lg md:text-xl text-white/40 mb-4 leading-relaxed font-light tracking-wide max-w-xl mx-auto px-4">
                            {description}
                        </p>
                        {tagline && (
                            <p className="text-sm sm:text-base text-white/30 mb-8 leading-relaxed font-light tracking-wide max-w-lg mx-auto px-4 italic">
                                {tagline}
                            </p>
                        )}
                    </motion.div>

                    {showButtons && (
                        <motion.div
                            custom={3}
                            variants={fadeUpVariants}
                            initial="hidden"
                            animate="visible"
                            className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8"
                        >
                            <button className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-semibold text-lg shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1">
                                <span className="relative z-10 flex items-center">
                                    Start Building Now
                                    <svg className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                    </svg>
                                </span>
                            </button>
                            
                            <button className="group px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-white/20">
                                <span className="flex items-center">
                                    <svg className="mr-2 h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                                    </svg>
                                    Watch Demo
                                </span>
                            </button>
                        </motion.div>
                    )}
                </div>

                {showButtons && (
                    <motion.div
                        custom={4}
                        variants={fadeUpVariants}
                        initial="hidden"
                        animate="visible"
                        className="mt-16"
                    >
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                            {[
                                { label: 'Active Users', value: '10K+' },
                                { label: 'AI Models', value: '50+' },
                                { label: 'API Calls', value: '1M+' },
                                { label: 'Uptime', value: '99.9%' },
                            ].map((stat, index) => (
                                <div 
                                    key={index}
                                    className="text-center bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300"
                                >
                                    <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                                        {stat.value}
                                    </div>
                                    <div className="text-gray-300 text-sm font-medium">
                                        {stat.label}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                )}
            </div>

            <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-transparent to-[#030303]/80 pointer-events-none" />
        </div>
    );
}

export { HeroGeometric }
