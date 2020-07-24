import React from 'react';
import Apply from '../components/apply/index';
import { withKnobs, text } from '@storybook/addon-knobs';

export default {
  title: 'Apply',
  component: Apply,
  decorators: [withKnobs]
};
export const ApplySection = () => {
  return <Apply />;
};
