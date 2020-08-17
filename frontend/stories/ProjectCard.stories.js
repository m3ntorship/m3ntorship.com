import React from 'react';
import ProjectCard from './../components/ProjectCard';

import { withKnobs, boolean } from '@storybook/addon-knobs';

export default {
    title: 'ProjectCard',
    component: ProjectCard,
    decorators: [withKnobs]
};
const data = {
    title: 'Apply',
    subtitle: 'subtitle',
    description: 'description'
};
export const ProjectCardContainer = () => {
    return <ProjectCard data={data} />;
};
