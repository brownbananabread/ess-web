import { Heart, Shield, Target, Users } from 'lucide-react';

const VALUES = [
  {
    icon: Shield,
    title: 'Integrity',
    description:
      'We operate with complete transparency and honesty, ensuring our recommendations always prioritize your safety over profit.',
  },
  {
    icon: Users,
    title: 'Collaboration',
    description:
      'Safety is a team effort. We work alongside your staff to build a culture where everyone takes ownership of workplace wellbeing.',
  },
  {
    icon: Target,
    title: 'Excellence',
    description:
      'We go beyond compliance to deliver best-practice solutions tailored to your unique operational requirements.',
  },
  {
    icon: Heart,
    title: 'Care',
    description:
      'Every worker deserves to return home safely. This belief drives everything we do and every solution we create.',
  },
];

export default function AspectValues() {
  return (
    <section className="bg-obsidian relative px-2.5 lg:px-0">
      {/* Side borders */}
      <div className="bg-border pointer-events-none absolute inset-y-0 left-2.5 z-10 w-px lg:left-[calc((100%-1280px)/2)]" />
      <div className="bg-border pointer-events-none absolute inset-y-0 right-2.5 z-10 w-px lg:right-[calc((100%-1280px)/2)]" />

      <div className="mx-auto w-full max-w-[1280px]">
        <div className="border-border border-b">
          <div className="border-border border-b px-6 py-12 md:px-16 md:py-16">
            <span className="text-muted-foreground text-xs font-medium tracking-widest uppercase">
              Our Foundation
            </span>
            <h2 className="text-foreground mt-2 max-w-xl text-3xl font-medium tracking-tight md:text-4xl">
              The values that guide every decision we make
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2">
            {VALUES.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={value.title}
                  className={`group hover:bg-jet p-6 transition-colors md:p-10 ${
                    index % 2 === 0 ? 'md:border-border md:border-r' : ''
                  } ${index < VALUES.length - 2 ? 'border-border border-b' : ''} ${
                    index === VALUES.length - 2
                      ? 'border-border border-b md:border-b-0'
                      : ''
                  }`}
                >
                  <div className="bg-jet group-hover:bg-charcoal border-border mb-6 inline-flex size-12 items-center justify-center border transition-colors">
                    <Icon
                      className="text-foreground size-5"
                      strokeWidth={1.5}
                    />
                  </div>
                  <h3 className="text-foreground text-xl font-medium">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground mt-2 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
