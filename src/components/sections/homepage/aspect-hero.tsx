import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const AspectHero = () => {
  return (
    <section className="bg-obsidian relative min-h-[90vh] overflow-hidden px-2.5 lg:px-0">
      {/* Side borders */}
      <div className="bg-border pointer-events-none absolute inset-y-0 left-2.5 z-20 w-px lg:left-[calc((100%-1280px)/2)]" />
      <div className="bg-border pointer-events-none absolute inset-y-0 right-2.5 z-20 w-px lg:right-[calc((100%-1280px)/2)]" />

      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/homepage/hero-background.webp"
          alt="Background"
          fill
          className="object-cover opacity-40"
          priority
        />
        <div className="from-obsidian via-obsidian/80 absolute inset-0 bg-gradient-to-t to-transparent" />
      </div>

      {/* Content */}
      <div className="relative flex min-h-[90vh] flex-col justify-end pb-16 lg:pb-24">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-foreground text-5xl leading-[1.1] font-medium tracking-tight md:text-6xl lg:text-7xl">
              We Make
              <br />
              <span className="text-muted-foreground">Safety Eternal.</span>
            </h1>
            <p className="text-muted-foreground mt-6 max-w-xl text-lg leading-relaxed">
              Comprehensive WHS consulting, system builds, audits, and training.
              We build proactive safety cultures that drive businesses forward.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="bg-foreground text-background hover:bg-foreground/90 inline-flex items-center gap-3 px-6 py-3 text-sm font-medium transition-colors"
              >
                Book Free Consultation
                <ArrowRight className="size-4" />
              </Link>
              <Link
                href="/solutions"
                className="text-foreground hover:text-muted-foreground inline-flex items-center gap-2 text-sm font-medium transition-colors"
              >
                Explore Solutions
                <ArrowRight className="size-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="bg-obsidian/80 border-border absolute right-0 bottom-0 left-0 border-t backdrop-blur-sm">
        <div className="container flex items-center justify-between py-4">
          <p className="text-muted-foreground text-sm">
            Servicing businesses across Australia
          </p>
          <div className="text-muted-foreground hidden items-center gap-8 text-sm md:flex">
            <span>Sydney</span>
            <span className="text-dark-gray">•</span>
            <span>Melbourne</span>
            <span className="text-dark-gray">•</span>
            <span>Brisbane</span>
            <span className="text-dark-gray">•</span>
            <span>Nationwide</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AspectHero;
