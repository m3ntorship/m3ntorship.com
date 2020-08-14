import React from 'react';
import { ApplyPage } from '../components/ApplyPage';
import { mentorshipAPI } from '../clients/index';
import { TopBar } from '../components/TopBar';
import Footer from '../components/footer';

const Apply = ({ data, data: { topBarData, footerData } }) => {
  return (
    <>
      <ApplyPage data={data} topBarData={topBarData} />
      <Footer data={footerData} />
    </>
  );
};

export async function getStaticProps(context) {
  const endPoints = [
    mentorshipAPI('/apply-page-intro-section'),
    mentorshipAPI('/apply-page-form'),
    mentorshipAPI('/top-bar'),
    mentorshipAPI('/footer')
  ];
  return Promise.all(
    endPoints.map(ep =>
      ep.then(res => {
        if (Object.keys(res.data).length) {
          return res;
        } else {
          return {
            data: {
              statusCode: 404
            }
          };
        }
      })
    )
  ).then(
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
