'use client';

import { ReactNode } from 'react';

interface HomePageWrapperProps {
  children: ReactNode;
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
                    style={{
                        transform: `rotate(${rotate}deg)`
                    }}
                />
            </div>
        </div>
    );
}

export function HomePageWrapper({ children }: HomePageWrapperProps) {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-[#030303]">
      {/* Background gradient */}
      <div className="fixed inset-0 bg-gradient-to-br from-indigo-500/[0.05] via-transparent to-rose-500/[0.05] blur-3xl" />

      {/* Floating shapes */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
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
      </div>

      {/* Content */}
      <div className="relative z-10 pb-6">
        {children}
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
