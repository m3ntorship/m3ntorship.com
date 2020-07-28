import React from 'react';
import { TopBar } from '../components/TopBar';
import SectionHeader from './../components/shared/SectionHeader';
import { ListOfRoundedImages } from './../components/ListOfRoundedImages';

export default {
  title: 'Patch page',
  component: PatchPageComponent
};
const topBarData = {
  logo_title: 'M3ntorship',
  sub_title: 'lever up your tech skills',
  link: {
    link_url: '/apply',
    link_text: 'Apply Now'
  }
};
const sectionHeaderData = {
  heading: 'One more step  to ',
  headingGradientText: 'Join Us.',
  description:
    'A10-weeks program that helps new developers gain real world experience by building real projects in a collaborative remote environment.',
  image:
    'https://s3-alpha-sig.figma.com/img/c276/0ada/30e5f4ecc27eb8df318751c75c42c98c?Expires=1597017600&Signature=fFh0MYvoweW5r4HGxqR1HKKtgjR39uyn6hT0IsnXsMiVpva-DreihqEERiAZWnCvntyCtNO4dIHKGi8pI4J8QdWrRgM4jXgCGOEIGezTxXEKjcX0Ys-ONZ2lJP6M5crh64w1X5d~M~MzoQjMNe-70a3zkNLobjGYuK4b4EIfFFWwwv09hNLQzqOsAryBIO-sF7kCdDakrOOxNJUPlSowwJYrstxz9LX3xUzyif32uP~3BuWhKuqfr0eZOaoKJhcfXxhNLHR6adI41vAUIA53c-4ZBTV9xbsm2l9WI5cNsMNlpOJ5gp7KZf~JknROKme3Z3527zxqmCm-pDBSpU6ZjA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'
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
export const PatchPageComponent = () => {
  return (
    <>
      <TopBar data={topBarData} />
      <div className="container my-16 grid grid-cols-1 md:grid-cols-2">
        <SectionHeader data={sectionHeaderData} />
        <div className="lg:pl-24">
          <ListOfRoundedImages data={team_images} />
        </div>
      </div>
    </>
  );
};
