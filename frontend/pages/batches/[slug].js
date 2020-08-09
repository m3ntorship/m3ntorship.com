import React from 'react';
import SectionHeader from './../../components/shared/SectionHeader/index';
import Button from '../../components/shared/Button';
import { ListOfRoundedImages } from '../../components/ListOfRoundedImages';
import { Team } from '../../components/Team';
import { JoinUs } from '../../components/JoinUsComponent';
import { useRouter } from 'next/router';
import { mentorshipAPI } from './../../clients/mentorship';
const BatchPage = ({
  batchData,
  sectionHeaderData,
  batchTeamData,
  joinUsData
}) => {
  if (!batchData || batchData.length === 0) return <p>Errrrrror</p>;
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  //Destructring member all member teams and joining them in one array
  const team_members = [
    ...batchData[0].batch_mentors,
    ...batchData[0].batch_mentees
  ];
  // all team images
  const team_images = team_members.map(
    ({
      member_info: {
        card_image: { url }
      }
    }) => ({ url })
  );
  const {
    repo_btn: { name: repo_btn_name, url: repo_link },
    project_btn: { name: project_btn_name, url: project_link }
  } = sectionHeaderData;
  return (
    <>
      <div className="container my-16 grid grid-cols-1 md:grid-cols-2 row-gap-10 mb-32">
        <SectionHeader data={sectionHeaderData}>
          {repo_link && repo_btn_name && (
            <Button
              textColor="white"
              bgColor="black"
              extrnalLink={true}
              href={repo_link}
              customClassName="my-6 md:mr-6"
            >
              <img
                src="static/media/github.b4a9bf26.png"
                className="inline mr-4 h-full"
              />
              {repo_btn_name}
            </Button>
          )}
          {project_link && project_btn_name && (
            <Button
              textColor="black"
              bgColor="gray"
              fontWeight="normal"
              extrnalLink={true}
              href={project_link}
            >
              <span className="uppercase underline">{project_btn_name}</span>
            </Button>
          )}
        </SectionHeader>
        <div className="lg:px-24">
          <ListOfRoundedImages data={team_images} />
        </div>
      </div>
      <div className="mb-32">
        <Team data={batchTeamData} team_members={team_members} />
      </div>
      {/* <div className="mb-32">
        <JoinUs data={joinUsData} />
      </div> */}
    </>
  );
};

export default BatchPage;

export async function getStaticPaths() {
  try {
    const { data: batchesData } = await mentorshipAPI('/batches');
    const paths = await batchesData.map(({ batch_slug }) => ({
      params: { slug: batch_slug }
    }));

    return {
      paths,
      fallback: true
    };
  } catch (err) {
    const paths = [{ params: { slug: '/not-found' } }];
    return { paths, fallback: true };
  }
}

export async function getStaticProps({ params: { slug } }) {
  try {
    const { data: batchData } = await mentorshipAPI(
      `/batches?batch_slug=${slug}`
    );
    const { data: sectionHeaderData } = await mentorshipAPI('/batch-header');
    const { data: batchTeamData } = await mentorshipAPI('/batch-team');
    const { data: joinUsData } = await mentorshipAPI('/join-us-card');
    return {
      props: { batchData, sectionHeaderData, batchTeamData, joinUsData },
      revalidate: 1
    };
  } catch (err) {
    return {
      props: { batchData: false, sectionHeaderData: false },
      revalidate: 1
    };
  }
}
