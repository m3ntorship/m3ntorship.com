import React from 'react';
import { Heading } from '../shared/Heading';

const JoinNextPatch = ({ data }) => {
  const { title, description } = data;
  return (
    <div className="join-next-patch border-4 border-dashed border-c100">
      <Heading type="card"> Join Next Patch</Heading>

      <p className="text-center my-8 px-2 text-xs font-normal">{description}</p>

      <img
        src="../../public/static/resources/Squiggles Colorful-1.png"
        alt=""
      />
    </div>
  );
};

export default JoinNextPatch;
