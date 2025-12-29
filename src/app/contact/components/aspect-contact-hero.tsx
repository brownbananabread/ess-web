import { Clock, Mail, MapPin, Phone } from 'lucide-react';
import Link from 'next/link';

const contactDetails = [
  {
    icon: Mail,
    label: 'Email',
    value: 'levi@eternalsafetysolutions.com.au',
    href: 'mailto:levi@eternalsafetysolutions.com.au',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '0478 669 655',
    href: 'tel:+61478669655',
  },
  {
    icon: Clock,
    label: 'Hours',
    value: 'Mon - Fri: 8AM - 5PM AEST',
    href: null,
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'New South Wales, Australia',
    href: null,
  },
];

export default function AspectContactHero() {
  return (
    <section className="bg-obsidian relative overflow-hidden px-2.5 lg:px-0">
      {/* Side borders */}
      <div className="bg-border pointer-events-none absolute inset-y-0 left-2.5 z-10 w-px lg:left-[calc((100%-1280px)/2)]" />
      <div className="bg-border pointer-events-none absolute inset-y-0 right-2.5 z-10 w-px lg:right-[calc((100%-1280px)/2)]" />

      <div className="mx-auto w-full max-w-[1280px]">
        {/* Hero grid - asymmetric 5 column layout */}
        <div className="border-border grid grid-cols-1 border-b md:grid-cols-5">
          {/* Title area */}
          <div className="border-border border-b p-6 pt-24 md:col-span-3 md:border-r md:border-b-0 md:p-12 md:pt-32">
            <span className="text-muted-foreground text-xs font-medium tracking-widest uppercase">
              Get in Touch
            </span>
            <h1 className="text-foreground mt-4 text-4xl font-medium tracking-tight md:text-5xl lg:text-6xl">
              Let's Talk Safety
            </h1>
            <p className="text-muted-foreground mt-6 max-w-lg leading-relaxed">
              Whether you have questions about our services, need a quote, or
              want to discuss your specific safety challenges—we're here to
              help.
            </p>
          </div>

          {/* Large accent block */}
          <div className="hidden items-end justify-end p-8 md:col-span-2 md:flex">
            <p className="text-dark-gray text-right text-8xl leading-none font-light tracking-tighter lg:text-9xl">
              @
            </p>
          </div>
        </div>

        {/* Contact details grid */}
        <div className="border-border grid grid-cols-2 border-b md:grid-cols-4">
          {contactDetails.map((item, index) => {
            const Icon = item.icon;
            const content = (
              <>
                <Icon
                  className="text-muted-foreground mb-4 size-5"
                  strokeWidth={1.5}
                />
                <p className="text-muted-foreground text-xs tracking-widest uppercase">
                  {item.label}
                </p>
                <p className="text-foreground mt-1 text-sm font-medium">
                  {item.value}
                </p>
              </>
            );

            return (
              <div
                key={item.label}
                className={`p-6 md:p-8 ${
                  index < contactDetails.length - 1
                    ? 'border-border border-r'
                    : ''
                } ${index < 2 ? 'border-border border-b md:border-b-0' : ''}`}
              >
                {item.href ? (
                  <Link
                    href={item.href}
                    className="group block transition-colors"
                  >
                    {content}
                  </Link>
                ) : (
                  <div>{content}</div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
