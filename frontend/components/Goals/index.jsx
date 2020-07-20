import React from 'react';
import image from './images/Squiggles Monochromatic.png';
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
          <h2 className="my-2 uppercase font-bold text-c100 mb-5 title">
            {title}
          </h2>
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
