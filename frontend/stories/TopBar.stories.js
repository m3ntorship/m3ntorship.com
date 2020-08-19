import React from 'react';
import { TopBar } from '../components/TopBar';
import { withKnobs, boolean, select } from '@storybook/addon-knobs';

export default {
  title: 'TopBar',
  component: TopBar,
  decorators: [withKnobs]
};
const data = {
  logo_link: { url: '/', name: 'M3ntorship' },
  sub_text: 'Level-up your tech skills',
  apply_btn: { url: '/apply', name: 'APPLY NOW' }
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
