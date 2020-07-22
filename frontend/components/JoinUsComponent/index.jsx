import React from 'react';
import { Heading } from '../shared/Heading';
import Button from '../shared/Heading';

const JoinUs = ({ data }) => {
  const { title, description, left_img, right_img } = data;
  return (
    <div className="border-4 border-dashed border-c100">
      <div className="flex justify-around">
        <div className="my-24 w-1/6">
          <img
            className="object-cover w-11/12 hidden sm:block"
            src={left_img}
            alt=""
          />
        </div>
        <div className="w-3/6 flex flex-col justify-center mb-24">
          <h1 className=" text-center mt-16 py-5 uppercase text-lg font-black">
            <Heading type="cardSmall">Join Next Patch</Heading>
          </h1>
          <p className="join-us-description text-center px-2 pt-8 text-xs">
            {description}
          </p>

          <div className="m-auto mt-8">
            <Button
              bgColor="green"
              customClassName="font-bold text-xs uppercase"
            >
              Apply As Member
            </Button>
          </div>
          <div className="m-auto mt-5">
            <Button
              bgColor="blue"
              customClassName="font-bold text-xs uppercase block m-auto"
            >
              Apply As Mentor
            </Button>
          </div>
        </div>
        <div className="my-24 w-1/6">
          <img
            className="object-cover w-11/12 hidden sm:block"
            src={right_img}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default JoinUs;
