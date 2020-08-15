import React from 'react';
import { GradientText, Heading, HEADING_OPTIONS } from '../shared/Heading';
import PersonCard from '../person-card';

export const Team = ({ data, team_members }) => {
  if (data) {
    const {
      title,
      side_image: { url },
      description
    } = data;
    return (
      <section className="team relative text-center container">
        <div className="absolute graph right-0 hidden xl:block">
          <img src={url} />
        </div>
        {title && (
          <Heading
            type={HEADING_OPTIONS.TYPE.SECTION}
            fontWeight={HEADING_OPTIONS.FONT_WEIGHT.BOLD}
            textAlign={HEADING_OPTIONS.TEXT_ALIGN.CENTER}
            textTransform={HEADING_OPTIONS.TEXT_TRANSFORM.UPPERCASE}
            as="h2"
          >
            <GradientText text={title} />
          </Heading>
        )}
        {description && (
          <p className="mb-16 mx-auto text-center text-base text-c600 lg:w-4/6">
            {description}
          </p>
        )}
        {team_members && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {team_members.map(({ member_info, id }) => {
              return (
                <PersonCard
                  key={id}
                  cardDetails={member_info}
                  bgColord={true}
                  rounded={true}
                  roundedSmall={true}
                />
              );
            })}
          </div>
        )}
      </section>
    );
  }
};
