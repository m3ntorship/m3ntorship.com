import React from 'react';
import { Heading } from '../shared/Heading';

const JoinNextPatch = ({ data }) => {
  const { title, description, left_img, right_img } = data;
  return (
    <div className="join-next-patch border-4 border-dashed border-c100 flex justify-around">
      <div className="my-24">
        <img className="w-56 h-64" src={left_img} alt="" />
      </div>
      <div>
        <span className="block text-center mt-16 py-5 uppercase">
          <Heading type="cardSmall">Join Next Patch</Heading>
        </span>
        <p className="text-center px-2 py-8 text-xs font-normal">
          {description}
        </p>
      </div>
      <div className="my-24">
        <img className="w-56 h-64" src={right_img} alt="" />
      </div>
    </div>
  );
};

export default JoinNextPatch;
