'use client';

import { Quote, Star } from 'lucide-react';

const testimonials = [
  {
    quote:
      'The collaborative approach of Eternal Safety has fostered a positive safety culture across our projects, ensuring that WHS remains at the forefront of our operations.',
    author: 'Project Manager',
    company: 'Construction Industry',
    featured: true,
  },
  {
    quote:
      "Professional, thorough, and genuinely invested in our team's wellbeing. The documentation alone was worth the investment.",
    author: 'Operations Director',
    company: 'Manufacturing',
    featured: false,
  },
  {
    quote:
      'Finally, a safety consultant who understands that compliance and productivity can work together.',
    author: 'Business Owner',
    company: 'Logistics',
    featured: false,
  },
];

export default function AspectTestimonials() {
  return (
    <section className="bg-obsidian border-border relative overflow-hidden border-t px-2.5 py-20 md:py-32 lg:px-0">
      {/* Side borders */}
      <div className="bg-border pointer-events-none absolute inset-y-0 left-2.5 z-10 w-px lg:left-[calc((100%-1280px)/2)]" />
      <div className="bg-border pointer-events-none absolute inset-y-0 right-2.5 z-10 w-px lg:right-[calc((100%-1280px)/2)]" />

      <div className="mx-auto w-full max-w-[1280px]">
        {/* Header section */}
        <div className="border-border grid grid-cols-1 border-y md:grid-cols-12">
          {/* Title area */}
          <div className="md:border-border p-6 md:col-span-7 md:border-r md:p-12">
            <span className="text-muted-foreground text-xs font-medium tracking-widest uppercase">
              Testimonials
            </span>
            <h2 className="text-foreground mt-4 text-3xl font-medium tracking-tight md:text-4xl lg:text-5xl">
              What Our Clients Say
            </h2>
            <p className="text-muted-foreground mt-4 max-w-md leading-relaxed">
              See how we're helping businesses build proactive safety cultures
              and achieve compliance across Australia.
            </p>
          </div>

          {/* Rating block */}
          <div className="border-border flex flex-col justify-between border-t p-6 md:col-span-5 md:border-t-0 md:p-8">
            <div className="flex items-center gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className="text-star size-5"
                  fill="currentColor"
                />
              ))}
            </div>
            <div className="mt-8 md:mt-0">
              <p className="text-dark-gray text-6xl font-light tracking-tighter md:text-7xl">
                100%
              </p>
              <p className="text-muted-foreground mt-2 text-sm">
                Client Satisfaction
              </p>
            </div>
          </div>
        </div>

        {/* Testimonials grid */}
        <div className="border-border grid grid-cols-1 border-b md:grid-cols-12">
          {/* Featured testimonial - larger */}
          <div className="bg-jet md:border-border relative flex flex-col justify-between p-8 md:col-span-7 md:border-r md:p-12">
            <Quote
              className="text-dark-gray absolute top-8 right-8 size-12 md:size-16"
              strokeWidth={1}
            />
            <div>
              <p className="text-foreground relative z-10 text-xl leading-relaxed md:text-2xl">
                "{testimonials[0].quote}"
              </p>
            </div>
            <div className="border-border mt-8 border-t pt-6">
              <p className="text-foreground text-sm font-medium">
                {testimonials[0].author}
              </p>
              <p className="text-muted-foreground text-sm">
                {testimonials[0].company}
              </p>
            </div>
          </div>

          {/* Stacked testimonials */}
          <div className="flex flex-col md:col-span-5">
            {testimonials.slice(1).map((testimonial, index) => (
              <div
                key={index}
                className={`flex flex-1 flex-col justify-between p-6 md:p-8 ${
                  index === 0 ? 'border-border border-b' : ''
                }`}
              >
                <p className="text-foreground leading-relaxed">
                  "{testimonial.quote}"
                </p>
                <div className="mt-6">
                  <p className="text-foreground text-sm font-medium">
                    {testimonial.author}
                  </p>
                  <p className="text-muted-foreground text-sm">
                    {testimonial.company}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
