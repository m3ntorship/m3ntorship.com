import React from 'react';
import { HEADING_OPTIONS, Heading } from '../shared/Heading';
import rightArrow from '../../public/static/images/right-arrow.svg';

const ProjectCard = ({ data }) => {
  if (data) {
    const {project_overview : {summary}, project_name, nav_to_project_page_text, project_slug} = data
    return (
      <div className="project-card bg-c1200 p-8">
        <div className="flex items-center justify-center">
          <Heading
            type={HEADING_OPTIONS.TYPE.CARD}
            fontWeight={HEADING_OPTIONS.FONT_WEIGHT.BOLD}
            className="inline-block card-heading w-1/2"
          >
            {project_name}
          </Heading>
          <div className="inline-block text-right w-1/2 mb-6">
            <a href={project_slug} className="font-bold inline-block">
              {nav_to_project_page_text}
              <img className="inline-block ml-2 w-4" src={rightArrow}></img>
            </a>
          </div>
        </div>
        <p className="description my-4 text-xs text-c700">
          {summary}
        </p>
      </div>
    );
  }
};

export default ProjectCard;
