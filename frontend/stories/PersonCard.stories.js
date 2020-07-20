import React from 'react';
import PersonCard from './../components/person-card/index';

import { withKnobs, boolean } from '@storybook/addon-knobs';

export default {
  title: 'PersonCard',
  component: PersonCard,
  decorators: [withKnobs]
};
const data = {
  title: 'Apply',
  subtitle: 'subtitle',
  description: 'description'
};
export const PersonCardContainer = () => {
  return (
    <PersonCard
      cardDetails={data}
      boxShadow={boolean('boxShadow', false)}
      rounded={boolean('rounded', false)}
      bgColord={boolean('bgColord', false)}
    />
  );
};
