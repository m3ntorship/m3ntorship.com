import React from 'react';
import { ApplyPage } from '../components/ApplyPage';
import { mentorshipAPI } from '../clients/index';
import Footer from '../components/footer';
import checkingDataError from '../helper/checkingDataError';

const Apply = ({ data, data: { topBarData, footerData } }) => {
  return (
    <>
      <ApplyPage data={data} topBarData={topBarData} />
      <Footer data={footerData} />
    </>
  );
};

export async function getStaticProps() {
  const endPoints = [
    mentorshipAPI('/apply-page-intro-section'),
    mentorshipAPI('/apply-page-form'),
    mentorshipAPI('/top-bar'),
    mentorshipAPI('/footer')
  ];
  return Promise.all(checkingDataError(endPoints)).then(
    ([
      { data: headerSectionData },
      { data: formData },
      { data: topBarData },
      { data: footerData }
    ]) => {
      return {
        props: {
          data: {
            headerSectionData,
            formData,
            topBarData,
            footerData
          }
        },
        revalidate: 1
      };
    }
  );
}

export default Apply;
