import React, { createContext } from 'react';

import { TopBar } from '../TopBar';
import SectionHeader from '../shared/SectionHeader';
import Footer from '../footer';
const mentor = createContext(false);
const { Provider, Consumer } = mentor;
export const ApplyPage = ({ data }) => {
  if (data) {
    const { topBarData, sectionHeaderData, footerData } = data;
    return (
      <>
        <div className="px-12">
          <Provider value={false}>
            <TopBar data={topBarData} />
            <SectionHeader
              data={sectionHeaderData}
              gradient_color="green"
              headingtype="main"
            />
            <Footer data={footerData} />
          </Provider>
        </div>
      </>
    );
  }
};
