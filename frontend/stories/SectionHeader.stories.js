import React from 'react';
import SectionHeader from './../components/shared/SectionHeader/index';
import { withKnobs, boolean, text } from '@storybook/addon-knobs';

// import pic from './Big-Shoes-Discussion-2 2';
import Button from './../components/shared/Button/index';

export default {
  title: 'SectionHeader',
  component: SectionHeader,
  decorators: [withKnobs]
};
const data = {
  heading: 'One more step  to ',
  headingGradientText: 'Join Us.',
  description:
    'A10-weeks program that helps new developers gain real world experience by building real projects in a collaborative remote environment.',
  image:
    'https://img.freepik.com/free-photo/image-human-brain_99433-298.jpg?size=626&ext=jpg',
  headerImage:
    'https://lh3.googleusercontent.com/vRHKNBfH2zgozk-CL4s7oebD37DUMk-GFqkdiLAJ1f6Nvi6xCwCeyaSS-KwwJroogYZtuuE0=w640-h400-e365'
};
export const SectionHeaderContainer = () => {
  return (
      <SectionHeader data={data} headingtype={text('Header Type', 'main')} gradient_color={text('gradient color', 'green')}>
        <Button
          textColor="black"
          bgColor="green"
          btnPadding="small"
          customClassName="custom my-6 md:mr-6"
        >
          Apply now
        </Button>
        <Button
          textColor="white"
          bgColor="blue"
          btnPadding="small"
          customClassName=""
          externalLink={true}
        >
          Apply now
        </Button>
      </SectionHeader>
  );
};
