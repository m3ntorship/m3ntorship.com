import React from 'react';
import { GradientText } from '../shared/Heading';
import PersonCard from '../person-card';

const HowItWork = ({ title, paragraph, cardDetails }) => {
  const test = new Array(6);
  test.fill(1);
  return (
    <div className="text-center my-16">
      <div className="container">
        <div className="text-xxlg uppercase font-bold">
          <GradientText text={title} />
        </div>
        <p className="my-10 mx-auto text-sm text-c600 w-2/4">{paragraph}</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {test.map((el, index) => {
            return (
              <div className="num-component relative">
                <span className="num block text-giant transform translate-y-8 z-0 text-c400 font-bold ">{` 0${
                  index + 1
                }`}</span>
                <PersonCard cardDetails={cardDetails} boxShadow={true} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default HowItWork;
