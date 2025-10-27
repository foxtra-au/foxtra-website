'use client';

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export function PortfolioSection() {
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

  // Portfolio images - all web and mobile development projects
  const portfolioItems = [
    {
      id: "a2z-accountants",
      title: "A2Z Accountants",
      category: "Web Development",
      image: "/services/custom-development/a2z-accountants.png",
      description: "Professional accounting firm website with client portal"
    },
    {
      id: "aid-foundation",
      title: "AID Foundation",
      category: "Web Development",
      image: "/services/custom-development/aid-foundation.png",
      description: "Non-profit organization website with donation system"
    },
    {
      id: "aid-foundation-v2",
      title: "AID Foundation V2",
      category: "Web Development",
      image: "/services/custom-development/aid-foundation-v2.png",
      description: "Enhanced non-profit platform with advanced features"
    },
    {
      id: "all-smiles-bds",
      title: "All Smiles BDS",
      category: "Web Development",
      image: "/services/custom-development/all-smiles-bds.png",
      description: "Dental practice website with appointment booking"
    },
    {
      id: "business-card-app",
      title: "Business Card App",
      category: "Mobile Development", 
      image: "/services/mobile-app/business-card-app.png",
      description: "Digital business card mobile application"
    },
    {
      id: "fintax-mates",
      title: "Fintax Mates",
      category: "Web Development",
      image: "/services/custom-development/fintax-mates.png",
      description: "Tax preparation and financial services platform"
    },
    {
      id: "little-steps",
      title: "Little Steps App",
      category: "Mobile Development",
      image: "/services/mobile-app/little-steps.png",
      description: "Childcare and early learning mobile application"
    },
    {
      id: "localfox-admin",
      title: "LocalFox Admin",
      category: "Web Development",
      image: "/services/custom-development/localfox-admin.png",
      description: "Administrative dashboard for local business management"
    },
    {
      id: "localfox-partner",
      title: "LocalFox Partner",
      category: "Web Development",
      image: "/services/custom-development/localfox-partner.png",
      description: "Partner portal for local business network"
    },
    {
      id: "localfox-web",
      title: "LocalFox Web Platform",
      category: "Web Development",
      image: "/services/custom-development/localfox-web.png", 
      description: "Comprehensive local business management platform"
    },
    {
      id: "localfpx-customer",
      title: "LocalFox Customer App",
      category: "Mobile Development",
      image: "/services/mobile-app/localfpx-customer.png",
      description: "Customer mobile app for local services"
    },
    {
      id: "localfpx-partner",
      title: "LocalFox Partner App",
      category: "Mobile Development",
      image: "/services/mobile-app/localfpx-partner.png",
      description: "Partner mobile app for service providers"
    },
    {
      id: "ozkindy",
      title: "OzKindy",
      category: "Web Development",
      image: "/services/custom-development/ozkindy.png",
      description: "Kindergarten management and enrollment platform"
    },
    {
      id: "pacta-realestate",
      title: "Pacta Real Estate",
      category: "Web Development",
      image: "/services/custom-development/pacta-realestate.png",
      description: "Real estate agency website with property listings"
    },
    {
      id: "realnest",
      title: "Realnest Platform",
      category: "Web Development", 
      image: "/services/custom-development/realnest.png",
      description: "Real estate management and listing platform"
    },
    {
      id: "recruitment",
      title: "Recruitment Platform",
      category: "Web Development",
      image: "/services/custom-development/recruitement.png",
      description: "Job recruitment and candidate management system"
    },
    {
      id: "redcart",
      title: "RedCart",
      category: "Web Development",
      image: "/services/custom-development/redcart.png",
      description: "E-commerce platform with shopping cart functionality"
    },
    {
      id: "zingo-customer",
      title: "Zingo Customer App",
      category: "Mobile Development",
      image: "/services/mobile-app/zingo-customer.png",
      description: "Customer mobile app for service booking"
    }
  ];

  return (
    <motion.div
      custom={2}
      variants={fadeUpVariants}
      initial="hidden"
      animate="visible"
      className="max-w-7xl mx-auto mt-20"
    >
      {/* Section Header */}
      <div className="flex items-center justify-between mb-8 pt-6">
        <div>
          <h2 className="text-3xl font-bold text-white mb-4">Web & Mobile Development Portfolio</h2>
          <p className="text-white/60 text-lg max-w-[50%]">
            Explore our successful web and mobile development projects that have helped businesses 
            transform their digital presence and achieve remarkable growth.
          </p>
        </div>
        <Link
          href="/contact"
          className="inline-flex items-center px-6 py-3 bg-yellow-300 text-black rounded-lg font-semibold hover:bg-yellow-200 transition-all duration-300 whitespace-nowrap"
        >
          Start your project
          <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>

      {/* Portfolio Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {portfolioItems.map((item, index) => (
          <motion.div
            key={item.id}
            custom={index + 3}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
            className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-white/10 via-white/5 to-white/10 backdrop-blur-md border border-white/20 hover:bg-gradient-to-br hover:from-white/15 hover:via-white/8 hover:to-white/15 hover:border-white/30 transition-all duration-300 shadow-2xl shadow-black/20"
          >
            <div className="p-4">
              <div className="aspect-[4/3] relative overflow-hidden rounded-lg mb-4">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-contain group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Category Badge */}
                <div className="absolute top-2 left-2">
                  <span className={`px-2 py-1 rounded-sm text-xs font-medium backdrop-blur-sm ${
                    item.category === 'Web Development' 
                      ? 'bg-blue-500/30 text-blue-200 border border-blue-400/50' 
                      : 'bg-green-500/30 text-green-200 border border-green-400/50'
                  }`}>
                    {item.category}
                  </span>
                </div>
              </div>
              
              <div className="text-center py-4">
                <h3 className="text-lg font-semibold text-white group-hover:text-white/90 transition-colors">
                  {item.title}
                </h3>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

    </motion.div>
  );
}
