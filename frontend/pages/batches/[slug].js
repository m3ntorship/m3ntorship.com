import React from 'react';
import SectionHeader from './../../components/shared/SectionHeader/index';
import Button from '../../components/shared/Button';
import { ListOfRoundedImages } from '../../components/ListOfRoundedImages';
import { Team } from '../../components/Team';
import JoinUs from '../../components/JoinUsComponent';
import { useRouter } from 'next/router';
import { mentorshipAPI } from './../../clients/mentorship';
import Error from '../../pages/_error';
import { TopBar } from '../../components/TopBar';
import Footer from '../../components/footer';

const BatchPage = ({
  batchData,
  sectionHeaderData,
  batchTeamData,
  joinUsData,
  topBarData,
  footerData
}) => {
  const router = useRouter();
  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  if (!batchData || batchData.length === 0) return <Error statusCode={404} />;

  //Destructring member all member teams and joining them in one array
  const team_members = [
    ...batchData[0].batch_mentors,
    ...batchData[0].batch_mentees
  ].filter(
    (member, index, team_members) =>
      team_members.map(item => item.id).indexOf(member.id) === index
  );

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
      <TopBar data={topBarData} />
      <section className="container grid grid-cols-1 lg:grid-cols-2 row-gap-10">
        <SectionHeader
          data={sectionHeaderData}
          customClassName="py-0 order-2 lg:order-none"
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
              />
              {repo_btn_name}
            </Button>
          )}
          {project_link && project_btn_name && (
            <Button
              textColor="black"
              bgColor="gray"
              btnSize="largeTall"
              fontWeight="normal"
              extrnalLink={true}
              href={project_link}
            >
              <span className="uppercase underline">{project_btn_name}</span>
              <img
                src="/static/images/right-arrow.svg"
                className="inline ml-4 w-6"
              />
            </Button>
          )}
        </SectionHeader>
        <div className="order-1 lg:order-none">
          <ListOfRoundedImages data={team_images} />
        </div>
      </section>
      <Team data={batchTeamData} team_members={team_members} />
      <JoinUs data={joinUsData} />
      <Footer data={footerData} />
    </>
  );
};

export default BatchPage;

export async function getStaticPaths() {
  const { data: batchesData } = await mentorshipAPI('/batches');
  const paths = await batchesData.map(({ batch_slug }) => ({
    params: { slug: batch_slug }
  }));

  return {
    paths,
    fallback: true
  };
}

export async function getStaticProps({ params: { slug } }) {
  const { data: batchData } = await mentorshipAPI(
    `/batches?batch_slug=${slug}`
  );
  const { data: topBarData } = await mentorshipAPI('/top-bar');
  const { data: sectionHeaderData } = await mentorshipAPI('/batch-header');
  const { data: batchTeamData } = await mentorshipAPI('/batch-team');
  const { data: joinUsData } = await mentorshipAPI('/join-us-card');
  const { data: footerData } = await mentorshipAPI('/footer');
  return {
    props: {
      batchData,
      sectionHeaderData,
      batchTeamData,
      joinUsData,
      topBarData,
      footerData
    },
    revalidate: 1
  };
}
