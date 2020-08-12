import React, { useState } from 'react';
import { UserProvider } from '../../context/UserContext';
import { TopBar } from '../TopBar';
import SectionHeader from '../shared/SectionHeader';
import Footer from '../footer';
import Apply from '../apply/index';
import { HEADING_OPTIONS } from '../shared/Heading';
export const ApplyPage = ({ data }) => {
  const [mentor, setMentor] = useState(false);

  if (data) {
    const {
      headerSectionData,
      headerSectionData: {
        menteeHeaderImage: { url: menteeUrl }
      },
      headerSectionData: {
        mentorHeaderImage: { url: mentorUrl }
      },
      formData
    } = data;

    let menteeSectionHeaderData = {
      ...headerSectionData,
      header_image: { url: menteeUrl }
    };
    let mentorSectionHeaderData = {
      ...headerSectionData,
      header_image: { url: mentorUrl }
    };
    return (
      <>
        <UserProvider value={{ mentor, setMentor }}>
          {mentor ? (
            <SectionHeader
              data={mentorSectionHeaderData}
              gradient_color={HEADING_OPTIONS.GRADIENT_COLOR.BLUE}
              headingtype={HEADING_OPTIONS.TYPE.MAIN}
              customClassName="container"
            />
          ) : (
            <SectionHeader
              data={menteeSectionHeaderData}
              gradient_color={HEADING_OPTIONS.GRADIENT_COLOR.GREEN}
              headingtype={HEADING_OPTIONS.TYPE.MAIN}
              customClassName="container"
            />
          )}
          <section className="container">
            <Apply data={formData} />
          </section>
        </UserProvider>
      </>
    );
  }
};
