import {
  Facebook,
  Instagram,
  Youtube,
  Linkedin,
  Mail,
  MapPin,
  Phone,
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { footerColumns, footerLegalLinks } from '@/config/footer-links';

const data = {
  facebookLink: 'https://www.facebook.com/foxtraai',
  instaLink: 'https://www.instagram.com/foxtra.ai/',
  youtubeLink: 'https://www.youtube.com/@foxtra-ai',
  linkedinLink: 'https://www.linkedin.com/company/foxtra-ai',
  contact: {
    email: 'hello@foxtra.com.au',
    phone: '+61 123 456 789',
    address: 'Sydney, NSW, Australia',
  },
  company: {
    name: 'Foxtra',
    description:
      'Building the future with AI technology. We help businesses transform their digital presence with cutting-edge AI solutions.',
    logo: '/foxtra-logo-white-v2.png',
  },
};

const socialLinks = [
  { icon: Youtube, label: 'YouTube', href: data.youtubeLink },
  { icon: Instagram, label: 'Instagram', href: data.instaLink },
  { icon: Facebook, label: 'Facebook', href: data.facebookLink },
  { icon: Linkedin, label: 'LinkedIn', href: data.linkedinLink },
];

const contactInfo = [
  { icon: Mail, text: data.contact.email },
  { icon: Phone, text: data.contact.phone },
  { icon: MapPin, text: data.contact.address, isAddress: true },
];

/** 6-column grid on lg+ (brand 2 cols + four link groups); sitemap in footer-links.ts */
export default function Footer4Col() {
  return (
    <footer className="bg-secondary dark:bg-secondary/20 mt-16 w-full place-self-end rounded-t-xl">
      <div className="mx-auto max-w-screen-xl px-4 pt-16 pb-6 sm:px-6 lg:px-8 lg:pt-24">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-6 lg:gap-8">
          <div className="col-span-2 flex flex-col lg:col-span-2">
            <div className="text-primary flex justify-center gap-2 sm:justify-start items-center">
              <Link href="/">
                <Image
                  src={data.company.logo || '/placeholder.svg'}
                  alt="Foxtra"
                  width={120}
                  height={32}
                  className="h-8 w-auto object-contain"
                />
              </Link>
            </div>

            <p className="text-foreground/50 mt-6 max-w-md text-center leading-relaxed sm:max-w-xs sm:text-left">
              {data.company.description}
            </p>

            <ul className="mt-8 flex justify-center gap-6 sm:justify-start md:gap-8">
              {socialLinks.map(({ icon: Icon, label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-primary hover:text-primary/80 transition"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="sr-only">{label}</span>
                    <Icon className="size-6" />
                  </Link>
                </li>
              ))}
            </ul>
            <ul className="mt-8 space-y-3 text-sm">
              {contactInfo.map(({ icon: Icon, text, isAddress }) => (
                <li key={text}>
                  <div className="flex items-center justify-center gap-1.5 sm:justify-start">
                    <Icon className="text-primary size-5 shrink-0 shadow-sm" />
                    {isAddress ? (
                      <address className="text-secondary-foreground/70 -mt-0.5 flex-1 not-italic transition">
                        {text}
                      </address>
                    ) : (
                      <span className="text-secondary-foreground/70 flex-1 transition">{text}</span>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <nav className="contents" aria-label="Footer links">
            {footerColumns.map((col) => (
              <div key={col.title} className="text-center sm:text-left">
                <p className="text-lg font-medium">{col.title}</p>
                <ul className="mt-6 space-y-3 text-sm">
                  {col.links.map(({ text, href }) => (
                    <li key={text}>
                      <Link
                        className="text-secondary-foreground/70 transition hover:text-primary"
                        href={href}
                      >
                        {text}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t pt-6 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between">
          <p className="text-secondary-foreground/70 text-sm text-center sm:text-left">
            &copy; {new Date().getFullYear()} {data.company.name}. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-4 sm:justify-end">
            {footerLegalLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-secondary-foreground/60 hover:text-primary text-sm transition"
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
