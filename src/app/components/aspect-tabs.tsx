import {
  ArrowRight,
  ClipboardCheck,
  FileText,
  GraduationCap,
  Shield,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const SERVICES = [
  {
    title: 'ISO Systems',
    description:
      'Complete ISO45001, ISO14001, and ISO9001 system development, implementation, and maintenance.',
    image: '/images/homepage/features-tabs/1.webp',
    icon: Shield,
    href: '/features',
  },
  {
    title: 'Risk Management',
    description:
      'Comprehensive risk assessments, SWMS, SWPs, and hazard identification solutions.',
    image: '/images/homepage/features-tabs/2.webp',
    icon: ClipboardCheck,
    href: '/features',
  },
  {
    title: 'Training',
    description:
      'Risk management, due diligence, contractor management, and custom training programs.',
    image: '/images/homepage/features-tabs/3.webp',
    icon: GraduationCap,
    href: '/features',
  },
  {
    title: 'Documentation',
    description:
      'Bespoke SWMS, policies, procedures, and emergency response plans for your business.',
    image: '/images/homepage/features-tabs/4.webp',
    icon: FileText,
    href: '/features',
  },
];

export const AspectTabs = () => {
  return (
    <section className="bg-obsidian border-border relative border-t px-2.5 py-20 md:py-32 lg:px-0">
      {/* Side borders */}
      <div className="bg-border pointer-events-none absolute inset-y-0 left-2.5 z-10 w-px lg:left-[calc((100%-1280px)/2)]" />
      <div className="bg-border pointer-events-none absolute inset-y-0 right-2.5 z-10 w-px lg:right-[calc((100%-1280px)/2)]" />

      <div className="container">
        {/* Header */}
        <div className="mb-16 max-w-2xl">
          <p className="text-muted-foreground text-sm tracking-widest uppercase">
            What We Do
          </p>
          <h2 className="text-foreground mt-4 text-3xl font-medium tracking-tight md:text-4xl lg:text-5xl">
            Comprehensive WHS solutions for your business
          </h2>
        </div>

        {/* Services grid */}
        <div className="grid gap-6 md:grid-cols-2">
          {SERVICES.map((service) => {
            const Icon = service.icon;
            return (
              <Link
                key={service.title}
                href={service.href}
                className="group relative overflow-hidden rounded-sm"
              >
                {/* Background image */}
                <div className="absolute inset-0">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="from-obsidian via-obsidian/70 to-obsidian/20 absolute inset-0 bg-gradient-to-t" />
                </div>

                {/* Content */}
                <div className="relative flex min-h-[320px] flex-col justify-end p-8">
                  <Icon
                    className="text-foreground/60 mb-4 size-8"
                    strokeWidth={1.5}
                  />
                  <h3 className="text-foreground text-2xl font-medium">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mt-2 max-w-sm leading-relaxed">
                    {service.description}
                  </p>
                  <div className="text-foreground mt-6 flex items-center gap-2 text-sm font-medium">
                    Learn more
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};
