import { ParallaxedHeader } from '../components/ParallaxedHeader';
import { ParagraphWithImageBeside } from '../components/ParagraphWithImageBeside';
import TeamGroupSection from '../components/TeamSection';
import { mentorshipAPI } from '../clients/mentorship';
import { TopBar } from '../components/TopBar';
import Footer from '../components/footer';
import checkingDataError from '../helper/checkingDataError';
import { useViewportScroll, motion, useTransform } from 'framer-motion';
import Head from 'next/head';
import checkSeoData from '../helper/checkSeoData';

const About = ({ settings, metaData, data }) => {
  const { scrollY } = useViewportScroll();
  const y1 = useTransform(scrollY, [0, 900], [0, 150]);

  if (data) {
    const {
      aboutData,
      teamGroupData,
      topBarData,
      footerData,
      pagesData
    } = data;
    const { about_head, about_description } = aboutData;
    return (
      <>
        <Head>{checkSeoData(metaData, settings)}</Head>
        {!topBarData.statusCode && !pagesData.statusCode && (
          <TopBar
            data={topBarData}
            bgColored={true}
            navigationLinks={pagesData}
          />
        )}
        <main>
          <motion.div style={{ y: y1 }}>
            <div className="h-24 md:h-48 w-full bg-c200"></div>
            <ParallaxedHeader data={about_head} />
          </motion.div>
          <section className="container">
            <ParagraphWithImageBeside data={about_description} />
          </section>
          <TeamGroupSection data={teamGroupData} />
        </main>
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
    mentorshipAPI('/footer'),
    mentorshipAPI('/pages-seos?page_name=about'),
    mentorshipAPI('/setting'),
    mentorshipAPI('/pages')
  ];
  return Promise.all(checkingDataError(endPoints)).then(
    ([
      { data: aboutData },
      { data: teamGroupData },
      { data: topBarData },
      { data: footerData },
      { data: metaData },
      { data: settings },
      { data: pagesData }
    ]) => {
      return {
        props: {
          data: {
            aboutData,
            teamGroupData,
            topBarData,
            footerData,
            pagesData
          },
          metaData,
          settings
        },
        revalidate: 1
      };
    }
  );
}

export default About;
