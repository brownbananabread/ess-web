'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react';

import { cn } from '@/lib/utils';

import { ThemeToggle } from '../ui/theme-toggle';

const ITEMS = [
  { label: 'About Us', href: '/about' },
  { label: 'Solutions', href: '/solutions' },
  { label: 'Articles', href: '/articles' },
  { label: 'Contact Us', href: '/contact' },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }

    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, [isMenuOpen]);

  const bgColor = 'bg-obsidian';

  return (
    <header
      className={cn(
        'border-border sticky top-0 z-50 h-20 border-y px-2.5 lg:px-0',
        bgColor,
      )}
    >
      {/* Side borders */}
      <div className="bg-border pointer-events-none absolute inset-y-0 left-2.5 z-10 w-px lg:left-[calc((100%-1280px)/2)]" />
      <div className="bg-border pointer-events-none absolute inset-y-0 right-2.5 z-10 w-px lg:right-[calc((100%-1280px)/2)]" />

      <div className="container flex h-20 items-center">
        <div className="flex w-full items-center justify-between py-3">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/images/layout/logo-light.svg"
              alt="logo"
              width={100}
              height={20}
              className="dark:hidden"
            />
            <Image
              src="/images/layout/logo-dark.svg"
              alt="logo"
              width={100}
              height={20}
              className="hidden dark:block"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="flex items-center justify-center">
            <nav className="mr-4 hidden items-center gap-1 lg:flex">
              {ITEMS.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className={cn(
                    'text-foreground hover:text-muted-foreground px-3 py-2 text-sm transition-colors',
                    pathname === link.href && 'text-muted-foreground',
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Theme Toggle & Mobile Menu */}
            <div className="flex items-center gap-2.5">
              <div
                className={`transition-opacity duration-300 ${isMenuOpen ? 'max-lg:pointer-events-none max-lg:opacity-0' : 'opacity-100'}`}
              >
                <ThemeToggle />
              </div>

              {/* Hamburger Menu Button (Mobile Only) */}
              <button
                className="text-muted-foreground relative flex size-8 lg:hidden"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <span className="sr-only">Open main menu</span>
                <div className="absolute top-1/2 left-1/2 block w-[18px] -translate-x-1/2 -translate-y-1/2">
                  <span
                    aria-hidden="true"
                    className={`absolute block h-0.5 w-full rounded-full bg-current transition duration-500 ease-in-out ${isMenuOpen ? 'rotate-45' : '-translate-y-1.5'}`}
                  ></span>
                  <span
                    aria-hidden="true"
                    className={`absolute block h-0.5 w-full rounded-full bg-current transition duration-500 ease-in-out ${isMenuOpen ? 'opacity-0' : ''}`}
                  ></span>
                  <span
                    aria-hidden="true"
                    className={`absolute block h-0.5 w-full rounded-full bg-current transition duration-500 ease-in-out ${isMenuOpen ? '-rotate-45' : 'translate-y-1.5'}`}
                  ></span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={cn(
          'border-border absolute inset-x-0 top-full container flex h-[calc(100vh-var(--header-height))] flex-col border-t px-2.5 lg:px-0',
          'transition duration-300 ease-in-out lg:hidden',
          isMenuOpen
            ? 'pointer-events-auto translate-y-0 opacity-100'
            : 'pointer-events-none -translate-y-full opacity-0',
          bgColor,
        )}
      >
        {/* Side borders for mobile menu */}
        <div className="bg-border pointer-events-none absolute inset-y-0 left-2.5 z-10 w-px lg:left-[calc((100%-1280px)/2)]" />
        <div className="bg-border pointer-events-none absolute inset-y-0 right-2.5 z-10 w-px lg:right-[calc((100%-1280px)/2)]" />

        <div className="h-[calc(100vh-var(--header-height))] px-5">
          <nav className="mt-8 flex flex-1 flex-col gap-1">
            {ITEMS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className={cn(
                  'text-foreground py-3 text-lg font-medium',
                  pathname === link.href && 'text-muted-foreground',
                )}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
