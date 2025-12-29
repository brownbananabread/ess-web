'use client';

import { Cookie } from 'lucide-react';

import CookiePolicy from './cookie-policy.mdx';

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
            {/* Title block */}
            <div className="border-border p-6 pt-24 md:col-span-9 md:border-r md:p-12 md:pt-32">
              <span className="text-muted-foreground text-xs font-medium tracking-widest uppercase">
                Legal
              </span>
              <h1 className="text-foreground mt-4 text-4xl font-medium tracking-tight md:text-5xl lg:text-6xl">
                Cookie Policy
              </h1>
              <p className="text-muted-foreground mt-4 max-w-xl leading-relaxed">
                How we use cookies and similar technologies to improve your
                experience.
              </p>
            </div>

            {/* Icon block */}
            <div className="flex items-center justify-center p-6 md:col-span-3 md:p-8">
              <Cookie
                className="text-dark-gray size-16 md:size-24"
                strokeWidth={1}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="bg-obsidian border-border relative overflow-hidden border-t px-2.5 py-12 md:py-20 lg:px-0">
        {/* Side borders */}
        <div className="bg-border pointer-events-none absolute inset-y-0 left-2.5 z-10 w-px lg:left-[calc((100%-1280px)/2)]" />
        <div className="bg-border pointer-events-none absolute inset-y-0 right-2.5 z-10 w-px lg:right-[calc((100%-1280px)/2)]" />

        <div className="mx-auto w-full max-w-[1280px] px-6 md:px-12">
          <article className="prose prose-sm dark:prose-invert prose-headings:text-foreground prose-h1:hidden max-w-2xl">
            <CookiePolicy />
          </article>
        </div>
      </section>
    </>
  );
};

export default Page;
