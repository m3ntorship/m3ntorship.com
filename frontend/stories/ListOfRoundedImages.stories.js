import React from 'react';
import { ListOfRoundedImages } from '../components/ListOfRoundedImages';

export default {
  title: 'ListOfRoundedImages',
  component: ListOfRoundedImages
};
const team_images = [
  {
    image: {
      url: 'https://via.placeholder.com/150'
    }
  },
  {
    image: {
      url: 'https://via.placeholder.com/150'
    }
  },
  {
    image: {
      url: 'https://via.placeholder.com/150'
    }
  },
  {
    image: {
      url: 'https://via.placeholder.com/150'
    }
  },
  {
    image: {
      url: 'https://via.placeholder.com/150'
    }
  },
  {
    image: {
      url: 'https://via.placeholder.com/150'
    }
  }
];
export const ListOfRoundedImagesComponent = () => {
  return <ListOfRoundedImages data={team_images} />;
};
