import React from 'react';
import { Heading, GradientText } from '../shared/Heading/index';
import GenericParagrapgh from '../shared/GenericParagrapgh/index';
import Button from '../shared/Button/index';
const Apply = () => {
  return (
    <div className="p-5">
      <Heading>
        You Want to <GradientText text="Apply As" gradientColor="blue" />
      </Heading>
      <GenericParagrapgh textColor="gray" customClassName="mt-8">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Molestie
        aliquam iaculis facilisis sit pharetra pellentesque ullamcorper.
      </GenericParagrapgh>

      <div className="p-4">
        <Button bgColor="green">Member</Button>
        <Button borderStyle="solid" borderColor="blue" customClassName='text-c'>
          Mentor
        </Button>
      </div>
    </div>
  );
};

export default Apply;
