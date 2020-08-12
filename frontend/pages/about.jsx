import { ParallaxedHeader } from '../components/ParallaxedHeader';
import { ParagraphWithImageBeside } from '../components/ParagraphWithImageBeside';
import TeamGroupSection from '../components/TeamSection';
import { mentorshipAPI } from '../clients/mentorship';
const About = ({
  aboutData: { about_head, about_description },
  teamGroupData
}) => {
  return (
    <>
      <ParallaxedHeader data={about_head} />
      <section className="container">
        <ParagraphWithImageBeside data={about_description} />
      </section>
      <TeamGroupSection data={TeamGroupData} />
    </>
  );
};

export async function getStaticProps() {
  const { data: aboutData } = await mentorshipAPI('/about-head');
  const { data: teamGroupData } = await mentorshipAPI('/organization-founders');
  return {
    props: {
      aboutData,
      teamGroupData
    },
    revalidate: 1
  };
}

export default About;
