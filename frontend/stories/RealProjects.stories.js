import React from 'react';
import RealProjects from '../components/RealProjects'


export default {
    title: 'Real Projects',
    component: RealProjects,
}

const data = 'data'

export const RealProjectsContainer = () => {
    return <RealProjects data={data} />
}