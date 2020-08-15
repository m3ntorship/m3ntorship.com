import React from 'react';

export const ParagraphWithImageBeside = ({ data }) => {
  if (data) {
    const { title, sub_title, image } = data;
    return (
      <div className="flex justify-between items-center">
        <div className="w-full md:w-8/12">
          {title && <p className="text-center mb-4 md:text-left">{title}</p>}
          {sub_title && (
            <p className="text-center  mb-4  md:text-left">{sub_title}</p>
          )}
        </div>

        <div className="w-2/12 flex-auto hidden md:flex justify-end items-center">
          {image && (
            <img src={image.url} alt="side icon for a more beautiful UI" />
          )}
        </div>
      </div>
    );
  } else {
    return null;
  }
};
