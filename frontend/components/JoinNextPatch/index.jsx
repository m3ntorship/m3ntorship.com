import React from 'react';
import './style.css';

const JoinNextPatch = ({ data }) => {
  return (
    <div className="join-next-patch border-4 border-dashed border-c100">
      <h6 className="text-lg text-center mt-16 font-bold uppercase">
        {data.title}
      </h6>
      <p className="text-center mt-6 text-xs font-normal">{data.description}</p>
      <img src="../" alt="" />
    </div>
  );
};

export default JoinNextPatch;
