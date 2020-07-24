import React from 'react';

export const ParagraphWithImageBeside = ({ data: { text, imgUrl } }) => {
  return (
    <div className="flex justify-between">
      <p className="text-base text-center md:text-left w-ful md:w-3/4 leading-normal">
        {text}
      </p>
      <div className="w-56 hidden md:block">
        <img src={imgUrl} alt="" className="w-full" />
      </div>
    </div>
  );
};
