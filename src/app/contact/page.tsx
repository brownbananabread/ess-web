'use client';

import { ArrowRight, Mail, MapPin, Phone } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { cn } from '@/lib/utils';

const CONTACT_INFO = [
  {
    icon: Mail,
    label: 'Email',
    value: 'levi@eternalsafetysolutions.com.au',
    href: 'mailto:levi@eternalsafetysolutions.com.au',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '0478 669 655',
    href: 'tel:+61478669655',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'New South Wales, Australia',
    href: null,
  },
];

const INQUIRY_TYPES = [
  'General Inquiry',
  'Free Consultation',
  'Request a Quote',
  'ISO Certification',
  'Training',
];

const FAQS = [
  {
    question: 'How quickly will I hear back?',
    answer:
      'We aim to respond to all inquiries within 24 hours during business days. For urgent matters, please call us directly.',
  },
  {
    question: 'Is the initial consultation really free?',
    answer:
      "Yes, absolutely. Our initial consultation is completely free with no obligation. It's an opportunity for us to understand your needs and for you to see if we're the right fit.",
  },
  {
    question: 'Do you work with businesses outside of NSW?',
    answer:
      "Yes, while we're based in New South Wales, we work with clients across Australia. We can conduct remote consultations and travel for on-site work as needed.",
  },
];

