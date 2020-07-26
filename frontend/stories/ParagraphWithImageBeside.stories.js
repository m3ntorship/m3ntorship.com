import React from 'react';
import { ParagraphWithImageBeside } from '../components/ParagraphWithImageBeside';

export default {
  title: 'ParagraphWithImageBeside',
  component: ParagraphWithImageBeside
};
const data = {
  imgUrl:
    'https://s3-alpha-sig.figma.com/img/4419/034a/411a5c642c045d6a8430638ccc201faf?Expires=1596412800&Signature=NdQkhrFiwGDuuCyJMlGqVOOSlCIPfZYkhBnAFac61IsCpqM1PHNOJ5eLJL~3w~TbVcsESHz6YNoatv52iAHE9r51j1vPjCH3d2q67yqEt9HRFSu-TbfwxvBJlgbZ~psHEBK6pR4flr48kxi-EtIIfczj3pUVL2Ng4xYwwzk~cxB98BZwtYuVrKZriN3MjlFz8i7fhtZg59ShVBaBeE7Y1j4EgZKbSdbZkAtlx2hlDXKXv1AarWtcx7zMtEejSanliCTW1dKcbfoM5r9lpzkol2rNg7Ub0gJfuLnTE6BPDKFooPJSvhAQAAcyUMaXmtMl60-Yc-tUjiuW5JoTUo0ACw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
  text:
    'charity.m3ntorship.com is a website that enables a charity organization to showcase their services, raise funds for their causes, and announce their upcoming events and volunteering opportunities.'
};

export const ParagraphWithImageBesideComponent = () => {
  return <ParagraphWithImageBeside data={data} />;
};
