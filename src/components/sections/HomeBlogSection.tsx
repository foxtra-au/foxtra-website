'use client';

import { motion } from "framer-motion";
import { ArrowRight, FileText, TrendingUp, Users } from "lucide-react";
import Link from "next/link";

export function HomeBlogSection() {
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

  const featuredArticles = [
    {
      id: "1",
      title: "Revolutionizing Customer Service with AI Chat Agents",
      description: "How AI-powered chat agents are transforming customer interactions and boosting satisfaction rates.",
      category: "AI Agents",
      readTime: "5 min read"
    },
    {
      id: "2", 
      title: "24/7 Customer Support: The AI Advantage",
      description: "Implementing round-the-clock customer support with intelligent AI chat agents.",
      category: "Automation",
      readTime: "4 min read"
    },
    {
      id: "9",
      title: "The Future of Voice-Powered Customer Service",
      description: "Exploring how AI voice agents are reshaping phone-based customer interactions.",
      category: "Voice Technology",
      readTime: "6 min read"
    }
  ];

  return (
    <motion.section
      custom={4}
      variants={fadeUpVariants}
      initial="hidden"
      animate="visible"
      className="max-w-6xl mx-auto mt-20"
    >
      <div className="text-left mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] mb-6"
        >
          <FileText className="h-3 w-3 text-rose-500/80" />
          <span className="text-sm text-white/60 tracking-wide font-sans">
            Latest Insights
          </span>
        </motion.div>

        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          AI Automation Insights & Best Practices
        </h2>
        <p className="text-white/60 text-lg max-w-3xl">
          Stay ahead with the latest trends, strategies, and innovations in AI automation. 
          Learn from our experts and discover how to transform your business with intelligent solutions.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {featuredArticles.map((article, index) => (
          <motion.div
            key={article.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 + index * 0.1 }}
            className="group"
          >
            <Link href={`/blog/${article.id}`}>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 h-full">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-medium text-rose-500/80 bg-rose-500/10 px-2 py-1 rounded">
                    {article.category}
                  </span>
                  <span className="text-xs text-white/40">
                    {article.readTime}
                  </span>
                </div>
                
                <h3 className="text-white/90 font-semibold text-lg mb-3 group-hover:text-white transition-colors">
                  {article.title}
                </h3>
                
                <p className="text-white/60 text-sm leading-relaxed mb-4">
                  {article.description}
                </p>
                
                <div className="flex items-center text-rose-500/80 text-sm font-medium group-hover:text-rose-500 transition-colors">
                  Read more
                  <ArrowRight className="ml-1 h-3 w-3 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2 }}
        className="text-center"
      >
        <Link 
          href="/blog"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white/5 backdrop-blur-sm border border-white/20 text-white hover:bg-white/10 hover:border-white/30 transition-all duration-300 group"
        >
          <TrendingUp className="h-4 w-4" />
          View All Articles
          <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </motion.div>
    </motion.section>
  );
}
