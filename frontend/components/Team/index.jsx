import React from 'react';
import {GradientText, Heading, HEADING_OPTIONS} from '../shared/Heading';
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
            <Heading type={HEADING_OPTIONS.TYPE.SECTION} textAlign={HEADING_OPTIONS.TEXT_ALIGN.CENTER} textTransform={HEADING_OPTIONS.TEXT_TRANSFORM.UPPERCASE} >
          <GradientText text={title} />
            </Heading>
          <p className='my-10 mx-auto text-center text-xs md:text-base text-c600 lg:w-4/6'>{paragraph}</p>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
              {team_members.map(member => {
                  return (<PersonCard key={member.id} cardDetails={member} bgColord={true} rounded={true} />)
              } )}
          </div>
            </div>
        </div>
        )
    }
}