import AspectCta from '@/components/sections/homepage/aspect-cta';
import AspectDashboard from '@/components/sections/homepage/aspect-dashboard';
import AspectFaq from '@/components/sections/homepage/aspect-faq';
import AspectHero from '@/components/sections/homepage/aspect-hero';
import AspectLogos from '@/components/sections/homepage/aspect-logos';
import AspectServices from '@/components/sections/homepage/aspect-services';
import AspectStats from '@/components/sections/homepage/aspect-stats';
import AspectTestimonial from '@/components/sections/homepage/aspect-testimonial';

export default function Home() {
  return (
    <>
      <AspectHero />
      <AspectDashboard />
      <AspectLogos />
      <AspectTestimonial />
      <AspectStats />
      <AspectServices />
      <AspectFaq />
      <AspectCta />
    </>
  );
}
