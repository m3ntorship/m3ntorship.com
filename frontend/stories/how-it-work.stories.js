import React from 'react';
import HowItWork from '../components/how-it-work';
import sideImage from '../components/how-it-work/images/side-image.png';

export default {
  title: 'How it Works',
  component: HowItWork
};

const data = {
  title: 'How It Working?',
  paragraph:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Molestie aliquam iaculis facilisis sit pharetra pellentesque ullamcorper.',
  cardDetails: {
    image: sideImage,
    title: 'Apply',
    description: 'Decide to join our program.',
    subtitle: ''
  }
};

export const HowItWorks = () => {
  return (
    <HowItWork
      title={data.title}
      paragraph={data.paragraph}
      cardDetails={data.cardDetails}
    />
  );
};
