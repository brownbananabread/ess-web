const STATS = [
  { value: '4+', label: 'Years Experience' },
  { value: '10+', label: 'Businesses Helped' },
  { value: '100%', label: 'Client Satisfaction' },
];

export default function AspectStats() {
  return (
    <section className="bg-obsidian border-border relative border-t px-2.5 lg:px-0">
      {/* Side borders */}
      <div className="bg-border pointer-events-none absolute inset-y-0 left-2.5 z-10 w-px lg:left-[calc((100%-1280px)/2)]" />
      <div className="bg-border pointer-events-none absolute inset-y-0 right-2.5 z-10 w-px lg:right-[calc((100%-1280px)/2)]" />

      <div className="container">
        <div className="border-border grid grid-cols-1 divide-y md:grid-cols-3 md:divide-x md:divide-y-0">
          {STATS.map((stat) => (
            <div key={stat.label} className="py-10 text-center md:py-12">
              <p className="text-foreground text-4xl font-light tracking-tight md:text-5xl">
                {stat.value}
              </p>
              <p className="text-muted-foreground mt-2 text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
