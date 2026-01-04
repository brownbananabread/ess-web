import { ArrowLeft } from 'lucide-react';
import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';

import { getAllSlugs, getPost } from '@/lib/mdx';

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const slugs = await getAllSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  try {
    const { frontmatter } = await getPost(slug);
    return {
      title: `${frontmatter.title} | Eternal Safety Solutions`,
      description: frontmatter.intro,
    };
  } catch {
    return {
      title: 'Article Not Found | Eternal Safety Solutions',
    };
  }
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;

  try {
    const { frontmatter, mdxContent } = await getPost(slug);

    return (
      <main className="bg-obsidian min-h-screen">
        {/* Header */}
        <section className="border-border relative border-b px-2.5 pt-32 pb-16 md:pt-40 md:pb-20 lg:px-0">
          <div className="bg-border pointer-events-none absolute inset-y-0 left-2.5 z-10 w-px lg:left-[calc((100%-1280px)/2)]" />
          <div className="bg-border pointer-events-none absolute inset-y-0 right-2.5 z-10 w-px lg:right-[calc((100%-1280px)/2)]" />

          <div className="container">
            <Link
              href="/articles"
              className="text-muted-foreground hover:text-foreground mb-8 inline-flex items-center gap-2 text-sm transition-colors"
            >
              <ArrowLeft className="size-4" />
              Back to articles
            </Link>

            <div className="mt-8 grid gap-8 lg:grid-cols-12">
              <div className="lg:col-span-8">
                {frontmatter.tagline && (
                  <p className="text-muted-foreground text-sm tracking-widest uppercase">
                    {frontmatter.tagline}
                  </p>
                )}
                <h1 className="text-foreground mt-4 text-3xl font-medium tracking-tight md:text-4xl lg:text-5xl">
                  {frontmatter.title}
                </h1>
                {frontmatter.intro && (
                  <p className="text-muted-foreground mt-6 text-lg leading-relaxed">
                    {frontmatter.intro}
                  </p>
                )}
              </div>

              <div className="lg:col-span-4 lg:text-right">
                <p className="text-muted-foreground text-sm">
                  {new Date(frontmatter.published).toLocaleDateString('en-AU', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </p>
                {frontmatter.author && (
                  <p className="text-foreground mt-1 text-sm font-medium">
                    {frontmatter.author}
                  </p>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="relative px-2.5 py-16 md:py-20 lg:px-0">
          <div className="bg-border pointer-events-none absolute inset-y-0 left-2.5 z-10 w-px lg:left-[calc((100%-1280px)/2)]" />
          <div className="bg-border pointer-events-none absolute inset-y-0 right-2.5 z-10 w-px lg:right-[calc((100%-1280px)/2)]" />

          <div className="container">
            <div className="mx-auto max-w-3xl">
              <article className="prose dark:prose-invert prose-lg prose-headings:text-foreground prose-headings:font-medium prose-headings:tracking-tight prose-h1:text-3xl prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-4 prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3 prose-p:text-muted-foreground prose-p:leading-relaxed prose-a:text-foreground prose-a:no-underline hover:prose-a:underline prose-strong:text-foreground prose-ul:text-muted-foreground prose-ol:text-muted-foreground prose-li:marker:text-dark-gray max-w-none">
                {mdxContent}
              </article>
            </div>
          </div>
        </section>

        {/* Back link */}
        <section className="border-border relative border-t px-2.5 py-12 lg:px-0">
          <div className="bg-border pointer-events-none absolute inset-y-0 left-2.5 z-10 w-px lg:left-[calc((100%-1280px)/2)]" />
          <div className="bg-border pointer-events-none absolute inset-y-0 right-2.5 z-10 w-px lg:right-[calc((100%-1280px)/2)]" />

          <div className="container">
            <Link
              href="/articles"
              className="text-foreground inline-flex items-center gap-2 text-sm font-medium"
            >
              <ArrowLeft className="size-4" />
              All articles
            </Link>
          </div>
        </section>
      </main>
    );
  } catch {
    notFound();
  }
}
