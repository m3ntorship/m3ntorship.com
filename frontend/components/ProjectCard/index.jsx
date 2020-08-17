import React from 'react';
import { HEADING_OPTIONS, Heading } from '../shared/Heading';
import rightArrow from '../../public/static/images/right-arrow.svg';

const ProjectCard = ({ data }) => {
  if (data) {
    return (
      <div className="project-card bg-c1200 p-8">
        <div className="my-10 flex items-center justify-center">
          <Heading
            type={HEADING_OPTIONS.TYPE.CARD}
            fontWeight={HEADING_OPTIONS.FONT_WEIGHT.BOLD}
            className="inline-block card-heading w-1/2"
          >
            Title
          </Heading>
          <div className="inline-block text-right w-1/2 mb-6">
            <a href="#" className="font-bold inline-block mr-2">
              More
            </a>
            <img className="inline-block w-4" src={rightArrow}></img>
          </div>
        </div>
        <p className="description my-10 text-sm text-c600">
          A job listings and job application app for working abroad.
        </p>
      </div>
    );
  }
};

export default ProjectCard;
