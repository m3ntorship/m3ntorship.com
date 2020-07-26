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
  side_image: {
    url: sideImage
  },
  cards : [
    {
      id: 1,
      cardDetails: {
        image: testImage,
        title: 'Apply',
        description:
          'Decide to join our program lorem ipsum dollar sient right now.'
      }
    },
    {
      id: 2,
      cardDetails: {
        image: testImage,
        title: 'Apply',
        description:
          'Decide to join our program lorem ipsum dollar sient right now.'
      }
    },
    {
      id: 3,
      cardDetails: {
        image: testImage,
        title: 'Apply',
        description:
          'Decide to join our program lorem ipsum dollar sient right now.'
      }
    },
    {
      id: 4,
      cardDetails: {
        image: testImage,
        title: 'Apply',
        description:
          'Decide to join our program lorem ipsum dollar sient right now.'
      }
    },
    {
      id: 5,
      cardDetails: {
        image: testImage,
        title: 'Apply',
        description:
          'Decide to join our program lorem ipsum dollar sient right now.'
      }
    },
    {
      id: 6,
      cardDetails: {
        image: testImage,
        title: 'Apply',
        description:
          'Decide to join our program lorem ipsum dollar sient right now.'
      }
    },
  ]
};

export const HowItWorks = () => {
  return (
    <HowItWork
      title={data.title}
      paragraph={data.paragraph}
      cards={data.cards}
      sideImage={data.side_image}
      steps={data.steps}
    />
  );
};
