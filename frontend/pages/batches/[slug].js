import React from 'react';
import SectionHeader from './../../components/shared/SectionHeader/index';
import Button from '../../components/shared/Button';
import { ListOfRoundedImages } from '../../components/ListOfRoundedImages';
import { Team } from '../../components/Team';
import JoinUs from '../../components/JoinUsComponent';
import { useRouter } from 'next/router';
import { mentorshipAPI } from './../../clients/mentorship';
import Error from '../../pages/_error';
import { TopBar } from '../../components/TopBar';
import Footer from '../../components/footer';
import checkingDataError from '../../helper/checkingDataError';

import Head from 'next/head';
const BatchPage = ({
  batchData,
  sectionHeaderData,
  batchTeamData,
  joinUsData,
  topBarData,
  footerData,
  websiteUrl
}) => {
  const { website_url } = websiteUrl;

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

  // all team images and titles
  const team_images = team_members.map(
    ({
      member_info: {
        title,
        card_image: { url }
      }
    }) => ({ url, title })
  );
  const {
    repo_btn: { name: repo_btn_name, url: repo_link },
    project_btn: { name: project_btn_name, url: project_link }
  } = sectionHeaderData;
  return (
    <>
      <Head>
        <link
          rel="canonical"
          href={`${website_url}/batchs/${batchData[0].batch_slug}`}
        />

        <meta
          property="og:url"
          content={`${website_url}/batchs/${batchData[0].batch_slug}`}
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
      <TopBar data={topBarData} />
      <main>
        <section className="container grid grid-cols-1 lg:grid-cols-2 row-gap-10">
          <SectionHeader
            data={sectionHeaderData}
            customClassName="py-0 order-2 lg:order-none"
          >
            {repo_link && repo_btn_name && (
              <Button
                textColor="white"
                bgColor="black"
                btnSize="largeTall"
                extrnalLink={true}
                href={repo_link}
                customClassName="mb-6 md:mb-0 md:mr-6"
              >
                <img
                  src="/static/images/github.png"
                  className="inline mr-4 w-8 h-8"
                  alt="github logo icon"
                />
                {repo_btn_name}
              </Button>
            )}
            {project_link && project_btn_name && (
              <Button
                textColor="black"
                bgColor="gray"
                btnSize="largeTall"
                fontWeight="normal"
                extrnalLink={true}
                href={project_link}
              >
                <span className="uppercase underline">{project_btn_name}</span>
                <img
                  src="/static/images/right-arrow.svg"
                  className="inline ml-4 w-6"
                  alt="arrow icon"
                />
              </Button>
            )}
          </SectionHeader>
          <div className="order-1 lg:order-none">
            <ListOfRoundedImages data={team_images} />
          </div>
        </section>
        <Team data={batchTeamData} team_members={team_members} />
        <JoinUs data={joinUsData} />
      </main>
      <Footer data={footerData} />
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
    mentorshipAPI('/batch-header'),
    mentorshipAPI('/batch-team'),
    mentorshipAPI('/join-us-card'),
    mentorshipAPI('/top-bar'),
    mentorshipAPI('/footer'),
    mentorshipAPI('/setting')
  ];
  return Promise.all(checkingDataError(endPoints)).then(
    ([
      { data: batchData },
      { data: sectionHeaderData },
      { data: batchTeamData },
      { data: joinUsData },
      { data: topBarData },
      { data: footerData },
      { data: websiteUrl }
    ]) => {
      return {
        props: {
          batchData,
          sectionHeaderData,
          batchTeamData,
          joinUsData,
          topBarData,
          footerData,
          websiteUrl
        },
        revalidate: 1
      };
    }
  );
}
