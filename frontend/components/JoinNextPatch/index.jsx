import React from 'react';

const JoinNextPatch = ({ data }) => {
  const { title, description } = data;
  return (
    <div className="join-next-patch border-4 border-dashed border-c100 w-3/4 h-1/2 m-auto">
      <h6 className="text-lg text-center my-16 font-bold uppercase">{title}</h6>
      <p className="text-center my-8 px-2 text-xs font-normal">{description}</p>

      <img
        src="../../public/static/resources/Squiggles Colorful-1.png"
        alt=""
      />
    </div>
  );
};

export default JoinNextPatch;
