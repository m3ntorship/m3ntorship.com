import React from 'react';
import { Heading, GradientText, HEADING_OPTIONS } from '../shared/Heading';
import PersonCard from '../person-card';

const TeamGroupSection = ({ data }) => {
  if (data) {
    const { title, member } = data;
    const membersData = member
      ? member.map(cardData => {
          return (
            <div key={cardData.id} className="border border-c1100">
              <PersonCard cardDetails={cardData} rounded={true} />
            </div>
          );
        })
      : null;

    return (
      <section className="text-center container">
        {title && (
          <Heading
            type={HEADING_OPTIONS.TYPE.SECTION}
            textAlign={HEADING_OPTIONS.TEXT_ALIGN.CENTER}
            textTransform={HEADING_OPTIONS.TEXT_TRANSFORM.UPPERCASE}
            className="pb-5"
            as="h2"
          >
            <GradientText
              text={title}
              gradientColor={HEADING_OPTIONS.GRADIENT_COLOR.GREEN}
            />
          </Heading>
        )}
        {membersData && (
          <div className="grid md:grid-cols-2 sm:grid-cols-1 lg:px-40 gap-5">
            {membersData}
          </div>
        )}
      </section>
    );
  } else {
    return null;
  }
};

export default TeamGroupSection;
