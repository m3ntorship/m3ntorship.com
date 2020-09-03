import React from "react";

const Logo = ({ data }) => {

  let {
    img: { url },
  } = data;
  return (
    <div>
      <img src={url} alt="" />
    </div>
  );
};

export default Logo;
