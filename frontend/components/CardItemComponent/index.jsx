import React from 'react';
import { Heading, HEADING_OPTIONS } from '../shared/Heading';
import Button from '../shared/Button';
import githubLogo from '../../public/static/images/github.png';
import rightArrowLogo from '../../public/static/images/rightArrow.png';
import '../../styles/cardStyle.css';

const CardItem = ({ subTitle, cardDesc }) => {
  return (
    <div className="repo__card my-3 border border-c100 ">
      <div className="m-12">
        <Heading
          as="h2"
          type={HEADING_OPTIONS.TYPE.CARD_SMALL}
          textAlign={HEADING_OPTIONS.TEXT_ALIGN.left}
        >
          Chairty
        </Heading>
        <span className="mt-6  text-c700 text-base">{subTitle}</span>
        <p className="mt-6 text-sm">{cardDesc}</p>
        <div className="mt-6">
          <Button
            textColor="white"
            bgColor="black"
            btnSize="large"
            customClassName="custom"
          >
            <span className="mr-4">
              <img className="inline-block" src={githubLogo}></img>
            </span>
            REPOSITRY
          </Button>
        </div>
        <div className="mt-6">
          <Button
            textColor="black"
            bgColor="gray"
            btnSize="large"
            customClassName="custom"
            fontWeight="normal"
            customClassName="underline"
          >
            VIEW PROJECT
            <span className="ml-4 w-1/6">
              <img className="inline-block w-3/4" src={rightArrowLogo}></img>
            </span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CardItem;
