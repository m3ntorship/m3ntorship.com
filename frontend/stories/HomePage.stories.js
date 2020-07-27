import React from 'react';
import { HomePage } from '../components/HomePage';
import right_image from '../components/HomePage/images/right_image.png';
import testImage from '../components/how-it-work/images/side-image.png';
import sideImage from '../components/how-it-work/images/Squiggles.png';

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
    },
    how_it_working_data: {
        title: 'How It Working?',
        paragraph:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Molestie aliquam iaculis facilisis sit pharetra pellentesque ullamcorper.',
        side_image: {
          url: sideImage
        },
        cards : [
          {
            id: 1,
            cardDetails: {
              image: testImage,
              title: 'Apply',
              description:
                'Decide to join our program lorem ipsum dollar sient right now.'
            }
          },
          {
            id: 2,
            cardDetails: {
              image: testImage,
              title: 'Apply',
              description:
                'Decide to join our program lorem ipsum dollar sient right now.'
            }
          },
          {
            id: 3,
            cardDetails: {
              image: testImage,
              title: 'Apply',
              description:
                'Decide to join our program lorem ipsum dollar sient right now.'
            }
          },
          {
            id: 4,
            cardDetails: {
              image: testImage,
              title: 'Apply',
              description:
                'Decide to join our program lorem ipsum dollar sient right now.'
            }
          },
          {
            id: 5,
            cardDetails: {
              image: testImage,
              title: 'Apply',
              description:
                'Decide to join our program lorem ipsum dollar sient right now.'
            }
          },
          {
            id: 6,
            cardDetails: {
              image: testImage,
              title: 'Apply',
              description:
                'Decide to join our program lorem ipsum dollar sient right now.'
            }
          },
        ]
      }
}

export const HomePageReview = () => {
    return <HomePage data={data} />
}
