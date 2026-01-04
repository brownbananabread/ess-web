'use client';

import { Lock, ShieldCheck, UserCheck } from 'lucide-react';

import Privacy from './privacy.mdx';

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
            <div className="border-border p-6 pt-24 md:col-span-6 md:border-r md:p-12 md:pt-32">
              <span className="text-muted-foreground text-xs font-medium tracking-widest uppercase">
                Legal
              </span>
              <h1 className="text-foreground mt-4 text-4xl font-medium tracking-tight md:text-5xl lg:text-6xl">
                Privacy Policy
              </h1>
              <p className="text-muted-foreground mt-4 max-w-lg leading-relaxed">
                Your privacy matters to us. Learn how we collect, use, and
                protect your personal information.
              </p>
              <p className="text-muted-foreground mt-6 text-sm">
                Last updated: January 2025
              </p>
            </div>

            {/* Side blocks - stacked */}
            <div className="grid md:col-span-6 md:grid-rows-2">
              {/* Icons row */}
              <div className="border-border flex items-center justify-center border-t p-6 md:border-t-0 md:p-8">
                <div className="grid grid-cols-3 gap-12">
                  <div className="flex flex-col items-center gap-3 text-center">
                    <ShieldCheck
                      className="text-dark-gray size-10"
                      strokeWidth={1}
                    />
                    <span className="text-muted-foreground text-xs">
                      Protected
                    </span>
                  </div>
                  <div className="flex flex-col items-center gap-3 text-center">
                    <Lock className="text-dark-gray size-10" strokeWidth={1} />
                    <span className="text-muted-foreground text-xs">
                      Secure
                    </span>
                  </div>
                  <div className="flex flex-col items-center gap-3 text-center">
                    <UserCheck
                      className="text-dark-gray size-10"
                      strokeWidth={1}
                    />
                    <span className="text-muted-foreground text-xs">
                      Your Rights
                    </span>
                  </div>
                </div>
              </div>

              {/* Info row */}
              <div className="border-border flex items-center border-t p-6 md:p-8">
                <p className="text-muted-foreground text-sm leading-relaxed">
                  We comply with Australian Privacy Principles and are committed
                  to transparency in how we handle your data.
                </p>
              </div>
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
            <Privacy />
          </article>
        </div>
      </section>
    </>
  );
};

export default Page;
