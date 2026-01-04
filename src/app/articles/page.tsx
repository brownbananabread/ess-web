import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

import { getAllArticles } from '@/lib/articles';

export const metadata = {
  title: 'Articles',
  description:
    'Insights and guides on workplace health and safety, ISO systems, and building effective safety cultures.',
};

export default function ArticlesPage() {
  const articles = getAllArticles();

  return (
    <main className="bg-obsidian min-h-screen">
      {/* Hero */}
      <section className="border-border relative border-b px-2.5 pt-32 pb-20 md:pt-40 md:pb-24 lg:px-0">
        <div className="bg-border pointer-events-none absolute inset-y-0 left-2.5 z-10 w-px lg:left-[calc((100%-1280px)/2)]" />
        <div className="bg-border pointer-events-none absolute inset-y-0 right-2.5 z-10 w-px lg:right-[calc((100%-1280px)/2)]" />

        <div className="container">
          <p className="text-muted-foreground text-sm tracking-widest uppercase">
            Articles
          </p>
          <h1 className="text-foreground mt-4 max-w-2xl text-4xl font-medium tracking-tight md:text-5xl lg:text-6xl">
            Insights on workplace safety
          </h1>
          <p className="text-muted-foreground mt-6 max-w-xl leading-relaxed">
            Practical guides and expert perspectives on WHS compliance, ISO
            systems, and building effective safety cultures.
          </p>
        </div>
      </section>

      {/* Articles list */}
      <section className="relative px-2.5 py-20 md:py-24 lg:px-0">
        <div className="bg-border pointer-events-none absolute inset-y-0 left-2.5 z-10 w-px lg:left-[calc((100%-1280px)/2)]" />
        <div className="bg-border pointer-events-none absolute inset-y-0 right-2.5 z-10 w-px lg:right-[calc((100%-1280px)/2)]" />

        <div className="container">
          <div className="divide-border divide-y">
            {articles.map((article) => (
              <Link
                key={article.slug}
                href={`/articles/${article.slug}`}
                className="group block py-10 first:pt-0 last:pb-0"
              >
                <div className="grid gap-6 lg:grid-cols-12 lg:gap-12">
                  {/* Date */}
                  <div className="lg:col-span-3">
                    <p className="text-muted-foreground text-sm">
                      {new Date(article.date).toLocaleDateString('en-AU', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </p>
                    {article.tagline && (
                      <p className="text-dark-gray mt-1 text-sm">
                        {article.tagline}
                      </p>
                    )}
                  </div>

                  {/* Content */}
                  <div className="lg:col-span-9">
                    <h2 className="text-foreground text-xl font-medium tracking-tight md:text-2xl">
                      {article.title}
                    </h2>
                    <p className="text-muted-foreground mt-3 line-clamp-2 leading-relaxed">
                      {article.description}
                    </p>
                    <div className="text-foreground mt-4 flex items-center gap-2 text-sm font-medium opacity-0 transition-opacity group-hover:opacity-100">
                      Read article
                      <ArrowRight className="size-4" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
