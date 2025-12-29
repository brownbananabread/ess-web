import Image from 'next/image';

export default function AspectAboutHero() {
  return (
    <section className="bg-obsidian relative overflow-hidden px-2.5 lg:px-0">
      {/* Side borders */}
      <div className="bg-border pointer-events-none absolute inset-y-0 left-2.5 z-10 w-px lg:left-[calc((100%-1280px)/2)]" />
      <div className="bg-border pointer-events-none absolute inset-y-0 right-2.5 z-10 w-px lg:right-[calc((100%-1280px)/2)]" />

      <div className="mx-auto w-full max-w-[1280px]">
        {/* Bento grid hero */}
        <div className="border-border grid grid-cols-1 border-b md:grid-cols-12 md:grid-rows-2">
          {/* Title block - spans full width on mobile, 7 cols on desktop */}
          <div className="border-border order-1 border-b p-6 pt-24 md:col-span-7 md:row-span-1 md:border-r md:border-b-0 md:p-12 md:pt-32">
            <span className="text-muted-foreground text-xs font-medium tracking-widest uppercase">
              About Us
            </span>
            <h1 className="text-foreground mt-4 text-4xl font-medium tracking-tight md:text-5xl lg:text-6xl">
              Building safer workplaces, one business at a time
            </h1>
          </div>

          {/* Large accent text block */}
          <div className="border-border order-2 flex items-center justify-center border-b p-6 md:col-span-5 md:row-span-1 md:p-8">
            <p className="text-dark-gray text-center text-7xl font-light tracking-tighter md:text-8xl lg:text-9xl">
              ESS
            </p>
          </div>

          {/* Image block */}
          <div className="md:border-border relative order-4 aspect-[4/3] md:order-3 md:col-span-8 md:row-span-1 md:aspect-auto md:border-r">
            <Image
              src="/images/about/1.webp"
              alt="ESS team at work"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Description block */}
          <div className="border-border order-3 flex flex-col justify-between border-b p-6 md:order-4 md:col-span-4 md:row-span-1 md:border-b-0 md:p-8">
            <p className="text-muted-foreground leading-relaxed">
              Eternal Safety Solutions (ESS) is founded on the principles of
              assisting businesses in achieving more than just compliance. We
              strive to build proactive and effective safety cultures, driving
              businesses forward in their own industries.
            </p>
            <div className="mt-6 flex items-center gap-4">
              <div className="bg-foreground h-px flex-1" />
              <span className="text-muted-foreground text-xs tracking-widest uppercase">
                New Era
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
