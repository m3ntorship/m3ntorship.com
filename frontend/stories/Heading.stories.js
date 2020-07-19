import React from 'react';
import { Heading, GradientText } from '../components/shared/Heading';
import { withKnobs, text } from '@storybook/addon-knobs';

export default {
  title: 'Heading',
  component: Heading,
  decorators: [withKnobs]
};
const headingText = text('Heading Text', 'Hello World');
export const HeadingComponent = () => {
  return (
    <Heading type={text('type', 'main')}>
      {headingText}{' '}
      <GradientText
        text={text('gradient text', 'Colored Text')}
        color={text('corlor', 'blue')}
      />
    </Heading>
  );
};
