'use client';

import { Instagram, Linkedin, Twitter, Youtube } from 'lucide-react';
import Link from 'next/link';

const footerColumns = [
  {
    title: 'Solutions',
    links: [
      { text: 'AI Chat Agents', href: '/services/ai-chat-agent' },
      { text: 'AI Voice Agents', href: '/services/ai-voice-agent' },
      { text: 'AI Websites', href: '/services/ai-websites' },
      { text: 'Custom Development', href: '/services/custom-development' },
      { text: 'Mobile Apps', href: '/services/mobile-app-development' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { text: 'Case Studies', href: '/case-studies' },
      { text: 'Blog', href: '/blog' },
      { text: 'Documentation', href: '/resources/docs' },
      { text: 'Tutorials', href: '/resources/tutorials' },
      { text: 'Community', href: '/contact' },
    ],
  },
  {
    title: 'Company',
    links: [
      { text: 'About Us', href: '/about' },
      { text: 'Our Story', href: '/company/our-story' },
      { text: 'Careers', href: '/company/careers' },
      { text: 'Contact', href: '/contact' },
      { text: 'Partners', href: '/contact' },
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
    <footer className="bg-background text-foreground relative w-full pt-20 pb-10">
      <div className="pointer-events-none absolute top-0 left-0 z-0 h-full w-full overflow-hidden">
        <div className="bg-primary absolute top-1/3 left-1/4 h-64 w-64 rounded-full opacity-10 blur-3xl" />
        <div className="bg-primary absolute right-1/4 bottom-1/4 h-80 w-80 rounded-full opacity-10 blur-3xl" />
      </div>
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="glass-effect mb-16 rounded-2xl p-8 md:p-12">
          <div className="grid items-center gap-8 md:grid-cols-2">
            <div>
              <h3 className="mb-4 text-2xl font-bold md:text-3xl">
                Stay ahead with Foxtra AI
              </h3>
              <p className="text-foreground/70 mb-6">
                Join thousands of businesses who trust Foxtra AI for
                innovative AI solutions and digital transformation.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="border-foreground/20 bg-background focus:ring-primary rounded-lg border px-4 py-3 focus:ring-2 focus:outline-none"
                />
                <button className="bg-primary text-primary-foreground shadow-primary/20 hover:shadow-primary/30 rounded-lg px-6 py-3 font-medium shadow-lg transition">
                  Subscribe Now
                </button>
              </div>
            </div>
            <div className="hidden justify-end md:flex">
              <div className="relative">
                <div className="bg-primary/20 absolute inset-0 rotate-6 rounded-xl" />
                <img
                  src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=320&h=240&q=80"
                  alt="Foxtra AI team"
                  className="relative w-80 rounded-xl object-cover"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="mb-16 grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-5">
          <div className="col-span-2 lg:col-span-1">
            <div className="mb-6 flex items-center space-x-2">
              <div className="bg-primary flex h-10 w-10 items-center justify-center rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-primary-foreground h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <span className="text-xl font-bold">Foxtra AI</span>
            </div>
            <p className="text-foreground/60 mb-6">
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
                  className="glass-effect hover:bg-primary/10 flex h-10 w-10 items-center justify-center rounded-full transition"
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>
          {footerColumns.map((col) => (
            <div key={col.title}>
              <h4 className="mb-4 text-lg font-semibold">{col.title}</h4>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.text}>
                    <Link
                      href={link.href}
                      className="text-foreground/60 hover:text-foreground transition"
                    >
                      {link.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-foreground/10 flex flex-col items-center justify-between border-t pt-8 md:flex-row">
          <p className="text-foreground/60 mb-4 text-sm md:mb-0">
            © 2025 Foxtra AI. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            {legalLinks.map((link) => (
              <Link
                key={link.text}
                href={link.href}
                className="text-foreground/60 hover:text-foreground text-sm"
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
