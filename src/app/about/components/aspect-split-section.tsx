'use client';

import Image from 'next/image';

import { cn } from '@/lib/utils';

interface AspectSplitSectionProps {
  header: string;
  description: string;
  image: string;
  side?: 'L' | 'R';
}

export default function AspectSplitSection({
  header,
  description,
  image,
  side = 'L',
}: AspectSplitSectionProps) {
  const order = side === 'R' ? 'md:flex-row-reverse' : 'md:flex-row';
  const imgBorder =
    side === 'R'
      ? 'md:border-l md:border-border'
      : 'md:border-r md:border-border';

  return (
    <section className="bg-obsidian relative px-2.5 lg:px-0">
      {/* Side borders */}
      <div className="bg-border pointer-events-none absolute inset-y-0 left-2.5 z-10 w-px lg:left-[calc((100%-1280px)/2)]" />
      <div className="bg-border pointer-events-none absolute inset-y-0 right-2.5 z-10 w-px lg:right-[calc((100%-1280px)/2)]" />

      <div className="bg-jet border-border container border-b p-0">
        <div className={cn('flex flex-col items-center', order)}>
          <div
            className={cn(
              'border-border w-full border-b md:w-1/2 md:border-b-0',
              imgBorder,
            )}
          >
            <Image
              src={image}
              alt={header}
              width={800}
              height={800}
              className="aspect-square w-full object-cover"
              priority
            />
          </div>

          <div className="text-foreground w-full px-6 py-12 md:w-1/2 md:px-16 md:py-20">
            <h2 className="mb-2.5 text-3xl font-medium tracking-tight md:text-4xl">
              {header}
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              {description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
