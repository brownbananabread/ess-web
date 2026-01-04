'use client';

import { ArrowLeft, Home } from 'lucide-react';
import Link from 'next/link';

import AspectSeparator from '@/components/sections/aspect-separator';

export default function NotFound() {
  return (
    <>
      <section className="bg-obsidian relative overflow-hidden px-2.5 lg:px-0">
        {/* Side borders */}
        <div className="bg-border pointer-events-none absolute inset-y-0 left-2.5 z-10 w-px lg:left-[calc((100%-1280px)/2)]" />
        <div className="bg-border pointer-events-none absolute inset-y-0 right-2.5 z-10 w-px lg:right-[calc((100%-1280px)/2)]" />

        <div className="mx-auto w-full max-w-[1280px]">
          {/* Hero grid - asymmetric 5 column layout */}
          <div className="border-border grid grid-cols-1 border-b md:grid-cols-5">
            {/* Title area */}
            <div className="border-border border-b p-6 pt-24 md:col-span-3 md:border-r md:border-b-0 md:p-12 md:pt-32">
              <span className="text-muted-foreground text-xs font-medium tracking-widest uppercase">
                Error 404
              </span>
              <h1 className="text-foreground mt-4 text-4xl font-medium tracking-tight md:text-5xl lg:text-6xl">
                Page Not Found
              </h1>
              <p className="text-muted-foreground mt-6 max-w-lg leading-relaxed">
                The page you're looking for doesn't exist or has been moved.
                Let's get you back on track.
              </p>
            </div>

            {/* Large accent block */}
            <div className="hidden items-end justify-end p-8 md:col-span-2 md:flex">
              <p className="text-dark-gray text-right text-8xl leading-none font-light tracking-tighter lg:text-9xl">
                404
              </p>
            </div>
          </div>

          {/* Action buttons grid */}
          <div className="border-border grid grid-cols-1 border-b md:grid-cols-2">
            <Link
              href="/"
              className="border-border hover:bg-dark-gray group flex items-center gap-4 border-b p-6 transition-colors md:border-r md:border-b-0 md:p-8"
            >
              <Home
                className="text-muted-foreground size-5"
                strokeWidth={1.5}
              />
              <div>
                <p className="text-muted-foreground text-xs tracking-widest uppercase">
                  Home
                </p>
                <p className="text-foreground mt-1 text-sm font-medium">
                  Return to homepage
                </p>
              </div>
            </Link>
            <button
              onClick={() => history.back()}
              className="hover:bg-dark-gray group flex items-center gap-4 p-6 text-left transition-colors md:p-8"
            >
              <ArrowLeft
                className="text-muted-foreground size-5"
                strokeWidth={1.5}
              />
              <div>
                <p className="text-muted-foreground text-xs tracking-widest uppercase">
                  Go Back
                </p>
                <p className="text-foreground mt-1 text-sm font-medium">
                  Return to previous page
                </p>
              </div>
            </button>
          </div>
        </div>
      </section>
      <AspectSeparator />
    </>
  );
}
