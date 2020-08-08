import React from 'react';
import { GradientText } from '../shared/Heading/index';
import PatchCard from '../patch-card';

const Patches = ({ data, batchesCards }) => {
  console.log('cards' , batchesCards)
  const { title, description, dashed_card } = data;
  if (data, batchesCards) {
    return (
      <div className="patches my-8">
        <div className="container">
            <div className='text-center'>
          <GradientText text={title} className="uppercase font-bold text-xxlg inline-block"  />
            </div>
          <p className='my-16 mx-auto text-center text-base text-c600 lg:w-4/6'>{description}</p>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 mt-10">
            {batchesCards.map(card => {
              return (
                <PatchCard cardDetails={card} dashed={false} />
              );
            })}
            <PatchCard cardDetails={dashed_card} dashed={true} />
          </div>
        </div>
      </div>
    );
  }
};

export default Patches;
