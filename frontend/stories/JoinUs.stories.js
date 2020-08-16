import React from 'react';
import JoinUs from '../components/JoinUsComponent';

export default {
  title: 'Join Us',
  component: JoinUs
};

const data = {
  title: 'Join Next Patch',
  description: 'A job listings and job application app for working abroad.',
  mentorBtn: 'Apply as Mentor',
  memberBtn: 'Apply as Member',
  left_img: {
    url:
      'https://s3-alpha-sig.figma.com/img/6ab3/7f82/5cedbb0153583a74429f439e480c8d2a?Expires=1598227200&Signature=CvH8n9ytlqm~ljwRsjQGc6rngNTYhUVddTSE~WKgomaTnxKO21YQgfCdWNM2p3pLG7o~xbYdvZB0JC2xn8X7yJaIvgdAnUHdKLnsABce5ZiLjAiFKwkx9xRMitk3gqu6J12qNOIh-ZP~iNPh4LEetLsFnEFN64rQ7gv-ELJLDmLy96o-~P-Xg-uz2Br6j3kVNSrnYe9Hdj1PfXdGrpigz2h14WVNXPeRppmpeB~sn2YZTSVJ2kgBikXVueEuRiLrXCUAK5k4wp2RiHjhOeJLgu9DQlQip6~Xme-0P4a6~3JdTrQwCBcBkLJvyjJUh6NZThIsnYS31OpdX6LZsUIDAA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'
  },
  right_img: {
    url:
      'https://s3-alpha-sig.figma.com/img/a1ba/aaf1/75daa654aef922b1f1ea60ae6d402855?Expires=1598227200&Signature=OwZKbPpk6YEKK3hfzFVFwJjITH3F7-HqGTHKMnoNWD~cBNs9CPYgSx6vzKp5XtRjaocmYURGH-cG2waQtLhpvnYhFvH55YPo0ivpzdG1ALom-OKNrjzWIyBTWKjFQYKXGzPa49pU9JznNwUiO6Wx8CQhZfKBRQN0AhnUvrTFuoDc4BcKozDS5-fNHzhLXk3oKUggC5wsY-uv4kyKl2ueXzhVDkg9cByHg~WCDyb805qGHiqgJYsHVs76VCmD1BTuix24RV0xf9Fe7sujd3cj8p9Bh5tDhZ083XIiV4v7DOSylRIp5VTwMn0zKAPKLWb0qHOqL3LCzIcchL9f7Di73g__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'
  }
};

export const JoinUsComponent = () => {
  return (
    <>
      <div>
        <div className="h-72"></div>
        <div className="h-72"></div>
        <JoinUs data={data} />
      </div>
    </>
  );
};
