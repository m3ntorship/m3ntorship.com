import React from 'react';
import { GradientText, Heading, HEADING_OPTIONS } from '../shared/Heading';

const Goals = ({ data }) => {
  const { title, list_goals, side_image } = data;
  if (data) {
    return (
      <section className="text-center text-lg container relative">
        <div className="absolute hidden xl:block -top-12 right-12">
          {side_image && <img src={side_image.url} alt="birds icon" />}
        </div>
        {title && (
          <Heading
            textAlign={HEADING_OPTIONS.TEXT_ALIGN.CENTER}
            type={HEADING_OPTIONS.TYPE.SECTION}
            textTransform={HEADING_OPTIONS.TEXT_TRANSFORM.UPPERCASE}
            fontWeight={HEADING_OPTIONS.FONT_WEIGHT.BOLD}
            as="h2"
          >
            <GradientText text={title} />
          </Heading>
        )}
        {list_goals && (
          <div className="goals__goals-list">
            {list_goals.map(({ id, goal }) => {
              return (
                <p
                  className="font-normal text-base md:text-xlg mb-10 last:mb-0"
                  key={id}
                >
                  {goal}
                </p>
              );
            })}
          </div>
        )}
      </section>
    );
  }
};

export default Goals;
