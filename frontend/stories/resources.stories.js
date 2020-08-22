import React from 'react';
import Resources from '../components/resources';

export default {
  title: 'Resources',
  component: Resources
};
const data = [
  {
    title: 'front end project',
    url: 'google.com',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Molestie aliquam iaculis facilisis sit pharetra pellentesque ullamcorper.'
  },
  {
    title: 'front end project',
    url: 'google.com',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Molestie aliquam iaculis facilisis sit pharetra pellentesque ullamcorper.'
  },
  {
    title: 'front end project',
    url: 'google.com',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Molestie aliquam iaculis facilisis sit pharetra pellentesque ullamcorper.'
  },
  {
    title: 'front end project',
    url: 'google.com',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Molestie aliquam iaculis facilisis sit pharetra pellentesque ullamcorper.'
  }
];
export const ResourcesComponenet = () => {
  return (
    <>
      <div className="h-72"></div>
      <div className="h-72"></div>
      <Resources title="resources" resourcesCards={data} />
    </>
  );
};
