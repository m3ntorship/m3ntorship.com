import React, { useState } from 'react';
import { UserProvider } from '../../context/UserContext';
import { TopBar } from '../TopBar';
import SectionHeader from '../shared/SectionHeader';
import Footer from '../footer';
import Apply from '../apply/index';
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
              gradient_color="blue"
              headingtype="main"
              customClassName="container"
            />
          ) : (
            <SectionHeader
              data={menteeSectionHeaderData}
              gradient_color="green"
              headingtype="main"
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
