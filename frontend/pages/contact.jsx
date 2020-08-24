import React from 'react';
import { mentorshipAPI } from '../clients/index';
import Footer from '../components/footer';
import checkingDataError from '../helper/checkingDataError';
import checkSeoData from '../helper/checkSeoData';
import Head from 'next/head';
import { TopBar } from '../components/TopBar';
import { HEADING_OPTIONS, Heading } from '../components/shared/Heading';

const Contact = ({
  websiteUrl,
  metaData,
  data,
  data: {
    topBarData,
    footerData,
    pagesData,
    contactData: { title, description }
  }
}) => {
  return (
    <>
      {!topBarData.statusCode && !pagesData.statusCode && (
        <TopBar data={topBarData} navigationLinks={pagesData} />
      )}

      <Head>{checkSeoData(metaData, websiteUrl)}</Head>
      <div className='my-10 md:my-0'>
        <Heading
          type={HEADING_OPTIONS.TYPE.MAIN_LARGE}
          textAlign={HEADING_OPTIONS.TEXT_ALIGN.CENTER}
        >
          {title}
        </Heading>
        <p className="text-center text-c500 my-10 mx-auto w-3/4">
          {' '}
          {description}{' '}
        </p>
      </div>
      <Footer data={footerData} />
    </>
  );
};

export async function getStaticProps() {
  const endPoints = [
    mentorshipAPI('/contact-us'),
    mentorshipAPI('/top-bar'),
    mentorshipAPI('/footer'),
    mentorshipAPI('/pages-seos?page_name=contact-us'),
    mentorshipAPI('/setting'),
    mentorshipAPI('/pages')
  ];
  return Promise.all(checkingDataError(endPoints)).then(
    ([
      { data: contactData },
      { data: topBarData },
      { data: footerData },
      { data: metaData },
      { data: websiteUrl },
      { data: pagesData }
    ]) => {
      return {
        props: {
          data: {
            contactData,
            topBarData,
            footerData,
            pagesData
          },
          metaData,
          websiteUrl
        },
        revalidate: 1
      };
    }
  );
}

export default Contact;
