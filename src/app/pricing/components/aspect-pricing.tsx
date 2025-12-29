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
    <section className="bg-obsidian relative overflow-hidden px-2.5 lg:px-0">
      <div className="mx-auto w-full max-w-[1280px]">
        {/* Hero header */}
        <div className="border-dark-gray grid grid-cols-1 border-r border-b border-l md:grid-cols-12">
          {/* Title area */}
          <div className="border-dark-gray p-6 pt-24 md:col-span-8 md:border-r md:p-12 md:pt-32">
            <span className="text-muted-foreground text-xs font-medium tracking-widest uppercase">
              Our Approach
            </span>
            <h1 className="text-foreground mt-4 text-4xl font-medium tracking-tight md:text-5xl lg:text-6xl">
              Why Choose ESS?
            </h1>
            <p className="text-muted-foreground mt-6 max-w-lg leading-relaxed">
              Every business has unique needs. We provide customized solutions
              based on your specific requirements, business size, and industry.
            </p>
          </div>

          {/* Accent block */}
          <div className="border-dark-gray hidden flex-col justify-between border-t p-8 md:col-span-4 md:flex md:border-t-0">
            <p className="text-dark-gray text-7xl font-light tracking-tighter lg:text-8xl">
              $$
            </p>
            <div>
              <p className="text-foreground text-sm font-medium tracking-widest uppercase">
                No Hidden Costs
              </p>
              <p className="text-muted-foreground mt-2 text-sm">
                Transparent, fair pricing
              </p>
            </div>
          </div>
        </div>

        {/* Pricing cards grid */}
        <div className="border-dark-gray grid grid-cols-1 border-r border-b border-l md:grid-cols-3">
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              className={`border-dark-gray flex flex-col justify-between p-6 md:p-8 ${
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
                      <span className="text-foreground text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              <Link
                href={plan.href}
                className={`mt-8 inline-flex w-fit items-center gap-2 border px-4 py-2 text-sm font-medium transition-colors ${
                  plan.featured
                    ? 'border-foreground bg-foreground text-background hover:text-foreground hover:bg-transparent'
                    : 'border-dark-gray text-foreground hover:bg-foreground hover:text-background'
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
  );
};

export default AspectPricing;
