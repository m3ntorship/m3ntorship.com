import React from 'react';
import { TopBar } from '../components/TopBar';
import { withKnobs, boolean, select } from '@storybook/addon-knobs';

export default {
  title: 'TopBar',
  component: TopBar,
  decorators: [withKnobs]
};
const data = {
  logo_title: 'M3ntorship',
  sub_title: 'lever up your tech skills',
  link: {
    link_url: '/apply',
    link_text: 'Apply Now'
  }
};
export const TopBarComponent = () => {
  return (
    <TopBar
      data={data}
      background_color={boolean('background_color', true)}
      button_shadow={boolean('button_shadow', true)}
      button_color={select(
        'button_color',
        { green: 'green', blue: 'blue', none: null },
        'green'
      )}
    />
  );
};
