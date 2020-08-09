import React, { useState } from 'react';
import { UserProvider } from '../../context/UserContext';
import SectionHeader from '../shared/SectionHeader';
import Apply from '../apply/index';
export const ApplyPage = ({ data }) => {
  const [mentor, setMentor] = useState(false);

  if (data) {
    const { headerSectionData, formData } = data;
    let menteeSectionHeaderData = headerSectionData;
    menteeSectionHeaderData['headerImage'] =
      menteeSectionHeaderData['menteeHeaderImage']['url'];
    menteeSectionHeaderData['image'] = menteeSectionHeaderData['Image']['url'];
    let mentorSectionHeaderData = headerSectionData;
    mentorSectionHeaderData['headerImage'] =
      mentorSectionHeaderData['mentorHeaderImage']['url'];
    mentorSectionHeaderData['image'] = mentorSectionHeaderData['Image']['url'];
    return (
      <>
        <UserProvider value={{ mentor, setMentor }}>
          {mentor ? (
            <div className="container mt-24">
              <SectionHeader
                data={mentorSectionHeaderData}
                gradient_color="blue"
                headingtype="main"
              />
            </div>
          ) : (
            <div className="container mt-24">
              <SectionHeader
                data={menteeSectionHeaderData}
                gradient_color="green"
                headingtype="main"
              />
            </div>
          )}
          <div className="container mt-24 mb-24">
            <Apply data={formData} />
          </div>
        </UserProvider>
      </>
    );
  }
};
