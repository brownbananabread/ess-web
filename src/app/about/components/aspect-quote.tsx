import { Quote } from 'lucide-react';

interface AspectQuoteProps {
  quote: string;
  author: string;
  role?: string;
}

export default function AspectQuote({ quote, author, role }: AspectQuoteProps) {
  return (
    <section className="bg-obsidian relative px-2.5 lg:px-0">
      {/* Side borders */}
      <div className="bg-border pointer-events-none absolute inset-y-0 left-2.5 z-10 w-px lg:left-[calc((100%-1280px)/2)]" />
      <div className="bg-border pointer-events-none absolute inset-y-0 right-2.5 z-10 w-px lg:right-[calc((100%-1280px)/2)]" />

      <div className="mx-auto w-full max-w-[1280px]">
        <div className="bg-jet border-border border-b">
          <div className="flex flex-col items-center px-6 py-16 text-center md:px-16 md:py-24">
            <Quote
              className="text-dark-gray mb-8 size-12 rotate-180"
              strokeWidth={1}
            />
            <blockquote className="text-foreground max-w-3xl text-2xl leading-relaxed font-light tracking-tight md:text-3xl lg:text-4xl">
              {quote}
            </blockquote>
            <div className="mt-8">
              <cite className="text-foreground font-medium not-italic">
                {author}
              </cite>
              {role && (
                <p className="text-muted-foreground mt-1 text-sm">{role}</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
