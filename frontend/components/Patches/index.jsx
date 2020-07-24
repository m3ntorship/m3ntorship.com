import React from 'react';
import { GradientText } from '../shared/Heading/index';
import PatchCard from '../patch-card';

const Patches = ({ data }) => {
  const { title, paragraph, cards, dashedCardDetails } = data;
  if (data) {
    return (
      <div className="patches my-20">
        <div className="container">
          <GradientText text={title} />
          <p>{paragraph}</p>
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
