import React from 'react';
import Goals from '../components/Goals';
import { withKnobs, boolean } from '@storybook/addon-knobs';

export default { title: 'Goals', component: Goals, decorators: [withKnobs] };

const data = {
  header: 'Goals',
  goals: [
    'Help new developers gain real world experience',
    'Help NGOs and small businesses build their online identity'
  ]
};

export const GoalsComponent = () => {
  return (
    <Goals
      data={data}
      loading={boolean('Loading', false)}
      error={boolean('Error', false)}
    />
  );
};
