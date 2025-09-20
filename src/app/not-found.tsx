"use client";

import { motion } from "framer-motion";
import { Circle, Home, ArrowLeft, Search } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";

function ElegantShape({
    className,
    delay = 0,
    width = 400,
    height = 100,
    rotate = 0,
    gradient = "from-white/[0.08]",
}: {
    className?: string;
    delay?: number;
    width?: number;
    height?: number;
    rotate?: number;
    gradient?: string;
}) {
    return (
        <motion.div
            initial={{
                opacity: 0,
                y: -150,
                rotate: rotate - 15,
            }}
            animate={{
                opacity: 1,
                y: 0,
                rotate: rotate,
            }}
            transition={{
                duration: 2.4,
                delay,
                ease: [0.23, 0.86, 0.39, 0.96],
                opacity: { duration: 1.2 },
            }}
            className={cn("absolute", className)}
        >
            <motion.div
                animate={{
                    y: [0, 15, 0],
                }}
                transition={{
                    duration: 12,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                }}
                style={{
                    width,
                    height,
                }}
                className="relative"
            >
                <div
                    className={cn(
                        "absolute inset-0 rounded-full",
                        "bg-gradient-to-r to-transparent",
                        gradient,
                        "backdrop-blur-[2px] border-2 border-white/[0.15]",
                        "shadow-[0_8px_32px_0_rgba(255,255,255,0.1)]",
                        "after:absolute after:inset-0 after:rounded-full",
                        "after:bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.2),transparent_70%)]"
                    )}
                />
            </motion.div>
        </motion.div>
    );
}

export default function NotFound() {
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
        <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#030303]">
            {/* Same background as other pages */}
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/[0.05] via-transparent to-rose-500/[0.05] blur-3xl" />

            <div className="absolute inset-0 overflow-hidden">
                <ElegantShape
                    delay={0.3}
                    width={600}
                    height={140}
                    rotate={12}
                    gradient="from-indigo-500/[0.15]"
                    className="left-[-10%] md:left-[-5%] top-[15%] md:top-[20%]"
                />
                <ElegantShape
                    delay={0.5}
                    width={500}
                    height={120}
                    rotate={-15}
                    gradient="from-rose-500/[0.15]"
                    className="right-[-5%] md:right-[0%] top-[70%] md:top-[75%]"
                />
                <ElegantShape
                    delay={0.4}
                    width={300}
                    height={80}
                    rotate={-8}
                    gradient="from-violet-500/[0.15]"
                    className="left-[5%] md:left-[10%] bottom-[5%] md:bottom-[10%]"
                />
                <ElegantShape
                    delay={0.6}
                    width={200}
                    height={60}
                    rotate={20}
                    gradient="from-amber-500/[0.15]"
                    className="right-[15%] md:right-[20%] top-[10%] md:top-[15%]"
                />
                <ElegantShape
                    delay={0.7}
                    width={400}
                    height={100}
                    rotate={-25}
                    gradient="from-cyan-500/[0.15]"
                    className="left-[20%] md:left-[25%] bottom-[20%] md:bottom-[25%]"
                />
            </div>

            {/* Content */}
            <div className="relative z-10 container mx-auto px-4 md:px-6 text-center">
                <div className="max-w-4xl mx-auto">
                    {/* Badge */}
                    <motion.div
                        custom={0}
                        variants={fadeUpVariants}
                        initial="hidden"
                        animate="visible"
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] mb-8"
                    >
                        <Circle className="h-2 w-2 fill-rose-500/80" />
                        <span className="text-sm text-white/60 tracking-wide">
                            Foxtra • Page Not Found
                        </span>
                    </motion.div>

                    {/* 404 Number */}
                    <motion.div
                        custom={1}
                        variants={fadeUpVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        <h1 className="text-8xl sm:text-9xl md:text-[12rem] font-bold mb-8 tracking-tight">
                            <span className="bg-clip-text text-transparent bg-gradient-to-b from-rose-500 to-rose-600">
                                404
                            </span>
                        </h1>
                    </motion.div>

                    {/* Error Message */}
                    <motion.div
                        custom={2}
                        variants={fadeUpVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 tracking-tight">
                            <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/80">
                                Oops! Page Not Found
                            </span>
                        </h2>
                    </motion.div>

                    {/* Description */}
                    <motion.div
                        custom={3}
                        variants={fadeUpVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        <p className="text-xl text-white/60 mb-12 max-w-2xl mx-auto leading-relaxed">
                            The page you're looking for seems to have wandered off into the digital void. 
                            Don't worry, even the best AI gets lost sometimes!
                        </p>
                    </motion.div>

                    {/* Action Buttons */}
                    <motion.div
                        custom={4}
                        variants={fadeUpVariants}
                        initial="hidden"
                        animate="visible"
                        className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                    >
                        <Link
                            href="/"
                            className="group inline-flex items-center px-8 py-4 text-white rounded-sm font-semibold text-lg shadow-2xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1"
                            style={{ backgroundColor: '#FF335C', boxShadow: '0 25px 50px -12px rgba(255, 51, 92, 0.25)' }}
                        >
                            <span className="relative z-10 flex items-center">
                                <Home className="mr-2 h-5 w-5" />
                                Back to Home
                            </span>
                        </Link>

                        <button
                            onClick={() => window.history.back()}
                            className="group inline-flex items-center px-8 py-4 text-white/90 bg-white/10 backdrop-blur-sm border border-white/20 rounded-sm font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 hover:bg-white/20"
                        >
                            <span className="relative z-10 flex items-center">
                                <ArrowLeft className="mr-2 h-5 w-5" />
                                Go Back
                            </span>
                        </button>
                    </motion.div>

                    {/* Helpful Links */}
                    <motion.div
                        custom={5}
                        variants={fadeUpVariants}
                        initial="hidden"
                        animate="visible"
                        className="mt-16"
                    >
                        <p className="text-white/50 text-sm mb-6">Or try these popular pages:</p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <Link
                                href="/services/ai-chat-agent"
                                className="text-white/70 hover:text-white transition-colors duration-200 text-sm underline underline-offset-4 hover:underline-offset-8"
                            >
                                AI Chat Agent
                            </Link>
                            <span className="text-white/30">•</span>
                            <Link
                                href="/services/custom-development"
                                className="text-white/70 hover:text-white transition-colors duration-200 text-sm underline underline-offset-4 hover:underline-offset-8"
                            >
                                Custom Development
                            </Link>
                            <span className="text-white/30">•</span>
                            <Link
                                href="/services/ai-websites"
                                className="text-white/70 hover:text-white transition-colors duration-200 text-sm underline underline-offset-4 hover:underline-offset-8"
                            >
                                AI Websites
                            </Link>
                            <span className="text-white/30">•</span>
                            <Link
                                href="/contact"
                                className="text-white/70 hover:text-white transition-colors duration-200 text-sm underline underline-offset-4 hover:underline-offset-8"
                            >
                                Contact Us
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
