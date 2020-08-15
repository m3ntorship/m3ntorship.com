import { ParallaxedHeader } from '../components/ParallaxedHeader';
import { ParagraphWithImageBeside } from '../components/ParagraphWithImageBeside';
import TeamGroupSection from '../components/TeamSection';
import { mentorshipAPI } from '../clients/mentorship';
import { TopBar } from '../components/TopBar';
import Footer from '../components/footer';
import checkingDataError from '../helper/checkingDataError';
import Head from 'next/head';

const About = ({ data }) => {
  if (data) {
    const { aboutData, teamGroupData, topBarData, footerData } = data;
    const { about_head, about_description } = aboutData;
    return (
      <>
        <Head>
          <meta property="og:url" content="https://www.m3ntorship.com/about" />
          <meta property="og:title" content="M3ntorship read more about us" />
          <meta
            property="og:image"
            content="https://m3ntorship.com/image.jpg"
          />
          <meta
            property="og:description"
            content="mentorship is Here for ........."
          />

          <title>About M3ntorship: What We Do and How We Got Here </title>
          <meta name="description" content="m3ntorship description" />
        </Head>
        <TopBar data={topBarData} bgColored={true} />
        <ParallaxedHeader data={about_head} />
        <section className="container">
          <ParagraphWithImageBeside data={about_description} />
        </section>
        <TeamGroupSection data={teamGroupData} />
        <Footer data={footerData} />
      </>
    );
  } else {
    return null;
  }
};

export async function getStaticProps() {
  const endPoints = [
    mentorshipAPI('/about-head'),
    mentorshipAPI('/organization-founders'),
    mentorshipAPI('/top-bar'),
    mentorshipAPI('/footer')
  ];
  return Promise.all(checkingDataError(endPoints)).then(
    ([
      { data: aboutData },
      { data: teamGroupData },
      { data: topBarData },
      { data: footerData }
    ]) => {
      return {
        props: {
          data: {
            aboutData,
            teamGroupData,
            topBarData,
            footerData
          }
        },
        revalidate: 1
      };
    }
  );
}

export default About;
