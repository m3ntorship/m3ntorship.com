import React from 'react';
import { ApplyPage } from '../components/ApplyPage';
import { mentorshipAPI } from '../clients/index';
import Footer from '../components/footer';
import checkingDataError from '../helper/checkingDataError';

import Head from 'next/head';

const Apply = ({
  websiteUrl,
  metaData,
  data,
  data: { topBarData, footerData }
}) => {
  const {
    seo: {
      path,
      description,
      title,
      open_graph_image: { url: image_url }
    }
  } = metaData[0];
  const { website_url } = websiteUrl;
  return (
    <>
      <Head>
        <meta name="description" content={description} />
        <link rel="canonical" href={`${website_url}${path}`} />
        <meta property="og:title" content={title} />
        <meta property="og:url" content={`${website_url}${path}`} />
        <meta property="og:image" content={image_url} />
        <meta property="og:description" content={description} />
        <title>{title}</title>
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
    mentorshipAPI('/footer'),
    mentorshipAPI('/pages-seos?page_name=apply'),
    mentorshipAPI('/setting')
  ];
  return Promise.all(checkingDataError(endPoints)).then(
    ([
      { data: headerSectionData },
      { data: formData },
      { data: topBarData },
      { data: footerData },
      { data: metaData },
      { data: websiteUrl }
    ]) => {
      return {
        props: {
          data: {
            headerSectionData,
            formData,
            topBarData,
            footerData
          },
          metaData,
          websiteUrl
        },
        revalidate: 1
      };
    }
  );
}

export default Apply;
