'use client';

import { ArrowUpRight, Check } from 'lucide-react';
import Link from 'next/link';

const plans = [
  {
    name: 'Tailored Solutions',
    description: "We don't believe in cookie-cutter approaches.",
    features: [
      'Customized to your business needs',
      'Industry-specific compliance',
      'Scalable for any business size',
      'Transparent pricing with no hidden costs',
    ],
    cta: 'Get a Quote',
    href: '/contact',
  },
  {
    name: 'Practical Expertise',
    description: 'Real-world experience across multiple industries.',
    features: [
      'Construction & Building',
      'Aged Care & Healthcare',
      'Transport & Logistics',
      'Manufacturing & Food Processing',
    ],
    cta: 'Learn More',
    href: '/about',
    featured: true,
  },
  {
    name: 'End-to-End Support',
    description: "We're with you every step of the way.",
    features: [
      'Initial consultation to final review',
      'Ongoing compliance support',
      'Regular audits and updates',
      'Training and capacity building',
    ],
    cta: 'Contact Us',
    href: '/contact',
  },
];

const AspectPricing = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-obsidian relative overflow-hidden px-2.5 lg:px-0">
        {/* Side borders */}
        <div className="bg-border pointer-events-none absolute inset-y-0 left-2.5 z-10 w-px lg:left-[calc((100%-1280px)/2)]" />
        <div className="bg-border pointer-events-none absolute inset-y-0 right-2.5 z-10 w-px lg:right-[calc((100%-1280px)/2)]" />

        <div className="mx-auto w-full max-w-[1280px]">
          <div className="border-border grid grid-cols-1 md:grid-cols-12">
            {/* Title block */}
            <div className="p-6 pt-24 md:col-span-12 md:p-12 md:pt-32">
              <span className="text-muted-foreground text-xs font-medium tracking-widest uppercase">
                Our Approach
              </span>
              <h1 className="text-foreground mt-4 text-4xl font-medium tracking-tight md:text-5xl lg:text-6xl">
                Why Choose ESS?
              </h1>
              <p className="text-muted-foreground mt-4 max-w-2xl leading-relaxed">
                Every business has unique needs. We provide customized solutions
                based on your specific requirements, business size, and
                industry.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Info bar */}
      <section className="bg-obsidian border-border relative border-y px-2.5 lg:px-0">
        {/* Side borders */}
        <div className="bg-border pointer-events-none absolute inset-y-0 left-2.5 z-10 w-px lg:left-[calc((100%-1280px)/2)]" />
        <div className="bg-border pointer-events-none absolute inset-y-0 right-2.5 z-10 w-px lg:right-[calc((100%-1280px)/2)]" />

        <div className="mx-auto w-full max-w-[1280px]">
          <div className="grid grid-cols-2 md:grid-cols-4">
            <div className="border-border border-r p-4 md:p-6">
              <p className="text-muted-foreground text-xs tracking-wider uppercase">
                Pricing
              </p>
              <p className="text-foreground mt-1 text-sm font-medium">
                Custom Quotes
              </p>
            </div>
            <div className="border-border p-4 md:border-r md:p-6">
              <p className="text-muted-foreground text-xs tracking-wider uppercase">
                Consultation
              </p>
              <p className="text-foreground mt-1 text-sm font-medium">
                Free Initial
              </p>
            </div>
            <div className="border-border border-t border-r p-4 md:border-t-0 md:p-6">
              <p className="text-muted-foreground text-xs tracking-wider uppercase">
                Coverage
              </p>
              <p className="text-foreground mt-1 text-sm font-medium">
                Australia Wide
              </p>
            </div>
            <div className="border-border border-t p-4 md:border-t-0 md:p-6">
              <p className="text-muted-foreground text-xs tracking-wider uppercase">
                Hidden Costs
              </p>
              <p className="text-foreground mt-1 text-sm font-medium">None</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing cards */}
      <section className="bg-obsidian relative overflow-hidden px-2.5 lg:px-0">
        {/* Side borders */}
        <div className="bg-border pointer-events-none absolute inset-y-0 left-2.5 z-10 w-px lg:left-[calc((100%-1280px)/2)]" />
        <div className="bg-border pointer-events-none absolute inset-y-0 right-2.5 z-10 w-px lg:right-[calc((100%-1280px)/2)]" />

        <div className="mx-auto w-full max-w-[1280px]">
          <div className="border-border grid grid-cols-1 border-b md:grid-cols-3">
            {plans.map((plan, index) => (
              <div
                key={plan.name}
                className={`border-border flex flex-col justify-between p-6 md:p-8 ${
                  index < plans.length - 1
                    ? 'border-b md:border-r md:border-b-0'
                    : ''
                } ${plan.featured ? 'bg-jet' : ''}`}
              >
                <div>
                  <span className="text-dark-gray text-4xl font-light tracking-tighter">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <h3 className="text-foreground mt-4 text-2xl font-medium">
                    {plan.name}
                  </h3>
                  <p className="text-muted-foreground mt-2 text-sm">
                    {plan.description}
                  </p>
                  <div className="mt-6 space-y-3">
                    {plan.features.map((feature) => (
                      <div key={feature} className="flex items-start gap-3">
                        <Check className="text-foreground mt-0.5 size-4 shrink-0" />
                        <span className="text-foreground text-sm">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
                <Link
                  href={plan.href}
                  className={`mt-8 inline-flex w-fit items-center gap-2 border px-4 py-2 text-sm font-medium transition-colors ${
                    plan.featured
                      ? 'border-foreground bg-foreground text-background hover:text-foreground hover:bg-transparent'
                      : 'border-border text-foreground hover:bg-foreground hover:text-background'
                  }`}
                >
                  {plan.cta}
                  <ArrowUpRight className="size-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default AspectPricing;
