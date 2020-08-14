import React from 'react';
import SectionHeader from '../components/shared/SectionHeader';
import Button from '../components/shared/Button';
import Goals from '../components/Goals';
import HowItWork from '../components/how-it-work';
import Patches from '../components/Patches';
import { mentorshipAPI } from '../clients';
import { HEADING_OPTIONS } from '../components/shared/Heading/index';

import Link from 'next/link';
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
  const {
    apply_as_member: { url: memberBtnUrl, name: memberBtnName },
    apply_as_mentor: { url: mentorBtnUrl, name: mentorBtnName }
  } = data;
  return (
    <SectionHeader data={data} customClassName="container">
      <Link
        href={{ pathname: memberBtnUrl, query: { as: 'mentee' } }}
        as={memberBtnUrl}
        passHref
      >
        <Button
          textColor="black"
          bgColor="green"
          btnSize="large"
          textSize="medium"
          customClassName="uppercase"
        >
          {memberBtnName}
        </Button>
      </Link>
      <Link
        href={{ pathname: mentorBtnUrl, query: { as: 'mentor' } }}
        as={mentorBtnUrl}
        passHref
      >
        <Button
          textColor="white"
          bgColor="blue"
          btnSize="large"
          textSize="medium"
          customClassName="uppercase mt-4 md:ml-4 md:mt-0"
        >
          {mentorBtnName}
        </Button>
      </Link>
    </SectionHeader>
  );
};

const ContributeSection = ({ data }) => {
  const {
    btn: { url: mentorBtnUrl, name: mentorBtnName }
  } = data;

  return (
    <SectionHeader
      data={data}
      gradient_color={HEADING_OPTIONS.GRADIENT_COLOR.BLUE}
      headingtype={HEADING_OPTIONS.TYPE.SECTION}
      headingFontWeight={HEADING_OPTIONS.FONT_WEIGHT.BOLD}
      customClassName="container"
      headingAs="h2"
    >
      <Link
        href={{ pathname: mentorBtnUrl, query: { as: 'mentor' } }}
        as={mentorBtnUrl}
        passHref
      >
        <Button
          textColor="white"
          bgColor="blue"
          btnSize="large"
          textSize="medium"
          customClassName="uppercase"
        >
          {mentorBtnName}
        </Button>
      </Link>
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
