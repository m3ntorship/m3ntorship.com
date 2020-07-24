import React from 'react';
import { TopBar } from '../components/TopBar';

export default {
  title: 'TopBar',
  component: TopBar
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
  return <TopBar data={data} background_color={true} button_shadow={true} />;
};
