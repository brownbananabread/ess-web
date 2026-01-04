import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'About',
  description:
    'Learn about Eternal Safety Solutions and our mission to build safer workplaces across Australia.',
};

const VALUES = [
  {
    title: 'Integrity',
    description:
      'We operate with complete transparency and honesty, ensuring our recommendations always prioritize your safety over profit.',
  },
  {
    title: 'Collaboration',
    description:
      'Safety is a team effort. We work alongside your staff to build a culture where everyone takes ownership of workplace wellbeing.',
  },
  {
    title: 'Excellence',
    description:
      'We go beyond compliance to deliver best-practice solutions tailored to your unique operational requirements.',
  },
  {
    title: 'Care',
    description:
      'Every worker deserves to return home safely. This belief drives everything we do and every solution we create.',
  },
];

export default function AboutPage() {
  return (
    <main className="bg-obsidian min-h-screen">
      {/* Hero */}
      <section className="border-border relative border-b px-2.5 pt-32 pb-20 md:pt-40 md:pb-24 lg:px-0">
        <div className="bg-border pointer-events-none absolute inset-y-0 left-2.5 z-10 w-px lg:left-[calc((100%-1280px)/2)]" />
        <div className="bg-border pointer-events-none absolute inset-y-0 right-2.5 z-10 w-px lg:right-[calc((100%-1280px)/2)]" />

        <div className="container">
          <p className="text-muted-foreground text-sm tracking-widest uppercase">
            About Us
          </p>
          <h1 className="text-foreground mt-4 max-w-3xl text-4xl font-medium tracking-tight md:text-5xl lg:text-6xl">
            Building safer workplaces, one business at a time
          </h1>
          <p className="text-muted-foreground mt-6 max-w-xl leading-relaxed">
            Eternal Safety Solutions is founded on the principles of assisting
            businesses in achieving more than just compliance. We build
            proactive and effective safety cultures.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="border-border relative border-b px-2.5 py-20 md:py-24 lg:px-0">
        <div className="bg-border pointer-events-none absolute inset-y-0 left-2.5 z-10 w-px lg:left-[calc((100%-1280px)/2)]" />
        <div className="bg-border pointer-events-none absolute inset-y-0 right-2.5 z-10 w-px lg:right-[calc((100%-1280px)/2)]" />

        <div className="container">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-24">
            <div>
              <p className="text-muted-foreground text-sm tracking-widest uppercase">
                Our Mission
              </p>
              <h2 className="text-foreground mt-4 text-3xl font-medium tracking-tight md:text-4xl">
                Ensuring the WHS needs of businesses for a safer future
              </h2>
            </div>
            <div className="flex flex-col justify-center">
              <p className="text-muted-foreground leading-relaxed">
                We understand that workplace health and safety is not just about
                ticking boxes—it's about creating environments where people can
                work safely, confidently, and productively. Our people-focused
                approach ensures your staff feel included in steering safety
                processes, fostering genuine engagement and lasting cultural
                change.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="border-border relative border-b px-2.5 py-20 md:py-24 lg:px-0">
        <div className="bg-border pointer-events-none absolute inset-y-0 left-2.5 z-10 w-px lg:left-[calc((100%-1280px)/2)]" />
        <div className="bg-border pointer-events-none absolute inset-y-0 right-2.5 z-10 w-px lg:right-[calc((100%-1280px)/2)]" />

        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <blockquote>
              <p className="text-foreground text-2xl leading-relaxed font-light md:text-3xl">
                "Safety isn't just a policy—it's a promise we make to every
                worker and their family that they'll return home each day."
              </p>
            </blockquote>
            <div className="mt-8">
              <p className="text-foreground text-sm font-medium">Levi Mieli</p>
              <p className="text-muted-foreground text-sm">Founder & Director</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="border-border relative border-b px-2.5 py-20 md:py-24 lg:px-0">
        <div className="bg-border pointer-events-none absolute inset-y-0 left-2.5 z-10 w-px lg:left-[calc((100%-1280px)/2)]" />
        <div className="bg-border pointer-events-none absolute inset-y-0 right-2.5 z-10 w-px lg:right-[calc((100%-1280px)/2)]" />

        <div className="container">
          <div className="mb-16 max-w-xl">
            <p className="text-muted-foreground text-sm tracking-widest uppercase">
              Our Values
            </p>
            <h2 className="text-foreground mt-4 text-3xl font-medium tracking-tight md:text-4xl">
              The principles that guide every decision
            </h2>
          </div>

          <div className="grid gap-px bg-border md:grid-cols-2">
            {VALUES.map((value) => (
              <div key={value.title} className="bg-obsidian p-8 md:p-10">
                <h3 className="text-foreground text-xl font-medium">
                  {value.title}
                </h3>
                <p className="text-muted-foreground mt-3 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder */}
      <section className="border-border relative border-b px-2.5 py-20 md:py-24 lg:px-0">
        <div className="bg-border pointer-events-none absolute inset-y-0 left-2.5 z-10 w-px lg:left-[calc((100%-1280px)/2)]" />
        <div className="bg-border pointer-events-none absolute inset-y-0 right-2.5 z-10 w-px lg:right-[calc((100%-1280px)/2)]" />

        <div className="container">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            {/* Image */}
            <div className="relative aspect-[3/4] lg:col-span-4">
              <Image
                src="/images/about/team/1.webp"
                alt="Levi Mieli"
                fill
                className="object-cover"
              />
            </div>

            {/* Content */}
            <div className="flex flex-col justify-center lg:col-span-8">
              <p className="text-muted-foreground text-sm tracking-widest uppercase">
                Leadership
              </p>
              <h2 className="text-foreground mt-4 text-3xl font-medium tracking-tight md:text-4xl">
                Levi Mieli
              </h2>
              <p className="text-muted-foreground mt-2">
                Director & Safety Consultant
              </p>
              <p className="text-muted-foreground mt-8 max-w-lg leading-relaxed">
                With a passion for creating safer workplaces, Levi founded ESS
                to bring a fresh, people-focused approach to workplace health
                and safety consulting. His experience spans across multiple
                industries, helping businesses build sustainable safety cultures
                that go beyond compliance.
              </p>
            </div>
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
                Ready to work together?
              </h2>
              <p className="text-muted-foreground mt-4 max-w-lg leading-relaxed">
                Book a free consultation to discuss how we can help build a
                safer workplace for your business.
              </p>
            </div>
            <div className="lg:text-right">
              <Link
                href="/contact"
                className="bg-foreground text-background hover:bg-foreground/90 inline-flex items-center gap-3 px-8 py-4 text-sm font-medium transition-colors"
              >
                Get in touch
                <ArrowRight className="size-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
