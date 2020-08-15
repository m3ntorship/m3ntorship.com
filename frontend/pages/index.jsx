import React from 'react';
import SectionHeader from '../components/shared/SectionHeader';
import Button from '../components/shared/Button';
import Goals from '../components/Goals';
import HowItWork from '../components/how-it-work';
import Patches from '../components/Patches';
import { mentorshipAPI } from '../clients';
import { HEADING_OPTIONS } from '../components/shared/Heading/index';
import Link from 'next/link';
import { TopBar } from '../components/TopBar';
import Footer from '../components/footer';
import checkingDataError from '../helper/checkingDataError';
import Head from 'next/head';

export const Home = ({ data }) => {
  const {
    home_header,
    goals,
    steps,
    patches,
    contribute,
    batches,
    topBarData,
    footerData
  } = data;
  return (
    <>
      <Head>
        <meta name="description" content="m3ntorship description" />

        <meta property="og:title" content="M3ntorship" />
        <meta property="og:url" content="https://www.m3ntorship.com/" />
        <meta property="og:image" content="https://m3ntorship.com/image.jpg" />
        <meta property="og:description" content="Description Here" />
        <title>M3ntorship | For smarter developer</title>
      </Head>
      <TopBar data={topBarData} />
      <SectionHeaderComponent data={home_header} />
      <Goals data={goals} />
      <HowItWork data={steps} />
      <Patches data={patches} batchesCards={batches} />
      <ContributeSection data={contribute} />
      <Footer data={footerData} />
    </>
  );
};

// side components
const SectionHeaderComponent = ({ data }) => {
  const { apply_as_member, apply_as_mentor } = data;
  return (
    <SectionHeader data={data} customClassName="container">
      {apply_as_member && (
        <Link href={`${apply_as_member.url}?as=mentee`} passHref>
          <Button
            textColor="black"
            bgColor="green"
            btnSize="large"
            textSize="medium"
            customClassName="uppercase"
          >
            {apply_as_member.name}
          </Button>
        </Link>
      )}
      {apply_as_mentor && (
        <Link href={`${apply_as_mentor.url}?as=mentor`} passHref>
          <Button
            textColor="white"
            bgColor="blue"
            btnSize="large"
            textSize="medium"
            customClassName="uppercase mt-4 md:ml-4 md:mt-0"
          >
            {apply_as_mentor.name}
          </Button>
        </Link>
      )}
    </SectionHeader>
  );
};

const ContributeSection = ({ data }) => {
  const { btn } = data;

  return (
    <SectionHeader
      data={data}
      gradient_color={HEADING_OPTIONS.GRADIENT_COLOR.BLUE}
      headingtype={HEADING_OPTIONS.TYPE.SECTION}
      headingFontWeight={HEADING_OPTIONS.FONT_WEIGHT.BOLD}
      customClassName="container"
      headingAs="h2"
    >
      {btn && (
        <Link href={`${btn.url}?as=mentor`} passHref>
          <Button
            textColor="white"
            bgColor="blue"
            btnSize="large"
            textSize="medium"
            customClassName="uppercase"
          >
            {btn.name}
          </Button>
        </Link>
      )}
    </SectionHeader>
  );
};

export async function getStaticProps(context) {
  const endPoints = [
    mentorshipAPI('/home-header'),
    mentorshipAPI('/goals'),
    mentorshipAPI('/steps'),
    mentorshipAPI('/patches'),
    mentorshipAPI('/contribute'),
    mentorshipAPI('/batches'),
    mentorshipAPI('/top-bar'),
    mentorshipAPI('/footer')
  ];
  return Promise.all(checkingDataError(endPoints)).then(
    ([
      { data: home_header },
      { data: goals },
      { data: steps },
      { data: patches },
      { data: contribute },
      { data: batches },
      { data: topBarData },
      { data: footerData }
    ]) => {
      return {
        props: {
          data: {
            home_header,
            goals,
            steps,
            patches,
            contribute,
            batches,
            topBarData,
            footerData
          }
        },
        revalidate: 1
      };
    }
  );
}

export default Home;
