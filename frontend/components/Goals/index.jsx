import React from 'react';
import image from './images/Squiggles Monochromatic.png';
import { GradientText } from '../shared/Heading';
import '../../styles/goals.css';

const Goals = ({ data }) => {
  const { title, goals } = data;
  if (data) {
    return (
      <div className="relative w-full">
        <div className="text-center my-10 text-lg container">
          <div className="absolute graph opacity-25 md:opacity-100">
            <img src={image} />
          </div>
          <GradientText text={title} gradientColor="green" className="bold" />
          <div className="mt-16">
            {goals.map(goal => {
              return <p className="uppercase mb-12 font-normal">{goal}</p>;
            })}
          </div>
        </div>
      </div>
    );
  } else {
    return <div>Not Fetched Yet</div>;
  }
};

export default Goals;
