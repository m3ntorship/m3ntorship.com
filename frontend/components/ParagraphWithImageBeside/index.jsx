import React from 'react';

export const ParagraphWithImageBeside = ({
  data: {
    title,
    sub_title,
    image: { url }
  }
}) => {
  return (
    <div className="flex justify-between items-center">
      <div className="w-full md:w-8/12">
        <p className="text-center mb-4 md:text-left">{title}</p>
        <p className="text-center  mb-4  md:text-left">{sub_title}</p>
      </div>

      <div className="w-2/12 flex-auto hidden md:flex justify-end items-center">
        {url && <img src={url} />}
      </div>
    </div>
  );
};
