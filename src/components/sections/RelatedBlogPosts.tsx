'use client';

import { motion } from "framer-motion";
import { ArrowRight, FileText } from "lucide-react";
import Link from "next/link";

interface RelatedBlogPost {
  id: string;
  title: string;
  description: string;
  category: string;
  readTime: string;
}

interface RelatedBlogPostsProps {
  posts: RelatedBlogPost[];
  title?: string;
  subtitle?: string;
  className?: string;
}

export function RelatedBlogPosts({ 
  posts, 
  title = "Related Articles",
  subtitle = "Learn more about this topic from our experts",
  className = ""
}: RelatedBlogPostsProps) {
  const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: i * 0.1,
        ease: [0.25, 0.4, 0.25, 1],
      },
    }),
  };

  return (
    <motion.section
      initial="hidden"
      animate="visible"
      className={`max-w-6xl mx-auto ${className}`}
    >
      <div className="text-left mb-8">
        <motion.div
          custom={0}
          variants={fadeUpVariants}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] mb-4"
        >
          <FileText className="h-3 w-3 text-rose-500/80" />
          <span className="text-sm text-white/60 tracking-wide font-sans">
            Blog
          </span>
        </motion.div>

        <motion.h2 
          custom={1}
          variants={fadeUpVariants}
          className="text-2xl md:text-3xl font-bold text-white mb-2"
        >
          {title}
        </motion.h2>
        <motion.p 
          custom={2}
          variants={fadeUpVariants}
          className="text-white/60"
        >
          {subtitle}
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post, index) => (
          <motion.div
            key={post.id}
            custom={index + 3}
            variants={fadeUpVariants}
            className="group"
          >
            <Link href={`/blog/${post.id}`}>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 h-full">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-medium text-rose-500/80 bg-rose-500/10 px-2 py-1 rounded">
                    {post.category}
                  </span>
                  <span className="text-xs text-white/40">
                    {post.readTime}
                  </span>
                </div>
                
                <h3 className="text-white/90 font-semibold text-lg mb-3 group-hover:text-white transition-colors line-clamp-2">
                  {post.title}
                </h3>
                
                <p className="text-white/60 text-sm leading-relaxed mb-4 line-clamp-3">
                  {post.description}
                </p>
                
                <div className="flex items-center text-rose-500/80 text-sm font-medium group-hover:text-rose-500 transition-colors">
                  Read article
                  <ArrowRight className="ml-1 h-3 w-3 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

      <motion.div
        custom={posts.length + 3}
        variants={fadeUpVariants}
        className="text-center mt-8"
      >
        <Link 
          href="/blog"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 backdrop-blur-sm border border-white/20 text-white hover:bg-white/10 hover:border-white/30 transition-all duration-300 group text-sm"
        >
          View All Articles
          <ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-transform" />
        </Link>
      </motion.div>
    </motion.section>
  );
}
