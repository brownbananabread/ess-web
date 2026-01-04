'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

type Category =
  | 'General'
  | 'Services & Pricing'
  | 'Compliance & Legal'
  | 'Process & Timeline'
  | 'Training'
  | 'Documentation & Systems';

interface FAQItem {
  question: string;
  answer: string;
  category: Category;
}

const categories: { name: Category; description: string }[] = [
  {
    name: 'General',
    description:
      'Learn about Eternal Safety Solutions and our approach to workplace health and safety.',
  },
  {
    name: 'Services & Pricing',
    description:
      'Information about our comprehensive range of WHS services and how we structure our pricing.',
  },
  {
    name: 'Compliance & Legal',
    description:
      'Understanding your WHS obligations and how we help you meet legislative requirements.',
  },
  {
    name: 'Process & Timeline',
    description:
      'How we work with you from initial consultation through implementation and review.',
  },
  {
    name: 'Training',
    description: 'Details about our training programs and delivery options.',
  },
  {
    name: 'Documentation & Systems',
    description:
      'Information about SWMS, SWPs, and custom documentation we create for your business.',
  },
];

const faqItems: FAQItem[] = [
  {
    category: 'General',
    question: 'What is Eternal Safety Solutions?',
    answer:
      'Eternal Safety Solutions (ESS) is a workplace health and safety consultancy founded on the principles of assisting businesses in achieving more than just compliance. We strive to build proactive and effective safety cultures, driving businesses forward in their own industries. We offer WHS consulting, system builds, audits, site inspections, training, and risk management services.',
  },
  {
    category: 'General',
    question: 'Who is Levi Mieli?',
    answer:
      'Levi Mieli is the Director and Safety Consultant at Eternal Safety Solutions. With 4 years of specialized experience in workplace health and safety across multiple industries including construction, aged care, transport, manufacturing, and hospitality, Levi brings practical, real-world expertise to every project.',
  },
  {
    category: 'General',
    question: 'What industries do you work with?',
    answer:
      'We have experience across construction, aged care, transport and logistics, manufacturing, food retail, hospitality, food processing, and more. Our diverse industry experience means we understand the unique challenges and compliance requirements of different sectors.',
  },
  {
    category: 'General',
    question: 'What areas do you service?',
    answer:
      "While based in New South Wales, we provide services across Sydney and throughout Australia. We're experienced in working with clients both remotely and on-site as needed.",
  },
  {
    category: 'Services & Pricing',
    question: 'What services does ESS provide?',
    answer:
      'We offer a comprehensive range of services including WHS Compliance Consulting, ISO Systems Development (ISO45001, ISO14001, ISO9001), Risk Management and Assessments, Site Inspections, Training Programs, Documentation Creation (SWMS, SWPs, Policies, Procedures), and System Implementation and Support.',
  },
  {
    category: 'Services & Pricing',
    question: 'How much do your services cost?',
    answer:
      'Every business has unique needs, so we provide customized quotes based on your specific requirements, business size, industry, and scope of work. We offer a free initial consultation to assess your needs and provide a detailed, transparent proposal with no hidden costs.',
  },
  {
    category: 'Services & Pricing',
    question: 'Do you offer a free consultation?',
    answer:
      "Yes! We offer a complimentary initial consultation to discuss your business needs, assess your current WHS situation, and explore how we can help. There's no obligation and no pressure—just honest, expert advice.",
  },
  {
    category: 'Services & Pricing',
    question: 'Do you offer ongoing support after the initial project?',
    answer:
      'Yes. Many of our clients engage us for ongoing compliance support, regular audits, system maintenance, and training updates. We can discuss long-term partnership arrangements that suit your needs.',
  },
  {
    category: 'Compliance & Legal',
    question: 'What is WHS and why is it important?',
    answer:
      'WHS stands for Workplace Health and Safety (also known as Work Health and Safety). It encompasses the laws, regulations, policies, and procedures designed to protect the health, safety, and welfare of workers. Compliance is not just a legal requirement—it protects your workers, reduces incidents and associated costs, and creates a positive workplace culture.',
  },
  {
    category: 'Compliance & Legal',
    question: 'What are my obligations as a business owner?',
    answer:
      'As a Person Conducting a Business or Undertaking (PCBU), you have a primary duty of care to ensure the health and safety of workers and others at your workplace. This includes providing safe work environments, systems, and processes, adequate training, and proper supervision. Officers of companies also have specific due diligence obligations.',
  },
  {
    category: 'Compliance & Legal',
    question: "What happens if my business isn't compliant?",
    answer:
      'Non-compliance can result in serious consequences including workplace incidents and injuries, significant financial penalties and fines, legal liability and prosecution, reputational damage, loss of contracts or tender opportunities, and increased insurance premiums. More importantly, it puts your workers at risk.',
  },
  {
    category: 'Compliance & Legal',
    question: 'What is ISO45001, ISO14001, and ISO9001?',
    answer:
      'These are international standards for management systems: ISO45001 for Occupational Health and Safety Management, ISO14001 for Environmental Management, and ISO9001 for Quality Management. These certifications demonstrate your commitment to excellence and are often required for major contracts and tenders.',
  },
  {
    category: 'Process & Timeline',
    question: 'What is your process for working with new clients?',
    answer:
      'Our process follows three stages: Stage 1 – Consultation: We meet with your key staff to determine the scope and timeline of the project, identify at-risk areas, and plan initial tasks. Stage 2 – Implementation: We work with your managers and workers to implement newly created procedures using a people-focused, consultation-driven approach. Stage 3 – Review: We review the effectiveness of implemented processes, re-assess compliance status, and provide recommendations for ongoing improvement.',
  },
  {
    category: 'Process & Timeline',
    question: 'How long does a typical project take?',
    answer:
      "Project timelines vary depending on scope and complexity. Simple documentation projects may take a few weeks, while complete system implementations can take several months. We'll provide a clear timeline during the consultation phase and keep you informed throughout.",
  },
  {
    category: 'Process & Timeline',
    question: 'Can you help with urgent compliance issues?',
    answer:
      "Yes, we understand that compliance deadlines and urgent matters arise. Contact us to discuss your situation, and we'll work to accommodate urgent needs where possible.",
  },
  {
    category: 'Process & Timeline',
    question: 'Do you travel to client sites?',
    answer:
      'Yes, we conduct on-site consultations, inspections, and training throughout Sydney and regional areas. Travel arrangements can be discussed during your initial consultation.',
  },
  {
    category: 'Training',
    question: 'What training do you offer?',
    answer:
      'We offer various training programs including Risk Management Training, Due Diligence & Compliance Training (for Officers and Executives), Contractor Management Training, WHS Induction Programs, Hazard Identification and Reporting, Emergency Response Training, Incident Investigation, and bespoke training packages custom created upon request.',
  },
  {
    category: 'Training',
    question: 'Can training be delivered on-site?',
    answer:
      'Yes, we deliver training at your workplace, which allows for practical, relevant examples and ensures minimal disruption to your operations.',
  },
  {
    category: 'Training',
    question: 'Is your training accredited?',
    answer:
      'Our training is designed to meet legislative requirements and industry best practices. We can discuss specific accreditation needs during your consultation.',
  },
  {
    category: 'Documentation & Systems',
    question: 'What is a SWMS?',
    answer:
      "A Safe Work Method Statement (SWMS) is a document that identifies high-risk construction work activities, the hazards associated with them, and the control measures required to eliminate or minimize those risks. They're legally required for certain high-risk construction work.",
  },
  {
    category: 'Documentation & Systems',
    question: "What's the difference between SWMS and SWP?",
    answer:
      'SWMS (Safe Work Method Statements) are specifically for high-risk construction work and are legally mandated. SWP (Safe Work Procedures) are broader documents that outline safe processes for any work activity across any industry. Both are important for managing workplace risks.',
  },
  {
    category: 'Documentation & Systems',
    question: 'Can you customize templates for my business?',
    answer:
      "We don't use generic templates. All our documentation is bespoke—created specifically for your business, operations, and industry requirements. Your documentation should reflect your unique business, not a one-size-fits-all approach.",
  },
  {
    category: 'Documentation & Systems',
    question: 'What if I already have some documentation?',
    answer:
      'Great! We can review your existing documentation, identify gaps, update outdated materials, and integrate new documents seamlessly with what you already have.',
  },
];

