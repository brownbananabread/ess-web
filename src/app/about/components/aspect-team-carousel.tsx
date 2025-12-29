import { Linkedin } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const FOUNDER = {
  name: 'Levi Mieli',
  position: 'Director & Safety Consultant',
  image: '/images/about/team/1.webp',
  linkedin: 'https://linkedin.com',
  bio: 'With a passion for creating safer workplaces, Levi founded ESS to bring a fresh, people-focused approach to workplace health and safety consulting.',
};

export default function AspectTeamCarousel() {
  return (
    <section className="bg-obsidian relative overflow-hidden px-2.5 lg:px-0">
      {/* Side borders */}
      <div className="bg-border pointer-events-none absolute inset-y-0 left-2.5 z-10 w-px lg:left-[calc((100%-1280px)/2)]" />
      <div className="bg-border pointer-events-none absolute inset-y-0 right-2.5 z-10 w-px lg:right-[calc((100%-1280px)/2)]" />

      <div className="mx-auto w-full max-w-[1280px]">
        <div className="border-border border-b">
          {/* Header */}
          <div className="border-border border-b px-6 py-12 md:px-16 md:py-16">
            <span className="text-muted-foreground text-xs font-medium tracking-widest uppercase">
              Leadership
            </span>
            <h2 className="text-foreground mt-2 max-w-xl text-3xl font-medium tracking-tight md:text-4xl">
              Meet the founder
            </h2>
          </div>

          {/* Founder feature */}
          <div className="grid grid-cols-1 md:grid-cols-3">
            {/* Portrait image */}
            <div className="border-border relative aspect-[3/4] border-b md:border-r md:border-b-0">
              <Image
                src={FOUNDER.image}
                alt={FOUNDER.name}
                fill
                className="object-cover"
              />
            </div>

            {/* Content */}
            <div className="flex flex-col justify-between p-6 md:col-span-2 md:p-12">
              <div>
                <h3 className="text-foreground text-3xl font-medium md:text-4xl">
                  {FOUNDER.name}
                </h3>
                <p className="text-muted-foreground mt-2 text-lg">
                  {FOUNDER.position}
                </p>
                <p className="text-muted-foreground mt-8 max-w-lg text-lg leading-relaxed">
                  {FOUNDER.bio}
                </p>
              </div>
              <div className="mt-10">
                <Link
                  href={FOUNDER.linkedin}
                  aria-label="LinkedIn"
                  className="text-foreground hover:bg-foreground hover:text-background border-border inline-flex items-center gap-3 border px-5 py-3 transition-colors"
                >
                  <Linkedin size={18} />
                  <span className="text-sm font-medium">
                    Connect on LinkedIn
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
