"use client";

import { motion } from "framer-motion";
import { Calendar, Circle } from "lucide-react";
import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/** Per-highlight accent: matching dot + pill border/tint (cycles if more than 5 items) */
const HERO_HIGHLIGHT_PALETTE = [
    {
        dot: "bg-indigo-400",
        border: "border-indigo-400/45",
        borderHover: "hover:border-indigo-400/70",
        bg: "bg-indigo-500/[0.12]",
        bgHover: "hover:bg-indigo-500/[0.18]",
    },
    {
        dot: "bg-sky-400",
        border: "border-sky-400/45",
        borderHover: "hover:border-sky-400/70",
        bg: "bg-sky-500/[0.12]",
        bgHover: "hover:bg-sky-500/[0.18]",
    },
    {
        dot: "bg-emerald-400",
        border: "border-emerald-400/45",
        borderHover: "hover:border-emerald-400/70",
        bg: "bg-emerald-500/[0.12]",
        bgHover: "hover:bg-emerald-500/[0.18]",
    },
    {
        dot: "bg-amber-400",
        border: "border-amber-400/45",
        borderHover: "hover:border-amber-400/70",
        bg: "bg-amber-500/[0.12]",
        bgHover: "hover:bg-amber-500/[0.18]",
    },
    {
        dot: "bg-rose-400",
        border: "border-rose-400/45",
        borderHover: "hover:border-rose-400/70",
        bg: "bg-rose-500/[0.12]",
        bgHover: "hover:bg-rose-500/[0.18]",
    },
] as const;

function HeroGeometric({
    badge = "Design Collective",
    title1 = "Elevate Your Digital Vision",
    title2 = "Crafting Exceptional Websites",
    description = "Crafting exceptional digital experiences through innovative design and cutting-edge technology.",
    tagline,
    showButtons = false,
    showStats = false,
    showBackground = true,
    primaryCtaHref = "/bookings",
    primaryCtaLabel = "Book Meeting",
    primaryCtaIcon,
    secondaryCtaHref = "/showcase",
    secondaryCtaLabel = "View portfolio",
    highlights,
    showSecondaryButton = true,
}: {
    badge?: string;
    title1?: string;
    title2?: string;
    description?: string;
    tagline?: string;
    showButtons?: boolean;
    showStats?: boolean;
    showBackground?: boolean;
    /** When set with showButtons, overrides default Book Meeting / View portfolio */
    primaryCtaHref?: string;
    primaryCtaLabel?: string;
    primaryCtaIcon?: ReactNode;
    secondaryCtaHref?: string;
    secondaryCtaLabel?: string;
    /** Pill labels shown above CTA buttons (rounded-full) */
    highlights?: string[];
    /** When false, only the primary CTA is shown */
    showSecondaryButton?: boolean;
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
            {showBackground && (
                <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-transparent to-[#030303]/80 pointer-events-none" />
            )}

            <div className="relative z-10 container mx-auto px-4 md:px-6">
                <div className="mx-auto w-full max-w-5xl text-center md:max-w-6xl">
                    <motion.div
                        custom={0}
                        variants={fadeUpVariants}
                        initial="hidden"
                        animate="visible"
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] mb-1"
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
                        <h1 className="text-5xl sm:text-5xl md:text-7xl font-bold mb-6 md:mb-8 tracking-tight">
                            {title1 ? (
                                <>
                                    <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/80">
                                        {title1}
                                    </span>
                                    <br />
                                </>
                            ) : null}
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
                        <p className="text-base sm:text-lg md:text-xl text-white/40 mb-4 leading-relaxed font-light tracking-wide mx-auto max-w-2xl px-4 sm:max-w-3xl md:max-w-4xl">
                            {description}
                        </p>
                        {tagline && (
                            <p className="text-sm sm:text-base text-white/30 mb-8 leading-relaxed font-light tracking-wide max-w-lg mx-auto px-4 italic">
                                {tagline}
                            </p>
                        )}
                    </motion.div>

                    {highlights && highlights.length > 0 && (
                        <motion.ul
                            custom={3}
                            variants={fadeUpVariants}
                            initial="hidden"
                            animate="visible"
                            className="mt-6 flex flex-wrap items-center justify-center gap-2 px-2 sm:mt-8 sm:gap-3"
                            aria-label="Focus areas"
                        >
                            {highlights.map((label, index) => {
                                const accent =
                                    HERO_HIGHLIGHT_PALETTE[index % HERO_HIGHLIGHT_PALETTE.length];
                                return (
                                    <li
                                        key={label}
                                        className={cn(
                                            "flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium tracking-wide text-white/85 backdrop-blur-sm transition-colors hover:text-white",
                                            accent.border,
                                            accent.borderHover,
                                            accent.bg,
                                            accent.bgHover
                                        )}
                                    >
                                        <span
                                            className={cn(
                                                "h-2 w-2 shrink-0 rounded-full shadow-[0_0_8px_rgba(255,255,255,0.25)]",
                                                accent.dot
                                            )}
                                            aria-hidden
                                        />
                                        {label}
                                    </li>
                                );
                            })}
                        </motion.ul>
                    )}

                    {showButtons && (
                        <motion.div
                            custom={4}
                            variants={fadeUpVariants}
                            initial="hidden"
                            animate="visible"
                            className={cn(
                                "flex w-full max-w-md flex-col items-stretch justify-center gap-3 sm:max-w-none sm:flex-row sm:items-center sm:gap-4",
                                highlights && highlights.length > 0 ? "mt-6" : "mt-8"
                            )}
                        >
                            <Link
                                href={primaryCtaHref}
                                className="inline-flex min-h-[42px] w-full items-center justify-center rounded-sm border border-transparent px-6 py-2 text-base font-medium text-white shadow-sm transition-all duration-200 hover:shadow-lg transform hover:scale-105 drop-shadow-lg sm:w-auto"
                                style={{ backgroundColor: "#FF335C" }}
                            >
                                {primaryCtaIcon ?? <Calendar className="mr-2 h-4 w-4" />}
                                {primaryCtaLabel}
                            </Link>
                            {showSecondaryButton ? (
                                <Link
                                    href={secondaryCtaHref}
                                    className="inline-flex min-h-[42px] w-full items-center justify-center rounded-md border border-white/20 bg-white/10 px-6 py-2 text-base font-medium text-white/90 backdrop-blur-sm transition-all duration-300 hover:border-yellow-400 hover:bg-yellow-500 hover:text-black drop-shadow-md sm:w-auto"
                                >
                                    {secondaryCtaLabel}
                                </Link>
                            ) : null}
                        </motion.div>
                    )}
                </div>

                {showStats && (
                    <motion.div
                        custom={5}
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

        </div>
    );
}

export { HeroGeometric }
