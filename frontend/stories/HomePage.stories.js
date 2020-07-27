import React from 'react';
import { HomePage } from '../components/HomePage';

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
    }
}

export const HomePageReview = () => {
    return <HomePage data={data} />
}