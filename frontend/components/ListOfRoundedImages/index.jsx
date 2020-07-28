import React from 'react';

export const ListOfRoundedImages = ({ data }) => {
  return (
    <div className="grid grid-cols-3 gap-10">
      {data.map(image => {
        <div className="w-24 h-24 rounded">
          <img src={image.image.url} className="w-full h-full object-cover" />
        </div>;
      })}
    </div>
  );
};
