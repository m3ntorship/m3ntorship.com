import React, { useState } from 'react';
import { UserProvider } from '../../context/UserContext';
import { TopBar } from '../TopBar';
import SectionHeader from '../shared/SectionHeader';
import Footer from '../footer';

export const ApplyPage = ({ data }) => {
  const [mentor, setMenor] = useState(true);

  if (data) {
    const { topBarData, mentorSectionHeaderData, footerData } = data;
    return (
      <>
        <div className="container">
          <UserProvider value={{ mentor, setMenor }}>
            {mentor ? (
              <template>
                <TopBar data={topBarData} button_color="blue" />
                <SectionHeader
                  data={mentorSectionHeaderData}
                  gradient_color="blue"
                  headingtype="main"
                />
              </template>
            ) : (
              <template>
                <TopBar data={topBarData} button_color="green" />
                <SectionHeader
                  data={mentorSectionHeaderData}
                  gradient_color="green"
                  headingtype="main"
                />
              </template>
            )}
          </UserProvider>
          <Footer data={footerData} />
        </div>
      </>
    );
  }
};
