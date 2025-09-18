"use client";

import { motion } from "framer-motion";
import { MarqueeDemo } from "@/components/ui/MarqueeDemo";

export function TechnologiesMarquee() {
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
        <motion.div
            custom={6}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
            className="mt-32 max-w-6xl mx-auto"
        >
            <div className="text-left mb-12">
                <h2 className="text-3xl font-bold text-white mb-4">Technologies We Use</h2>
                <p className="text-white/60 text-lg">Cutting-edge tools and frameworks</p>
            </div>
            <MarqueeDemo />
        </motion.div>
    );
}
