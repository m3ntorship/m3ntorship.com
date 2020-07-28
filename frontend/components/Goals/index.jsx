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
      <div className="relative w-full my-24">
        <div className="text-center text-lg container">
          <div className="absolute graph hidden md:block">
            <img src={url} />
          </div>
          <GradientText text={title} className="uppercase font-bold" />
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
