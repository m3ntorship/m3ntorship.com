import React from 'react';
import JoinUs from '../components/join us/index';
import { withKnobs, text } from '@storybook/addon-knobs';

const data = {
  primaryHeading: 'ONE MORE STEP TO',
  secondaryHeading: 'JOIN US',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Molestie aliquam iaculis facilisis'
};
export default {
  title: 'Join Us',
  component: JoinUs,
  decorators: [withKnobs]
};
export const JoinUsComponent = () => {
  return <JoinUs data={data} />;
};
