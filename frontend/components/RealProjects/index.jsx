import React from 'react';
import ProjectCard from '../ProjectCard';
import { GradientText, HEADING_OPTIONS, Heading } from '../shared/Heading';

const RealProjects = ({ data }) => {
  if (data) {
    return (
      <div className="real-projects">
        <div className="container">
          <div>
            <Heading>
              <GradientText>Real projects in Real teams</GradientText>
            </Heading>
            <p className="text-center my-10 mx-auto text-base text-c600 md:w-2/3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Molestie
              aliquam iaculis facilisis sit pharetra pellentesque ullamcorper.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            <ProjectCard data="123" />
            <ProjectCard data="123" />
            <ProjectCard data="123" />
          </div>
        </div>
      </div>
    );
  }
};

export default RealProjects;
