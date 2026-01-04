import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

const SERVICES = [
  {
    title: 'ISO Systems',
    description:
      'ISO45001, ISO14001, and ISO9001 development, implementation, and certification support.',
  },
  {
    title: 'Risk Management',
    description:
      'Comprehensive risk assessments, SWMS, SWPs, and hazard identification.',
  },
  {
    title: 'Training',
    description:
      'Due diligence, contractor management, and custom safety training programs.',
  },
  {
    title: 'Documentation',
    description:
      'Policies, procedures, SWMS, and emergency response plans tailored to your business.',
  },
];

export default function AspectServices() {
  return (
    <section className="bg-obsidian border-border relative border-t px-2.5 py-20 md:py-32 lg:px-0">
      {/* Side borders */}
      <div className="bg-border pointer-events-none absolute inset-y-0 left-2.5 z-10 w-px lg:left-[calc((100%-1280px)/2)]" />
      <div className="bg-border pointer-events-none absolute inset-y-0 right-2.5 z-10 w-px lg:right-[calc((100%-1280px)/2)]" />

      <div className="container">
        {/* Header */}
        <div className="mb-16 max-w-xl">
          <p className="text-muted-foreground text-sm tracking-widest uppercase">
            What We Do
          </p>
          <h2 className="text-foreground mt-4 text-3xl font-medium tracking-tight md:text-4xl">
            Comprehensive WHS solutions for your business
          </h2>
        </div>

        {/* Services grid */}
        <div className="grid gap-px bg-border md:grid-cols-2">
          {SERVICES.map((service) => (
            <div
              key={service.title}
              className="bg-obsidian p-8 md:p-10"
            >
              <h3 className="text-foreground text-xl font-medium">
                {service.title}
              </h3>
              <p className="text-muted-foreground mt-3 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* Footer link */}
        <div className="mt-12">
          <Link
            href="/solutions"
            className="text-foreground inline-flex items-center gap-2 text-sm font-medium"
          >
            View all services
            <ArrowRight className="size-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
