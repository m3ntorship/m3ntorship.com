import React from 'react';
import { Heading, GradientText, HEADING_OPTIONS } from '../shared/Heading';
import PersonCard from '../person-card';

const TeamGroupSection = ({ data }) => {
  const { title, cardsData } = data;

  const membersData = cardsData.map(cardData => {
    return (
      <div className="col-span-3 border border-c1100 ">
        <PersonCard
          className="border border-c400"
          cardDetails={cardData}
          rounded={true}
        />
      </div>
    );
  });

  return (
    <div className="text-center">
      <Heading
        type={HEADING_OPTIONS.TYPE.SECTION}
        textAlign={HEADING_OPTIONS.TEXT_ALIGN.CENTER}
        textTransform={HEADING_OPTIONS.TEXT_TRANSFORM.UPPERCASE}
        className="mt-16 pb-5"
        as="h3"
      >
        <GradientText
          text={title}
          gradientColor={HEADING_OPTIONS.GRADIENT_COLOR.GREEN}
        />
      </Heading>
      <div className="grid md:grid-cols-12 sm:grid-cols-1 gap-5 justify-around items-center">
        <div className="col-end-4"></div>
        {membersData}
      </div>
    </div>
  );
};

export default TeamGroupSection;
