const STEPS = [
  {
    number: '01',
    title: 'Consultation',
    description:
      'We meet with your team to understand your needs, identify risks, and plan the way forward.',
  },
  {
    number: '02',
    title: 'Implementation',
    description:
      'We work alongside your staff to implement systems using a people-focused approach.',
  },
  {
    number: '03',
    title: 'Review',
    description:
      'We review effectiveness and provide recommendations for ongoing improvement.',
  },
  {
    number: '04',
    title: 'Support',
    description:
      'Ongoing compliance support, audits, and training updates when you need them.',
  },
];

const AspectDashboard = () => {
  return (
    <section className="bg-obsidian border-border relative border-t px-2.5 py-20 md:py-32 lg:px-0">
      {/* Side borders */}
      <div className="bg-border pointer-events-none absolute inset-y-0 left-2.5 z-10 w-px lg:left-[calc((100%-1280px)/2)]" />
      <div className="bg-border pointer-events-none absolute inset-y-0 right-2.5 z-10 w-px lg:right-[calc((100%-1280px)/2)]" />

      <div className="container">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
          {/* Left side - Header */}
          <div>
            <p className="text-muted-foreground text-sm tracking-widest uppercase">
              Our Process
            </p>
            <h2 className="text-foreground mt-4 text-3xl font-medium tracking-tight md:text-4xl">
              A streamlined approach to WHS compliance
            </h2>
            <p className="text-muted-foreground mt-6 leading-relaxed">
              We pride ourselves on a simple, effective methodology that suits
              your business requirements and achieves lasting compliance.
            </p>
          </div>

          {/* Right side - Steps */}
          <div className="space-y-8">
            {STEPS.map((step) => (
              <div key={step.number} className="flex gap-6">
                <span className="text-dark-gray text-3xl font-light tracking-tighter">
                  {step.number}
                </span>
                <div className="border-dark-gray flex-1 border-l pl-6">
                  <h3 className="text-foreground text-lg font-medium">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground mt-2 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AspectDashboard;
