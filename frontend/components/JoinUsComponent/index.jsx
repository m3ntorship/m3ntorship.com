import React from 'react';
import { Heading } from '../shared/Heading';
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
    <div className="border-4 border-dashed border-c100">
      <div className="flex justify-around">
        <div className="my-24 w-1/6">
          <img
            className="object-cover w-11/12 hidden md:block"
            src={left_img}
            alt=""
          />
        </div>
        <div className="w-3/6 flex flex-col justify-center mb-24">
          <Heading
            type="cardSmall"
            className="text-center mt-16 py-5 uppercase text-lg font-black"
          >
            {title}
          </Heading>

          <p className="join-us-description text-center px-2 pt-8 text-xs text-c500">
            {description}
          </p>

          <div className="mt-8 text-center">
            <Button
              customClassName="uppercase"
              textSize="medium"
              fontWeight="bold"
              bgColor="green"
            >
              {memberBtn}
            </Button>
          </div>
          <div className="mt-5 text-center">
            <Button
              customClassName="uppercase"
              textSize="medium"
              fontWeight="bold"
              bgColor="blue"
            >
              {mentorBtn}
            </Button>
          </div>
        </div>
        <div className="my-24 w-1/6">
          <img
            className="object-cover w-11/12 hidden md:block"
            src={right_img}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default JoinUs;
