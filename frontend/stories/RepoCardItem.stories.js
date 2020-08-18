import React from 'react';
import RepoCardItem from '../components/RepoCardItem';

export default {
  title: 'Repo Card Item',
  component: RepoCardItem
};

export const repoCardItem = () => {
  return (
    <RepoCardItem
      subTitle="Front-End Project"
      cardDesc="A job listings and job application app for working abroad."
      isHoverd={true}
    />
  );
};
