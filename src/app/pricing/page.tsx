import React from 'react';

import AspectSeparator from '@/components/sections/aspect-separator';

import AspectPricing from './components/aspect-pricing';
import AspectPricingTable from './components/aspect-pricing-table';

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
