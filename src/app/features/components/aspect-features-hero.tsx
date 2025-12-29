import Image from 'next/image';

const services = [
  { number: '01', label: 'Consulting' },
  { number: '02', label: 'Training' },
  { number: '03', label: 'Audits' },
  { number: '04', label: 'Systems' },
];

export default function AspectFeaturesHero() {
  return (
    <section className="bg-obsidian relative overflow-hidden px-2.5 lg:px-0">
      {/* Side borders */}
      <div className="bg-border pointer-events-none absolute inset-y-0 left-2.5 z-10 w-px lg:left-[calc((100%-1280px)/2)]" />
      <div className="bg-border pointer-events-none absolute inset-y-0 right-2.5 z-10 w-px lg:right-[calc((100%-1280px)/2)]" />

      <div className="mx-auto w-full max-w-[1280px]">
        {/* Hero grid - staggered layout */}
        <div className="border-border grid grid-cols-1 border-b md:grid-cols-2">
          {/* Title area */}
          <div className="md:border-border p-6 pt-24 md:border-r md:p-12 md:pt-32">
            <span className="text-muted-foreground text-xs font-medium tracking-widest uppercase">
              What We Offer
            </span>
            <h1 className="text-foreground mt-4 text-4xl font-medium tracking-tight md:text-5xl lg:text-6xl">
              Our Solutions
            </h1>
            <p className="text-muted-foreground mt-6 max-w-md leading-relaxed">
              Comprehensive WHS consultation services tailored to your business
              scale, operations, and requirements.
            </p>
          </div>

          {/* Service numbers grid */}
          <div className="grid grid-cols-2">
            {services.map((service, index) => (
              <div
                key={service.number}
                className={`flex flex-col justify-between p-6 md:p-8 ${
                  index % 2 === 0 ? 'border-border border-r' : ''
                } ${index < 2 ? 'border-border border-b' : ''}`}
              >
                <span className="text-dark-gray text-4xl font-light tracking-tighter md:text-5xl">
                  {service.number}
                </span>
                <span className="text-foreground mt-4 text-sm font-medium tracking-widest uppercase">
                  {service.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Full-width image */}
        <div className="border-border border-b">
          <Image
            src="/images/features/thumbnail.webp"
            alt="Workplace safety consultation"
            width={1920}
            height={600}
            className="aspect-[21/9] w-full object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}
