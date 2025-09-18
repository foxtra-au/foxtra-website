'use client';

import { motion } from "framer-motion";
import { MessageCircle, Zap, Brain, Clock, ArrowRight } from "lucide-react";

export function ChatDemo() {
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

    const features = [
        {
            icon: MessageCircle,
            title: "Natural Conversations",
            description: "Engages in human-like dialogue with context awareness"
        },
        {
            icon: Zap,
            title: "Instant Responses",
            description: "Lightning-fast replies with intelligent understanding"
        },
        {
            icon: Brain,
            title: "Smart Learning",
            description: "Learns from interactions to improve over time"
        },
        {
            icon: Clock,
            title: "24/7 Availability",
            description: "Always ready to help your customers anytime"
        }
    ];

    return (
        <motion.div
            custom={1}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
            className="mt-32 max-w-6xl mx-auto"
        >
            <div className="text-left mb-16">
                <h2 className="text-3xl font-bold text-white mb-4">Experience AI Chat in Action</h2>
                <p className="text-white/60 text-lg">
                    Try our live AI chat agent powered by Retell AI. Click the chat button in the bottom-right corner to start a conversation!
                </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                {features.map((feature, index) => {
                    const IconComponent = feature.icon;
                    return (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8 + index * 0.1 }}
                            className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 text-center group"
                            onMouseEnter={(e) => {
                              const iconDiv = e.currentTarget.querySelector('div[data-icon]') as HTMLElement;
                              if (iconDiv) iconDiv.style.backgroundColor = '#FFCC02';
                            }}
                            onMouseLeave={(e) => {
                              const iconDiv = e.currentTarget.querySelector('div[data-icon]') as HTMLElement;
                              if (iconDiv) iconDiv.style.backgroundColor = 'transparent';
                            }}
                        >
                            <div data-icon className="flex size-12 shrink-0 items-center justify-center rounded-md border border-white/20 text-white/60 transition-all duration-300 group-hover:text-black group-hover:border-white mx-auto mb-4" onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#FFCC02'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}>
                                <IconComponent className="h-6 w-6 flex-none" />
                            </div>
                            <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                            <p className="text-white/70 text-sm leading-relaxed">{feature.description}</p>
                        </motion.div>
                    );
                })}
            </div>

            {/* Demo Instructions */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 }}
                className="rounded-xl p-8 border border-white/10"
                style={{ backgroundColor: '#FFCC02' }}
            >
                <div className="flex items-start justify-between gap-8">
                    {/* Left side - Content */}
                    <div className="flex-1">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="flex size-12 shrink-0 items-center justify-center rounded-md border border-black/20 text-black/80 transition-all duration-300">
                                <MessageCircle className="h-6 w-6 flex-none" />
                            </div>
                            <h3 className="text-xl font-bold text-black">Ready to Chat?</h3>
                        </div>
                        <p className="text-black/70 mb-6 text-left">
                            Our AI chat agent is live and ready to demonstrate its capabilities. Try these simple prompts:
                        </p>
                        <div className="flex flex-wrap gap-2 text-sm">
                            <span className="bg-black/10 text-black/80 px-3 py-2 rounded-lg">What services do you offer?</span>
                            <span className="bg-black/10 text-black/80 px-3 py-2 rounded-lg">How much does it cost?</span>
                            <span className="bg-black/10 text-black/80 px-3 py-2 rounded-lg">Schedule a demo</span>
                        </div>
                    </div>
                    
                    {/* Right side - CTA */}
                    <div className="flex-shrink-0">
                        <button className="group inline-flex items-center px-6 py-3 text-white rounded-lg font-semibold shadow-lg transition-all duration-300 transform hover:scale-105" style={{ backgroundColor: '#FF335C', boxShadow: '0 10px 15px -3px rgba(255, 51, 92, 0.25)' }}>
                            <span className="relative z-10 flex items-center">
                                Book Demo
                                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                            </span>
                        </button>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
}
