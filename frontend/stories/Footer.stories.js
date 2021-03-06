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
    { text: 'Github', url: 'github.com', underline: false },
    { text: 'Facebook', url: 'github.com', underline: false },
    { text: 'Twitter', url: 'github.com', underline: false },
    { text: 'infot@m3notorship.com', url: 'github.com', underline: true }
  ],
  about: {
    text:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Molestiealiquam iaculisLorem ipsum dolor sit amet, consectetur adipiscing elit. Molestiealiquam iaculisLorem ipsum dolor sit amet, consectetur adipiscing elit. Molestiealiquam iaculisLorem ipsum dolor sit amet, consectetur adipiscing elit. Molestiealiquam iaculisLorem ipsum dolor sit amet, consectetur adipiscing elit. Molestiealiquam iaculisLorem ipsum dolor sit amet, consectetur adipiscing elit. Molestiealiquam iaculis',
    url: '#'
  },
  copyrights: 'M3ntorship © 2019-2020.'
};
export const FooterComponent = () => {
  return <Footer data={data} />;
};
