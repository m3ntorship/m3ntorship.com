import React from 'react';
import SectionHeader from '../../components/shared/SectionHeader/index';
import Button from '../../components/shared/Button';
import { Team } from '../../components/Team';
import JoinUs from '../../components/JoinUsComponent';
import { useRouter } from 'next/router';
import { mentorshipAPI } from '../../clients/mentorship';
import Error from '../_error';
import { TopBar } from '../../components/TopBar';
import Footer from '../../components/footer';
import checkingDataError from '../../helper/checkingDataError';
import BatchProjects from '../../components/BatchProjects';
const ListOfRoundedImages = dynamic(
  () => import('../../components/ListOfRoundedImages'),
  { ssr: false }
);

import Head from 'next/head';
import dynamic from 'next/dynamic';
const BatchPage = ({
  batchData,
  batchTeamData,
  joinUsData,
  topBarData,
  footerData,
  settings,
  pagesData,
  batchProjectsDesc
}) => {
  const router = useRouter();
  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  if (!batchData || batchData.statusCode === 404)
    return <Error statusCode={404} />;

  //Destructring member all member teams and joining them in one array
  const team_members = [
    ...batchData[0].batch_mentors,
    ...batchData[0].batch_mentees
  ].filter(
    (member, index, team_members) =>
      team_members.map(item => item.id).indexOf(member.id) === index
  );

  // destructure Batch Projects
  const {
    projects: batchProjects,
    batch_mentees,
    batch_mentors,
    batch_designers
  } = batchData[0];

  // all team images and titles
  const team_images = team_members.map(
    ({
      member_info: {
        title,
        card_image: { url }
      }
    }) => ({ url, title })
  );
  const { batch_header: sectionHeaderData } = batchData[0];
  const {
    repo_btn: { name: repo_btn_name, url: repo_link },
    project_btn: { name: project_btn_name, url: project_link }
  } = sectionHeaderData;
  const { website_url } = settings;
  return (
    <>
      <Head>
        <link
          rel="canonical"
          href={`${website_url}/cohorts/${batchData[0].batch_slug}`}
        />

        <meta
          property="og:url"
          content={`${website_url}/cohorts/${batchData[0].batch_slug}`}
        />
        <meta
          property="og:title"
          content={`M3ntorship Graduates ${batchData[0].batch_slug}`}
        />
        <meta property="og:image" content={`${website_url}/image.jpg`} />
        <meta property="og:description" content={batchData[0].description} />

        <title>{`M3ntorship Graduates - ${batchData[0].batch_slug}`} </title>
        <meta name="description" content={batchData[0].description} />
      </Head>
      {!topBarData.statusCode && !pagesData.statusCode && (
        <TopBar
          data={topBarData}
          navigationLinks={pagesData}
          settings={settings}
        />
      )}
      <main>
        <section className="container grid grid-cols-1 lg:grid-cols-2 row-gap-10">
          <SectionHeader
            data={sectionHeaderData}
            customClassName="py-0 order-2 lg:order-none"
            settings={settings}
          ></SectionHeader>
          <div className="order-1 lg:order-none">
            <ListOfRoundedImages data={team_images} settings={settings} />
          </div>
        </section>
        {batchProjects && batchProjectsDesc && (
          <BatchProjects
            projectsInfoData={batchProjectsDesc}
            projectsData={batchProjects}
            settings={settings}
          />
        )}
        <Team
          data={batchTeamData}
          team_members={team_members}
          batch_mentees={batch_mentees}
          batch_mentors={batch_mentors}
          batch_designers={batch_designers}
          settings={settings}
        />
        <JoinUs data={joinUsData} settings={settings} />
      </main>
      <Footer data={footerData} settings={settings} />
    </>
  );
};

export default BatchPage;

export async function getStaticPaths() {
  let paths = [];
  return mentorshipAPI('/batches')
    .then(({ data }) => {
      paths = data.map(({ batch_slug }) => ({
        params: { slug: batch_slug }
      }));
      return {
        paths,
        fallback: true
      };
    })
    .catch(err => {
      return {
        paths: [],
        fallback: true
      };
    });
}

export async function getStaticProps({ params: { slug } }) {
  const endPoints = [
    mentorshipAPI(`/batches?batch_slug=${slug}`),
    mentorshipAPI('/batch-team'),
    mentorshipAPI('/join-us-card'),
    mentorshipAPI('/top-bar'),
    mentorshipAPI('/footer'),
    mentorshipAPI('/setting'),
    mentorshipAPI('/pages'),
    mentorshipAPI('/batch-projects-description')
  ];
  return Promise.all(checkingDataError(endPoints)).then(
    ([
      { data: batchData },
      { data: batchTeamData },
      { data: joinUsData },
      { data: topBarData },
      { data: footerData },
      { data: settings },
      { data: pagesData },
      { data: batchProjectsDesc }
    ]) => {
      return {
        props: {
          batchData,
          batchTeamData,
          joinUsData,
          topBarData,
          footerData,
          settings,
          pagesData,
          batchProjectsDesc
        },
        revalidate: 1
      };
    }
  );
}
