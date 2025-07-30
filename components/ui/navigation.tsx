'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { ChevronDown, Menu, X } from 'lucide-react';
import Image from 'next/image';

export interface NavigationItem {
  label: string;
  href: string;
  hasDropdown?: boolean;
  dropdownItems?: { label: string; href: string }[];
}

export interface NavigationProps {
  logo?: {
    src: string;
    alt: string;
    width?: number;
    height?: number;
  };
  navigationItems?: NavigationItem[];
  joinButtonText?: string;
  joinButtonHref?: string;
  joinButtonOnClick?: () => void;
  signUpButtonText?: string;
  signUpButtonHref?: string;
  signUpButtonOnClick?: () => void;
  className?: string;
}

const defaultNavigationItems: NavigationItem[] = [
  { label: 'Services', href: '/services' },
  { label: 'Locations', href: '/locations' },
  { label: 'Pricing', href: '/pricing' },
  {
    label: 'More Info',
    href: '/more-info',
    hasDropdown: true,
    dropdownItems: [
      { label: 'About Us', href: '/about' },
      { label: 'FAQ', href: '/faq' },
      { label: 'Contact', href: '/contact' },
      { label: 'Blog', href: '/blog' },
    ],
  },
];

const Navigation = React.forwardRef<HTMLElement, NavigationProps>(
  (
    {
      logo = {
        src: '/images/company-logo.svg',
        alt: 'Club Carwash',
        width: 120,
        height: 40,
      },
      navigationItems = defaultNavigationItems,
      joinButtonText = 'Join',
      joinButtonHref = '/join',
      joinButtonOnClick,
      signUpButtonText = 'Sign Up',
      signUpButtonHref = '/signup',
      signUpButtonOnClick,
      className = '',
      ...props
    },
    ref
  ) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
    const [activeDropdown, setActiveDropdown] = React.useState<string | null>(
      null
    );
    const pathname = usePathname();

    const handleJoinClick = () => {
      if (joinButtonOnClick) {
        joinButtonOnClick();
      } else if (joinButtonHref) {
        window.location.href = joinButtonHref;
      }
    };

    const handleSignUpClick = () => {
      if (signUpButtonOnClick) {
        signUpButtonOnClick();
      } else if (signUpButtonHref) {
        window.location.href = signUpButtonHref;
      }
    };

    const toggleDropdown = (label: string) => {
      setActiveDropdown(activeDropdown === label ? null : label);
    };

    const isActivePage = (href: string) => {
      return pathname === href;
    };

    return (
      <nav
        ref={ref}
        className={`sticky top-0 z-50 w-full border-b ${className} bg-white border-gray-200`}
        {...props}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/" className="flex items-center">
                <Image
                  src={logo.src || '/placeholder.svg'}
                  alt={logo.alt}
                  width={logo.width}
                  height={logo.height}
                  className="h-8 w-auto"
                  priority
                />
              </Link>
            </div>

            <div className="flex">
              {/* Desktop Navigation */}
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-8">
                  {navigationItems.map((item) => (
                    <div key={item.label} className="relative">
                      {item.hasDropdown ? (
                        <button
                          className={`flex items-center gap-1 px-3 py-2 text-sm font-medium transition-colors duration-200 hover:opacity-70 ${
                            isActivePage(item.href)
                              ? 'text-teal-500'
                              : 'text-text-primary'
                          }`}
                          onClick={() => toggleDropdown(item.label)}
                        >
                          {item.label}
                          <ChevronDown
                            size={14}
                            className={`transition-transform duration-200 ${
                              activeDropdown === item.label ? 'rotate-180' : ''
                            }`}
                          />
                        </button>
                      ) : (
                        <Link
                          href={item.href}
                          className={`px-3 py-2 text-sm font-medium transition-colors duration-200 hover:opacity-70 ${
                            isActivePage(item.href)
                              ? 'text-teal-500'
                              : 'text-text-primary'
                          }`}
                        >
                          {item.label}
                        </Link>
                      )}

                      {/* Dropdown Menu */}
                      {item.hasDropdown &&
                        activeDropdown === item.label &&
                        item.dropdownItems && (
                          <div className="absolute top-full left-0 mt-1 w-48 rounded-lg shadow-lg border bg-white border-gray-200">
                            <div className="py-1">
                              {item.dropdownItems.map((dropdownItem) => (
                                <Link
                                  key={dropdownItem.label}
                                  href={dropdownItem.href}
                                  className="block px-4 py-2 text-base transition-colors duration-200 hover:bg-gray-50 text-text-primary"
                                  onClick={() => setActiveDropdown(null)}
                                >
                                  {dropdownItem.label}
                                </Link>
                              ))}
                            </div>
                          </div>
                        )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Desktop Action Buttons */}
              <div className="hidden md:flex items-center space-x-4">
                {joinButtonText && (
                  <Button
                    variant="secondary"
                    onClick={handleJoinClick}
                    showIcon={false}
                    className="bg-transparent border-gray-200 text-text-primary"
                  >
                    {joinButtonText}
                  </Button>
                )}
                {signUpButtonText && (
                  <Button
                    variant="primary"
                    onClick={handleSignUpClick}
                    showIcon={false}
                    className="bg-red-300 text-white"
                  >
                    {signUpButtonText}
                  </Button>
                )}
              </div>
            </div>
            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 rounded-md transition-colors duration-200 text-text-primary"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t bg-white border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigationItems.map((item) => (
                <div key={item.label}>
                  {item.hasDropdown ? (
                    <button
                      className="flex items-center justify-between w-full px-3 py-2 text-base font-medium transition-colors duration-200 text-text-primary"
                      onClick={() => toggleDropdown(item.label)}
                    >
                      {item.label}
                      <ChevronDown
                        size={16}
                        className={`transition-transform duration-200 ${
                          activeDropdown === item.label ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                  ) : (
                    <Link
                      href={item.href}
                      className={`block px-3 py-2 text-base font-medium transition-colors duration-200 ${
                        isActivePage(item.href)
                          ? 'text-teal-500'
                          : 'text-text-primary'
                      }`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  )}

                  {/* Mobile Dropdown Items */}
                  {item.hasDropdown &&
                    activeDropdown === item.label &&
                    item.dropdownItems && (
                      <div className="pl-4 space-y-1">
                        {item.dropdownItems.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.label}
                            href={dropdownItem.href}
                            className="block px-3 py-2 text-base transition-colors duration-200 text-text-secondary"
                            onClick={() => {
                              setIsMobileMenuOpen(false);
                              setActiveDropdown(null);
                            }}
                          >
                            {dropdownItem.label}
                          </Link>
                        ))}
                      </div>
                    )}
                </div>
              ))}

              {/* Mobile Action Buttons */}
              <div className="pt-4 space-y-2">
                {joinButtonText && (
                  <Button
                    variant="secondary"
                    onClick={() => {
                      handleJoinClick();
                      setIsMobileMenuOpen(false);
                    }}
                    className="w-full bg-transparent border-gray-200 text-text-primary"
                    showIcon={false}
                  >
                    {joinButtonText}
                  </Button>
                )}
                {signUpButtonText && (
                  <Button
                    variant="primary"
                    onClick={() => {
                      handleSignUpClick();
                      setIsMobileMenuOpen(false);
                    }}
                    className="w-full bg-red-300 text-white"
                    showIcon={false}
                  >
                    {signUpButtonText}
                  </Button>
                )}
              </div>
            </div>
          </div>
        )}
      </nav>
    );
  }
);

Navigation.displayName = 'Navigation';

export { Navigation };
