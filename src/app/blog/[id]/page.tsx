'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Tag, Clock, Share2, MessageCircle, Mic, Search, Code, Database, Cloud } from 'lucide-react';
import { articles } from '@/data/articles-data';
import { ArticleCard } from '@/components/ui/ArticleCard';
import Link from 'next/link';

interface BlogDetailProps {
  params: {
    id: string;
  };
}

export default function BlogDetail({ params }: BlogDetailProps) {
  const [article, setArticle] = useState<any>(null);
  const [relatedArticles, setRelatedArticles] = useState<any[]>([]);

  useEffect(() => {
    const foundArticle = articles.find(a => a.id === params.id);
    setArticle(foundArticle);

    if (foundArticle) {
      // Get 3 related articles from the same category
      const related = articles
        .filter(a => a.category === foundArticle.category && a.id !== foundArticle.id)
        .slice(0, 3);
      setRelatedArticles(related);
    }
  }, [params.id]);

  if (!article) {
    return (
      <div className="min-h-screen bg-[#030303] flex items-center justify-center">
        <div className="text-white text-xl">Article not found</div>
      </div>
    );
  }

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
    <div className="relative w-full overflow-hidden bg-[#030303] min-h-screen">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/[0.05] via-transparent to-rose-500/[0.05] blur-3xl" />

      <div className="relative z-10">
        <div className="container mx-auto px-4 pt-32 pb-16 max-w-6xl">
          {/* Back Navigation */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <Link 
              href="/blog"
              className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors duration-300"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Link>
          </motion.div>

          {/* Main Content Layout - 70% Blog + 30% Services */}
          <div className="grid grid-cols-1 lg:grid-cols-10 gap-12">
            {/* Blog Content - 70% (7/10 columns) */}
            <div className="lg:col-span-7">
              {/* Article Header */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="mb-12"
              >
            {/* Category and Date */}
            <div className="flex items-center gap-4 mb-6">
              <span className="rounded-sm bg-white/10 backdrop-blur-sm border border-white/20 px-3 py-1 text-sm font-medium text-white">
                {article.tag}
              </span>
              <div className="flex items-center gap-2 text-white/60 text-sm">
                <Calendar className="w-4 h-4" />
                <span>{article.date.month} {article.date.day}, 2024</span>
              </div>
              <div className="flex items-center gap-2 text-white/60 text-sm">
                <Clock className="w-4 h-4" />
                <span>5 min read</span>
              </div>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 font-sans leading-tight">
              {article.title}
            </h1>

            {/* Description */}
            <p className="text-xl text-white/70 font-sans leading-relaxed">
              {article.description}
            </p>
          </motion.div>

          {/* Featured Image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-12"
          >
            <div className="relative aspect-[16/9] overflow-hidden rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
              <img
                src={article.imageUrl}
                alt={article.imageAlt}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
          </motion.div>

          {/* Article Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="prose prose-lg prose-invert max-w-none mb-16"
          >
            <div className="text-white/80 font-sans leading-relaxed space-y-6">
              <p>
                In today's rapidly evolving digital landscape, businesses are constantly seeking innovative ways to enhance customer experience and streamline operations. The emergence of AI-powered solutions has revolutionized how companies interact with their customers, providing unprecedented levels of efficiency and personalization.
              </p>
              
              <h2 className="text-2xl font-bold text-white mt-8 mb-4">The Current Challenge</h2>
              <p>
                Traditional customer service methods often struggle with scalability, consistency, and availability. Businesses face challenges in providing 24/7 support, handling multiple languages, and maintaining consistent service quality across all touchpoints.
              </p>
              
              <h2 className="text-2xl font-bold text-white mt-8 mb-4">The AI Solution</h2>
              <p>
                AI-powered agents represent a paradigm shift in customer service delivery. These intelligent systems can understand context, learn from interactions, and provide personalized responses that feel natural and helpful. They bridge the gap between automated efficiency and human-like interaction.
              </p>
              
              <h2 className="text-2xl font-bold text-white mt-8 mb-4">Key Benefits</h2>
              <ul className="list-disc list-inside space-y-2 text-white/70">
                <li>24/7 availability without human intervention</li>
                <li>Consistent service quality across all interactions</li>
                <li>Scalability to handle thousands of simultaneous conversations</li>
                <li>Multi-language support for global reach</li>
                <li>Integration with existing business systems</li>
                <li>Continuous learning and improvement</li>
              </ul>
              
              <h2 className="text-2xl font-bold text-white mt-8 mb-4">Implementation Strategy</h2>
              <p>
                Successful implementation requires careful planning, proper training data, and ongoing optimization. The key is to start with specific use cases and gradually expand the AI agent's capabilities based on real-world performance and user feedback.
              </p>
              
              <p>
                By leveraging advanced natural language processing and machine learning algorithms, modern AI agents can understand context, maintain conversation flow, and even handle complex queries that previously required human intervention.
              </p>
            </div>
          </motion.div>

          {/* Share Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="border-t border-white/10 pt-8 mb-16"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-white/60">
                <Tag className="w-4 h-4" />
                <span className="text-sm">Category: {article.category}</span>
              </div>
              <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 backdrop-blur-sm border border-white/20 text-white hover:bg-white/10 transition-all duration-300">
                <Share2 className="w-4 h-4" />
                Share Article
              </button>
            </div>
          </motion.div>

            </div>

            {/* Services Sidebar - 30% (3/10 columns) */}
            <div className="lg:col-span-3">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="sticky top-32"
              >
                <h3 className="text-xl font-bold text-white mb-6 font-sans">Our Services</h3>
                <div className="space-y-4">
                  <Link href="/services/ai-chat-agent" className="block">
                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-4 hover:bg-white/10 transition-all duration-300 group">
                      <div className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-8 h-8 bg-white/10 backdrop-blur-sm border border-white/20 rounded-md flex items-center justify-center group-hover:bg-yellow-500 group-hover:border-yellow-400 transition-all duration-300">
                          <MessageCircle className="w-4 h-4 text-white group-hover:text-black transition-colors duration-300" />
                        </div>
                        <div className="flex-1">
                          <h4 className="text-white font-medium mb-1 group-hover:text-yellow-500 transition-colors">AI Chat Agent</h4>
                          <p className="text-white/60 text-sm">24/7 intelligent chat support</p>
                        </div>
                      </div>
                    </div>
                  </Link>
                  
                  <Link href="/services/ai-voice-agent" className="block">
                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-4 hover:bg-white/10 transition-all duration-300 group">
                      <div className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-8 h-8 bg-white/10 backdrop-blur-sm border border-white/20 rounded-md flex items-center justify-center group-hover:bg-yellow-500 group-hover:border-yellow-400 transition-all duration-300">
                          <Mic className="w-4 h-4 text-white group-hover:text-black transition-colors duration-300" />
                        </div>
                        <div className="flex-1">
                          <h4 className="text-white font-medium mb-1 group-hover:text-yellow-500 transition-colors">AI Voice Agent</h4>
                          <p className="text-white/60 text-sm">Natural voice conversations</p>
                        </div>
                      </div>
                    </div>
                  </Link>
                  
                  <Link href="/services/ai-seo" className="block">
                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-4 hover:bg-white/10 transition-all duration-300 group">
                      <div className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-8 h-8 bg-white/10 backdrop-blur-sm border border-white/20 rounded-md flex items-center justify-center group-hover:bg-yellow-500 group-hover:border-yellow-400 transition-all duration-300">
                          <Search className="w-4 h-4 text-white group-hover:text-black transition-colors duration-300" />
                        </div>
                        <div className="flex-1">
                          <h4 className="text-white font-medium mb-1 group-hover:text-yellow-500 transition-colors">AI SEO</h4>
                          <p className="text-white/60 text-sm">Technical SEO optimization</p>
                        </div>
                      </div>
                    </div>
                  </Link>
                  
                  <Link href="/services/custom-development" className="block">
                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-4 hover:bg-white/10 transition-all duration-300 group">
                      <div className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-8 h-8 bg-white/10 backdrop-blur-sm border border-white/20 rounded-md flex items-center justify-center group-hover:bg-yellow-500 group-hover:border-yellow-400 transition-all duration-300">
                          <Code className="w-4 h-4 text-white group-hover:text-black transition-colors duration-300" />
                        </div>
                        <div className="flex-1">
                          <h4 className="text-white font-medium mb-1 group-hover:text-yellow-500 transition-colors">Custom Development</h4>
                          <p className="text-white/60 text-sm">Tailored software solutions</p>
                        </div>
                      </div>
                    </div>
                  </Link>
                  
                  <Link href="/services/api-development" className="block">
                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-4 hover:bg-white/10 transition-all duration-300 group">
                      <div className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-8 h-8 bg-white/10 backdrop-blur-sm border border-white/20 rounded-md flex items-center justify-center group-hover:bg-yellow-500 group-hover:border-yellow-400 transition-all duration-300">
                          <Database className="w-4 h-4 text-white group-hover:text-black transition-colors duration-300" />
                        </div>
                        <div className="flex-1">
                          <h4 className="text-white font-medium mb-1 group-hover:text-yellow-500 transition-colors">API Development</h4>
                          <p className="text-white/60 text-sm">RESTful & GraphQL APIs</p>
                        </div>
                      </div>
                    </div>
                  </Link>
                  
                  <Link href="/services/cloud-management" className="block">
                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-4 hover:bg-white/10 transition-all duration-300 group">
                      <div className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-8 h-8 bg-white/10 backdrop-blur-sm border border-white/20 rounded-md flex items-center justify-center group-hover:bg-yellow-500 group-hover:border-yellow-400 transition-all duration-300">
                          <Cloud className="w-4 h-4 text-white group-hover:text-black transition-colors duration-300" />
                        </div>
                        <div className="flex-1">
                          <h4 className="text-white font-medium mb-1 group-hover:text-yellow-500 transition-colors">Cloud Management</h4>
                          <p className="text-white/60 text-sm">Multi-cloud architecture</p>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
                
                {/* Contact CTA */}
                <div className="mt-8 p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg">
                  <h4 className="text-white font-bold mb-3 font-sans">Need Help?</h4>
                  <p className="text-white/60 text-sm mb-4">Get personalized consultation for your project</p>
                  <Link href="/contact">
                    <button className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-medium py-2 px-4 rounded-lg transition-colors duration-300">
                      Contact Us
                    </button>
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Related Articles - Full Width */}
          {relatedArticles.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="mt-16"
            >
              <h2 className="text-3xl font-bold text-white mb-8 font-sans">Related Articles</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {relatedArticles.map((relatedArticle, index) => (
                  <motion.div
                    key={relatedArticle.id}
                    custom={index}
                    variants={fadeUpVariants}
                    initial="hidden"
                    animate="visible"
                    className="h-[400px]"
                  >
                    <Link href={`/blog/${relatedArticle.id}`}>
                      <ArticleCard
                        tag={relatedArticle.tag}
                        date={relatedArticle.date}
                        title={relatedArticle.title}
                        description={relatedArticle.description}
                        imageUrl={relatedArticle.imageUrl}
                        imageAlt={relatedArticle.imageAlt}
                        location={relatedArticle.location}
                        showLocation={false}
                      />
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}
