import React from 'react';
import SectionHeader from '../components/shared/SectionHeader';
import Button from '../components/shared/Button';
import Goals from '../components/Goals';
import HowItWork from '../components/how-it-work';
import Patches from '../components/Patches';
import { mentorshipAPI } from '../clients';

export const Home = ({ data }) => {
  if (data) {
    const { home_header, goals, steps, patches, contribute, batches } = data;
    return (
      <>
        <SectionHeaderComponent data={home_header} />
        <Goals data={goals} />
        <HowItWork data={steps} />
        <Patches data={patches} batchesCards={batches} />
        <ContributeSection data={contribute} />
      </>
    );
  } else {
    return <h1>Loading....</h1>;
  }
};

// side components
const SectionHeaderComponent = ({ data }) => {
  return (
    <SectionHeader data={data}>
      <Button
        textColor="black"
        bgColor="green"
        btnPadding="small"
        textSize="medium"
        customClassName="uppercase"
      >
        {' '}
        Apply As A Member{' '}
      </Button>
      <Button
        textColor="white"
        bgColor="blue"
        btnPadding="small"
        textSize="medium"
        customClassName="uppercase mt-2 md:ml-2 md:mt-0"
      >
        {' '}
        Apply As A Mentor{' '}
      </Button>
    </SectionHeader>
  );
};

const ContributeSection = ({ data }) => {
  return (
    <SectionHeader data={data} gradient_color="blue" headingtype="section">
      <Button
        textColor="white"
        bgColor="blue"
        btnPadding="small"
        textSize="medium"
        customClassName="uppercase"
      >
        {' '}
        Apply As a Mentor{' '}
      </Button>
    </SectionHeader>
  );
};

export async function getStaticProps(context) {
  const endPoints = [
    mentorshipAPI('/home-header'),
    mentorshipAPI('/goals'),
    mentorshipAPI('/steps'),
    mentorshipAPI('/patches'),
    mentorshipAPI('/contribute'),
    mentorshipAPI('/batches')
  ];
  return Promise.all(
    endPoints.map(ep =>
      ep
        .then(res => {
          if (Object.keys(res.data).length) {
            return res;
          } else {
            return {
              data: {
                statusCode: 404
              }
            };
          }
        })
        .catch(err => {
          return {
            data: {
              message: err.message
            }
          };
        })
    )
  ).then(
    ([
      { data: home_header },
      { data: goals },
      { data: steps },
      { data: patches },
      { data: contribute },
      { data: batches }
    ]) => {
      return {
        props: {
          data: {
            home_header,
            goals,
            steps,
            patches,
            contribute,
            batches
          }
        },
        revalidate: 1
      };
    }
  );
}

export default Home;
