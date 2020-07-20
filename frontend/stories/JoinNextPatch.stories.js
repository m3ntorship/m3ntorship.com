import React from 'react';
import JoinNextPatch from '../components/JoinNextPatch';

export default {
  title: 'Join Next Patch',
  component: JoinNextPatch
};

const data = {
  title: 'Join Next Patch',
  description: 'A job listings and job application app for working abroad.',
  left_img:
    'https://s3-alpha-sig.figma.com/img/6ab3/7f82/5cedbb0153583a74429f439e480c8d2a?Expires=1596412800&Signature=OQHfF1fV7IspMfGtbXN6n0d6xjZJ~NSW8SJMsApIvve2nwawX9~2GVO3PkuSmrSFKJyoO958QrJlHKNdPl9wEnydQ2RNtu8IyRtsQNQ0hNesuLMUUF8m7KK42mIorUMMpSsCLU7GEK671lhAl1R4Iliyk~GBmMb197JXNCK4nspcieahLV5xnI-285IpU5mFx2JiOOjqKlcDkVKCGqOAvO0KAN80tywMwcEOisB5E7RqzZ0MQiAAi1gX1lXq~MfBLjaq1KpvKS~2XlxDTyuTgTmEIkwYZloeBIhVwgGULGVyzYfQy5IUzH5YFJ9-Nd-GIN5FWtlfsYBKnhz0eq6k0g__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
  right_img:
    'https://s3-alpha-sig.figma.com/img/a1ba/aaf1/75daa654aef922b1f1ea60ae6d402855?Expires=1596412800&Signature=hlXZ9MIzIg0wynLj~xmoD4wSnquIIxJDhcfsVLG97RJXZpCSb1TAMi5bgkAG3JcVbylbkNcCHySe13XwVJCqsWMmIIlM8IynoanL3JBhujTtwOCefuiKpCk4I2fE57HgWSVDFatu0WWmarXwSPgjf6-VQiz5YFIF3oGylX1bSeY7bmZjcKP4dBCOgAwFRSjD2zjlzfyjM~N0H6nNfhiLUq-poUB~bbCgX9VUoTwDs446iB6Geq8kfohohOCvm-1hF~NSh2EUf9ENKWAOHCs7oVg6VvsZT3Kf9LJA8schQXwWL2JaYAs-krwFonkbCNAzJHtz-KZI0BsjrXQeftGHsw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'
};

export const JoinNextPatchComponent = () => {
  return <JoinNextPatch data={data} />;
};
