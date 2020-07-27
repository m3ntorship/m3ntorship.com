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
    },
    goals_data: {
        side_image: {
          url:
            'https://res.cloudinary.com/malngaawy/image/upload/v1595261682/Squiggles_Monochromatic_jwvct9.png'
        },
        goals_lists: [
          {
            text: 'Help new developers gain real world experience',
            id: '5f15be11c8184a2250a760e2'
          },
          {
            text: 'Help NGOs and small businesses build their online identity',
            id: '5f15be24c8184a2250a760e3'
          }
        ],
        title: 'Goals'
      }
}

export const HomePageReview = () => {
    return <HomePage data={data} />
}
