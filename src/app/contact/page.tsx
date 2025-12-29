import React from 'react';

import AspectSeparator from '@/components/sections/aspect-separator';

import AspectContactForm from './components/aspect-contact-form';
import AspectContactHero from './components/aspect-contact-hero';

const page = () => {
  return (
    <>
      <AspectContactHero />
      <AspectSeparator />
      <AspectContactForm />
      <AspectSeparator />
    </>
  );
};

export default page;
