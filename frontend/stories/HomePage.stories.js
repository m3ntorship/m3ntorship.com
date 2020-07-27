import React from 'react';
import { HomePage } from '../components/HomePage';
import right_header_image from '../components/HomePage/images/right_image.png';
import testImage from '../components/how-it-work/images/side-image.png';
import sideImage from '../components/how-it-work/images/Squiggles.png';

export default {
    title: 'Home Page',
    component: HomePage
}

const imagesData = [
    'https://s3.amazonaws.com/pixpa.com/com/articles/1525891879-683036-peter-sjo-201640-unsplashjpg.png',
    'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEyMDd9',
    'https://www.worldphoto.org/sites/default/files/default-media/Piercy.jpg',
    'https://s3.amazonaws.com/pixpa.com/com/articles/1525891879-379720-warren-wong-242286-unsplashjpg.png',
    'https://the-pro-photographer.com/wp-content/uploads/2016/09/Portrait-photography-settings%E2%80%AC.jpeg',
    'https://www.adobe.com/content/dam/cc/us/en/creative-cloud/photography/discover/portrait-photography/CODERED_B1_portrait_photography-P4b_438x447.jpg.img.jpg',
    'https://4691df0fe49ad0936487-e0121cbc87e93da04e06616472138769.ssl.cf1.rackcdn.com/6-copy4.jpg'
]

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
        headerImage:right_header_image,
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
    },
    patches_data: {
        title: 'Patches',
        paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Molestie aliquam iaculis facilisis sit pharetra pellentesque ullamcorper.',
        cards: [
            {
                cardDetails: {
                    title: 'VOLUME 1',
                    images: imagesData,
                    description: 'A job listings and job application app for working abroad.',
                    anchorText: 'View team'
                }
            },
            {
                cardDetails: {
                    title: 'VOLUME 2',
                    images: imagesData,
                    description: 'A job listings and job application app for working abroad.',
                    anchorText: 'View team'
                }
            },
            {
                cardDetails: {
                    title: 'VOLUME 3',
                    images: imagesData,
                    description: 'A job listings and job application app for working abroad.',
                    anchorText: 'View team'
                }
            }
        ],
        dashedCardDetails: {
            title: 'Join Next Patch',
            description: 'A job listings and job application app for working abroad.',
            anchorText: 'APPLY NOW'
        }
    },
    contribute_section_data: {
        heading: '',
        headingGradientText: 'Wanr to contribute?',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Molestie aliquam iaculis facilisis sit pharetra pellentesque ullamcorper.',
        headerImage:right_header_image,
    },
    footer_data: {
        links: [
          { text: 'Github', url: 'github.com', underline: false },
          { text: 'Facebook', url: 'github.com', underline: false },
          { text: 'Twitter', url: 'github.com', underline: false },
          { text: 'infot@m3notorship.com', url: 'github.com', underline: true }
        ],
        about: {
          text:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Molestiealiquam iaculisLorem ipsum dolor sit amet, consectetur adipiscing elit. Molestiealiquam iaculisLorem ipsum dolor sit amet, consectetur adipiscing elit. Molestiealiquam iaculisLorem ipsum dolor sit amet, consectetur adipiscing elit. Molestiealiquam iaculisLorem ipsum dolor sit amet, consectetur adipiscing elit. Molestiealiquam iaculisLorem ipsum dolor sit amet, consectetur adipiscing elit. Molestiealiquam iaculis',
          url: '#'
        },
        copyrights: 'M3ntorship © 2019-2020.'
    }
}

export const HomePageReview = () => {
    return <HomePage data={data} />
}
