import React from 'react';
import { Heading, HEADING_OPTIONS } from '../shared/Heading';
import Link from 'next/link';
import Button from '../shared/Button';

const JoinUs = ({ data }) => {
  const {
    title,
    description,
    mentorBtn: { url: mentorBtnUrl, name: mentorBtnName },
    memberBtn: { url: memberBtnUrl, name: memberBtnName },
    left_img,
    right_img
  } = data;

  return (
    <section className="container">
      <div className="border-4 py-20 border-dashed border-c100 flex justify-evenly items-center">
        <div className="w-1/6">
          <img
            className="object-cover items-center hidden lg:block"
            src={left_img.url}
            alt=""
          />
        </div>
        <div className="w-full md:w-72 flex flex-col justify-center">
          <Heading
            type={HEADING_OPTIONS.TYPE.CARD}
            textAlign={HEADING_OPTIONS.TEXT_ALIGN.CENTER}
            textTransform={HEADING_OPTIONS.TEXT_TRANSFORM.UPPERCASE}
            className="mb-10"
            as="h2"
          >
            {title}
          </Heading>

          <p className="join-us-description text-center text-xs font-light text-c700">
            {description}
          </p>
          <Link href={`${memberBtnUrl}?as=mentee`} passHref>
            <Button
              customClassName="uppercase mt-10 mx-auto"
              textSize="medium"
              btnSize="large"
              fontWeight="bold"
              bgColor="green"
            >
              {memberBtnName}
            </Button>
          </Link>
          <Link href={`${mentorBtnUrl}?as=mentor`} passHref>
            <Button
              customClassName="uppercase mt-5 mx-auto"
              textSize="medium"
              textColor="white"
              btnSize="large"
              fontWeight="bold"
              bgColor="blue"
            >
              {mentorBtnName}
            </Button>
          </Link>
        </div>
        <div className="w-1/6 flex items-center">
          <img
            className="object-cover hidden lg:block"
            src={right_img.url}
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default JoinUs;
