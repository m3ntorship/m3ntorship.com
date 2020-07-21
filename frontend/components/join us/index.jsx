import React from 'react';
import { Heading, GradientText } from '../shared/Heading/index';
import '../../styles/joinUs.css';
const JoinUs = ({ data }) => {
  return (
    <div className="grid grid-cols-2 p-10">
      <div className="mx-6">
        <div className="JoinUs__dots float-right"></div>
        <div className="mb-4 leading-normal">
          <Heading type="main">
            {'One More Step To'}{' '}
            <GradientText text="Join Us" gradientColor="blue" />
          </Heading>
        </div>
        <p className="text-c700 text-md">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Molestie
          aliquam iaculis facilisis
        </p>
      </div>
      <div className="JoinUs__right"></div>
    </div>
  );
};

export default JoinUs;
