import React from 'react';
import { Heading, GradientText, HEADING_OPTIONS } from '../shared/Heading';
import PersonCard from '../person-card';

const TeamGroupSection = ({ data }) => {
  const { title, member } = data;

  const membersData = member.map(cardData => {
    return (
      <div key={cardData.id} className="border border-c1100">
        <PersonCard cardDetails={cardData} rounded={true} />
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
      <div className="grid md:grid-cols-2 sm:grid-cols-1 lg:px-48 gap-5">
        {membersData}
      </div>
    </div>
  );
};

export default TeamGroupSection;
