import React from 'react';
import { GradientText } from '../shared/Heading';
import PersonCard from '../person-card';

const HowItWork = ({ title, paragraph, cardDetails }) => {
  const test = new Array(6);
  test.fill(1);
  return (
    <div className="text-center my-10">
      <div className="container">
        <div className="text-xxlg uppercase font-bold">
          <GradientText text={title} />
        </div>
        <p className="my-10 mx-auto text-base text-c600 w-3/4">{paragraph}</p>
        <div className="grid grid-cols-3 gap-10">
          {test.map(() => {
            return (
              <div className="num-component relative">
                <PersonCard
                  cardDetails={cardDetails}
                  boxShadow={true}
                  bgColord="#fff"
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default HowItWork;
