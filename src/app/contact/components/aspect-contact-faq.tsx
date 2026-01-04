import Link from 'next/link';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const contactFaqs = [
  {
    question: 'How quickly will I hear back?',
    answer:
      'We aim to respond to all inquiries within 24 hours during business days. For urgent matters, please call us directly at 0478 669 655.',
  },
  {
    question: 'Is the initial consultation really free?',
    answer:
      "Yes, absolutely. Our initial consultation is completely free with no obligation. It's an opportunity for us to understand your needs and for you to see if we're the right fit for your business.",
  },
  {
    question: 'What should I prepare before contacting you?',
    answer:
      "Nothing specific is required. However, having a general understanding of your current safety challenges, business size, and industry will help us provide more tailored advice during our conversation.",
  },
  {
    question: 'Do you work with businesses outside of NSW?',
    answer:
      "Yes, while we're based in New South Wales, we work with clients across Australia. We can conduct remote consultations and travel for on-site work as needed.",
  },
  {
    question: 'What if I just have a quick question?',
    answer:
      "We're happy to answer quick questions. Feel free to call us during business hours or send a brief message through the form. No question is too small when it comes to workplace safety.",
  },
];

export default function AspectContactFaq() {
  return (
    <section className="bg-obsidian relative overflow-hidden px-2.5 lg:px-0">
      {/* Side borders */}
      <div className="bg-border pointer-events-none absolute inset-y-0 left-2.5 z-10 w-px lg:left-[calc((100%-1280px)/2)]" />
      <div className="bg-border pointer-events-none absolute inset-y-0 right-2.5 z-10 w-px lg:right-[calc((100%-1280px)/2)]" />

      <div className="mx-auto w-full max-w-[1280px]">
        <div className="border-border border-b">
          <div className="flex flex-col md:flex-row">
            {/* Left side - header */}
            <div className="border-border w-full border-b px-6 py-12 md:w-1/3 md:border-r md:border-b-0 md:px-8 md:py-16">
              <span className="text-muted-foreground text-xs font-medium tracking-widest uppercase">
                Common Questions
              </span>
              <h2 className="text-foreground mt-4 text-3xl font-medium tracking-tight md:text-4xl">
                Before You Reach Out
              </h2>
              <p className="text-muted-foreground mt-4 leading-relaxed">
                Quick answers to questions you might have about getting in
                touch.
              </p>
              <Link
                href="/faq"
                className="text-foreground mt-6 inline-block text-sm underline underline-offset-4"
              >
                View all FAQs
              </Link>
            </div>

            {/* Right side - accordion */}
            <div className="w-full md:w-2/3">
              <Accordion type="single" collapsible className="text-foreground">
                {contactFaqs.map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={`faq-${index}`}
                    className="data-[state=open]:bg-jet border-border border-b p-6 last:border-b-0"
                  >
                    <AccordionTrigger className="text-lg hover:no-underline">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground text-base">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
