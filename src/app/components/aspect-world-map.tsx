import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

import { WorldMap } from '@/components/ui/world-map';

const AspectWorldMap = () => {
  return (
    <section className="bg-obsidian border-border relative overflow-hidden border-t px-2.5 lg:px-0">
      {/* Side borders */}
      <div className="bg-border pointer-events-none absolute inset-y-0 left-2.5 z-20 w-px lg:left-[calc((100%-1280px)/2)]" />
      <div className="bg-border pointer-events-none absolute inset-y-0 right-2.5 z-20 w-px lg:right-[calc((100%-1280px)/2)]" />

      {/* Map as background */}
      <div className="absolute inset-0 flex items-center justify-center opacity-50">
        <div className="h-full w-full max-w-5xl">
          <WorldMap
            dots={[
              {
                start: { lat: -33.8688, lng: 151.2093 },
                end: { lat: -37.8136, lng: 144.9631 },
              },
              {
                start: { lat: -33.8688, lng: 151.2093 },
                end: { lat: -27.4698, lng: 153.0251 },
              },
              {
                start: { lat: -33.8688, lng: 151.2093 },
                end: { lat: -34.9285, lng: 138.6007 },
              },
              {
                start: { lat: -33.8688, lng: 151.2093 },
                end: { lat: -31.9505, lng: 115.8605 },
              },
              {
                start: { lat: -33.8688, lng: 151.2093 },
                end: { lat: -35.2809, lng: 149.13 },
              },
              {
                start: { lat: -33.8688, lng: 151.2093 },
                end: { lat: -42.8821, lng: 147.3272 },
              },
            ]}
          />
        </div>
      </div>

      {/* CTA content */}
      <div className="relative z-10 container py-32 md:py-40">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-foreground text-3xl font-medium tracking-tight md:text-4xl lg:text-5xl">
            Ready to build a safer workplace?
          </h2>
          <p className="text-muted-foreground mx-auto mt-4 max-w-lg">
            Based in New South Wales, we service businesses across Sydney and
            throughout Australia.
          </p>
          <div className="mt-8">
            <Link
              href="/contact"
              className="bg-foreground text-background hover:bg-foreground/90 inline-flex items-center gap-3 px-6 py-3 text-sm font-medium transition-colors"
            >
              Book Free Consultation
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom border bar */}
      <div className="border-border absolute right-0 bottom-0 left-0 border-t">
        <div className="container flex items-center justify-center py-4">
          <div className="text-muted-foreground flex items-center gap-6 text-sm md:gap-8">
            <span>Sydney</span>
            <span className="text-dark-gray">•</span>
            <span>Melbourne</span>
            <span className="text-dark-gray">•</span>
            <span>Brisbane</span>
            <span className="text-dark-gray">•</span>
            <span>Perth</span>
            <span className="text-dark-gray">•</span>
            <span>Nationwide</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AspectWorldMap;
