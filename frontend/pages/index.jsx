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
import RealProjects from '../components/RealProjects';

export const Home = ({ data }) => {
  const {
    home_header,
    goals,
    steps,
    patches,
    contribute,
    batches,
    topBarData,
    footerData,
    metaData,
    websiteUrl,
    projectsInfoData,
    projectsData
  } = data;
  const { website_url } = websiteUrl;
  const {
    seo: {
      path,
      description,
      title,
      open_graph_image: { url: image_url }
    }
  } = metaData[0];

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

      <TopBar data={topBarData} />

      <main>
        <SectionHeaderComponent data={home_header} />
        <Goals data={goals} />
        <HowItWork data={steps} />
        <Patches data={patches} batchesCards={batches} />
        <RealProjects projectsInfoData={projectsInfoData} projectsData={projectsData} />
        <ContributeSection data={contribute} />
      </main>
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
    mentorshipAPI('/footer'),
    mentorshipAPI('/pages-seos?page_name=home'),
    mentorshipAPI('/setting'),
    mentorshipAPI('/projects-info'),
    mentorshipAPI('/projects')
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
      { data: footerData },
      { data: metaData },
      { data: websiteUrl },
      { data: projectsInfoData },
      { data: projectsData }
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
            footerData,
            metaData,
            websiteUrl,
            projectsInfoData,
            projectsData
          }
        },
        revalidate: 1
      };
    }
  );
}

export default Home;
