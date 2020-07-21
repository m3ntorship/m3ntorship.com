import React from 'react';
import Button from '../../components/shared/Button';
import githubLogo from '../../public/static/images/github.png';
import rightArrow from '../../public/static/images/right-arrow.png';

export default {
  title: 'Button',
  component: ButtonComponent
};
export const ButtonComponent = () => {
  return <Button>Apply now</Button>;
};
export const BlackBtn = () => {
  return (
    <Button
      textColor="white"
      bgColor="black"
      borderStyle="solid"
      btnPadding="smBtn"
      customClassName="custom"
    >
      <span>
        <img className="inline-block" src={githubLogo}></img>
      </span>
      Apply now
    </Button>
  );
};

export const BlueBtn = () => {
  return (
    <Button
      textColor="white"
      bgColor="blue"
      btnPadding="small"
      customClassName="custom"
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
      btnPadding="medium"
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
      customClassName="custom"
    >
      Apply now
      <span>
        <img className="inline-block w-5" src={rightArrow}></img>
      </span>
    </Button>
  );
};
