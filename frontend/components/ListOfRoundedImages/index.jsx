import React, { useState } from 'react';
import randomPosition from '../../helper/randomPosition';

export const ListOfRoundedImages = ({ data }) => {
  let cache = [];
  return (
    <div
      className="grid grid-cols-4 grid-rows-4 gap-5"
      style={{
        placeItems: 'center',
        gridTemplateAreas:
          "'g1 g2 g3 g4' 'g5 g6 g7 g8' 'g9 g10 g11 g12' 'g13 g14 g15 g16'"
      }}
    >
      {data &&
        data.map(({ url }, index) => {
          return (
            <img
              key={index}
              src={url}
              className="object-cover w-24 h-24 rounded-full"
              style={{ gridArea: `g${randomPosition(16, cache)}` }}
            />
          );
        })}
    </div>
  );
};
