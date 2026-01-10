'use client';

import { motion } from 'framer-motion';
import { TeamMember } from '@/components/ui/TeamMember';
import { Circle } from 'lucide-react';
import Image from 'next/image';

export function OurTeamClient() {
  const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        delay: 0.5 + i * 0.1,
        ease: [0.25, 0.4, 0.25, 1],
      },
    }),
  };

  // Team members data
  const teamMembers = [
    {
      name: "Lokesh M",
      title: "Technology Delivery Manager",
      videoUrl: "https://foxtra-ai-website-videos.s3.ap-southeast-2.amazonaws.com/tech-delivery-manager.mp4",
      imageUrl: "/team/lokesh.png",
    },
    {
      name: "Teja",
      title: "Frontend Developer",
      videoUrl: "https://foxtra-ai-website-videos.s3.ap-southeast-2.amazonaws.com/front-end-developmer.mp4",
      imageUrl: "/team/teja.png",
    },
    {
      name: "Pavan M",
      title: "Fullstack Developer",
      videoUrl: "https://foxtra-ai-website-videos.s3.ap-southeast-2.amazonaws.com/full-stack-developer.mp4",
      imageUrl: "/team/pavan.png",
    },
    {
      name: "Preethi T",
      title: "Digital Marketing Executive",
      videoUrl: "https://foxtra-ai-website-videos.s3.ap-southeast-2.amazonaws.com/digital-marketing-executive.mp4",
      imageUrl: "/team/preethi.png",
    },
    {
      name: "Nurul T",
      title: "Full Stack Developer",
      imageUrl: "/team/Nurul.png",
    },
  ];

  return (
    <div className="relative w-full overflow-hidden bg-[#030303] min-h-screen">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/[0.05] via-transparent to-rose-500/[0.05] blur-3xl" />

      <div className="relative z-10">
        {/* CEO Banner Section */}
        <section className="relative w-full pt-32 pb-20">
          <div className="container mx-auto px-4 md:px-6 max-w-7xl">
            {/* Small Title */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] mb-8"
            >
              <Circle className="h-2 w-2 fill-rose-500/80" />
              <span className="text-sm text-white/60 tracking-wide">
                Our Team
              </span>
            </motion.div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-8 font-sans leading-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-white/90 to-white/80">
                Meet Our Team
              </span>
            </h1>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 md:p-8 flex flex-col lg:flex-row gap-8 items-stretch">
              {/* Left Side - CEO Photo (30%) */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="relative w-full lg:w-[30%] flex-shrink-0 min-h-[200px] lg:min-h-[250px] flex items-center"
              >
                <div className="relative w-full h-full">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-white/5 to-white/10 rounded-2xl backdrop-blur-xl border border-white/30 p-2 shadow-2xl">
                    <div className="relative w-full h-full rounded-xl overflow-hidden">
                      <Image
                        src="/team/rajesh-ceo.png"
                        alt="Rajesh - CEO & Founder"
                        fill
                        className="object-cover blur-[0.5px]"
                        quality={95}
                        priority
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 30vw, 30vw"
                      />
                      {/* Subtle glass overlay - no blur on image */}
                      <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-white/5 pointer-events-none" />
                    </div>
                  </div>
                  {/* Decorative elements */}
                  <div className="absolute -top-4 -right-4 w-24 h-24 bg-yellow-500/20 rounded-full blur-2xl" />
                  <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-rose-500/20 rounded-full blur-2xl" />
                </div>
              </motion.div>

              {/* Right Side - CEO Message (70%) */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="flex items-center justify-center h-full w-full lg:w-[70%] flex-shrink-0 min-h-[200px] lg:min-h-[250px]"
              >
                {/* CEO Message */}
                <div className="flex flex-col justify-center w-full">
                  <p className="text-white/80 text-lg leading-relaxed font-light italic mb-4">
                    "At Foxtra, we believe that innovation happens when talented individuals come together with a shared vision. Our team is the heart of everything we do, and each member brings unique expertise, passion, and dedication to delivering exceptional AI solutions."
                  </p>
                  <div className="pt-4 border-t border-white/10">
                    <p className="text-white font-semibold text-xl mb-1">Rajesh R Mekala</p>
                    <p className="text-white/70 text-sm">CEO & Founder @ Foxtra</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Team Members Section */}
        <section className="relative w-full py-20">
          <div className="container mx-auto px-4 md:px-6 max-w-7xl">
            <motion.div
              custom={0}
              variants={fadeUpVariants}
              initial="hidden"
              animate="visible"
              className="text-left mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our Team Members
              </h2>
              <p className="text-white/60 text-lg max-w-2xl">
                Talented professionals working together to deliver exceptional results
              </p>
            </motion.div>

            {/* Team Members Grid - 4 in a row */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={index}
                  custom={index + 1}
                  variants={fadeUpVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <TeamMember
                    name={member.name}
                    title={member.title}
                    videoUrl={member.videoUrl}
                    imageUrl={member.imageUrl}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

