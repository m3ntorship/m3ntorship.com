import { ParallaxedHeader } from '../components/ParallaxedHeader';
import { ParagraphWithImageBeside } from '../components/ParagraphWithImageBeside';
import TeamGroupSection from '../components/TeamSection';
import { mentorshipAPI } from '../clients/mentorship';
import { TopBar } from '../components/TopBar';
import Footer from '../components/footer';

const About = ({
  aboutData: { about_head, about_description },
  teamGroupData,
  topBarData,
  footerData
}) => {
  return (
    <>
      <TopBar data={topBarData} bgColored={true} />
      <ParallaxedHeader data={about_head} />
      <section className="container">
        <ParagraphWithImageBeside data={about_description} />
      </section>
      <TeamGroupSection data={teamGroupData} />
      <Footer data={footerData} />
    </>
  );
};

export async function getStaticProps() {
  const { data: aboutData } = await mentorshipAPI('/about-head');
  const { data: teamGroupData } = await mentorshipAPI('/organization-founders');
  const { data: topBarData } = await mentorshipAPI('/top-bar');
  const { data: footerData } = await mentorshipAPI('/footer');
  return {
    props: {
      aboutData,
      teamGroupData,
      topBarData,
      footerData
    },
    revalidate: 1
  };
}

export default About;
