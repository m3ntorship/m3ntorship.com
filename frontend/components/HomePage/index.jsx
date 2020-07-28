import React from 'react';
// Import Home Page Components
import {TopBar} from '../TopBar';
import SectionHeader from '../shared/SectionHeader';
import Button from '../shared/Button';
import Goals from '../Goals';
import HowItWork from '../how-it-work';
import Patches from '../Patches'
import Footer from '../footer'

export const HomePage = ({data}) => {
    if(data) {
        const {top_bar_data, section_header_data, goals_data, how_it_working_data, patches_data, contribute_data, footer_data} = data
        return (
            <>
            <TopBar data={top_bar_data} />
            <SectionHeaderComponent data={section_header_data} />
            <Goals data={goals_data} />
            <HowItWork data={how_it_working_data} />
            <Patches data={patches_data} />
            <ContributeSection data={contribute_data} />
            <Footer data={footer_data} />
            </>
        )
    }
}

// side components
const SectionHeaderComponent = ({data}) => {
    return (
        <SectionHeader data={data}> 
            <Button textColor='black' bgColor='green' btnPadding='small' textSize='medium' customClassName='uppercase' > Apply As A Member </Button>
            <Button textColor='white' bgColor='blue' btnPadding='small' textSize='medium' customClassName='uppercase mt-2 md:ml-2 md:mt-0'> Apply As A Mentor </Button>
        </SectionHeader>
    )
}

const ContributeSection = ({data}) => {
    return (
        <SectionHeader data={data} gradient_color='blue' headingtype='section'>
            <Button textColor='white' bgColor='blue' btnPadding='small' textSize='medium' customClassName='uppercase'> Apply As a Mentor </Button>
        </SectionHeader>
    )
}