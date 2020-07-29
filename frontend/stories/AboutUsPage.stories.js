import React from 'react';
import { TopBar } from '../components/TopBar';
import { ParallaxedHeader } from '../components/ParallaxedHeader';
import { ParagraphWithImageBeside } from '../components/ParagraphWithImageBeside';
import TeamGroupSection from '../components/TeamSection';
import Footer from '../components/footer';

export default {
  title: 'About Us Page',
  component: TopBar
};
const topBarData = {
  logo_title: 'M3ntorship',
  sub_title: 'lever up your tech skills',
  link: {
    link_url: '/apply',
    link_text: 'Apply Now'
  }
};
const parallaxedData = {
  imgUrl:
    'https://s3-alpha-sig.figma.com/img/84ca/8488/43e3d037ba96c1ea68f040d838096dbc?Expires=1596412800&Signature=hAg-XtukxcwqXeMyVtGeJy8BNAbjSOOKyDrFCLM7tBCXpBPdqpkhxJfmXyjqJzoa675Je6ANzO6G42mT~DqdcNQDCPfkOs-p26E~875aGvrcX2PBXfLqarW7DoAgmQCyvZY6XBfQAVEt-2hMBfsq-bDHuEF97ru3k1sh2FvOC6lv9zH4R5dfpJvhfcDD1i2fKG2tGEGDMMma3WNmcPMFzKXBntDVe69pKUVoEF7qV1O7EOemFVuwN7m642AYGEjg7caUKPuZxsVNPQ0T5UjU~dCLCMSOUIv~hR2hd4gnDrHMJ8U5sL788UKAetklIVyPML0jEGEVF8XKlSTjZl7-jw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
  title: 'm3ntorship',
  sub_title: 'level-up your tech skills'
};
const PwIData = {
  imgUrl:
    'https://s3-alpha-sig.figma.com/img/4419/034a/411a5c642c045d6a8430638ccc201faf?Expires=1596412800&Signature=NdQkhrFiwGDuuCyJMlGqVOOSlCIPfZYkhBnAFac61IsCpqM1PHNOJ5eLJL~3w~TbVcsESHz6YNoatv52iAHE9r51j1vPjCH3d2q67yqEt9HRFSu-TbfwxvBJlgbZ~psHEBK6pR4flr48kxi-EtIIfczj3pUVL2Ng4xYwwzk~cxB98BZwtYuVrKZriN3MjlFz8i7fhtZg59ShVBaBeE7Y1j4EgZKbSdbZkAtlx2hlDXKXv1AarWtcx7zMtEejSanliCTW1dKcbfoM5r9lpzkol2rNg7Ub0gJfuLnTE6BPDKFooPJSvhAQAAcyUMaXmtMl60-Yc-tUjiuW5JoTUo0ACw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
  text:
    'charity.m3ntorship.com is a website that enables a charity organization to showcase their services, raise funds for their causes, and announce their upcoming events and volunteering opportunities.'
};

const TeamGroupData = {
  title: 'Team',
  cardsData: [
    {
      title: 'Ahmed Mudhar',
      subtitle: 'Front-end Developer @Company',
      description: 'A job listings and job application app for working abroad.',
      image:
        'https://s3-alpha-sig.figma.com/img/8feb/2a40/4155b0e30a243f353f0e56409f5e07b0?Expires=1596412800&Signature=hg8Fiztn9jJhSXycSSaXyo~o25VyieMlJ~Tv8wMSSHcgLMDMZAUDeecFYS8bOMmRPLc4dzFFypclhp5aRdNZWae9CL2BiMwZZyo86uJlHV212aGA92ToIi-cSGxbqOvFyby2FOWcZnK43KUAKAMdWowOX0uBMpgod-WRTaXvuGp0shRyI-b1MUsBT4fEtsYLu9i5j4yJdU1eUshXgCek2MZIFNOaY0l-cx0inwIAn9KXJGJHafenFFJC0O1S1VjasujerrcbA-Pre8AKd1bfW6WciwbjgnFYuTuNJuvQ977ZfUvSnil1or4O6gqciudYNN9-rQYzaJdr~jaRy1Oaow__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'
    },
    {
      title: 'Ahmed Ayoub',
      subtitle: 'Front-end Developer @Company',
      description: 'A job listings and job application app for working abroad.',
      image:
        'https://s3-alpha-sig.figma.com/img/7068/57cb/31eb4f8a15d2a0a4ec6d2057c2edd9b7?Expires=1596412800&Signature=aQFzlV-UgYEKk6Bnk06n7SO1O~hebDfPZi2IAcUSbZljHQy0L2HZgTa-weS2jOU98urniKKMjRjLD0H6i~mPxx-E51lRF06FDdsZ9MPNwltzcK4hzIgGRX~Hz1xI9vtP1yhOcdoV2UXQWpvee6QuZa6l~M0PeXpvC9~Qxlzj7oqa0V7EBKnqObWo-~qJMlLZqZ2iDkfcK5OGISCXIuB7HtaK~BKclMXE2MrLsj55MlpuTT0CJSdR9xubp5ODMw23b178p1~b2YySNuJodvYUtB6Jd9IrD4~n9GjnTSOX0Dgk2p-SH8PwbF5JH5sgks7Rlzjca4Vo4R2eZd7wytnV0Q__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'
    }
  ]
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

export const AboutUsComponent = () => {
  return (
    <>
      <TopBar data={topBarData} background_color={true} button_shadow={true} />
      <ParallaxedHeader data={parallaxedData} />
      <div className="container my-16">
        <ParagraphWithImageBeside data={PwIData} />
      </div>
      <div className="container mb-16">
        <TeamGroupSection data={TeamGroupData} />
      </div>
      <div className="container">
        <Footer data={footerData} />
      </div>
    </>
  );
};
