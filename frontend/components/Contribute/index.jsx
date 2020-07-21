import React from 'react';
import { Heading } from '../shared/Heading';

const WantToContribute = ({ data }) => {
  const { description, img } = data;
  return (
    <div className="flex items-start justify-around">
      <div>
        <span className="block mt-16 py-5 uppercase">
          <Heading type="cardSmall">Want To Contribute</Heading>
        </span>
        <p className="px-2 py-8 text-xs font-normal leading-7">{description}</p>
      </div>
      <div>
        <img src={img} alt="" />
      </div>
    </div>
  );
};

export default WantToContribute;
