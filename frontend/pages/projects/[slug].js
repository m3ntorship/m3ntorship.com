import React from 'react';
import Error from '../../pages/_error';
import { mentorshipAPI } from './../../clients/mentorship';
import checkingDataError from '../../helper/checkingDataError';
import { useRouter } from 'next/router';
import Footer from './../../components/footer/index';
import { TopBar } from './../../components/TopBar/index';
import SectionHeader from './../../components/shared/SectionHeader/index';
import Button from './../../components/shared/Button/index';
import Head from 'next/head';
import Patches from '../../components/Patches';
import Overview from '../../components/Overview';

const Projects = ({ projectData, topBarData, footerData, websiteUrl }) => {
  const router = useRouter();
  if (router.isFallback) {
    return <div>Loading...</div>;
  }
  if (!projectData || projectData.statusCode === 404)
    return <Error statusCode={404} />;

  const {
    project_head,
    project_head: {
      link: { name: repo_btn_name, url: repo_link }
    },
    batches: batchCards,
    batches_description,
    project_overview
  } = projectData[0];
  const { website_url } = websiteUrl;
  return (
    <>
      <Head>
        <link
          rel="canonical"
          href={`${website_url}/projects/${projectData[0].project_slug}`}
        />

        <meta
          property="og:url"
          content={`${website_url}/projects/${projectData[0].project_slug}`}
        />
        <meta
          property="og:title"
          content={`M3ntorship Projects ${projectData[0].project_slug}`}
        />
        <meta property="og:image" content={`${website_url}/image.jpg`} />
        <meta property="og:description" content={projectData[0].description} />

        <title>{`M3ntorship Projects - ${projectData[0].project_slug}`} </title>
        <meta name="description" content={projectData[0].description} />
      </Head>
      <TopBar data={topBarData} />
      <main className="container">
        <SectionHeader
          data={project_head}
          customClassName="order-2 lg:order-none"
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
        </SectionHeader>
        <Patches data={batches_description} batchesCards={batchCards} />
        <Overview data={project_overview} />
      </main>

      <Footer data={footerData} />
    </>
  );
};

export default Projects;

export async function getStaticPaths() {
  let paths = [];
  return mentorshipAPI('/projects')
    .then(({ data }) => {
      paths = data.map(({ project_slug }) => ({
        params: { slug: project_slug }
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
    mentorshipAPI(`/projects?project_slug=${slug}`),
    mentorshipAPI('/top-bar'),
    mentorshipAPI('/footer'),
    mentorshipAPI('/setting')
  ];

  return Promise.all(checkingDataError(endPoints)).then(
    ([
      { data: projectData },
      { data: topBarData },
      { data: footerData },
      { data: websiteUrl }
    ]) => {
      return {
        props: {
          projectData,
          topBarData,
          footerData,
          websiteUrl
        },
        revalidate: 1
      };
    }
  );
}
