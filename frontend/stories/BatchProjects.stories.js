import React from 'react';
import BatchProjects from '../components/BatchProjects';

export default {
  title: 'Batch Projects',
  component: BatchProjects
};

const projectsInfoData = {
  projects_brief: {
    title: 'Real projects in Real teams',
    sub_title:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Molestie aliquam iaculis facilisis sit pharetra pellentesque ullamcorper.',
    image: {
      url:
        'https://s3.m3ntorship.net:443/m3ntorshipcom/75daa654aef922b1f1ea60ae6d402855_1b2c3ab392.png'
    }
  }
};

const projectsData = [
  {
    project_overview: {
      summary:
        'It provides information about their work in news and articles and also statistics about their progress so far.'
    },
    project_head: {
      link: {
        url: '#',
        name: 'repositry'
      }
    },
    project_slug: 'ghiras',
    project_name: 'ghiras',
    id: '5f3b0603e637bff57e1fe49d',
    project_stack: 'Front-end project'
  },
  {
    project_overview: {
      summary:
        'It provides information about their work in news and articles and also statistics about their progress so far.'
    },
    project_head: {
      link: {
        url: '#',
        name: 'repositry'
      }
    },
    project_slug: 'ghiras',
    project_name: 'ghiras',
    id: '5f3b0603e637bff57e1fe49d',
    project_stack: 'Front-end project'
  },
  {
    project_overview: {
      summary:
        'It provides information about their work in news and articles and also statistics about their progress so far.'
    },
    project_head: {
      link: {
        url: '#',
        name: 'repositry'
      }
    },
    project_slug: 'ghiras',
    project_name: 'ghiras',
    id: '5f3b0603e637bff57e1fe49d',
    project_stack: 'Front-end project'
  }
];

export const BatchProjectsContainer = () => {
  return (
    <BatchProjects
      projectsInfoData={projectsInfoData}
      projectsData={projectsData}
    />
  );
};
