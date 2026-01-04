import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: 'Solutions',
  description:
    'Comprehensive WHS consulting services including ISO systems, risk management, training, and compliance audits.',
};

const SOLUTIONS = [
  {
    number: '01',
    title: 'ISO Systems',
    description:
      'Complete ISO45001, ISO14001, and ISO9001 system development, implementation, and certification support. We guide you through the entire process from gap analysis to successful certification.',
    features: [
      'Gap analysis and readiness assessment',
      'System development and documentation',
      'Implementation support',
      'Internal audit preparation',
      'Certification audit support',
    ],
  },
  {
    number: '02',
    title: 'Risk Management',
    description:
      'Comprehensive risk assessments, SWMS, SWPs, and hazard identification to protect your workers and ensure compliance with WHS legislation.',
    features: [
      'Workplace risk assessments',
      'SWMS and SWP development',
      'Hazard identification',
      'Risk control implementation',
      'Ongoing risk monitoring',
    ],
  },
  {
    number: '03',
    title: 'Training',
    description:
      'Practical, engaging training programs designed to build safety capability across your organisation. From executive due diligence to frontline worker inductions.',
    features: [
      'Officer due diligence training',
      'Contractor management',
      'Risk management fundamentals',
      'Safety leadership programs',
      'Custom training solutions',
    ],
  },
  {
    number: '04',
    title: 'Site Inspections',
    description:
      'Thorough workplace inspections with detailed reports and prioritized action plans. We identify hazards before they become incidents.',
    features: [
      'Comprehensive site audits',
      'Hazard identification reports',
      'Prioritized recommendations',
      'Follow-up verification',
      'Compliance gap analysis',
    ],
  },
  {
    number: '05',
    title: 'Documentation',
    description:
      'Bespoke safety documentation tailored to your business operations. From policies and procedures to emergency response plans.',
    features: [
      'Safety policies and procedures',
      'SWMS and SWP creation',
      'Emergency response plans',
      'Safety management plans',
      'Contractor documentation',
    ],
  },
  {
    number: '06',
    title: 'Compliance Consulting',
    description:
      'Navigate WHS legislation with confidence. We provide ongoing compliance support, legislative updates, and officer due diligence guidance.',
    features: [
      'Legislative compliance audits',
      'Due diligence frameworks',
      'Regulatory liaison support',
      'Compliance monitoring',
      'Incident investigation',
    ],
  },
];

export default function SolutionsPage() {
  return (
    <main className="bg-obsidian min-h-screen">
      {/* Hero */}
      <section className="border-border relative border-b px-2.5 pt-32 pb-20 md:pt-40 md:pb-24 lg:px-0">
        <div className="bg-border pointer-events-none absolute inset-y-0 left-2.5 z-10 w-px lg:left-[calc((100%-1280px)/2)]" />
        <div className="bg-border pointer-events-none absolute inset-y-0 right-2.5 z-10 w-px lg:right-[calc((100%-1280px)/2)]" />

        <div className="container">
          <p className="text-muted-foreground text-sm tracking-widest uppercase">
            Solutions
          </p>
          <h1 className="text-foreground mt-4 max-w-3xl text-4xl font-medium tracking-tight md:text-5xl lg:text-6xl">
            Comprehensive WHS services for your business
          </h1>
          <p className="text-muted-foreground mt-6 max-w-xl leading-relaxed">
            From compliance audits to complete system builds, we provide
            everything you need to create and maintain a safe workplace.
          </p>
        </div>
      </section>

      {/* Solutions list */}
      <section className="relative px-2.5 lg:px-0">
        <div className="bg-border pointer-events-none absolute inset-y-0 left-2.5 z-10 w-px lg:left-[calc((100%-1280px)/2)]" />
        <div className="bg-border pointer-events-none absolute inset-y-0 right-2.5 z-10 w-px lg:right-[calc((100%-1280px)/2)]" />

        <div className="container">
          <div className="divide-border divide-y">
            {SOLUTIONS.map((solution) => (
              <div
                key={solution.number}
                className="grid gap-8 py-16 md:py-20 lg:grid-cols-12 lg:gap-16"
              >
                {/* Left - Number and title */}
                <div className="lg:col-span-5">
                  <span className="text-dark-gray text-5xl font-light tracking-tighter md:text-6xl">
                    {solution.number}
                  </span>
                  <h2 className="text-foreground mt-4 text-2xl font-medium tracking-tight md:text-3xl">
                    {solution.title}
                  </h2>
                  <p className="text-muted-foreground mt-4 leading-relaxed">
                    {solution.description}
                  </p>
                  <Link
                    href="/contact"
                    className="text-foreground mt-6 inline-flex items-center gap-2 text-sm font-medium"
                  >
                    Get started
                    <ArrowRight className="size-4" />
                  </Link>
                </div>

                {/* Right - Features */}
                <div className="lg:col-span-7">
                  <p className="text-muted-foreground mb-4 text-sm tracking-widest uppercase">
                    What's included
                  </p>
                  <ul className="space-y-3">
                    {solution.features.map((feature, i) => (
                      <li
                        key={i}
                        className="border-border text-foreground flex items-center gap-4 border-b py-3"
                      >
                        <span className="text-dark-gray text-sm">
                          {String(i + 1).padStart(2, '0')}
                        </span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-border relative border-t px-2.5 py-20 md:py-24 lg:px-0">
        <div className="bg-border pointer-events-none absolute inset-y-0 left-2.5 z-10 w-px lg:left-[calc((100%-1280px)/2)]" />
        <div className="bg-border pointer-events-none absolute inset-y-0 right-2.5 z-10 w-px lg:right-[calc((100%-1280px)/2)]" />

        <div className="container">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="text-foreground text-3xl font-medium tracking-tight md:text-4xl">
                Not sure where to start?
              </h2>
              <p className="text-muted-foreground mt-4 max-w-lg leading-relaxed">
                Book a free consultation and we'll help you identify the right
                solutions for your business.
              </p>
            </div>
            <div className="lg:text-right">
              <Link
                href="/contact"
                className="bg-foreground text-background hover:bg-foreground/90 inline-flex items-center gap-3 px-8 py-4 text-sm font-medium transition-colors"
              >
                Book Free Consultation
                <ArrowRight className="size-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
