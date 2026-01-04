export default function AspectTestimonial() {
  return (
    <section className="bg-obsidian border-border relative border-t px-2.5 py-20 md:py-32 lg:px-0">
      {/* Side borders */}
      <div className="bg-border pointer-events-none absolute inset-y-0 left-2.5 z-10 w-px lg:left-[calc((100%-1280px)/2)]" />
      <div className="bg-border pointer-events-none absolute inset-y-0 right-2.5 z-10 w-px lg:right-[calc((100%-1280px)/2)]" />

      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-muted-foreground text-sm tracking-widest uppercase">
            What Clients Say
          </p>
          <blockquote className="mt-8">
            <p className="text-foreground text-2xl leading-relaxed font-light md:text-3xl lg:text-4xl">
              "The collaborative approach of Eternal Safety has fostered a
              positive safety culture across our projects, ensuring that WHS
              remains at the forefront of our operations."
            </p>
          </blockquote>
          <div className="mt-8">
            <p className="text-foreground text-sm font-medium">
              Project Manager
            </p>
            <p className="text-muted-foreground text-sm">
              Construction Industry
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
