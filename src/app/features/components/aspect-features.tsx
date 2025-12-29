import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

type ItemType = {
  title: string;
  description: string;
  image: { src: string; alt: string };
  link: string;
};

const ITEMS: ItemType[] = [
  {
    title: 'ISO Systems',
    description:
      'Complete ISO45001, ISO14001, and ISO9001 system development, implementation, and maintenance for your business.',
    image: { src: '/images/homepage/features-tabs/1.webp', alt: 'ISO Systems' },
    link: '/contact',
  },
  {
    title: 'Risk Management',
    description:
      'Comprehensive risk assessments, SWMS, SWPs, and hazard identification to protect your workers.',
    image: {
      src: '/images/homepage/features-tabs/2.webp',
      alt: 'Risk Management',
    },
    link: '/contact',
  },
  {
    title: 'Site Inspections',
    description:
      'Thorough hazard inspections with detailed reports and prioritized action plans.',
    image: {
      src: '/images/homepage/features-tabs/3.webp',
      alt: 'Site Inspections',
    },
    link: '/contact',
  },
  {
    title: 'Training',
    description:
      'Risk management, due diligence, contractor management, and custom training programs for your team.',
    image: { src: '/images/homepage/features-tabs/5.webp', alt: 'Training' },
    link: '/contact',
  },
  {
    title: 'Documentation',
    description:
      'Bespoke SWMS, SWPs, policies, procedures, and emergency response plans tailored to your business.',
    image: {
      src: '/images/homepage/features-tabs/4.webp',
      alt: 'Documentation',
    },
    link: '/contact',
  },
  {
    title: 'Compliance Consulting',
    description:
      'Legislative compliance audits, gap analysis, officer due diligence support, and ongoing monitoring.',
    image: {
      src: '/images/homepage/features-tabs/1.webp',
      alt: 'Compliance Consulting',
    },
    link: '/contact',
  },
];

export const AspectFeatures = () => (
  <section className="bg-obsidian relative overflow-hidden px-2.5 md:px-0">
    {/* Side borders */}
    <div className="bg-border pointer-events-none absolute inset-y-0 left-2.5 z-10 w-px lg:left-[calc((100%-1280px)/2)]" />
    <div className="bg-border pointer-events-none absolute inset-y-0 right-2.5 z-10 w-px lg:right-[calc((100%-1280px)/2)]" />

    <div className="mx-auto w-full max-w-[1280px]">
      {/* Section header */}
      <div className="border-border border-b">
        <div className="grid grid-cols-1 md:grid-cols-3">
          <div className="border-border border-b p-6 md:col-span-2 md:border-r md:border-b-0 md:p-12">
            <span className="text-muted-foreground text-xs font-medium tracking-widest uppercase">
              Services
            </span>
            <h2 className="text-foreground mt-2 text-3xl font-medium tracking-tight md:text-4xl">
              What we can do for you
            </h2>
          </div>
          <div className="flex items-end p-6 md:p-8">
            <p className="text-muted-foreground text-sm leading-relaxed">
              Tailored solutions for businesses of all sizes across Australia.
            </p>
          </div>
        </div>
      </div>

      {/* Features grid */}
      <div className="border-border border-b">
        {ITEMS.map((item, i) => (
          <FeatureRow key={i} {...item} index={i} />
        ))}
      </div>
    </div>
  </section>
);

function FeatureRow(props: ItemType & { index: number }) {
  const { title, description, image, link, index } = props;
  const number = String(index + 1).padStart(2, '0');
  const isEven = index % 2 === 0;

  return (
    <div
      className={`grid grid-cols-1 md:grid-cols-12 ${
        index < ITEMS.length - 1 ? 'border-border border-b' : ''
      }`}
    >
      {/* Number column */}
      <div
        className={`hidden items-start p-8 md:flex ${
          isEven ? 'border-border order-1 border-r' : 'order-3'
        }`}
      >
        <span className="text-dark-gray text-4xl font-light tracking-tighter">
          {number}
        </span>
      </div>

      {/* Content column */}
      <div
        className={`flex flex-col justify-between p-6 md:col-span-5 md:p-10 ${
          isEven
            ? 'md:border-border order-2 md:border-r'
            : 'md:border-border order-2 md:border-r'
        }`}
      >
        <div>
          <span className="text-dark-gray text-sm font-light md:hidden">
            {number}
          </span>
          <h3 className="text-foreground mt-2 text-2xl font-medium md:mt-0 md:text-3xl">
            {title}
          </h3>
          <p className="text-muted-foreground mt-4 leading-relaxed">
            {description}
          </p>
        </div>
        <Link
          href={link}
          className="text-foreground hover:bg-foreground hover:text-background border-border mt-8 inline-flex w-fit items-center gap-2 border px-4 py-2 text-sm font-medium transition-colors"
        >
          Learn more
          <ArrowUpRight className="size-4" />
        </Link>
      </div>

      {/* Image column */}
      <div
        className={`relative aspect-[4/3] md:col-span-6 md:aspect-auto ${
          isEven ? 'order-3' : 'md:border-border order-1 md:border-r'
        }`}
      >
        <Image
          src={image.src}
          alt={image.alt}
          fill
          className="object-cover"
          priority={index < 2}
        />
      </div>
    </div>
  );
}
