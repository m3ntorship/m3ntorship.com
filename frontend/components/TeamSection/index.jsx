import React from 'react';
import { Heading, GradientText } from '../shared/Heading';
import PersonCard from '../person-card';

const TeamGroupSection = ({ data }) => {
  const {
    title,
    userOne,
    userTwo,
    userTitle,
    description,
    userOneImg,
    userTwoImg
  } = data;

  // const userOneData = {
  //   image: userOneImg,
  //   title: userOne,
  //   subtitle: userTitle,
  //   description: description
  // };
  // const userTwoData = {
  //   image: userTwoImg,
  //   title: userTwo,
  //   subtitle: userTitle,
  //   description: description
  // };

  const usersData = [
    {
      image: userOneImg,
      title: userOne,
      subtitle: userTitle,
      description: description
    },
    {
      image: userTwoImg,
      title: userTwo,
      subtitle: userTitle,
      description: description
    }
  ];

  const cardData = usersData.map((userData, index) => {
    return (
      <div>
        <PersonCard
          cardDetails={usersData[index]}
          rounded={true}
          border={true}
        />
        <div className="mx-5 md:mt-0 sm:mt-5"></div>
      </div>
    );
  });

  return (
    <div className="text-center">
      <Heading
        type="section"
        textAlign="center"
        textTransform="uppercase"
        as="h1"
        className="mt-16 pb-5"
      >
        <GradientText
          text={title}
          gradientColor="green"
          className="text-xxlg"
        />
      </Heading>
      <div className="flex flex-col md:flex-row justify-center mt-10 ">
        {cardData}
      </div>
    </div>
  );
};

export default TeamGroupSection;
