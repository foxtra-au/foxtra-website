'use client';

import { Instagram, Linkedin, Youtube, Facebook } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { footerColumns, footerLegalLinks } from '@/config/footer-links';

const socialIcons = [
  { icon: <Youtube className="h-5 w-5" />, href: 'https://www.youtube.com/@foxtra-ai' },
  { icon: <Instagram className="h-5 w-5" />, href: 'https://www.instagram.com/foxtra.ai/' },
  { icon: <Facebook className="h-5 w-5" />, href: 'https://www.facebook.com/foxtraai' },
  { icon: <Linkedin className="h-5 w-5" />, href: 'https://www.linkedin.com/company/foxtra-ai' },
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
        <div className="mb-16 overflow-hidden rounded-md border border-white/20 transition-all duration-300 hover:border-white/30">
          <div className="grid items-center gap-8 bg-black p-8 md:grid-cols-2 md:p-12">
            <div>
              <h3 className="mb-4 text-2xl font-bold md:text-3xl font-sans">
                Stay ahead with Foxtra
              </h3>
              <p className="text-white/70 mb-6 font-sans">
                Join thousands of businesses who trust Foxtra for
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
                  alt="Foxtra team"
                  width={320}
                  height={240}
                  className="relative w-80 rounded-xl object-cover"
                />
              </div>
            </div>
          </div>
        </div>
        {/* 6 columns on lg+: brand (2 cols) | Services | Company | Industries | Support */}
        <div className="mb-16 grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-6 lg:gap-x-8 lg:gap-y-8">
          <div className="col-span-2 flex flex-col lg:col-span-2">
            <div className="mb-6 flex items-center justify-center sm:justify-start">
              <Link href="/" className="flex items-center">
                <Image
                  src="/foxtra-logo-white-v2.png"
                  alt="Foxtra"
                  width={140}
                  height={40}
                  className="h-8 w-auto object-contain"
                />
              </Link>
            </div>
            <p className="text-white/60 mb-6 text-center font-sans text-sm leading-relaxed sm:max-w-md sm:text-left">
              Empowering businesses with reliable, scalable, and innovative AI solutions for
              digital transformation.
            </p>
            <div className="flex flex-wrap justify-center gap-3 sm:justify-start">
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

          <nav className="contents" aria-label="Footer">
            {footerColumns.map((col) => (
              <div key={col.title} className="text-center sm:text-left">
                <h4 className="mb-4 text-sm font-semibold uppercase tracking-wide text-white/90 font-sans">
                  {col.title}
                </h4>
                <ul className="space-y-2.5">
                  {col.links.map((link) => (
                    <li key={`${col.title}-${link.href}`}>
                      <Link
                        href={link.href}
                        className="text-white/55 hover:text-white text-sm transition font-sans leading-snug"
                      >
                        {link.text}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>
        <div className="border-white/10 flex flex-col items-center justify-between border-t pt-8 md:flex-row">
          <p className="text-white/60 mb-4 text-sm md:mb-0 font-sans">
            © {new Date().getFullYear()} Foxtra. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            {footerLegalLinks.map((link) => (
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
