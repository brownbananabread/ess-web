const STATS = [
  {
    number: '4+',
    label: 'Years Experience',
    description: 'Dedicated to workplace safety',
  },
  {
    number: '10+',
    label: 'Clients Served',
    description: 'Across diverse industries',
  },
  {
    number: '100%',
    label: 'Client Satisfaction',
    description: 'Long-term partnerships',
  },
  {
    number: '24/7',
    label: 'Support Available',
    description: 'When you need us most',
  },
];

export default function AspectStats() {
  return (
    <section className="bg-obsidian relative px-2.5 lg:px-0">
      {/* Side borders */}
      <div className="bg-border pointer-events-none absolute inset-y-0 left-2.5 z-10 w-px lg:left-[calc((100%-1280px)/2)]" />
      <div className="bg-border pointer-events-none absolute inset-y-0 right-2.5 z-10 w-px lg:right-[calc((100%-1280px)/2)]" />

      <div className="mx-auto w-full max-w-[1280px]">
        <div className="border-border grid grid-cols-2 border-b md:grid-cols-4">
          {STATS.map((stat, index) => (
            <div
              key={stat.label}
              className={`flex flex-col p-6 md:p-10 ${
                index < STATS.length - 1 ? 'border-border border-r' : ''
              } ${index < 2 ? 'border-border border-b md:border-b-0' : ''}`}
            >
              <span className="text-foreground text-4xl font-light tracking-tight md:text-5xl lg:text-6xl">
                {stat.number}
              </span>
              <span className="text-foreground mt-2 text-sm font-medium tracking-widest uppercase">
                {stat.label}
              </span>
              <span className="text-muted-foreground mt-1 text-sm">
                {stat.description}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
