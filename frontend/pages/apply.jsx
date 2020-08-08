import React from 'react';
import { ApplyPage } from '../components/ApplyPage';
import { mentorshipAPI } from '../clients/index';
const Apply = ({ data }) => {
  return <ApplyPage data={data} />;
};

export async function getStaticProps(context) {
  const endPoints = [
    mentorshipAPI('/top-bar'),
    mentorshipAPI('/apply-page-intro-section'),
    mentorshipAPI('/apply-page-form'),
    mentorshipAPI('/footer')
  ];
  return Promise.all(
    endPoints.map(ep =>
      ep.then(res => {
        if (Object.keys(res.data).length) {
          console.log(res);
          return res;
        } else {
          console.log(res);
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
      { data: topBarData },
      { data: headerSectionData },
      { data: formData },
      { data: footerData }
    ]) => {
      return {
        props: {
          data: {
            topBarData,
            headerSectionData,
            formData,
            footerData
          }
        },
        unstable_revalidate: 1
      };
    }
  );
}

export default Apply;
