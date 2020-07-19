import React from 'react';

const Goals = ({ header, goals }) => {
  return (
    <div className="text-center my-10 text-lg">
      <h2 className="my-2 uppercase font-bold text-c100 mb-5">{header}</h2>
      {goals.map(goal => {
        return <p className="uppercase mb-12">{goal}</p>;
      })}
    </div>
  );
};

export default Goals;
