import React from 'react';
import { Heading, HEADING_OPTIONS } from '../shared/Heading';
import Link from 'next/link';
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
    <section className="container">
      <div className="border-4 border-dashed border-c100">
        <div className="flex justify-around mx-0 lg:mx-32">
          <div className="my-24 w-1/6">
            <img
              className="object-cover w-11/12 items-center hidden md:block"
              src={left_img.url}
              alt=""
            />
          </div>
          <div className="w-full md:w-4/6 flex flex-col justify-center mx-auto mb-24">
            <Heading
              type={HEADING_OPTIONS.TYPE.CARD}
              textAlign={HEADING_OPTIONS.TEXT_ALIGN.CENTER}
              textTransform={HEADING_OPTIONS.TEXT_TRANSFORM.UPPERCASE}
              className="mt-16 mb-10"
              as="h2"
            >
              {title}
            </Heading>

            <p className="join-us-description text-center text-xs font-normal text-c700">
              {description}
            </p>
            <Link href={'/apply'} passHref>
              <Button
                customClassName="uppercase mt-10 mx-auto"
                textSize="medium"
                btnSize="large"
                fontWeight="bold"
                bgColor="green"
              >
                {memberBtn.name}
              </Button>
            </Link>
            <Link href={'/apply'} passHref>
              <Button
                customClassName="uppercase mt-5 mx-auto"
                textSize="medium"
                textColor="white"
                btnSize="large"
                fontWeight="bold"
                bgColor="blue"
              >
                {mentorBtn.name}
              </Button>
            </Link>
          </div>
          <div className="my-24 w-1/6 flex items-center">
            <img
              className="object-cover w-11/12 hidden md:block"
              src={right_img.url}
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinUs;
