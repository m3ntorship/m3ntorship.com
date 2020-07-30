import React from 'react';
import { TopBar } from '../components/TopBar';
import BackToHomeWithTitleAndImage from '../components/BackToHomeWithTitleAndImage';
import Footer from '../components/footer';

export default {
  title: '404 page',
  component: BackToHomeWithTitleAndImage
};

const topBarData = {
  logo_title: 'M3ntorship',
  sub_title: 'lever up your tech skills',
  link: {
    link_url: '/apply',
    link_text: 'Apply Now'
  }
};

const imageUrl =
  'https://s3-alpha-sig.figma.com/img/5a8e/e1e6/d34cef4cdd3261805554b9b1c9f3d891?Expires=1597017600&Signature=A9LKH~djxlzJoUnOueEiQSdeFuPI8tMhfwyVvzj2G-qtPiydbm6A57ldEytcNo~0NCG63eewb2DGGgG999QLbON4SsaBDPQE61rZqrTrGlJD05aIky0kkoNhynLuTLk7pS82z0n4jcvLVZFThEHICLjzD3DMzQcPWkb-IpKix4e1HtscVoXQ8VqYxR0DaSwaBSDJdadfHkp3PlrsJFZ6Z8aEjG-Ssv83ro9qE1Lwnk5TdxQ45h~CzJyHGpLXxUuJSSfy1az8csxFDyOmMdkYc2ZgaEccCk2AdGKM4bIkb-7VQEasKG4d-ZAeKwpvDeXOGZhaLcPYWYqWyT03HxUfEA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA';
const title = "404... You're Lost!";
const description =
  ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Molestie aliquam iaculis facilisis sit pharetra pellentesque ullamcorper. ';
const btn = {
  text: 'GO TO HOME',
  url: '/'
};
const footerData = {
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
};

export const Custom404Component = () => {
  return (
    <>
      <TopBar data={topBarData} />
      <div className="container pb-24 px-56">
        <BackToHomeWithTitleAndImage
          imageUrl={imageUrl}
          title={title}
          description={description}
          btn={btn}
        />
      </div>
      <div className="container">
        <Footer data={footerData} />
      </div>
    </>
  );
};
