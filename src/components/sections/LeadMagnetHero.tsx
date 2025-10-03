"use client";

import { motion } from "framer-motion";
import { Circle, Zap, Target, Users, TrendingUp, ArrowRight, Calendar, Settings, CheckCircle, Shield, Clock } from "lucide-react";
import { cn } from "@/lib/utils";
import { AnimatedGroup } from "@/components/ui/AnimatedGroup";
import Image from "next/image";
import { SocialMediaBannerImage } from "@/components/ui/SocialMediaBannerImage";

interface LeadMagnetHeroProps {
    title: string;
    description: string;
    badge?: string;
    features?: string[];
    rightComponent?: React.ReactNode;
}

export function LeadMagnetHero({ title, description, badge, features, rightComponent }: LeadMagnetHeroProps) {
    const fadeUpVariants = {
        hidden: { opacity: 0, y: 60 },
        visible: (i: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.1,
                duration: 0.6,
                ease: [0.25, 0.46, 0.45, 0.94]
            }
        })
    };

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-900">
            {/* Background Elements */}
            <div className="absolute inset-0">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-rose-600/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Left side - Content */}
                    <div className="text-center lg:text-left">
                        {badge && (
                            <motion.div
                                custom={0}
                                variants={fadeUpVariants}
                                initial="hidden"
                                animate="visible"
                                className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-white/10 backdrop-blur-sm border border-white/20 text-white/70 mb-8"
                            >
                                {badge}
                            </motion.div>
                        )}

                        <motion.h1
                            custom={1}
                            variants={fadeUpVariants}
                            initial="hidden"
                            animate="visible"
                            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
                        >
                            {title}
                        </motion.h1>

                        <motion.p
                            custom={2}
                            variants={fadeUpVariants}
                            initial="hidden"
                            animate="visible"
                            className="text-xl text-white/70 mb-8 max-w-2xl mx-auto lg:mx-0"
                        >
                            {description}
                        </motion.p>

                        {features && (
                            <motion.div
                                custom={3}
                                variants={fadeUpVariants}
                                initial="hidden"
                                animate="visible"
                                className="mb-8"
                            >
                                <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                                    {features.map((feature, index) => {
                                        // Map features to appropriate icons
                                        const getFeatureIcon = (featureText: string) => {
                                            if (featureText.toLowerCase().includes('instant setup')) return Settings;
                                            if (featureText.toLowerCase().includes('smart form')) return Zap;
                                            if (featureText.toLowerCase().includes('verified')) return CheckCircle;
                                            if (featureText.toLowerCase().includes('enhanced client') || featureText.toLowerCase().includes('confidence')) return Shield;
                                            if (featureText.toLowerCase().includes('24/7') || featureText.toLowerCase().includes('lead capture')) return Clock;
                                            return Target; // Default icon
                                        };
                                        
                                        const IconComponent = getFeatureIcon(feature);
                                        
                                        return (
                                            <div key={index} className="inline-flex items-center px-3 py-1.5 rounded-sm text-sm font-medium bg-white/10 backdrop-blur-sm border border-yellow-500/30 text-white/70 hover:bg-white/15 transition-all duration-300">
                                                <IconComponent className="w-4 h-4 text-yellow-400 mr-2 flex-shrink-0" />
                                                <span>{feature}</span>
                                            </div>
                                        );
                                    })}
                                </div>
                            </motion.div>
                        )}

                        <motion.div
                            custom={4}
                            variants={fadeUpVariants}
                            initial="hidden"
                            animate="visible"
                            className="flex flex-row gap-4 items-center w-full"
                        >
                            <a 
                                href="#" 
                                className="group flex-1 flex items-center justify-center px-4 py-4 text-white rounded-sm font-semibold text-lg shadow-2xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1" 
                                style={{ backgroundColor: '#FF335C', boxShadow: '0 25px 50px -12px rgba(255, 51, 92, 0.25)' }}
                            >
                                <span className="relative z-10 flex items-center">
                                    <ArrowRight className="mr-2 h-5 w-5" />
                                    <span className="hidden sm:inline">Buy now</span>
                                    <span className="sm:hidden">Buy</span>
                                </span>
                            </a>
                            <a 
                                href="#" 
                                className="group flex-1 flex items-center justify-center px-4 py-4 text-white rounded-sm font-semibold text-lg bg-white/10 backdrop-blur-sm border border-white/20 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 hover:bg-white/20"
                            >
                                <span className="relative z-10 flex items-center">
                                    <Target className="mr-2 h-5 w-5" />
                                    <span className="hidden sm:inline">View demo</span>
                                    <span className="sm:hidden">Demo</span>
                                </span>
                            </a>
                        </motion.div>
                    </div>

                    {/* Right side - Custom Component or Image */}
                    <div className="lg:text-left">
                        <motion.div
                            custom={5}
                            variants={fadeUpVariants}
                            initial="hidden"
                            animate="visible"
                        >
                            {rightComponent || <SocialMediaBannerImage />}
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Bottom gradient overlay */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/50 to-transparent pointer-events-none" />
        </section>
    );
}
