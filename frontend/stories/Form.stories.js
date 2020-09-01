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
  return (
    <Form
      inputFields={inputFields}
      sideImg="https://s3-alpha-sig.figma.com/img/2b73/7a06/63d6c70e5a3acaea8b40ac2bc166be42?Expires=1596412800&Signature=g2aHFQjxXo-lKLl~mUB3J34Nx9U9VwKnTXTFnYYqJtMllS-k8H6~TGwJ71uIPrMmzubkddOCCHcSONnZMXO~HzeaD1NG~lDjgeIJMekh9sibKiueQGnZlnrU995Cf0tOxwp8vpWCEdFyoRwdhWVafdX~Sd17fejv-nKCXdVJ2aDtBJgw1xtQjJgZPmY96yd8PCUaTxMZhf8ZSKAtVj9A7tkerPwo6eI5-8WqQnHsYR7SK2seki3fe5Ff84kh9mIlRWPaNhk0bqPNkOOt05tTa5KDU8unBiXon0DzFS01CuctFJDJO-IU1ShSmR-qpy~dLUiRvbeISFPcvsWNTt5AKQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
    />
  );
};
