import { ArrowRight, CalendarClock } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: 'Bookings',
  description:
    'Book a consultation with Eternal Safety Solutions. Our online booking system is coming soon.',
};

export default function BookingsPage() {
  return (
    <main className="bg-obsidian min-h-screen">
      {/* Hero */}
      <section className="border-border relative border-b px-2.5 pt-32 pb-20 md:pt-40 md:pb-24 lg:px-0">
        <div className="bg-border pointer-events-none absolute inset-y-0 left-2.5 z-10 w-px lg:left-[calc((100%-1280px)/2)]" />
        <div className="bg-border pointer-events-none absolute inset-y-0 right-2.5 z-10 w-px lg:right-[calc((100%-1280px)/2)]" />

        <div className="container">
          <p className="text-muted-foreground text-sm tracking-widest uppercase">
            Bookings
          </p>
          <h1 className="text-foreground mt-4 max-w-3xl text-4xl font-medium tracking-tight md:text-5xl lg:text-6xl">
            Online booking coming soon
          </h1>
          <p className="text-muted-foreground mt-6 max-w-xl leading-relaxed">
            We're working on an online booking system to make scheduling
            consultations even easier. In the meantime, please use our contact
            page to get in touch.
          </p>
        </div>
      </section>

      {/* Coming Soon Content */}
      <section className="border-border relative border-b px-2.5 py-20 md:py-24 lg:px-0">
        <div className="bg-border pointer-events-none absolute inset-y-0 left-2.5 z-10 w-px lg:left-[calc((100%-1280px)/2)]" />
        <div className="bg-border pointer-events-none absolute inset-y-0 right-2.5 z-10 w-px lg:right-[calc((100%-1280px)/2)]" />

        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <div className="bg-muted/10 border-border mx-auto mb-8 flex size-20 items-center justify-center border">
              <CalendarClock className="text-muted-foreground size-10" />
            </div>
            <h2 className="text-foreground text-2xl font-medium tracking-tight md:text-3xl">
              This feature is in progress
            </h2>
            <p className="text-muted-foreground mx-auto mt-4 max-w-lg leading-relaxed">
              Our team is building a seamless online booking experience. Soon
              you'll be able to schedule consultations, site inspections, and
              training sessions directly through our website.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative px-2.5 py-20 md:py-24 lg:px-0">
        <div className="bg-border pointer-events-none absolute inset-y-0 left-2.5 z-10 w-px lg:left-[calc((100%-1280px)/2)]" />
        <div className="bg-border pointer-events-none absolute inset-y-0 right-2.5 z-10 w-px lg:right-[calc((100%-1280px)/2)]" />

        <div className="container">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="text-foreground text-3xl font-medium tracking-tight md:text-4xl">
                Need to book a consultation?
              </h2>
              <p className="text-muted-foreground mt-4 max-w-lg leading-relaxed">
                Contact us directly and we'll arrange a time that works for you.
                We're happy to discuss your workplace safety needs.
              </p>
            </div>
            <div className="lg:text-right">
              <Link
                href="/contact"
                className="bg-foreground text-background hover:bg-foreground/90 inline-flex items-center gap-3 px-8 py-4 text-sm font-medium transition-colors"
              >
                Go to contact page
                <ArrowRight className="size-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
