import { Linkedin } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const LINKS = [
  {
    title: 'Company',
    links: [
      { name: 'About', href: '/about' },
      { name: 'Contact', href: '/contact' },
    ],
  },
  {
    title: 'Solutions',
    links: [
      { name: 'All Solutions', href: '/solutions' },
      { name: 'Pricing', href: '/pricing' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { name: 'Articles', href: '/articles' },
      { name: 'Downloads', href: '/downloads' },
      { name: 'FAQ', href: '/faq' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { name: 'Terms of Service', href: '/terms-of-service' },
      { name: 'Privacy Policy', href: '/privacy-policy' },
    ],
  },
];

export const Footer = () => {
  return (
    <footer className="bg-obsidian border-border relative border-t px-2.5 lg:px-0">
      {/* Side borders */}
      <div className="bg-border pointer-events-none absolute inset-y-0 left-2.5 z-10 w-px lg:left-[calc((100%-1280px)/2)]" />
      <div className="bg-border pointer-events-none absolute inset-y-0 right-2.5 z-10 w-px lg:right-[calc((100%-1280px)/2)]" />

      <div className="container py-16 md:py-20">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Left side - Logo, tagline, newsletter */}
          <div className="lg:col-span-5">
            <Link href="/" className="inline-block">
              <Image
                src="/images/layout/logo.png"
                alt="Eternal Safety Solutions"
                width={160}
                height={32}
              />
            </Link>

            <p className="text-muted-foreground mt-6 max-w-sm leading-relaxed">
              Helping businesses build safer workplaces with comprehensive WHS
              consulting, training, and compliance services.
            </p>
          </div>

          {/* Right side - Link columns */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4 lg:col-span-7">
            {LINKS.map((section) => (
              <div key={section.title}>
                <h3 className="text-foreground text-sm font-medium">
                  {section.title}
                </h3>
                <ul className="mt-4 space-y-3">
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
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-border border-y">
        <div className="container flex flex-col items-center justify-between gap-4 py-6 sm:flex-row">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Eternal Safety Solutions. All rights
            reserved.
          </p>

          <div className="flex items-center gap-4">
            <Link
              href="https://linkedin.com"
              aria-label="LinkedIn"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Linkedin className="size-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
