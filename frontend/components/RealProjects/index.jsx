import React from 'react';
import ProjectCard from '../ProjectCard';
import { GradientText, Heading, HEADING_OPTIONS } from '../shared/Heading';

const RealProjects = ({ data }) => {
  if (data) {
    return (
      <section className="real-projects">
        <div className="container">
          <div>
            <Heading
              type={HEADING_OPTIONS.TYPE.SECTION}
              textAlign={HEADING_OPTIONS.TEXT_ALIGN.CENTER}
              textTransform={HEADING_OPTIONS.TEXT_TRANSFORM.UPPERCASE}
            >
              <GradientText text="Real projects in Real teams" />
            </Heading>
            <p className="text-center mx-auto text-base text-c600 md:w-2/3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Molestie
              aliquam iaculis facilisis sit pharetra pellentesque ullamcorper.
            </p>
          </div>
          <div className="my-10 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            <ProjectCard data="123" />
            <ProjectCard data="123" />
            <ProjectCard data="123" />
          </div>
        </div>
      </section>
    );
  }
};

export default RealProjects;