export const AspectFAQPage = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-obsidian relative overflow-hidden px-2.5 lg:px-0">
        {/* Side borders */}
        <div className="bg-border pointer-events-none absolute inset-y-0 left-2.5 z-10 w-px lg:left-[calc((100%-1280px)/2)]" />
        <div className="bg-border pointer-events-none absolute inset-y-0 right-2.5 z-10 w-px lg:right-[calc((100%-1280px)/2)]" />

        <div className="mx-auto w-full max-w-[1280px]">
          <div className="border-border grid grid-cols-1 md:grid-cols-12">
            {/* Title block */}
            <div className="p-6 pt-24 md:col-span-12 md:p-12 md:pt-32">
              <span className="text-muted-foreground text-xs font-medium tracking-widest uppercase">
                Support
              </span>
              <h1 className="text-foreground mt-4 text-4xl font-medium tracking-tight md:text-5xl lg:text-6xl">
                Frequently Asked Questions
              </h1>
              <p className="text-muted-foreground mt-4 max-w-2xl leading-relaxed">
                Find answers to common questions about workplace health and
                safety, our services, and how we can help your business.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Info bar */}
      <section className="bg-obsidian border-border relative border-y px-2.5 lg:px-0">
        {/* Side borders */}
        <div className="bg-border pointer-events-none absolute inset-y-0 left-2.5 z-10 w-px lg:left-[calc((100%-1280px)/2)]" />
        <div className="bg-border pointer-events-none absolute inset-y-0 right-2.5 z-10 w-px lg:right-[calc((100%-1280px)/2)]" />

        <div className="mx-auto w-full max-w-[1280px]">
          <div className="grid grid-cols-2 md:grid-cols-4">
            <div className="border-border border-r p-4 md:p-6">
              <p className="text-muted-foreground text-xs tracking-wider uppercase">
                Categories
              </p>
              <p className="text-foreground mt-1 text-sm font-medium">
                {categories.length} Topics
              </p>
            </div>
            <div className="border-border p-4 md:border-r md:p-6">
              <p className="text-muted-foreground text-xs tracking-wider uppercase">
                Questions
              </p>
              <p className="text-foreground mt-1 text-sm font-medium">
                {faqItems.length} Answers
              </p>
            </div>
            <div className="border-border border-t border-r p-4 md:border-t-0 md:p-6">
              <p className="text-muted-foreground text-xs tracking-wider uppercase">
                Coverage
              </p>
              <p className="text-foreground mt-1 text-sm font-medium">
                Australia Wide
              </p>
            </div>
            <div className="border-border border-t p-4 md:border-t-0 md:p-6">
              <p className="text-muted-foreground text-xs tracking-wider uppercase">
                Consultation
              </p>
              <p className="text-foreground mt-1 text-sm font-medium">
                Free Initial
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="bg-obsidian relative overflow-hidden px-2.5 lg:px-0">
        {/* Side borders */}
        <div className="bg-border pointer-events-none absolute inset-y-0 left-2.5 z-10 w-px lg:left-[calc((100%-1280px)/2)]" />
        <div className="bg-border pointer-events-none absolute inset-y-0 right-2.5 z-10 w-px lg:right-[calc((100%-1280px)/2)]" />

        <div className="mx-auto w-full max-w-[1280px]">
          {categories.map((cat, catIndex) => {
            const items = faqItems.filter((f) => f.category === cat.name);
            return (
              <div
                key={cat.name}
                className={`border-border ${catIndex < categories.length - 1 ? 'border-b' : ''}`}
              >
                <div className="flex flex-col md:flex-row">
                  {/* Category header */}
                  <div className="border-border w-full border-b px-6 py-8 md:w-1/3 md:border-r md:border-b-0 md:py-12">
                    <h2 className="text-foreground mb-4 text-2xl font-medium tracking-tight md:text-3xl">
                      {cat.name}
                    </h2>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {cat.description}
                    </p>
                  </div>

                  {/* Questions */}
                  <div className="w-full md:w-2/3">
                    <Accordion
                      type="single"
                      collapsible
                      className="text-foreground"
                    >
                      {items.map((faq, i) => (
                        <AccordionItem
                          key={i}
                          value={`${cat.name}-${i}`}
                          className="data-[state=open]:bg-jet border-border border-b px-6 py-4 last:border-b-0 md:last:border-b"
                        >
                          <AccordionTrigger className="text-left text-base font-medium md:text-lg">
                            {faq.question}
                          </AccordionTrigger>
                          <AccordionContent className="text-muted-foreground text-sm leading-relaxed md:text-base">
                            {faq.answer}
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};
