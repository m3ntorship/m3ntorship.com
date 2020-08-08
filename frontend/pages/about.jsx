import { ParallaxedHeader } from '../components/ParallaxedHeader';
import { ParagraphWithImageBeside } from '../components/ParagraphWithImageBeside';
import TeamGroupSection from '../components/TeamSection';
import { mentorshipAPI } from '../clients/mentorship';
import checkingDataError from '../helper/checkingDataError';
const About = ({
  aboutData: { about_head, about_description },
  TeamGroupData
}) => {
  console.log(TeamGroupData);
  return (
    <>
      <ParallaxedHeader data={about_head} />
       <div className="container my-16">
        <ParagraphWithImageBeside data={about_description} />
      </div>
      <div className="container mb-16">
        <TeamGroupSection data={TeamGroupData} />
      </div> 
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
