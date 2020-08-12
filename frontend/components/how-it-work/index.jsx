import React from 'react';
import { GradientText, Heading, HEADING_OPTIONS } from '../shared/Heading';
import PersonCard from '../person-card';

const HowItWork = ({ data }) => {
  const { title, description, cards } = data;
  if (data) {
    return (
      <section className="text-center container relative">
        <Heading
          as="h2"
          type={HEADING_OPTIONS.TYPE.SECTION}
          textAlign={HEADING_OPTIONS.TEXT_ALIGN.CENTER}
        >
          <GradientText text={title} className="uppercase font-bold" />
        </Heading>
        <p className="mb-10 mx-auto text-base text-c600 lg:w-4/6">
          {description}
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 col-gap-5 row-gap-32 mt-32">
          {cards.map((el, index) => {
            return (
              <div className="relative h-full" key={el.id}>
                <span className="absolute block text-giant z-0 text-c400 font-bold transform -translate-x-1/2 -z-1 -top-30 left-1/2">{` 0${
                  index + 1
                }`}</span>
                <div className="z-10 bg-c000 h-full">
                  <PersonCard cardDetails={el} boxShadow={true} />
                </div>
              </div>
            );
          })}
        </div>
      </section>
    );
  }
};

export default HowItWork;
