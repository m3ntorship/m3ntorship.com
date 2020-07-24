import React from 'react';
import { GradientText } from '../shared/Heading';
import PersonCard from '../person-card';

const TeamSection = ({ data }) => {
  const {
    title,
    userOne,
    userTwo,
    userTitle,
    description,
    userOneImg,
    userTwoImg
  } = data;

  const userOneData = {
    image: userOneImg,
    title: userOne,
    subtitle: userTitle,
    description: description
  };
  const userTwoData = {
    image: userTwoImg,
    title: userTwo,
    subtitle: userTitle,
    description: description
  };

  return (
    <div className="text-center">
      <GradientText
        text={title}
        gradientColor="green"
        className="uppercase font-bold text-xxlg inline-block"
      />
      <div className="flex flex-col md:flex-row  justify-center mt-10 uppercase">
        <PersonCard cardDetails={userOneData} rounded={true} boxShadow={true} />
        <PersonCard cardDetails={userTwoData} rounded={true} boxShadow={true} />
      </div>
    </div>
  );
};

export default TeamSection;
