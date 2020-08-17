import React from 'react';
import { HEADING_OPTIONS, Heading } from '../shared/Heading';
import rightArrow from '../../public/static/images/right-arrow.svg';

const ProjectCard = ({ data }) => {
  if (data) {
    return (
      <div className="project-card bg-c1200 p-8">
        <div className="flex items-center justify-center">
          <Heading
            type={HEADING_OPTIONS.TYPE.CARD}
            fontWeight={HEADING_OPTIONS.FONT_WEIGHT.BOLD}
            className="inline-block card-heading w-1/2"
          >
            Title
          </Heading>
          <div className="inline-block text-right w-1/2 mb-6">
            <a href="#" className="font-bold inline-block">
              More
              <img className="inline-block ml-2 w-4" src={rightArrow}></img>
            </a>
          </div>
        </div>
        <p className="description my-4 text-xs text-c700">
          A job listings and job application app for working abroad.
        </p>
      </div>
    );
  }
};

export default ProjectCard;
