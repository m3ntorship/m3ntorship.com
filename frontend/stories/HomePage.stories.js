import React from 'react';
import { HomePage } from '../components/HomePage';
import right_image from '../components/HomePage/images/right_image.png';

export default {
    title: 'Home Page',
    component: HomePage
}

const data = {
    top_bar_data: {
        logo_title: 'M3ntorship',
        sub_title: 'lever up your tech skills',
        link: {
          link_url: '/apply',
          link_text: 'Apply Now'
        } 
    },
    section_header_data: {
        heading: 'Level-up your tech skills',
  headingGradientText: '',
  description:
    'A10-weeks program that helps new developers gain real world experience by building real projects in a collaborative remote environment.',
   headerImage:right_image,
    }
}

export const HomePageReview = () => {
    return <HomePage data={data} />
}
