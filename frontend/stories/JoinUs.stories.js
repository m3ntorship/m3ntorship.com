import React from 'react';
import JoinUs from '../components/join us/index';
import { withKnobs, text } from '@storybook/addon-knobs';

export default {
  title: 'Join Us',
  component: JoinUs,
  decorators: [withKnobs]
};
export const JoinUsComponent = () => {
  return <JoinUs />;
};
