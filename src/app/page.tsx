import AspectTestimonials from '@/components/sections/aspect-testimonials';

import AspectDashboard from './components/aspect-dashboard';
import AspectFaq from './components/aspect-faq';
import AspectHero from './components/aspect-hero';
import AspectLogos from './components/aspect-logos';
import { AspectTabs } from './components/aspect-tabs';
import AspectWorldMap from './components/aspect-world-map';

export default function Home() {
  return (
    <>
      <AspectHero />
      <AspectLogos />
      <AspectTabs />
      <AspectTestimonials />
      <AspectDashboard />
      <AspectFaq />
      <AspectWorldMap />
    </>
  );
}
