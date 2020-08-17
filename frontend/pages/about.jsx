import { ParallaxedHeader } from '../components/ParallaxedHeader';
import { ParagraphWithImageBeside } from '../components/ParagraphWithImageBeside';
import TeamGroupSection from '../components/TeamSection';
import { mentorshipAPI } from '../clients/mentorship';
import { TopBar } from '../components/TopBar';
import Footer from '../components/footer';
import checkingDataError from '../helper/checkingDataError';
import { useViewportScroll, motion, useTransform } from 'framer-motion';

const About = ({ data }) => {
  const { scrollY } = useViewportScroll();
  const y1 = useTransform(scrollY, [0, 900], [0, 150]);

  if (data) {
    const { aboutData, teamGroupData, topBarData, footerData } = data;
    const { about_head, about_description } = aboutData;
    return (
      <>
        <motion.div style={{ y: y1 }}>
          <TopBar data={topBarData} bgColored={true} />
          <ParallaxedHeader data={about_head} />
        </motion.div>
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
