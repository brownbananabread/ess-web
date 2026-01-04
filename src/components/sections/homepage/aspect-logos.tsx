'use client';

import {
  Building2,
  Factory,
  HardHat,
  Heart,
  ShoppingBag,
  Truck,
  Utensils,
  Warehouse,
} from 'lucide-react';

const INDUSTRIES = [
  { name: 'Construction', icon: HardHat },
  { name: 'Healthcare', icon: Heart },
  { name: 'Logistics', icon: Truck },
  { name: 'Manufacturing', icon: Factory },
  { name: 'Hospitality', icon: Utensils },
  { name: 'Warehousing', icon: Warehouse },
  { name: 'Retail', icon: ShoppingBag },
  { name: 'And More', icon: Building2 },
];

export default function AspectLogos() {
  return (
    <section className="bg-obsidian border-border relative overflow-hidden border-t px-2.5 py-12 md:py-16 lg:px-0">
      {/* Side borders */}
      <div className="bg-border pointer-events-none absolute inset-y-0 left-2.5 z-10 w-px lg:left-[calc((100%-1280px)/2)]" />
      <div className="bg-border pointer-events-none absolute inset-y-0 right-2.5 z-10 w-px lg:right-[calc((100%-1280px)/2)]" />

      <div className="container mb-8">
        <p className="text-muted-foreground text-center text-sm tracking-widest uppercase">
          Industries We Serve
        </p>
      </div>

      {/* Marquee */}
      <div className="relative container overflow-hidden">
        <div className="from-obsidian pointer-events-none absolute top-0 bottom-0 left-0 z-10 w-12 bg-gradient-to-r to-transparent" />
        <div className="from-obsidian pointer-events-none absolute top-0 right-0 bottom-0 z-10 w-12 bg-gradient-to-l to-transparent" />

        <div className="flex w-full">
          <div className="animate-marquee flex shrink-0 items-center">
            {INDUSTRIES.map((industry, index) => {
              const Icon = industry.icon;
              return (
                <div
                  key={index}
                  className="text-foreground/70 mx-8 flex items-center gap-3 md:mx-12"
                >
                  <Icon className="size-5" strokeWidth={1.5} />
                  <span className="text-sm font-medium whitespace-nowrap">
                    {industry.name}
                  </span>
                </div>
              );
            })}
          </div>
          <div className="animate-marquee flex shrink-0 items-center">
            {INDUSTRIES.map((industry, index) => {
              const Icon = industry.icon;
              return (
                <div
                  key={index}
                  className="text-foreground/70 mx-8 flex items-center gap-3 md:mx-12"
                >
                  <Icon className="size-5" strokeWidth={1.5} />
                  <span className="text-sm font-medium whitespace-nowrap">
                    {industry.name}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
