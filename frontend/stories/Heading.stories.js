import React from 'react';
import { Heading } from '../components/shared/Heading';

export default {
  title: 'Heading',
  component: Heading
};
export const HeadingComponent = () => {
  return (
    <Heading
      primaryText={'hello'}
      gradientText={'World'}
      gradientColor={'blue'}
    />
  );
};
