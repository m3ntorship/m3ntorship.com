import React from 'react';
// Import Home Page Components
import {TopBar} from '../TopBar'

export const HomePage = ({data}) => {
    if(data) {
        const {top_bar_data} = data
        return (
            <>
            <TopBar data={top_bar_data} />
            </>
        )
    }
}