import React from 'react';
import { ParallaxedHeader } from '../components/ParallaxedHeader';

export default {
  title: 'ParallaxedHeader',
  component: ParallaxedHeader
};
const data = {
  imgUrl:
    'https://s3-alpha-sig.figma.com/img/84ca/8488/43e3d037ba96c1ea68f040d838096dbc?Expires=1596412800&Signature=hAg-XtukxcwqXeMyVtGeJy8BNAbjSOOKyDrFCLM7tBCXpBPdqpkhxJfmXyjqJzoa675Je6ANzO6G42mT~DqdcNQDCPfkOs-p26E~875aGvrcX2PBXfLqarW7DoAgmQCyvZY6XBfQAVEt-2hMBfsq-bDHuEF97ru3k1sh2FvOC6lv9zH4R5dfpJvhfcDD1i2fKG2tGEGDMMma3WNmcPMFzKXBntDVe69pKUVoEF7qV1O7EOemFVuwN7m642AYGEjg7caUKPuZxsVNPQ0T5UjU~dCLCMSOUIv~hR2hd4gnDrHMJ8U5sL788UKAetklIVyPML0jEGEVF8XKlSTjZl7-jw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
  title: 'm3ntorship',
  sub_title: 'level-up your tech skills'
};

export const ParallaxedHeaderComponent = () => {
  return (
    <div style={{ height: '1000px' }}>
      <ParallaxedHeader data={data} />
    </div>
  );
};
