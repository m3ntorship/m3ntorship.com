import React from 'react';
import { GradientText } from '../shared/Heading';

const Goals = ({ data }) => {
  const {
    title,
    goals_lists,
    side_image: { url }
  } = data;
  if (data) {
    return (
      <div className="relative w-full">
        <div className="text-center my-10 text-lg container">
          <div className="absolute graph opacity-25 md:opacity-100">
            <img src={url} />
          </div>
          <div className="uppercase font-bold">
            <GradientText text={title} gradientColor="green" />
          </div>
          <div className="mt-10 md:mt-16">
            {goals_lists.map(({ id, text }) => {
              return (
                <p
                  className="uppercase mb-12 font-normal text-sm md:text-xlg"
                  key={id}
                >
                  {text}
                </p>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
};

export default Goals;
