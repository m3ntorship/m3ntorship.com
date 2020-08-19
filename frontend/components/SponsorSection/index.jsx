import React from 'react';
import { Heading, HEADING_OPTIONS } from '../shared/Heading';
import Button from '../shared/Button';

const SponsorUs = ({ cardDesc }) => {
  return (
    <div className="py-20 border border-c400 bg-c1200">
      <div className="text-c600">
        <Heading
          as="h2"
          type={HEADING_OPTIONS.TYPE.CARD_SMALL}
          textAlign={HEADING_OPTIONS.TEXT_ALIGN.CENTER}
          fontWeight={HEADING_OPTIONS.FONT_WEIGHT.BOLD}
        >
          SPONSOR
        </Heading>
        <p className="text-base text-center">{cardDesc}</p>
      </div>
      <div className="mt-6">
        <Button
          textColor="black"
          bgColor="green"
          btnSize="large"
          textSize="medium"
          customClassName="mx-auto"
        >
          SPONSOR NOW
        </Button>
      </div>
    </div>
  );
};

export default SponsorUs;
