import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function AspectCta() {
  return (
    <section className="bg-obsidian border-border relative border-t px-2.5 py-24 md:py-32 lg:px-0">
      {/* Side borders */}
      <div className="bg-border pointer-events-none absolute inset-y-0 left-2.5 z-10 w-px lg:left-[calc((100%-1280px)/2)]" />
      <div className="bg-border pointer-events-none absolute inset-y-0 right-2.5 z-10 w-px lg:right-[calc((100%-1280px)/2)]" />

      <div className="container">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          {/* Left - Content */}
          <div>
            <h2 className="text-foreground text-3xl font-medium tracking-tight md:text-4xl lg:text-5xl">
              Ready to build a safer workplace?
            </h2>
            <p className="text-muted-foreground mt-4 max-w-lg leading-relaxed">
              Book a free consultation to discuss your WHS needs. No obligation,
              just straightforward advice from experienced professionals.
            </p>
          </div>

          {/* Right - CTA */}
          <div className="lg:text-right">
            <Link
              href="/contact"
              className="bg-foreground text-background hover:bg-foreground/90 inline-flex items-center gap-3 px-8 py-4 text-sm font-medium transition-colors"
            >
              Book Free Consultation
              <ArrowRight className="size-4" />
            </Link>
            <p className="text-muted-foreground mt-4 text-sm">
              Servicing businesses across Australia
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
