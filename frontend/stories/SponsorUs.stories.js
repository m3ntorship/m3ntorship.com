import React from 'react';
import SponsorUs from '../components/SponsorSection';

export default {
  title: 'Sponsor Now Section',
  component: SponsorUs
};

const sponserUsData = {
  title: 'Sponsor Us',
  sub_title:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Molestie',
  sponsers_link: {
    name: 'Sponsor Now',
    url: '/sponerus'
  }
};

const sponsersData = [
  {
    logo: {
      url: 'https://s3.m3ntorship.net:443/m3ntorshipcom/Vector_1_acab9fca02.png'
    },
    id: '5f3e9a0e60028b62501e0846'
  },
  {
    logo: {
      url: 'https://s3.m3ntorship.net:443/m3ntorshipcom/Vector_1_acab9fca02.png'
    },
    id: '5f3e9a0e60028b62501e0846'
  }
];

export const SponsorusShowCase = () => {
  return (
    <SponsorUs
      sponsersData={sponsersData}
      sponserUsData={sponserUsData}
      withBtn={true}
      withIcons={true}
    />
  );
};
