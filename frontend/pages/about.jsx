import { ParallaxedHeader } from '../components/ParallaxedHeader';
import { ParagraphWithImageBeside } from '../components/ParagraphWithImageBeside';
import TeamGroupSection from '../components/TeamSection';
import { mentorshipAPI } from '../clients/mentorship';
import checkingDataError from '../helper/checkingDataError';
const About = ({
  aboutData: { about_head, about_description },
  TeamGroupData
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

export async function getServerSideProps() {
  const layoutEndPointsArr = [
    mentorshipAPI('/about-head'),
    mentorshipAPI('/organization-founders')
  ];
  return Promise.all(checkingDataError(layoutEndPointsArr)).then(
    ([{ data: aboutData }, { data: TeamGroupData }]) => {
      return {
        props: {
          aboutData,
          TeamGroupData
        }
      };
    }
  );
}

export default About;
