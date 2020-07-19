import React from "react";
import Button from "../../components/shared/Button";
import githubLogo from "../../public/static/images/github.png";
import rightArrow from "../../public/static/images/right-arrow.png";

export default {
  title: "Button",
  component: ButtonComponent,
};
export const ButtonComponent = () => {
  return <Button>Apply now</Button>;
};
export const BlackBtn = () => {
  return (
    <Button
      primaryTextColor="c000"
      fontSize="md"
      bgColor="c100"
      btnPadding="smBtn"
      primaryClassName="primary"
      secondaryClassName="secondary"
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
      primaryTextColor="c000"
      fontSize="md"
      bgColor="c300"
      btnPadding="vlgBtn"
      primaryClassName="primary"
      secondaryClassName="secondary"
    >
      Apply now
    </Button>
  );
};

export const GreenBtn = () => {
  return (
    <Button
      primaryTextColor="c100"
      fontSize="md"
      bgColor="c200"
      btnPadding="mdBtn"
      primaryClassName="primary"
      secondaryClassName="secondary"
    >
      Apply now
    </Button>
  );
};

export const GrayBtn = () => {
  return (
    <Button
      primaryTextColor="c800"
      fontSize="base"
      bgColor="c1100"
      btnPadding="mdBtn"
      primaryClassName="primary"
      secondaryClassName="secondary"
    >
      Apply now
      <span>
        <img className="inline-block w-5" src={rightArrow}></img>
      </span>
    </Button>
  );
};

export const GiantBtn = () => {
  return (
    <Button
      primaryTextColor="c000"
      fontSize="md"
      bgColor="c100"
      btnPadding="giantBtn"
      primaryClassName="primary"
      secondaryClassName="secondary"
    >
      Apply now
    </Button>
  );
};
