import {
  CalendarCheck,
  FileCheck,
  MessageSquare,
  ShieldCheck,
} from 'lucide-react';

const reasons = [
  {
    icon: MessageSquare,
    title: 'Free Consultation',
    description:
      'Start with a no-obligation conversation about your WHS needs. We listen first, then provide honest, expert advice.',
  },
  {
    icon: ShieldCheck,
    title: 'Compliance Support',
    description:
      'Navigate complex WHS regulations with confidence. We help you understand and meet your legal obligations.',
  },
  {
    icon: FileCheck,
    title: 'Custom Solutions',
    description:
      'No generic templates here. Every document, system, and strategy is tailored to your specific business.',
  },
  {
    icon: CalendarCheck,
    title: 'Ongoing Partnership',
    description:
      'Safety is a journey, not a destination. We offer continued support to maintain and improve your safety culture.',
  },
];

export default function AspectContactReasons() {
  return (
    <section className="bg-obsidian relative px-2.5 lg:px-0">
      {/* Side borders */}
      <div className="bg-border pointer-events-none absolute inset-y-0 left-2.5 z-10 w-px lg:left-[calc((100%-1280px)/2)]" />
      <div className="bg-border pointer-events-none absolute inset-y-0 right-2.5 z-10 w-px lg:right-[calc((100%-1280px)/2)]" />

      <div className="mx-auto w-full max-w-[1280px]">
        <div className="border-border border-b">
          <div className="border-border border-b px-6 py-12 md:px-12 md:py-16">
            <span className="text-muted-foreground text-xs font-medium tracking-widest uppercase">
              Why Reach Out
            </span>
            <h2 className="text-foreground mt-2 max-w-xl text-3xl font-medium tracking-tight md:text-4xl">
              Every conversation is a step toward a safer workplace
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2">
            {reasons.map((reason, index) => {
              const Icon = reason.icon;
              return (
                <div
                  key={reason.title}
                  className={`group hover:bg-jet p-6 transition-colors md:p-10 ${
                    index % 2 === 0 ? 'md:border-border md:border-r' : ''
                  } ${index < reasons.length - 2 ? 'border-border border-b' : ''} ${
                    index === reasons.length - 2
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
                    {reason.title}
                  </h3>
                  <p className="text-muted-foreground mt-2 leading-relaxed">
                    {reason.description}
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
