'use client';

import Terms from './terms.mdx';

const Page = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-obsidian relative overflow-hidden px-2.5 lg:px-0">
        {/* Side borders */}
        <div className="bg-border pointer-events-none absolute inset-y-0 left-2.5 z-10 w-px lg:left-[calc((100%-1280px)/2)]" />
        <div className="bg-border pointer-events-none absolute inset-y-0 right-2.5 z-10 w-px lg:right-[calc((100%-1280px)/2)]" />

        <div className="mx-auto w-full max-w-[1280px]">
          <div className="border-border grid grid-cols-1 md:grid-cols-12">
            {/* Title block - full width */}
            <div className="p-6 pt-24 md:col-span-12 md:p-12 md:pt-32">
              <span className="text-muted-foreground text-xs font-medium tracking-widest uppercase">
                Legal
              </span>
              <h1 className="text-foreground mt-4 text-4xl font-medium tracking-tight md:text-5xl lg:text-6xl">
                Terms of Service
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* Info bar - full width borders */}
      <section className="bg-obsidian border-border relative border-y px-2.5 lg:px-0">
        {/* Side borders */}
        <div className="bg-border pointer-events-none absolute inset-y-0 left-2.5 z-10 w-px lg:left-[calc((100%-1280px)/2)]" />
        <div className="bg-border pointer-events-none absolute inset-y-0 right-2.5 z-10 w-px lg:right-[calc((100%-1280px)/2)]" />

        <div className="mx-auto w-full max-w-[1280px]">
          <div className="grid grid-cols-2 md:grid-cols-4">
            <div className="border-border border-r p-4 md:p-6">
              <p className="text-muted-foreground text-xs tracking-wider uppercase">
                Effective
              </p>
              <p className="text-foreground mt-1 text-sm font-medium">
                January 2025
              </p>
            </div>
            <div className="border-border p-4 md:border-r md:p-6">
              <p className="text-muted-foreground text-xs tracking-wider uppercase">
                Version
              </p>
              <p className="text-foreground mt-1 text-sm font-medium">1.0</p>
            </div>
            <div className="border-border border-t border-r p-4 md:border-t-0 md:p-6">
              <p className="text-muted-foreground text-xs tracking-wider uppercase">
                Jurisdiction
              </p>
              <p className="text-foreground mt-1 text-sm font-medium">
                Australia
              </p>
            </div>
            <div className="border-border border-t p-4 md:border-t-0 md:p-6">
              <p className="text-muted-foreground text-xs tracking-wider uppercase">
                Type
              </p>
              <p className="text-foreground mt-1 text-sm font-medium">
                Service Agreement
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="bg-obsidian border-border relative overflow-hidden px-2.5 py-12 md:py-20 lg:px-0">
        {/* Side borders */}
        <div className="bg-border pointer-events-none absolute inset-y-0 left-2.5 z-10 w-px lg:left-[calc((100%-1280px)/2)]" />
        <div className="bg-border pointer-events-none absolute inset-y-0 right-2.5 z-10 w-px lg:right-[calc((100%-1280px)/2)]" />

        <div className="mx-auto w-full max-w-[1280px] px-6 md:px-12">
          <article className="prose prose-sm dark:prose-invert prose-headings:text-foreground prose-h1:hidden max-w-2xl">
            <Terms />
          </article>
        </div>
      </section>
    </>
  );
};

export default Page;
