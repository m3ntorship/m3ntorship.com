import React, { useState } from 'react';
import { UserProvider } from '../../context/UserContext';
import SectionHeader from '../shared/SectionHeader';
import Apply from '../apply/index';
import { HEADING_OPTIONS } from '../shared/Heading';
import { useRouter } from 'next/router';
import { TopBar } from '../TopBar';

export const ApplyPage = ({ data, topBarData, pagesData, settings }) => {
  const router = useRouter();
  const { as } = router.query;
  const [mentor, setMentor] = useState(false);

  if (data) {
    const { headerSectionData, formData } = data;
    const { menteeHeaderImage, mentorHeaderImage } = headerSectionData
      ? headerSectionData
      : null;
    let menteeSectionHeaderData = {
      ...headerSectionData,
      header_image: menteeHeaderImage
    };
    let mentorSectionHeaderData = {
      ...headerSectionData,
      header_image: mentorHeaderImage
    };
    return (
      <>
        <UserProvider value={{ mentor, setMentor }}>
          {!topBarData.statusCode && !pagesData.statusCode && (
            <TopBar
              data={topBarData}
              button_color={mentor ? 'blue' : 'green'}
              navigationLinks={pagesData}
              settings={settings}
            />
          )}
          <main>
            {mentor || as === 'mentor' ? (
              <SectionHeader
                data={mentorSectionHeaderData}
                gradient_color={HEADING_OPTIONS.GRADIENT_COLOR.BLUE}
                headingtype={HEADING_OPTIONS.TYPE.MAIN}
                customClassName="container"
                settings={settings}
              />
            ) : (
              <SectionHeader
                data={menteeSectionHeaderData}
                gradient_color={HEADING_OPTIONS.GRADIENT_COLOR.GREEN}
                headingtype={HEADING_OPTIONS.TYPE.MAIN}
                customClassName="container"
                settings={settings}
              />
            )}
            <section className="container">
              <Apply data={formData} settings={settings} />
            </section>
          </main>
        </UserProvider>
      </>
    );
  }
};
