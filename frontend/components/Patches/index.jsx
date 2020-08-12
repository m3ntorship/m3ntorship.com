import React from 'react';
import {
  Heading,
  HEADING_OPTIONS,
  GradientText
} from '../shared/Heading/index';
import PatchCard from '../patch-card';

const Patches = ({ data, batchesCards }) => {
  const { title, description, dashed_card } = data;
  if ((data, batchesCards)) {
    return (
      <section className="patches container">
        <div className="text-center">
          <Heading
            as="h2"
            type={HEADING_OPTIONS.TYPE.SECTION}
            textAlign={HEADING_OPTIONS.TEXT_ALIGN.CENTER}
          >
            <GradientText text={title} className="uppercase font-bold" />
          </Heading>
        </div>
        <p className="mb-16 mx-auto text-center text-base text-c600 lg:w-4/6">
          {description}
        </p>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 mt-10">
          {batchesCards.map(card => {
            return (
              <PatchCard key={card.id} cardDetails={card} dashed={false} />
            );
          })}
          <PatchCard cardDetails={dashed_card} dashed={true} />
        </div>
      </section>
    );
  }
};

export default Patches;
