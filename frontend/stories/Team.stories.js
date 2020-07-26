import React from 'react';
import {Team} from '../components/Team'

export default {
    title: 'Team',
    component: TeamComponent
}

const data = {
    side_image: {
        url: 'https://res.cloudinary.com/malngaawy/image/upload/v1595261682/Squiggles_Monochromatic_jwvct9.png'
    },
    title: 'Team',
    paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Molestie aliquam iaculis facilisis sit pharetra pellentesque ullamcorper.',
    team_members:[
        {
            id:'1',
            image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
            title: 'Yara',
            subtitle: 'Front End Developer',
            description: 'A job listings and job application app for working abroad.'
        },
        {
            id:'2',
            image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
            title: 'Yara',
            subtitle: 'Front End Developer',
            description: 'A job listings and job application app for working abroad.'
        },
        {
            id:'3',
            image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
            title: 'Yara',
            subtitle: 'Front End Developer',
            description: 'A job listings and job application app for working abroad.'
        }
    ]
}

export const TeamComponent = () => {
    return <Team data={data} />
}