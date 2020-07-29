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
      topBarData,
      mentorSectionHeaderData,
      menteeSectionHeaderData,
      applyData,
      applyInputFields,
      footerData
    } = data;

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
          <Apply data={applyData} inputFields={applyInputFields} />
        </UserProvider>
        <Footer data={footerData} />
      </>
    );
  }
};
