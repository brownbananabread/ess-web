import { ArrowRight, Phone } from 'lucide-react';
import Link from 'next/link';

import { Button } from '@/components/ui/button';

export default function AspectContactCta() {
  return (
    <section className="bg-obsidian relative px-2.5 lg:px-0">
      {/* Side borders */}
      <div className="bg-border pointer-events-none absolute inset-y-0 left-2.5 z-10 w-px lg:left-[calc((100%-1280px)/2)]" />
      <div className="bg-border pointer-events-none absolute inset-y-0 right-2.5 z-10 w-px lg:right-[calc((100%-1280px)/2)]" />

      <div className="mx-auto w-full max-w-[1280px]">
        <div className="bg-jet border-border border-b">
          <div className="grid grid-cols-1 md:grid-cols-12">
            {/* Main CTA content */}
            <div className="border-border p-8 md:col-span-8 md:border-r md:p-16">
              <span className="text-muted-foreground text-xs font-medium tracking-widest uppercase">
                Ready to Start?
              </span>
              <h2 className="text-foreground mt-4 text-3xl font-medium tracking-tight md:text-4xl lg:text-5xl">
                Take the first step toward a safer workplace
              </h2>
              <p className="text-muted-foreground mt-6 max-w-lg leading-relaxed">
                Every great safety culture starts with a conversation. Let&apos;s
                discuss how we can help protect your team and your business.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Button asChild className="group h-12 px-6">
                  <Link href="tel:+61478669655">
                    <Phone className="mr-2 size-4" />
                    Call Now
                  </Link>
                </Button>
                <Button asChild variant="outline" className="group h-12 px-6">
                  <Link href="#contact-form">
                    Send a Message
                    <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>
            </div>

            {/* Stats block */}
            <div className="flex flex-col justify-center p-8 md:col-span-4 md:p-12">
              <div className="border-border border-b pb-6">
                <p className="text-dark-gray text-5xl font-light tracking-tighter md:text-6xl">
                  24h
                </p>
                <p className="text-muted-foreground mt-2 text-sm">
                  Average response time
                </p>
              </div>
              <div className="pt-6">
                <p className="text-dark-gray text-5xl font-light tracking-tighter md:text-6xl">
                  100%
                </p>
                <p className="text-muted-foreground mt-2 text-sm">
                  Client satisfaction
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
