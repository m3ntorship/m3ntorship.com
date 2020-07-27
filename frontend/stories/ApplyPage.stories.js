import React from 'react';
import { ApplyPage } from '../components/ApplyPage';

export default {
  title: 'Apply Page',
  component: ApplyPage
};

const data = {
  topBarData: {
    logo_title: 'M3ntorship',
    sub_title: 'lever up your tech skills',
    link: {
      link_url: '/apply',
      link_text: 'Apply Now'
    }
  },
  sectionHeaderData: {
    heading: 'One more step  to ',
    headingGradientText: 'Join Us.',
    description:
      'A10-weeks program that helps new developers gain real world experience by building real projects in a collaborative remote environment.',
    image:
      'https://s3-alpha-sig.figma.com/img/c276/0ada/30e5f4ecc27eb8df318751c75c42c98c?Expires=1597017600&Signature=fFh0MYvoweW5r4HGxqR1HKKtgjR39uyn6hT0IsnXsMiVpva-DreihqEERiAZWnCvntyCtNO4dIHKGi8pI4J8QdWrRgM4jXgCGOEIGezTxXEKjcX0Ys-ONZ2lJP6M5crh64w1X5d~M~MzoQjMNe-70a3zkNLobjGYuK4b4EIfFFWwwv09hNLQzqOsAryBIO-sF7kCdDakrOOxNJUPlSowwJYrstxz9LX3xUzyif32uP~3BuWhKuqfr0eZOaoKJhcfXxhNLHR6adI41vAUIA53c-4ZBTV9xbsm2l9WI5cNsMNlpOJ5gp7KZf~JknROKme3Z3527zxqmCm-pDBSpU6ZjA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
    headerImage:
      'https://s3-alpha-sig.figma.com/img/d0ba/c46d/961c8d1e30044a84a088c3ef1c6e6137?Expires=1597017600&Signature=TSWZdIThqecLZPHjNXwbbIvRnUqh0RTeK1DD3UUq0iY7p34Xgf0bKZclastAaVf3dx~ALXafr9Ama33CSlF0QZko~oCN3d-qtGr3aOzQgvMpNcAhVkmMJQHcEU214Xwv4vJwY8Q8V0AfqYErwfQJAoQiRVmQ1KqAOnPa0r3pv-NvcsANGht~6oRThxYooGj62vWLJS3spN1OY8ElkMa-4mP08qodY~9P59I4laWKw1rGEiERk1JJ06Yp1imcHLKEyYQVSiXSEE289waB6VE3pIPF-aLFCxPP~MeEpyiqwQZ72rlDdKF4zjAM0sAvjx2Un8K3dIXEHqm2oO1IP~A1kA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'
  },
  footerData: {
    links: [
      { text: 'Github', url: 'github.com', underline: false },
      { text: 'Facebook', url: 'github.com', underline: false },
      { text: 'Twitter', url: 'github.com', underline: false },
      { text: 'infot@m3notorship.com', url: 'github.com', underline: true }
    ],
    about: {
      text:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Molestiealiquam iaculisLorem ipsum dolor sit amet, consectetur adipiscing elit. Molestiealiquam iaculisLorem ipsum dolor sit amet, consectetur adipiscing elit. Molestiealiquam iaculisLorem ipsum dolor sit amet, consectetur adipiscing elit. Molestiealiquam iaculisLorem ipsum dolor sit amet, consectetur adipiscing elit. Molestiealiquam iaculisLorem ipsum dolor sit amet, consectetur adipiscing elit. Molestiealiquam iaculis',
      url: '#'
    },
    copyrights: 'M3ntorship © 2019-2020.'
  }
};

export const ApplyPageComponent = () => {
  return <ApplyPage data={data} />;
};
