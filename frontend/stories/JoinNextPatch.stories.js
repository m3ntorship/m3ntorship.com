import React from 'react';
import JoinNextPatch from '../components/JoinNextPatch';

export default {
  title: 'Join Next Patch',
  component: JoinNextPatch
};

const data = {
  title: 'Join Next Patch',
  description: 'A job listings and job application app for working abroad.'
};

export const JoinNextPatchComponent = () => {
  return <JoinNextPatch data={data} />;
};
