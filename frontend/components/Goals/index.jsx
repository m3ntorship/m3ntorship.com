import React from 'react';
import { GradientText, Heading, HEADING_OPTIONS } from '../shared/Heading';

const Goals = ({ data }) => {
  const { title, list_goals, side_image } = data;
  if (data) {
    return (
      <div className="relative w-full my-24">
        <div className="text-center text-lg container">
          <div className="absolute hidden md:block -top-12 right-12">
            {side_image && <img src={side_image.url} />}
          </div>
          <Heading
            textAlign={HEADING_OPTIONS.TEXT_ALIGN.CENTER}
            type={HEADING_OPTIONS.TYPE.SECTION}
            as="h2"
          >
            <GradientText text={title} className="uppercase font-bold" />
          </Heading>
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
