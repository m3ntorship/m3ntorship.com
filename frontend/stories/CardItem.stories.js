import React from 'react';
import CardItem from '../components/CardItemComponent';

export default {
  title: 'Card Item',
  component: CardItem
};

export const CardItemShowCase = () => {
  return (
    <CardItem
      subTitle="Front-End Project"
      cardDesc="A job listings and job application app for working abroad."
    />
  );
};
