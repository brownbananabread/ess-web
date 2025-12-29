'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

interface Heading {
  id: string;
  text: string;
  level: number;
}

export interface AspectBlogPostProps {
  tagline: string;
  title: string;
  intro: string;
  image: string;
  author: string;
  published: string;
  link?: string;
  children: React.ReactNode;
}

export default function AspectBlogPost({
  tagline,
  title,
  intro,
  image,
  author,
  published,
  children,
}: AspectBlogPostProps) {
  const [headings, setHeadings] = useState<Heading[]>([]);
  const [activeId, setActiveId] = useState<string>('');

  const formattedDate = new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  }).format(new Date(published));

  useEffect(() => {
    const articleEl = document.querySelector('article');
    if (!articleEl) return;

    const headingEls = articleEl.querySelectorAll('h2, h3');
    const extractedHeadings: Heading[] = Array.from(headingEls).map((el) => {
      if (!el.id) {
        el.id = el.textContent?.toLowerCase().replace(/\s+/g, '-') ?? '';
      }
      return {
        id: el.id,
        text: el.textContent ?? '',
        level: parseInt(el.tagName[1]),
      };
    });
    setHeadings(extractedHeadings);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: '-80px 0px -80% 0px' },
    );

    headingEls.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [children]);

  return (
    <article className="bg-obsidian text-foreground relative px-2.5 lg:px-0">
      {/* Side borders */}
      <div className="bg-border pointer-events-none absolute inset-y-0 left-2.5 z-10 w-px lg:left-[calc((100%-1280px)/2)]" />
      <div className="bg-border pointer-events-none absolute inset-y-0 right-2.5 z-10 w-px lg:right-[calc((100%-1280px)/2)]" />

      <div className="mx-auto w-full max-w-[1280px]">
        {/* Hero grid */}
        <div className="border-border grid grid-cols-1 border-b md:grid-cols-4">
          {/* Meta sidebar */}
          <div className="border-border md:border-border order-2 flex flex-row gap-6 border-t p-6 md:order-1 md:flex-col md:justify-between md:gap-0 md:border-t-0 md:border-r md:p-8 md:pt-32">
            <div>
              <p className="text-muted-foreground text-xs tracking-widest uppercase">
                Author
              </p>
              <p className="text-foreground mt-1 text-sm font-medium">
                {author}
              </p>
            </div>
            <div>
              <p className="text-muted-foreground text-xs tracking-widest uppercase">
                Published
              </p>
              <p className="text-foreground mt-1 text-sm font-medium">
                {formattedDate}
              </p>
            </div>
          </div>

          {/* Title area */}
          <div className="order-1 p-6 pt-24 md:order-2 md:col-span-3 md:p-12 md:pt-32">
            <span className="text-muted-foreground text-xs font-medium tracking-widest uppercase">
              {tagline}
            </span>
            <h1 className="text-foreground mt-4 text-3xl font-medium tracking-tight md:text-4xl lg:text-5xl">
              {title}
            </h1>
            <p className="text-muted-foreground mt-6 max-w-2xl leading-relaxed">
              {intro}
            </p>
          </div>
        </div>

        {/* Full-width image */}
        <div className="border-border border-b">
          <Image
            src={image}
            alt={title}
            width={1280}
            height={720}
            className="aspect-[21/9] w-full object-cover"
            priority
          />
        </div>

        {/* Content area */}
        <div className="border-border grid grid-cols-1 border-b md:grid-cols-4">
          {/* Sidebar with TOC */}
          <div className="md:border-border hidden md:block md:border-r">
            <div className="sticky top-0 p-8">
              <div className="bg-foreground mb-4 h-px w-8" />
              <p className="text-muted-foreground mb-4 text-xs tracking-widest uppercase">
                Article
              </p>
              {headings.length > 0 && (
                <nav className="mt-6">
                  <ul className="space-y-2">
                    {headings.map((heading) => (
                      <li
                        key={heading.id}
                        className={heading.level === 3 ? 'pl-3' : ''}
                      >
                        <a
                          href={`#${heading.id}`}
                          className={`text-sm transition-colors ${
                            activeId === heading.id
                              ? 'text-foreground'
                              : 'text-muted-foreground hover:text-foreground'
                          }`}
                        >
                          {heading.text}
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>
              )}
            </div>
          </div>

          {/* MDX body */}
          <section className="prose prose-lg dark:prose-invert col-span-1 px-6 py-12 [--tw-prose-body:var(--color-foreground)] [--tw-prose-bold:var(--color-foreground)] [--tw-prose-headings:var(--color-foreground)] [--tw-prose-links:var(--color-foreground)] md:col-span-3 md:px-12 md:py-16 [&_h2]:scroll-mt-10 [&_h3]:scroll-mt-10">
            {children}
          </section>
        </div>
      </div>
    </article>
  );
}
