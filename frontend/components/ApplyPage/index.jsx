import React from 'react';

import { TopBar } from '../TopBar';
import SectionHeader from '../shared/SectionHeader';
import Footer from '../footer';

export const ApplyPage = ({ data }) => {
  if (data) {
    const { topBarData, sectionHeaderData, footerData } = data;
    return (
      <>
        <div className="px-12">
          <TopBar data={topBarData} />
          <SectionHeader data={sectionHeaderData} />
          <Footer data={footerData} />
        </div>
      </>
    );
  }
};
