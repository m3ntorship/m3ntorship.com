import React from 'react';
import { TopBar } from '../components/TopBar';
import { ParallaxedHeader } from '../components/ParallaxedHeader';
import { ParagraphWithImageBeside } from '../components/ParagraphWithImageBeside';

export default {
  title: 'About Us Header',
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

export const AboutUsComponent = () => {
  return (
    <>
      <TopBar data={topBarData} background_color={true} button_shadow={true} />
      <ParallaxedHeader data={parallaxedData} />
      <div className="container my-16">
        <ParagraphWithImageBeside data={PwIData} />
      </div>
    </>
  );
};
