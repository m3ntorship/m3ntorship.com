import React from 'react';
import { Heading, GradientText } from '../components/shared/Heading';
import { withKnobs, text } from '@storybook/addon-knobs';

export default {
  title: 'Heading',
  component: Heading,
  decorators: [withKnobs]
};
export const HeadingComponent = () => {
  return (
    <Heading type={text('type', 'main')}>
      {text('Heading Text', 'Hello World')}{' '}
      <GradientText
        text={text('gradient text', 'Colored Text')}
        gradientColor={text('corlor', 'blue')}
      />
    </Heading>
  );
};
