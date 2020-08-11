import React from 'react';
import { ApplyPage } from '../components/ApplyPage';
import { mentorshipAPI } from '../clients/index';
const Apply = ({ data }) => {
  return <ApplyPage data={data} />;
};

export async function getStaticProps(context) {
  const endPoints = [
    mentorshipAPI('/apply-page-intro-section'),
    mentorshipAPI('/apply-page-form')
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
  ).then(([{ data: headerSectionData }, { data: formData }]) => {
    return {
      props: {
        data: {
          headerSectionData,
          formData
        }
      },
      revalidate: 1
    };
  });
}

export default Apply;
