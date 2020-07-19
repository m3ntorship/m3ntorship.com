import React from 'react';
import Goals from '../components/Goals';

export default { title: 'Goals', component: Goals };

const data = {
  header: 'Goals',
  goals: [
    'Help new developers gain real world experience',
    'Help NGOs and small businesses build their online identity'
  ]
};

export const GoalsComponent = () => {
  return <Goals header={data.header} goals={data.goals} />;
};
