import React from 'react';

import AspectSeparator from '@/components/sections/aspect-separator';

import AspectPricing from './components/aspect-pricing';
import AspectPricingTable from './components/aspect-pricing-table';

export const metadata = {
  title: 'Pricing',
  description:
    'Flexible pricing for WHS consulting, training, and compliance services. Get a custom quote for your business.',
};

const page = () => {
  return (
    <>
      <AspectPricing />
      <AspectSeparator />
      <AspectPricingTable />
      <AspectSeparator />
    </>
  );
};

export default page;
