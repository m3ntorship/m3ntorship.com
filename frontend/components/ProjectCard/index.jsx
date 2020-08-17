import React from 'react';
import { HEADING_OPTIONS, Heading } from '../shared/Heading';

const ProjectCard = ({ data }) => {
  if (data) {
    return (
      <div className="project-card bg-c1200 p-10">
        <div className="my-10 flex items-center justify-center">
          <Heading
            type={HEADING_OPTIONS.TYPE.CARD}
            fontWeight={HEADING_OPTIONS.FONT_WEIGHT.BOLD}
            className="inline-block card-heading"
          >
            Title
          </Heading>
          <div className="inline-block float-right">
            <a href="#" className="font-bold">
              More
            </a>
          </div>
        </div>
        <p className="description my-20 text-c600">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </div>
    );
  }
};

export default ProjectCard;
