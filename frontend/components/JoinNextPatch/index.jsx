import React from 'react';
import './style.css';

const JoinNextPatch = ({ data }) => {
  return (
    <div className="join-next-patch border-4 border-dashed border-c100 w-3/4 h-1/2 m-auto">
      <h6 className="text-lg text-center my-16 font-bold uppercase">
        {data.title}
      </h6>
      <p className="text-center my-8 px-2 text-xs font-normal">
        {data.description}
      </p>
      <img src="../public/Squiggles Colorful-1.png" alt="" />
      <img src="../public/Squiggles Colorful-2.png" alt="" />
    </div>
  );
};

export default JoinNextPatch;
