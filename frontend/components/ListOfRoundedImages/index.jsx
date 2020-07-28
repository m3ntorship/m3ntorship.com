import React from 'react';

export const ListOfRoundedImages = ({ data }) => {
  return (
    <div className="flex justify-center flex-wrap">
      {data &&
        data.map(image => {
          return (
            <img
              src={image.image.url}
              className="object-cover w-24 h-24 rounded-full m-5 mt-3"
            />
          );
        })}
    </div>
  );
};
