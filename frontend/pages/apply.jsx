import React from 'react';
import { ApplyPage } from '../components/ApplyPage';
import { mentorshipAPI } from '../clients/index';
import Footer from '../components/footer';
import checkingDataError from '../helper/checkingDataError';

import Head from 'next/head';

const Apply = ({ data, data: { topBarData, footerData } }) => {
  return (
    <>
      <Head>
        <meta property="og:url" content="https://www.m3ntorship.com/apply" />
        <meta property="og:title" content="M3ntorship Apply With Us Now" />
        <meta property="og:image" content="https://m3ntorship.com/image.jpg" />
        <meta property="og:description" content="Apply as a mentor or mentee" />
        <link rel="canonical" href="https://www.m3ntorship.com/apply" />
        <title>M3ntorship | Apply </title>
        <meta name="description" content="m3ntorship description" />
      </Head>
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
