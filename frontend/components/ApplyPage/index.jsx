import React, { useState } from 'react';
import { UserProvider } from '../../context/UserContext';
import { TopBar } from '../TopBar';
import SectionHeader from '../shared/SectionHeader';
import Footer from '../footer';
import Apply from '../apply/index';
export const ApplyPage = ({ data }) => {
  const [mentor, setMentor] = useState(false);

  if (data) {
    const { topBarData, headerSectionData, formData, footerData } = data;
    let menteeSectionHeaderData = headerSectionData;
    menteeSectionHeaderData['headerImage'] =
      menteeSectionHeaderData['menteeHeaderImage'];
    let mentorSectionHeaderData = headerSectionData;
    mentorSectionHeaderData['headerImage'] =
      mentorSectionHeaderData['mentorHeaderImage'];
    return (
      <>
        <UserProvider value={{ mentor, setMentor }}>
          <TopBar data={topBarData} button_color={mentor ? 'blue' : 'green'} />
          {mentor ? (
            <SectionHeader
              data={mentorSectionHeaderData}
              gradient_color="blue"
              headingtype="main"
            />
          ) : (
            <SectionHeader
              data={menteeSectionHeaderData}
              gradient_color="green"
              headingtype="main"
            />
          )}
          <Apply data={formData} />
        </UserProvider>
        <Footer data={footerData} />
      </>
    );
  }
};
