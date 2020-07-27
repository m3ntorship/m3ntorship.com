import React from 'react';
// Import Home Page Components
import {TopBar} from '../TopBar';
import SectionHeader from '../shared/SectionHeader';
import Button from '../shared/Button';
import Goals from '../Goals';
import HowItWork from '../how-it-work';

export const HomePage = ({data}) => {
    if(data) {
        const {top_bar_data, section_header_data, goals_data, how_it_working_data} = data
        return (
            <>
            <TopBar data={top_bar_data} />
            <SectionHeaderComponent data={section_header_data} />
            <Goals data={goals_data} />
            <HowItWork data={how_it_working_data} />
            </>
        )
    }
}

// side components
const SectionHeaderComponent = ({data}) => {
    return (
        <div className='container'>
        <SectionHeader data={data}> 
            <Button textColor='black' bgColor='green' btnPadding='small' textSize='medium' customClassName='uppercase' > Apply As A Member </Button>
            <Button textColor='white' bgColor='blue' btnPadding='small' textSize='medium' customClassName='uppercase ml-2' > Apply As A Mentor </Button>
        </SectionHeader>
        </div>
    )
}