import React from 'react';

export const ParagraphWithImageBeside = ({
  data: {
    title,
    sub_title,
    image: { url }
  }
}) => {
  return (
    <div className="flex justify-between">
      <div>
        <p className="text-base text-center mb-4 md:text-left w-ful md:w-3/4 leading-normal">
          {title}
        </p>
        <p className="text-base text-center  mb-4  md:text-left w-ful md:w-3/4 leading-normal">
          {sub_title}
        </p>
      </div>

      <div className="w-56 hidden md:block">
        {url && <img src={url}  className="w-full" />}
      </div>
    </div>
  );
};
