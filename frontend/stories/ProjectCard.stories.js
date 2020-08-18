import React from 'react';
import ProjectCard from './../components/ProjectCard';

import { withKnobs, boolean } from '@storybook/addon-knobs';

export default {
  title: 'ProjectCard',
  component: ProjectCard,
  decorators: [withKnobs]
};

const projectsData = {
  project_overview: {
    summary:
      'It provides information about their work in news and articles and also statistics about their progress so far.'
  },
  project_slug: 'ghiras',
  project_name: 'ghiras',
  nav_to_project_page_text: 'more',
  id: '5f3b0603e637bff57e1fe49d'
};

export const ProjectCardContainer = () => {
  return <ProjectCard data={projectsData} />;
};
