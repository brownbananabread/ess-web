export default function AspectBlogHero() {
  return (
    <section className="bg-obsidian relative overflow-hidden px-2.5 lg:px-0">
      {/* Side borders */}
      <div className="bg-border pointer-events-none absolute inset-y-0 left-2.5 z-10 w-px lg:left-[calc((100%-1280px)/2)]" />
      <div className="bg-border pointer-events-none absolute inset-y-0 right-2.5 z-10 w-px lg:right-[calc((100%-1280px)/2)]" />

      <div className="mx-auto w-full max-w-[1280px]">
        {/* Editorial-style grid hero */}
        <div className="border-border grid grid-cols-1 border-b md:grid-cols-6">
          {/* Vertical accent strip */}
          <div className="border-border hidden items-center justify-center border-r md:flex">
            <span className="text-dark-gray -rotate-90 text-sm font-medium tracking-[0.3em] whitespace-nowrap uppercase">
              Insights & Updates
            </span>
          </div>

          {/* Main title area */}
          <div className="md:border-border col-span-1 p-6 pt-24 md:col-span-3 md:border-r md:p-12 md:pt-32">
            <span className="text-muted-foreground text-xs font-medium tracking-widest uppercase">
              Blog
            </span>
            <h1 className="text-foreground mt-4 text-4xl font-medium tracking-tight md:text-5xl lg:text-6xl">
              Safety Insights
            </h1>
            <p className="text-muted-foreground mt-6 max-w-md leading-relaxed">
              Your source for workplace health and safety tips, compliance
              updates, and industry insights.
            </p>
          </div>

          {/* Decorative blocks */}
          <div className="hidden flex-col md:col-span-2 md:flex">
            <div className="border-border flex flex-1 items-end border-b p-8">
              <p className="text-dark-gray text-8xl font-light tracking-tighter">
                101
              </p>
            </div>
            <div className="flex flex-1 items-start p-8">
              <div>
                <p className="text-foreground text-sm font-medium tracking-widest uppercase">
                  Stay Informed
                </p>
                <p className="text-muted-foreground mt-2 text-sm">
                  Building proactive safety cultures
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
