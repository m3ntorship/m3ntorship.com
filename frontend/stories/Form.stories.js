import React from 'react';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import Form from '../components/shared/form';

export default {
  title: 'Form',
  component: Form,
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

export const FormComponent = () => {
  return <Form inputFields={inputFields} />;
};
