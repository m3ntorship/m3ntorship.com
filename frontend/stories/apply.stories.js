import React from 'react';
import Apply from '../components/apply/index';
import { withKnobs, text } from '@storybook/addon-knobs';

export default {
  title: 'Apply',
  component: Apply,
  decorators: [withKnobs]
};
const inputFields = [
  {
    tag: 'input',
    props: {
      type: 'text',
      placeholder: 'name',
      name: 'name'
    }
  },
  {
    tag: 'input',
    props: {
      type: 'mail',
      placeholder: 'email',
      name: 'email'
    }
  },
  {
    tag: 'input',
    props: {
      type: 'tel',
      placeholder: 'Phone Number',
      name: 'phone'
    }
  }
];
const data = {
  primaryHeading: 'You Want to',
  gradiendtText: 'Apply As',
  paragraph:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Molestie aliquam iaculis facilisis sit pharetra pellentesqueullamcorper.',
  buttons: {
    menteeButton: { menteeButtonColor: 'green', menteeButtonText: 'Mentee' },
    mentorButton: { mentorButtonColor: 'blue', mentorButtonText: 'Mentor' }
  }
};
export const ApplySection = () => {
  return <Apply data={data} inputFields={inputFields} />;
};
