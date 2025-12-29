import React from 'react';

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
  {
    label: 'Your message',
    name: 'message',
    placeholder: 'Message',
    type: 'textarea',
  },
];

export default function AspectContactForm() {
  return (
    <section className="bg-obsidian relative overflow-hidden px-2.5 lg:px-0">
      {/* Side borders */}
      <div className="bg-border pointer-events-none absolute inset-y-0 left-2.5 z-10 w-px lg:left-[calc((100%-1280px)/2)]" />
      <div className="bg-border pointer-events-none absolute inset-y-0 right-2.5 z-10 w-px lg:right-[calc((100%-1280px)/2)]" />

      <div className="mx-auto w-full max-w-[1280px]">
        <div className="border-border border-b">
          <div className="md:grid md:grid-cols-[80px_minmax(0,1fr)_80px]">
            <div className="border-border hidden w-[80px] border-r md:block"></div>

            <div>
              <form className="grid md:grid-cols-2">
                {formFields.map((field, idx) => {
                  const isTextarea = field.type === 'textarea';
                  const isFirstCol = idx % 2 === 0; // col-1 at ≥md
                  const wrapperClasses = cn(
                    'border-b border-border', // bottom for all
                    !isTextarea && isFirstCol && 'md:border-r md:border-border',
                    isTextarea && 'md:col-span-2', // textarea full row
                  );

                  return (
                    <div key={field.name} className={wrapperClasses}>
                      {isTextarea ? (
                        <Textarea
                          id={field.name}
                          name={field.name}
                          placeholder={field.placeholder}
                          className="focus:placeholder:text-muted-foreground text-foreground placeholder:text-foreground h-60 w-full resize-none rounded-none border-0 bg-transparent placeholder-white shadow-none focus-visible:ring-0"
                        />
                      ) : (
                        <Input
                          id={field.name}
                          name={field.name}
                          type={field.type}
                          placeholder={field.placeholder}
                          className="focus:placeholder:text-muted-foreground text-foreground placeholder:text-foreground h-20 w-full rounded-none border-0 bg-transparent placeholder-white shadow-none focus-visible:ring-0"
                        />
                      )}
                    </div>
                  );
                })}

                <div className="md:col-span-2">
                  <Button
                    type="submit"
                    className="border-border h-20 w-full rounded-none border"
                  >
                    Send message
                  </Button>
                </div>
              </form>
            </div>

            <div className="border-border hidden w-[80px] border-l md:block"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
