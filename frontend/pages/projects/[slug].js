import React from 'react';
import Head from 'next/head';
import Error from '../../pages/_error';
import { mentorshipAPI } from './../../clients/mentorship';
import checkingDataError from '../../helper/checkingDataError';
import { useRouter } from 'next/router';
import Footer from './../../components/footer/index';
import { TopBar } from './../../components/TopBar/index';

const Projects = ({ projectData, topBarData, footerData, websiteUrl }) => {
  const { website_url } = websiteUrl;

  const router = useRouter();
  if (router.isFallback) {
    return <div>Loading...</div>;
  }
  if (!projectData || projectData.statusCode === 404)
    return <Error statusCode={404} />;
  return (
    <>
      <TopBar data={topBarData} />
      <main></main>
      <Footer data={footerData} />
    </>
  );
};

export default Projects;

export async function getStaticPaths() {
  let paths = [];
  return mentorshipAPI('/projects')
    .then(({ data }) => {
      console.log(data);
      paths = data.map(({ project_slug }) => ({
        params: { slug: project_slug }
      }));
      console.log(paths);
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
