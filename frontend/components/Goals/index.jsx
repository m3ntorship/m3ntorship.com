import React from 'react';
import { GradientText } from '../shared/Heading';

const Goals = ({ data }) => {
  const {
    title,
    list_goals,
    side_image
  } = data;
  if (data) {
    return (
      <div className="relative w-full my-24">
        <div className="text-center text-lg container">
          <div className="absolute graph hidden md:block">
            {side_image && 
              <img src={side_image.url} />
            }
          </div>
          <GradientText text={title} className="uppercase font-bold" />
          <div className="mt-10 md:mt-16">
            {list_goals.map(({ id, goal }) => {
              return (
                <p
                  className="uppercase mb-12 font-normal text-sm md:text-xlg"
                  key={id}
                >
                  {goal}
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
