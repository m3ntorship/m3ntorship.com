import React from 'react';
import Footer from '../components/footer/index';

import { withKnobs, boolean } from '@storybook/addon-knobs';

export default {
  title: 'Footer',
  component: Footer,
  decorators: [withKnobs]
};
const data = {
  links: [
    { text: 'Github', url: 'github.com' },
    { text: 'Github', url: 'github.com' },
    { text: 'Github', url: 'github.com' },
    { text: 'Github', url: 'github.com' }
  ],
  about: {
    text:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Molestiealiquam iaculis ...',
    url: '#'
  },
  copyrights: 'M3ntorship © 2019-2020. All rights reserved.'
};
export const FooterComponent = () => {
  return <Footer data={data} />;
};
