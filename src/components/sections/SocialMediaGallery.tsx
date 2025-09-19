'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export function SocialMediaGallery() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Posts' },
    { id: 'instagram', label: 'Instagram' },
    { id: 'linkedin', label: 'LinkedIn' },
    { id: 'twitter', label: 'Twitter' },
    { id: 'facebook', label: 'Facebook' }
  ];

  const posts = [
    {
      id: 1,
      platform: 'instagram',
      image: 'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=400&h=400&fit=crop',
      title: 'Dental Practice'
    },
    {
      id: 2,
      platform: 'linkedin',
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=400&fit=crop',
      title: 'Accounting Firm'
    },
    {
      id: 3,
      platform: 'facebook',
      image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&h=400&fit=crop',
      title: 'Construction Company'
    },
    {
      id: 4,
      platform: 'instagram',
      image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=400&fit=crop',
      title: 'Mortgage Broker'
    },
    {
      id: 5,
      platform: 'linkedin',
      image: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=400&h=400&fit=crop',
      title: 'Small Business Owner'
    },
    {
      id: 6,
      platform: 'facebook',
      image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=400&fit=crop',
      title: 'Restaurant'
    },
    {
      id: 7,
      platform: 'instagram',
      image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&h=400&fit=crop',
      title: 'Fitness Studio'
    },
    {
      id: 8,
      platform: 'linkedin',
      image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&h=400&fit=crop',
      title: 'Real Estate Agent'
    },
    {
      id: 9,
      platform: 'facebook',
      image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=400&fit=crop',
      title: 'Law Firm'
    }
  ];

  const filteredPosts = selectedCategory === 'all' 
    ? posts 
    : posts.filter(post => post.platform === selectedCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="text-left mb-12">
          <h2 className="text-3xl font-bold text-white mb-4 font-sans">
            Our Social Media Portfolio
          </h2>
          <p className="text-lg text-white/70 max-w-3xl font-sans">
            Beautifully crafted content that drives engagement and builds communities. See the quality and creativity we bring to every post.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-sm font-medium transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-white text-black'
                  : 'bg-white/10 text-white/70 hover:bg-white/20 hover:text-white border border-white/20'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredPosts.map((post) => (
            <motion.div
              key={post.id}
              variants={itemVariants}
              className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden hover:bg-white/10 hover:border-white/20 transition-all duration-300"
            >
              {/* Post Image */}
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-3 left-3">
                  <span className="px-2 py-1 bg-black/50 backdrop-blur-sm rounded text-white text-xs font-medium">
                    {post.platform.charAt(0).toUpperCase() + post.platform.slice(1)}
                  </span>
                </div>
              </div>

              {/* Post Title */}
              <div className="p-4">
                <h3 className="text-white font-semibold font-sans">
                  {post.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Summary */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-white mb-2 font-sans">
              500+
            </div>
            <div className="text-white/70 font-sans">
              Posts Created
            </div>
          </div>
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-white mb-2 font-sans">
              2.5M+
            </div>
            <div className="text-white/70 font-sans">
              Total Reach
            </div>
          </div>
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-white mb-2 font-sans">
              12.3%
            </div>
            <div className="text-white/70 font-sans">
              Avg. Engagement
            </div>
          </div>
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-white mb-2 font-sans">
              98%
            </div>
            <div className="text-white/70 font-sans">
              Client Satisfaction
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
