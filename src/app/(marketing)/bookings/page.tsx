"use client";

import { motion } from "framer-motion";
import { Zap, Target, TrendingUp } from "lucide-react";

export default function BookingsPage() {
  const fadeUpVariants = {
    hidden: { 
      opacity: 0, 
      y: 50 
    },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: custom * 0.1,
        ease: [0.25, 0.4, 0.25, 1]
      }
    })
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-[#030303]">
      {/* Background gradient */}
      <div className="fixed inset-0 bg-gradient-to-br from-indigo-500/[0.05] via-transparent to-rose-500/[0.05] blur-3xl" />

      {/* Floating shapes */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <ElegantShape
          delay={0.2}
          width={400}
          height={100}
          rotate={15}
          gradient="from-indigo-500/[0.08]"
          className="left-[-10%] top-[10%]"
        />
        
        <ElegantShape
          delay={0.4}
          width={300}
          height={80}
          rotate={-20}
          gradient="from-rose-500/[0.08]"
          className="right-[-5%] top-[60%]"
        />
        
        <ElegantShape
          delay={0.6}
          width={200}
          height={60}
          rotate={25}
          gradient="from-violet-500/[0.08]"
          className="left-[5%] bottom-[20%]"
        />
        
        <ElegantShape
          delay={0.8}
          width={350}
          height={90}
          rotate={-10}
          gradient="from-cyan-500/[0.08]"
          className="right-[10%] top-[20%]"
        />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-60 pb-16">
          <motion.div
            custom={0}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Book Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-rose-400">Consultation</span>
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Ready to transform your business with AI? Schedule a personalized consultation with our team to discuss your specific needs and goals.
            </p>
          </motion.div>

          <motion.div
            custom={1}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
            className="max-w-4xl mx-auto"
          >
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 shadow-2xl">
              <iframe
                src="https://meetings-ap1.hubspot.com/rajesh-mekala"
                width="100%"
                height="800"
                frameBorder="0"
                className="rounded-lg"
                title="Book a Meeting with Rajesh Mekala"
                loading="lazy"
              />
            </div>
          </motion.div>

          <motion.div
            custom={2}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
            className="text-center mt-12"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto text-left">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-left">
                <div className="flex size-8 shrink-0 items-center justify-center rounded-md border border-white/20 text-white/60 mb-4 group-hover:text-black group-hover:border-white transition-all duration-300">
                  <Zap className="h-4 w-4 flex-none" />
                </div>
                <h3 className="text-white font-semibold text-lg mb-2">Quick Setup</h3>
                <p className="text-white/70">Get your AI solution up and running in just a few days</p>
              </div>
              
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-left">
                <div className="flex size-8 shrink-0 items-center justify-center rounded-md border border-white/20 text-white/60 mb-4 group-hover:text-black group-hover:border-white transition-all duration-300">
                  <Target className="h-4 w-4 flex-none" />
                </div>
                <h3 className="text-white font-semibold text-lg mb-2">Personalized Strategy</h3>
                <p className="text-white/70">Tailored AI solutions designed specifically for your business</p>
              </div>
              
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-left">
                <div className="flex size-8 shrink-0 items-center justify-center rounded-md border border-white/20 text-white/60 mb-4 group-hover:text-black group-hover:border-white transition-all duration-300">
                  <TrendingUp className="h-4 w-4 flex-none" />
                </div>
                <h3 className="text-white font-semibold text-lg mb-2">Proven Results</h3>
                <p className="text-white/70">Join hundreds of businesses already transforming with AI</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom gradient overlay */}
      <div className="fixed bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#030303] to-transparent pointer-events-none" />

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(15px) rotate(5deg);
          }
        }
      `}</style>
    </div>
  );
}

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
    <div
      className={`absolute ${className}`}
      style={{
        opacity: 1,
        transform: 'translateY(0) rotate(0deg)',
        animation: 'float 12s ease-in-out infinite',
        animationDelay: `${delay}s`
      }}
    >
      <div
        className="relative"
        style={{
          width,
          height,
          transform: `rotate(${rotate}deg)`,
        }}
      >
        <div
          className={`
            absolute inset-0 rounded-full
            bg-gradient-to-r to-transparent
            ${gradient}
            backdrop-blur-[2px] border-2 border-white/[0.15]
            shadow-[0_8px_32px_0_rgba(255,255,255,0.1)]
            after:absolute after:inset-0 after:rounded-full
            after:bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.2),transparent_70%)]
          `}
        />
      </div>
    </div>
  );
}
