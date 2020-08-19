import React from 'react';
import SponsorUs from '../components/SponsorSection';

export default {
  title: 'Sponsor Now Section',
  component: SponsorUs
};

const data = {
  sponsorsLogos: [
    { sponsorLogo: 'https://i.imgur.com/eBzT4Jy.png' },
    { sponsorLogo: 'https://i.imgur.com/eCX9g0r.png' },
    { sponsorLogo: 'https://i.imgur.com/46NXC9K.png' },
    { sponsorLogo: 'https://i.imgur.com/J9AcZjP.png' },
    { sponsorLogo: 'https://i.imgur.com/UhSvBgy.png' },
    { sponsorLogo: 'https://i.imgur.com/k58X0Fy.png' }
  ]
};

export const SponsorusShowCase = () => {
  return (
    <SponsorUs
      cardDesc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Molestie"
      withBtn={true}
      withIcons={true}
      data={data}
    />
  );
};
