import { Facebook, Linkedin, Twitter } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const navigation = [
  {
    title: 'Services',
    links: [
      { name: 'Home', href: '/' },
      { name: 'Solutions', href: '/features' },
      { name: 'Blog', href: '/blog' },
    ],
  },
  {
    title: 'Company',
    links: [
      { name: 'About', href: '/about' },
      { name: 'FAQ', href: '/faq' },
      { name: 'Contact', href: '/contact' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { name: 'Safety Training', href: '/features' },
      { name: 'Compliance', href: '/features' },
      { name: 'Consulting', href: '/features' },
    ],
  },
];

const socialLinks = [
  { icon: Facebook, href: 'https://facebook.com' },
  { icon: Twitter, href: 'https://twitter.com' },
  { icon: Linkedin, href: 'https://linkedin.com' },
];

const legal = [
  { name: 'Privacy Policy', href: '/privacy' },
  { name: 'Cookie Settings', href: '/cookie-policy' },
  { name: 'Terms of Service', href: '/terms' },
];

export const Footer = () => {
  return (
    <footer className="bg-obsidian text-foreground border-border relative border-y px-2.5 lg:px-0">
      {/* Side borders */}
      <div className="bg-border pointer-events-none absolute inset-y-0 left-2.5 z-10 w-px lg:left-[calc((100%-1280px)/2)]" />
      <div className="bg-border pointer-events-none absolute inset-y-0 right-2.5 z-10 w-px lg:right-[calc((100%-1280px)/2)]" />

      <div className="mx-auto w-full max-w-[1280px]">
        <div className="grid gap-8 p-6 md:grid-cols-2 md:p-12 lg:grid-cols-4 lg:gap-12">
          {navigation.map((section) => (
            <div key={section.title}>
              <h3 className="text-md mb-4 font-bold">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-muted-foreground hover:text-foreground text-sm transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div>
            <h3 className="text-md mb-4 font-bold">Contact Us</h3>
            <p className="font-inter-tight text-mid-gray text-sm leading-relaxed">
              Levi Mieli
              <br />
              Director & Safety Consultant
            </p>
            <p className="font-inter-tight text-mid-gray mt-3 text-sm">
              0478 669 655
            </p>
            <p className="font-inter-tight text-muted-foreground text-sm">
              levi@eternalsafetysolutions.com.au
            </p>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-border grid gap-8 border-t p-6 md:grid-cols-2 md:p-12">
          <div>
            <p className="text-muted-foreground max-w-md text-sm leading-relaxed">
              Eternal Safety Solutions provides comprehensive workplace safety
              consulting, training, and compliance services across Australia.
              We&apos;re dedicated to creating safer workplaces for everyone.
            </p>
            <div className="mt-6 flex items-center gap-6">
              {socialLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-label={link.href}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <link.icon size={20} />
                </Link>
              ))}
            </div>
          </div>
          <div className="flex items-center justify-start md:justify-end">
            <Image
              src="/images/layout/logo.png"
              alt="logo"
              width={200}
              height={31}
            />
          </div>
        </div>
      </div>
      {/* Legal bar */}
      <div className="border-border border-t">
        <div className="mx-auto w-full max-w-[1280px]">
          <div className="flex flex-col gap-4 px-6 py-6 sm:flex-row sm:items-center sm:justify-between md:px-12">
            <p className="text-muted-foreground text-xs">
              © 2025 Eternal Safety Solutions
            </p>
            <div className="flex flex-wrap gap-4 sm:gap-6">
              {legal.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-muted-foreground hover:text-foreground text-xs transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
