import React from 'react';
import HowItWork from '../components/how-it-work';
import testImage from '../components/how-it-work/images/side-image.png';
import sideImage from '../components/how-it-work/images/Squiggles.png';

export default {
  title: 'How it Works',
  component: HowItWork
};

const data = {
  title: 'How It Working?',
  paragraph:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Molestie aliquam iaculis facilisis sit pharetra pellentesque ullamcorper.',
  cardDetails: {
    image: testImage,
    title: 'Apply',
    description:
      'Decide to join our program lorem ipsum dollar sient right now.'
  },
  side_image: {
    url: sideImage
  }
};

export const HowItWorks = () => {
  return (
    <HowItWork
      title={data.title}
      paragraph={data.paragraph}
      cardDetails={data.cardDetails}
      sideImage={data.side_image}
    />
  );
};
