import React from 'react';
import { GradientText, Heading, HEADING_OPTIONS } from '../shared/Heading';
import PersonCard from '../person-card';

const HowItWork = ({ title, paragraph, cardDetails, sideImage, steps }) => {
  return (
    <div className="text-center my-16">
      <div className="container relative">
        <div className="absolute left-0 top-0 lg:-ml-10 hidden lg:block">
          <img src={sideImage.url} />
        </div>
        <Heading type={HEADING_OPTIONS.TYPE.SECTION} textAlign={HEADING_OPTIONS.TEXT_ALIGN.CENTER} >
          <GradientText text={title} className="uppercase font-bold" />
        </Heading>
        <p className="my-10 mx-auto text-base text-c600 lg:w-4/6">{paragraph}</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {steps.map((el, index) => {
            return (
              <div className="num-component relative">
                <span className="num block text-giant transform translate-y-8 z-0 text-c400 font-bold ">{` 0${
                  index + 1
                }`}</span>
                <div className='z-10 relative bg-c000'>
                <PersonCard cardDetails={cardDetails} boxShadow={true} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default HowItWork;
