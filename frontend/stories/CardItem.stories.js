import React from 'react';
import CardItem from '../components/CardItemComponent';

export default {
  title: 'Card Item',
  component: CardItem
};

const data = {
  project_overview: {
    summary:
      'It provides information about their work in news and articles and also statistics about their progress so far.'
  },
  project_head: {
    link: {
      url: '#',
      name: 'repositry'
    }
  },
  project_slug: 'ghiras',
  project_name: 'ghiras',
  id: '5f3b0603e637bff57e1fe49d',
  project_stack: 'Front-end project'
};

export const CardItemShowCase = () => {
  return <CardItem data={data} />;
};
