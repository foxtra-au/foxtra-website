"use client";

import { motion } from "framer-motion";
import { Search, FileText, Code, TestTube, Rocket, Wrench } from "lucide-react";

interface ProcessStep {
    number: number;
    title: string;
    description: string;
    iconName: string;
}

export function DevelopmentProcess() {
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

    const iconMap: { [key: string]: React.ElementType } = {
        Search,
        FileText,
        Code,
        TestTube,
        Rocket,
        Wrench
    };

    const processSteps: ProcessStep[] = [
        {
            number: 1,
            title: "Discovery Session",
            description: "Deep dive into your business needs, technical requirements, and project goals through comprehensive consultation.",
            iconName: "Search"
        },
        {
            number: 2,
            title: "Proposal",
            description: "Detailed project proposal with timeline, technology stack, architecture design, and transparent pricing.",
            iconName: "FileText"
        },
        {
            number: 3,
            title: "Development",
            description: "Agile development process with regular updates, code reviews, and milestone demonstrations.",
            iconName: "Code"
        },
        {
            number: 4,
            title: "Testing",
            description: "Comprehensive QA testing, performance optimization, security audits, and user acceptance testing.",
            iconName: "TestTube"
        },
        {
            number: 5,
            title: "Production",
            description: "Smooth deployment to production environment with monitoring, backup systems, and performance tracking.",
            iconName: "Rocket"
        },
        {
            number: 6,
            title: "Support",
            description: "Ongoing maintenance, updates, feature enhancements, and 24/7 technical support for your application.",
            iconName: "Wrench"
        }
    ];

    return (
        <motion.div
            custom={5}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
            className="mt-32 max-w-6xl mx-auto"
        >
            <div className="text-left mb-12">
                <h2 className="text-3xl font-bold text-white mb-4">Our Development Process</h2>
                <p className="text-white/60 text-lg">From idea to production in 6 strategic steps</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {processSteps.map((step, index) => {
                    const IconComponent = iconMap[step.iconName];
                    return (
                        <motion.div
                            key={step.number}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8 + index * 0.1 }}
                            className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300"
                        >
                            <div className="mb-4">
                                {IconComponent && (
                                    <div className="w-12 h-12 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg flex items-center justify-center text-white/80 mb-4">
                                        <IconComponent className="w-6 h-6" />
                                    </div>
                                )}
                            </div>
                            <h4 className="text-lg font-semibold text-white mb-2">{step.title}</h4>
                            <p className="text-white/70 text-sm leading-relaxed">{step.description}</p>
                        </motion.div>
                    );
                })}
            </div>
        </motion.div>
    );
}
