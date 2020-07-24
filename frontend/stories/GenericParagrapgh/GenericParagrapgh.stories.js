import React from 'react';
import GenericParagrapgh from '../../components/shared/GenericParagrapgh';

export default {
  title: 'GenericParagrapgh',
  component: GenericParagrapghComponent
};
export const GenericParagrapghComponent = () => {
  return (
    <GenericParagrapgh textColor="gray">
      level up your tech skills
    </GenericParagrapgh>
  );
};