export default function ContactPage() {
  const [selectedInquiry, setSelectedInquiry] = useState<string | null>(null);

  return (
    <main className="bg-obsidian min-h-screen">
      {/* Hero */}
      <section className="border-border relative border-b px-2.5 pt-32 pb-20 md:pt-40 md:pb-24 lg:px-0">
        <div className="bg-border pointer-events-none absolute inset-y-0 left-2.5 z-10 w-px lg:left-[calc((100%-1280px)/2)]" />
        <div className="bg-border pointer-events-none absolute inset-y-0 right-2.5 z-10 w-px lg:right-[calc((100%-1280px)/2)]" />

        <div className="container">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-24">
            <div>
              <p className="text-muted-foreground text-sm tracking-widest uppercase">
                Contact
              </p>
              <h1 className="text-foreground mt-4 text-4xl font-medium tracking-tight md:text-5xl lg:text-6xl">
                Let's talk safety
              </h1>
              <p className="text-muted-foreground mt-6 max-w-lg leading-relaxed">
                Whether you have questions about our services, need a quote, or
                want to discuss your specific safety challenges—we're here to
                help.
              </p>
            </div>

            <div className="flex flex-col justify-center space-y-6">
              {CONTACT_INFO.map((item) => {
                const Icon = item.icon;
                const content = (
                  <div className="flex items-center gap-4">
                    <Icon className="text-muted-foreground size-5" strokeWidth={1.5} />
                    <div>
                      <p className="text-muted-foreground text-sm">{item.label}</p>
                      <p className="text-foreground font-medium">{item.value}</p>
                    </div>
                  </div>
                );

                return item.href ? (
                  <Link key={item.label} href={item.href} className="block">
                    {content}
                  </Link>
                ) : (
                  <div key={item.label}>{content}</div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="border-border relative border-b px-2.5 py-20 md:py-24 lg:px-0">
        <div className="bg-border pointer-events-none absolute inset-y-0 left-2.5 z-10 w-px lg:left-[calc((100%-1280px)/2)]" />
        <div className="bg-border pointer-events-none absolute inset-y-0 right-2.5 z-10 w-px lg:right-[calc((100%-1280px)/2)]" />

        <div className="container">
          <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
            {/* Left - Header */}
            <div>
              <p className="text-muted-foreground text-sm tracking-widest uppercase">
                Send a Message
              </p>
              <h2 className="text-foreground mt-4 text-3xl font-medium tracking-tight md:text-4xl">
                How can we help?
              </h2>
              <p className="text-muted-foreground mt-6 leading-relaxed">
                Fill out the form and we'll get back to you within 24 hours. All
                inquiries are treated with complete confidentiality.
              </p>

              {/* Inquiry type selection */}
              <div className="mt-8">
                <p className="text-muted-foreground mb-4 text-sm">
                  What can we help you with?
                </p>
                <div className="flex flex-wrap gap-2">
                  {INQUIRY_TYPES.map((type) => (
                    <button
                      key={type}
                      type="button"
                      onClick={() => setSelectedInquiry(type)}
                      className={cn(
                        'border-border text-muted-foreground hover:border-foreground hover:text-foreground border px-4 py-2 text-sm transition-colors',
                        selectedInquiry === type &&
                          'border-foreground bg-foreground text-background'
                      )}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Right - Form */}
            <div>
              <form className="space-y-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="text-foreground mb-2 block text-sm font-medium"
                    >
                      Full name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="border-border bg-obsidian text-foreground placeholder:text-muted-foreground focus:border-foreground w-full border-b py-3 outline-none transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="text-foreground mb-2 block text-sm font-medium"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="border-border bg-obsidian text-foreground placeholder:text-muted-foreground focus:border-foreground w-full border-b py-3 outline-none transition-colors"
                      placeholder="you@company.com"
                    />
                  </div>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <label
                      htmlFor="phone"
                      className="text-foreground mb-2 block text-sm font-medium"
                    >
                      Phone <span className="text-muted-foreground">(optional)</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="border-border bg-obsidian text-foreground placeholder:text-muted-foreground focus:border-foreground w-full border-b py-3 outline-none transition-colors"
                      placeholder="Your phone number"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="company"
                      className="text-foreground mb-2 block text-sm font-medium"
                    >
                      Company <span className="text-muted-foreground">(optional)</span>
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      className="border-border bg-obsidian text-foreground placeholder:text-muted-foreground focus:border-foreground w-full border-b py-3 outline-none transition-colors"
                      placeholder="Your company"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="text-foreground mb-2 block text-sm font-medium"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="border-border bg-obsidian text-foreground placeholder:text-muted-foreground focus:border-foreground w-full resize-none border-b py-3 outline-none transition-colors"
                    placeholder="Tell us about your project or inquiry..."
                  />
                </div>

                <button
                  type="submit"
                  className="bg-foreground text-background hover:bg-foreground/90 inline-flex items-center gap-3 px-8 py-4 text-sm font-medium transition-colors"
                >
                  Send message
                  <ArrowRight className="size-4" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="relative px-2.5 py-20 md:py-24 lg:px-0">
        <div className="bg-border pointer-events-none absolute inset-y-0 left-2.5 z-10 w-px lg:left-[calc((100%-1280px)/2)]" />
        <div className="bg-border pointer-events-none absolute inset-y-0 right-2.5 z-10 w-px lg:right-[calc((100%-1280px)/2)]" />

        <div className="container">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Left - Header */}
            <div>
              <p className="text-muted-foreground text-sm tracking-widest uppercase">
                FAQ
              </p>
              <h2 className="text-foreground mt-4 text-3xl font-medium tracking-tight md:text-4xl">
                Common questions
              </h2>
              <p className="text-muted-foreground mt-4 leading-relaxed">
                Quick answers to questions you might have about getting in touch.
              </p>
              <Link
                href="/faq"
                className="text-foreground mt-6 inline-flex items-center gap-2 text-sm font-medium"
              >
                View all FAQs
                <ArrowRight className="size-4" />
              </Link>
            </div>

            {/* Right - Accordion */}
            <div>
              <Accordion type="single" collapsible className="text-foreground">
                {FAQS.map((faq, i) => (
                  <AccordionItem
                    key={i}
                    value={`faq-${i}`}
                    className="border-dark-gray border-b py-4"
                  >
                    <AccordionTrigger className="text-left text-base font-medium hover:no-underline">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pt-3 text-sm leading-relaxed">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
