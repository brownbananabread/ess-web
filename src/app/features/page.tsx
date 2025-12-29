import React from 'react';

import AspectSeparator from '@/components/sections/aspect-separator';
import AspectTestimonials from '@/components/sections/aspect-testimonials';

import { AspectFeatures } from './components/aspect-features';
import AspectFeaturesHero from './components/aspect-features-hero';

const page = () => {
  return (
    <>
      <AspectFeaturesHero />
      <AspectSeparator />
      <AspectFeatures />
      <AspectSeparator />
      <AspectTestimonials />
      <AspectSeparator />
    </>
  );
};

export default page;
