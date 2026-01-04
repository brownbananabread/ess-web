import React from 'react';

import { AspectFAQPage } from './components/aspect-faq-page';

export const metadata = {
  title: 'FAQ',
  description:
    'Frequently asked questions about workplace health and safety, our services, and how we can help your business.',
};

const page = () => {
  return <AspectFAQPage />;
};

export default page;
