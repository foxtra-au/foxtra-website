'use client';

import { Instagram, Linkedin, Twitter, Youtube } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const footerColumns = [
  {
    title: 'AI Agents',
    links: [
      { text: 'AI Chat Agent', href: '/services/ai-chat-agent' },
      { text: 'AI Voice Agent', href: '/services/ai-voice-agent' },
      { text: 'Automations', href: '/services/automations' },
    ],
  },
  {
    title: 'Development',
    links: [
      { text: 'Custom Development', href: '/services/custom-development' },
      { text: 'Mobile App Development', href: '/services/mobile-app-development' },
      { text: 'AI Websites', href: '/services/ai-websites' },
      { text: 'Pricing', href: '/pricing' },
    ],
  },
  {
    title: 'Marketing',
    links: [
      { text: 'AI SEO', href: '/services/ai-seo' },
      { text: 'Google Ads', href: '/services/google-ads' },
      { text: 'Social Media Management', href: '/services/social-media-management' },
      { text: 'Video Marketing', href: '/services/video-marketing' },
    ],
  },
  {
    title: 'Company',
    links: [
      { text: 'Our Story', href: '/company/our-story' },
      { text: 'Careers', href: '/company/careers' },
      { text: 'Blog', href: '/blog' },
      { text: 'Contact', href: '/contact' },
    ],
  },
];

const legalLinks = [
  { text: 'Terms of Service', href: '/terms' },
  { text: 'Privacy Policy', href: '/privacy' },
  { text: 'Cookie Settings', href: '/cookies' },
  { text: 'Accessibility', href: '/accessibility' },
];

const socialIcons = [
  { icon: <Instagram className="h-5 w-5" />, href: 'https://instagram.com/foxtraai' },
  { icon: <Twitter className="h-5 w-5" />, href: 'https://twitter.com/foxtraai' },
  { icon: <Linkedin className="h-5 w-5" />, href: 'https://linkedin.com/company/foxtra-ai' },
  { icon: <Youtube className="h-5 w-5" />, href: 'https://youtube.com/@foxtraai' },
];

export default function FooterNewsletter() {
  return (
    <footer className="relative w-full overflow-hidden bg-[#030303] text-white pt-20 pb-10">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/[0.05] via-transparent to-rose-500/[0.05] blur-3xl" />
      
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-[-10%] md:left-[-5%] top-[15%] md:top-[20%] opacity-30">
          <div className="relative w-[600px] h-[140px]">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r to-transparent from-indigo-500/[0.15] backdrop-blur-[2px] border-2 border-white/[0.15] shadow-[0_8px_32px_0_rgba(255,255,255,0.1)] after:absolute after:inset-0 after:rounded-full after:bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.2),transparent_70%)]" />
          </div>
        </div>
        <div className="absolute right-[-5%] md:right-[0%] top-[70%] md:top-[75%] opacity-30">
          <div className="relative w-[500px] h-[120px]">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r to-transparent from-rose-500/[0.15] backdrop-blur-[2px] border-2 border-white/[0.15] shadow-[0_8px_32px_0_rgba(255,255,255,0.1)] after:absolute after:inset-0 after:rounded-full after:bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.2),transparent_70%)]" />
          </div>
        </div>
        <div className="absolute left-[5%] md:left-[10%] bottom-[5%] md:bottom-[10%] opacity-30">
          <div className="relative w-[300px] h-[80px]">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r to-transparent from-violet-500/[0.15] backdrop-blur-[2px] border-2 border-white/[0.15] shadow-[0_8px_32px_0_rgba(255,255,255,0.1)] after:absolute after:inset-0 after:rounded-full after:bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.2),transparent_70%)]" />
          </div>
        </div>
        <div className="absolute right-[15%] md:right-[20%] top-[10%] md:top-[15%] opacity-30">
          <div className="relative w-[200px] h-[60px]">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r to-transparent from-amber-500/[0.15] backdrop-blur-[2px] border-2 border-white/[0.15] shadow-[0_8px_32px_0_rgba(255,255,255,0.1)] after:absolute after:inset-0 after:rounded-full after:bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.2),transparent_70%)]" />
          </div>
        </div>
      </div>
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="glass-effect mb-16 rounded-2xl p-8 md:p-12">
          <div className="grid items-center gap-8 md:grid-cols-2">
            <div>
              <h3 className="mb-4 text-2xl font-bold md:text-3xl font-sans">
                Stay ahead with Foxtra AI
              </h3>
              <p className="text-white/70 mb-6 font-sans">
                Join thousands of businesses who trust Foxtra AI for
                innovative AI solutions and digital transformation.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="border-white/20 bg-white/10 backdrop-blur-sm focus:ring-rose-500 rounded-lg border px-4 py-3 focus:ring-2 focus:outline-none text-white placeholder-white/50 font-sans"
                />
                <button className="bg-rose-600 hover:bg-rose-700 text-white shadow-lg hover:shadow-rose-500/30 rounded-lg px-6 py-3 font-medium transition font-sans">
                  Subscribe Now
                </button>
              </div>
            </div>
            <div className="hidden justify-end md:flex">
              <div className="relative">
                <div className="bg-primary/20 absolute inset-0 rotate-6 rounded-xl" />
                <Image
                  src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=320&h=240&q=80"
                  alt="Foxtra AI team"
                  width={320}
                  height={240}
                  className="relative w-80 rounded-xl object-cover"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="mb-16 grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-5">
          <div className="col-span-2 md:col-span-1 lg:col-span-1">
            <div className="mb-6 flex items-center space-x-2">
              <Link href="/" className="flex items-center space-x-1">
                <span className="text-2xl font-bold text-white drop-shadow-lg font-sans">
                  Foxtra <span className="text-rose-600">•</span>
                </span>
              </Link>
            </div>
            <p className="text-white/60 mb-6 font-sans">
              Empowering businesses with reliable, scalable, and innovative
              AI solutions for digital transformation.
            </p>
            <div className="flex space-x-4">
              {socialIcons.map((item, i) => (
                <a
                  key={i}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-effect hover:bg-white/10 flex h-10 w-10 items-center justify-center rounded-lg transition"
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>
          {footerColumns.map((col) => (
            <div key={col.title}>
              <h4 className="mb-4 text-lg font-semibold font-sans">{col.title}</h4>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.text}>
                    <Link
                      href={link.href}
                      className="text-white/60 hover:text-white transition font-sans"
                    >
                      {link.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-white/10 flex flex-col items-center justify-between border-t pt-8 md:flex-row">
          <p className="text-white/60 mb-4 text-sm md:mb-0 font-sans">
            © 2025 Foxtra AI. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            {legalLinks.map((link) => (
              <Link
                key={link.text}
                href={link.href}
                className="text-white/60 hover:text-white text-sm font-sans"
              >
                {link.text}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
