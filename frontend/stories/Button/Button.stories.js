import React from 'react';
import Link from 'next/link';
import Button from '../../components/shared/Button';
import githubLogo from '../../public/static/images/github.png';

export default {
  title: 'Button',
  component: ButtonComponent
};
export const ButtonComponent = () => {
  return <Button>Apply now</Button>;
};
export const BlackBtn = () => {
  return (
    <Link  href="https://twitter.com/home?lan=en" passHref>
      <Button
        textColor="white"
        bgColor="black"
        borderStyle="solid"
        btnPadding="small"
        customClassName="custom"
        extrnalLink = {false}
      >
        <span>
          <img className="inline-block" src={githubLogo}></img>
        </span>
        Apply now
      </Button>
    </Link>
  );
};

export const BlueBtn = () => {
  return (
    <Button
      textColor="white"
      bgColor="blue"
      btnPadding="medium"
      customClassName="custom"
      extrnalLink = {true}
    >
      Apply now
    </Button>
  );
};

export const GreenBtn = () => {
  return (
    <Button
      textColor="black"
      bgColor="green"
      customClassName="custom"
    >
      Apply now
    </Button>
  );
};

export const GrayBtn = () => {
  return (
    <Button
      borderStyle="solid"
      borderColor="black"
      bgColor="gray"
      btnPadding="medium"
      customClassName="custom"
    >
      Apply now
    </Button>
  );
};
