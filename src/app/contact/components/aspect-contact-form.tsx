'use client';

import { Send } from 'lucide-react';
import { useState } from 'react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { cn } from '@/lib/utils';

const formFields = [
  {
    label: 'Full name',
    name: 'fullName',
    placeholder: 'Full name',
    type: 'text',
  },
  {
    label: 'Work email address',
    name: 'email',
    placeholder: 'Email',
    type: 'email',
  },
  {
    label: 'Phone',
    name: 'phone',
    placeholder: 'Phone Number',
    type: 'text',
    optional: true,
  },
  {
    label: 'Company name',
    name: 'company',
    placeholder: 'Company name',
    type: 'text',
    optional: true,
  },
];

const inquiryTypes = [
  'General Inquiry',
  'Request a Quote',
  'Free Consultation',
  'Training Inquiry',
  'ISO Certification',
  'Other',
];

export default function AspectContactForm() {
  const [selectedInquiry, setSelectedInquiry] = useState<string | null>(null);

  return (
    <section className="bg-obsidian relative overflow-hidden px-2.5 lg:px-0">
      {/* Side borders */}
      <div className="bg-border pointer-events-none absolute inset-y-0 left-2.5 z-10 w-px lg:left-[calc((100%-1280px)/2)]" />
      <div className="bg-border pointer-events-none absolute inset-y-0 right-2.5 z-10 w-px lg:right-[calc((100%-1280px)/2)]" />

      <div className="mx-auto w-full max-w-[1280px]">
        {/* Section header */}
        <div className="border-border grid grid-cols-1 border-b md:grid-cols-12">
          <div className="border-border p-6 md:col-span-8 md:border-r md:p-12">
            <span className="text-muted-foreground text-xs font-medium tracking-widest uppercase">
              Send a Message
            </span>
            <h2 className="text-foreground mt-4 text-3xl font-medium tracking-tight md:text-4xl">
              How can we help you?
            </h2>
            <p className="text-muted-foreground mt-4 max-w-lg leading-relaxed">
              Fill out the form below and we&apos;ll get back to you within 24
              hours. All inquiries are treated with complete confidentiality.
            </p>
          </div>
          <div className="flex items-end justify-end p-6 md:col-span-4 md:p-8">
            <Send className="text-dark-gray size-16 md:size-24" strokeWidth={1} />
          </div>
        </div>

        {/* Inquiry type selection */}
        <div className="border-border border-b p-6 md:p-8">
          <p className="text-muted-foreground mb-4 text-sm">
            What can we help you with?
          </p>
          <div className="flex flex-wrap gap-3">
            {inquiryTypes.map((type) => (
              <button
                key={type}
                type="button"
                onClick={() => setSelectedInquiry(type)}
                className={cn(
                  'border-border text-muted-foreground hover:border-foreground hover:text-foreground border px-4 py-2 text-sm transition-colors',
                  selectedInquiry === type &&
                    'border-foreground bg-foreground text-obsidian'
                )}
              >
                {type}
              </button>
            ))}
          </div>
        </div>

        {/* Form fields */}
        <div className="border-border border-b">
          <form className="grid md:grid-cols-2">
            {formFields.map((field, idx) => {
              const isFirstCol = idx % 2 === 0;
              const wrapperClasses = cn(
                'border-b border-border',
                isFirstCol && 'md:border-r md:border-border'
              );

              return (
                <div key={field.name} className={wrapperClasses}>
                  <Input
                    id={field.name}
                    name={field.name}
                    type={field.type}
                    placeholder={
                      field.optional
                        ? `${field.placeholder} (optional)`
                        : field.placeholder
                    }
                    className="focus:placeholder:text-muted-foreground text-foreground placeholder:text-foreground h-20 w-full rounded-none border-0 bg-transparent placeholder-white shadow-none focus-visible:ring-0"
                  />
                </div>
              );
            })}

            {/* Message textarea - full width */}
            <div className="border-border border-b md:col-span-2">
              <Textarea
                id="message"
                name="message"
                placeholder="Tell us about your project or inquiry..."
                className="focus:placeholder:text-muted-foreground text-foreground placeholder:text-foreground h-48 w-full resize-none rounded-none border-0 bg-transparent placeholder-white shadow-none focus-visible:ring-0"
              />
            </div>

            {/* Submit button */}
            <div className="md:col-span-2">
              <Button
                type="submit"
                className="border-border group h-20 w-full rounded-none border"
              >
                <span>Send message</span>
                <Send className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
