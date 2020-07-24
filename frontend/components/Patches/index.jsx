import React from 'react';
import { GradientText } from '../shared/Heading/index';
import PatchCard from '../patch-card';

const Patches = ({ data }) => {
  const { title, paragraph, cards, dashedCardDetails } = data;
  if (data) {
    return (
      <div className="patches my-8">
        <div className="container">
            <div className='text-center'>
          <GradientText text={title} className="uppercase font-bold text-xxlg inline-block"  />
            </div>
          <p className='my-10 mx-auto text-center text-base text-c600 lg:w-4/6'>{paragraph}</p>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 mt-10">
            {cards.map(card => {
              return (
                <PatchCard cardDetails={card.cardDetails} dashed={false} />
              );
            })}
            <PatchCard cardDetails={dashedCardDetails} dashed={true} />
          </div>
        </div>
      </div>
    );
  }
};

export default Patches;
