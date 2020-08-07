import React from 'react';
import { Heading, HEADING_OPTIONS } from '../shared/Heading';
import Button from '../shared/Button';

const JoinUs = ({ data }) => {
  const {
    title,
    description,
    mentorBtn,
    memberBtn,
    left_img,
    right_img
  } = data;
  return (
    <div className='container'>
      <div className="border-4 border-dashed border-c100">
        <div className="flex justify-around mx-0 lg:mx-32">
          <div className="my-24 w-1/6">
            <img
              className="object-cover w-11/12 flex items-center hidden md:block"
              src={left_img}
              alt=""
              />
          </div>
          <div className="w-4/6 flex flex-col justify-center mx-auto mb-24">
            <Heading
              type={HEADING_OPTIONS.TYPE.SECTION}
              textAlign={HEADING_OPTIONS.TEXT_ALIGN.CENTER}
              textTransform={HEADING_OPTIONS.TEXT_TRANSFORM.UPPERCASE}
              className="mt-16 pb-5"
              as="h3"
              >
              {title}
            </Heading>

            <p className="join-us-description text-center pt-8 text-xs text-c500">
              {description}
            </p>

            <Button
              customClassName="uppercase mt-8 mx-auto"
              textSize="medium"
              fontWeight="bold"
              bgColor="green"
              >
              {memberBtn}
            </Button>

            <Button
              customClassName="uppercase mt-5 mx-auto"
              textSize="medium"
              fontWeight="bold"
              bgColor="blue"
              >
              {mentorBtn}
            </Button>
          </div>
          <div className="my-24 w-1/6 flex items-center">
            <img
              className="object-cover w-11/12 hidden md:block"
              src={right_img}
              alt=""
              />
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinUs;
