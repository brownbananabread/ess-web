import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const questions = [
  {
    question: 'What is Eternal Safety Solutions?',
    answer:
      'Eternal Safety Solutions (ESS) is a workplace health and safety consultancy founded on the principles of assisting businesses in achieving more than just compliance. We strive to build proactive and effective safety cultures.',
  },
  {
    question: 'What services do you provide?',
    answer:
      'We offer WHS Compliance Consulting, ISO Systems Development (ISO45001, ISO14001, ISO9001), Risk Management and Assessments, Site Inspections, Training Programs, Documentation Creation, and System Implementation.',
  },
  {
    question: 'Do you offer a free consultation?',
    answer:
      "Yes! We offer a complimentary initial consultation to discuss your business needs, assess your current WHS situation, and explore how we can help. There's no obligation and no pressure.",
  },
  {
    question: 'What areas do you service?',
    answer:
      "While based in New South Wales, we provide services across Sydney and throughout Australia. We're experienced in working with clients both remotely and on-site as needed.",
  },
];

const AspectFaq = () => {
  return (
    <section className="bg-obsidian border-border relative border-t px-2.5 py-20 md:py-32 lg:px-0">
      {/* Side borders */}
      <div className="bg-border pointer-events-none absolute inset-y-0 left-2.5 z-10 w-px lg:left-[calc((100%-1280px)/2)]" />
      <div className="bg-border pointer-events-none absolute inset-y-0 right-2.5 z-10 w-px lg:right-[calc((100%-1280px)/2)]" />

      <div className="container">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left side - Header */}
          <div>
            <p className="text-muted-foreground text-sm tracking-widest uppercase">
              FAQ
            </p>
            <h2 className="text-foreground mt-4 text-3xl font-medium tracking-tight md:text-4xl">
              Frequently asked questions
            </h2>
            <p className="text-muted-foreground mt-4 leading-relaxed">
              Have more questions? Visit our full FAQ page or get in touch.
            </p>
            <Link
              href="/faq"
              className="text-foreground mt-6 inline-flex items-center gap-2 text-sm font-medium"
            >
              View all FAQs
              <ArrowRight className="size-4" />
            </Link>
          </div>

          {/* Right side - Accordion */}
          <div>
            <Accordion type="single" collapsible className="text-foreground">
              {questions.map((item, i) => (
                <AccordionItem
                  key={i}
                  value={`faq-${i}`}
                  className="border-dark-gray border-b py-4"
                >
                  <AccordionTrigger className="text-left text-base font-medium hover:no-underline">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pt-3 text-sm leading-relaxed">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AspectFaq;
