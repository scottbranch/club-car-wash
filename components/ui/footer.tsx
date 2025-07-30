'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Facebook, Instagram, Twitter, Linkedin, Youtube } from 'lucide-react';

export interface FooterColumn {
  title: string;
  links: {
    label: string;
    href: string;
  }[];
}

export interface FooterProps {
  logo?: {
    src: string;
    alt: string;
    width?: number;
    height?: number;
  };
  newsletterTitle?: string;
  newsletterDescription?: string;
  columns?: FooterColumn[];
  socialLinks?: {
    facebook?: string;
    instagram?: string;
    twitter?: string;
    linkedin?: string;
    youtube?: string;
  };
  copyrightText?: string;
  legalLinks?: {
    label: string;
    href: string;
  }[];
  onNewsletterSubmit?: (email: string) => void;
  className?: string;
}

const defaultColumns: FooterColumn[] = [
  {
    title: 'Services',
    links: [
      { label: 'Automatic Wash', href: '/services/automatic' },
      { label: 'Hand Wash', href: '/services/hand-wash' },
      { label: 'Interior Detailing', href: '/services/interior' },
      { label: 'Exterior Detailing', href: '/services/exterior' },
      { label: 'Wax & Polish', href: '/services/wax' },
    ],
  },
  {
    title: 'Locations',
    links: [
      { label: 'Find a Location', href: '/locations' },
      { label: 'Downtown', href: '/locations/downtown' },
      { label: 'Westside', href: '/locations/westside' },
      { label: 'Eastside', href: '/locations/eastside' },
      { label: 'Northside', href: '/locations/northside' },
    ],
  },
  {
    title: 'Membership',
    links: [
      { label: 'Unlimited Plans', href: '/membership/unlimited' },
      { label: 'Premium Wash', href: '/membership/premium' },
      { label: 'Basic Wash', href: '/membership/basic' },
      { label: 'Gift Cards', href: '/membership/gift-cards' },
      { label: 'Corporate Plans', href: '/membership/corporate' },
    ],
  },
  {
    title: 'Support',
    links: [
      { label: 'Contact Us', href: '/contact' },
      { label: 'FAQ', href: '/faq' },
      { label: 'Help Center', href: '/help' },
      { label: 'Feedback', href: '/feedback' },
      { label: 'Report Issue', href: '/report' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About Us', href: '/about' },
      { label: 'Careers', href: '/careers' },
      { label: 'Press', href: '/press' },
      { label: 'Sustainability', href: '/sustainability' },
      { label: 'Community', href: '/community' },
    ],
  },
];

const defaultLegalLinks = [
  { label: 'Privacy Policy', href: '/privacy' },
  { label: 'Terms of Service', href: '/terms' },
  { label: 'Cookies Settings', href: '/cookies' },
];

const Footer = React.forwardRef<HTMLElement, FooterProps>(
  (
    {
      logo = {
        src: '/images/company-logo.svg',
        alt: 'Club Carwash',
        width: 120,
        height: 40,
      },
      newsletterTitle = 'Join our newsletter',
      newsletterDescription = 'Stay updated with our latest offers and news!',
      columns = defaultColumns,
      socialLinks = {
        facebook: 'https://facebook.com',
        instagram: 'https://instagram.com',
        twitter: 'https://twitter.com',
        linkedin: 'https://linkedin.com',
        youtube: 'https://youtube.com',
      },
      copyrightText = '© 2025 Club Carwash. All rights reserved.',
      legalLinks = defaultLegalLinks,
      onNewsletterSubmit,
      className = '',
      ...props
    },
    ref
  ) => {
    const [email, setEmail] = React.useState('');

    const handleNewsletterSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      if (onNewsletterSubmit) {
        onNewsletterSubmit(email);
      } else {
        console.log('Newsletter signup:', email);
      }
      setEmail('');
    };

    return (
      <footer ref={ref} className={`bg-gray-100 ${className}`} {...props}>
        {/* Newsletter Section */}
        <div className="border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
              <div className="lg:max-w-md">
                <p className="text-lg font-semibold text-text-primary">
                  {newsletterTitle}
                </p>
                <p className="text-base mb-6 lg:mb-0 text-text-secondary">
                  {newsletterDescription}
                </p>
              </div>

              <div className="lg:max-w-md lg:flex-shrink-0">
                <form
                  onSubmit={handleNewsletterSubmit}
                  className="flex flex-col sm:flex-row gap-3 mb-2"
                >
                  <div className="flex-1">
                    <Input
                      type="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="w-full sm:w-[370px] h-10 px-3 rounded-full border-gray-300 bg-transparent text-base placeholder:text-gray-500 focus:border-gray-400 focus:ring-1 focus:ring-gray-400"
                    />
                  </div>
                  <Button
                    type="submit"
                    variant="secondary"
                    showIcon={false}
                    className="h-10 px-8 rounded-full bg-transparent border-gray-300 text-text-primary hover:bg-gray-50 font-medium whitespace-nowrap"
                  >
                    Subscribe
                  </Button>
                </form>

                <p className="text-xs pl-1">
                  By subscribing you agree to our{' '}
                  <Link
                    href="/privacy"
                    className="underline hover:no-underline"
                  >
                    Privacy Policy
                  </Link>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-6 gap-8">
            {/* Logo */}
            <div className="lg:col-span-1">
              <Link href="/" className="inline-block">
                <Image
                  src={logo.src || '/placeholder.svg'}
                  alt={logo.alt}
                  width={logo.width}
                  height={logo.height}
                  className="h-10 w-auto"
                  priority
                />
              </Link>
            </div>

            {/* Navigation Columns */}
            {columns.map((column, index) => (
              <div key={column.title} className="lg:col-span-1">
                <p className="text-base font-semibold mb-4 text-text-primary">
                  {column.title}
                </p>
                <ul className="space-y-3">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-sm transition-colors duration-200 hover:text-red-300 text-text-secondary"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              {/* Copyright and Legal Links */}
              <div className="flex flex-col sm:flex-row items-center gap-4 text-xs">
                <span>{copyrightText}</span>
                <div className="flex items-center gap-4">
                  {legalLinks.map((link, index) => (
                    <React.Fragment key={link.label}>
                      <Link
                        href={link.href}
                        className="transition-colors duration-200 hover:text-text-secondary underline"
                      >
                        {link.label}
                      </Link>
                      {index < legalLinks.length - 1 && (
                        <span className="text-gray-300">|</span>
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>

              {/* Social Media Icons */}
              <div className="flex items-center gap-4">
                {socialLinks.facebook && (
                  <Link
                    href={socialLinks.facebook}
                    className="text-text-muted hover:text-red-300 transition-colors duration-200"
                    aria-label="Facebook"
                  >
                    <Image
                      src="/icons/social/Facebook.svg"
                      alt="Facebook"
                      width={20}
                      height={20}
                    />
                  </Link>
                )}
                {socialLinks.instagram && (
                  <Link
                    href={socialLinks.instagram}
                    className="text-text-muted hover:text-red-300 transition-colors duration-200"
                    aria-label="Instagram"
                  >
                    <Image
                      src="/icons/social/Instagram.svg"
                      alt="Instagram"
                      width={20}
                      height={20}
                    />
                  </Link>
                )}
                {socialLinks.twitter && (
                  <Link
                    href={socialLinks.twitter}
                    className="text-text-muted hover:text-red-300 transition-colors duration-200"
                    aria-label="Twitter"
                  >
                    <Image
                      src="/icons/social/X.svg"
                      alt="Twitter"
                      width={20}
                      height={20}
                    />
                  </Link>
                )}
                {socialLinks.linkedin && (
                  <Link
                    href={socialLinks.linkedin}
                    className="text-text-muted hover:text-red-300 transition-colors duration-200"
                    aria-label="LinkedIn"
                  >
                    <Image
                      src="/icons/social/LinkedIn.svg"
                      alt="LinkedIn"
                      width={20}
                      height={20}
                    />
                  </Link>
                )}
                {socialLinks.youtube && (
                  <Link
                    href={socialLinks.youtube}
                    className="text-text-muted hover:text-red-300 transition-colors duration-200"
                    aria-label="YouTube"
                  >
                    <Image
                      src="/icons/social/Youtube.svg"
                      alt="YouTube"
                      width={20}
                      height={20}
                    />
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
);

Footer.displayName = 'Footer';

export { Footer };
