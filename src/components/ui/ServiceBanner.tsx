"use client";

import { motion } from "framer-motion";
import { Circle, Zap, Target, Users, TrendingUp, ArrowRight, Calendar } from "lucide-react";
import { cn } from "@/lib/utils";
import { AnimatedGroup } from "./AnimatedGroup";
import Image from "next/image";


interface ServiceBannerProps {
    title: string;
    description: string;
    badge?: string;
    features?: string[];
    bannerImage?: string;
    rightComponent?: React.ReactNode;
    leftComponent?: React.ReactNode;
}

export function ServiceBanner({ title, description, badge, features, bannerImage, rightComponent, leftComponent }: ServiceBannerProps) {
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
        <section className="relative w-full pt-48 pb-10">

            {/* Different layout for services */}
            <div className="relative z-10 container mx-auto px-4 md:px-6">
                <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
                    {/* Left side - Content */}
                    <div className="text-left">
                        {badge && (
                            <motion.div
                                custom={0}
                                variants={fadeUpVariants}
                                initial="hidden"
                                animate="visible"
                                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] mb-6"
                            >
                                <Circle className="h-2 w-2 fill-rose-500/80" />
                                <span className="text-sm text-white/60 tracking-wide">
                                    {badge}
                                </span>
                            </motion.div>
                        )}

                        <motion.div
                            custom={1}
                            variants={fadeUpVariants}
                            initial="hidden"
                            animate="visible"
                        >
                            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 tracking-tight">
                                <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/80">
                                    {title}
                                </span>
                            </h1>
                        </motion.div>

                        <motion.div
                            custom={2}
                            variants={fadeUpVariants}
                            initial="hidden"
                            animate="visible"
                        >
                            <p className="text-lg md:text-xl text-white/40 mb-8 leading-relaxed font-light tracking-wide">
                                {description}
                            </p>
                        </motion.div>

                        {/* Left Component */}
                        {leftComponent && (
                            <motion.div
                                custom={3}
                                variants={fadeUpVariants}
                                initial="hidden"
                                animate="visible"
                            >
                                {leftComponent}
                            </motion.div>
                        )}

                        <motion.div
                            custom={4}
                            variants={fadeUpVariants}
                            initial="hidden"
                            animate="visible"
                        >
                            <button className="group inline-flex items-center px-8 py-4 text-white rounded-sm font-semibold text-lg shadow-2xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1" style={{ backgroundColor: '#FF335C', boxShadow: '0 25px 50px -12px rgba(255, 51, 92, 0.25)' }}>
                                <span className="relative z-10 flex items-center">
                                    <Calendar className="mr-2 h-5 w-5" />
                                    Book Appointment
                                </span>
                            </button>
                        </motion.div>
                    </div>

                    {/* Right side - Custom Component, Features or Image */}
                    <div className="lg:text-left">
                        <motion.div
                            custom={5}
                            variants={fadeUpVariants}
                            initial="hidden"
                            animate="visible"
                        >
                            {rightComponent ? (
                                rightComponent
                            ) : bannerImage || !features || features.length === 0 ? (
                                <div className="flex justify-center relative">
                                    <Image
                                        src={bannerImage || "/services/custom-development.png"}
                                        alt="Service illustration"
                                        width={600}
                                        height={280}
                                        className="max-w-full h-[28rem] rounded-xl shadow-2xl object-contain"
                                    />
                                </div>
                            ) : (
                                <>
                                    <h2 className="text-2xl font-bold text-white mb-6">What You Get</h2>
                                    <AnimatedGroup
                                        className="space-y-4"
                                        preset="slide"
                                    >
                                        {features?.map((feature, index) => (
                                            <div key={index} className="flex items-center space-x-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-4">
                                                <div className="w-2 h-2 bg-rose-500 rounded-full"></div>
                                                <span className="text-white/80 font-light tracking-wide">{feature}</span>
                                            </div>
                                        ))}
                                    </AnimatedGroup>
                                </>
                            )}
                        </motion.div>
                    </div>
                </div>

            </div>
        </section>
    );
}
