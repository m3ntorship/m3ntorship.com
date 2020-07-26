import React from 'react';
import {GradientText} from '../shared/Heading';
import PersonCard from '../person-card'

export const Team = ({data}) => {
    if(data) {
        const {title, side_image:{url}, paragraph, team_members} = data
        return (
        <div className='team relative'>
            <div className='text-center my-10 container'>
            <div className="absolute graph hidden lg:block">
                <img src={url}/>
                </div>
            <div className='text-center'>
          <GradientText text={title} className="uppercase font-bold text-xxlg inline-block"  />
            </div>
          <p className='my-10 mx-auto text-center text-xs md:text-base text-c600 lg:w-4/6'>{paragraph}</p>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
              {team_members.map((member, index) => <PersonCard key={index} cardDetails={member} bgColord={true} rounded={true} /> )}
          </div>
            </div>
        </div>
        )
    }
}