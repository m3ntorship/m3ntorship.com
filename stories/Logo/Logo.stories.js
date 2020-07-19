import React from "react";
import Logo from "../../components/Logo";
import logoSrc from "../../public/static/logo/logo.png";


export default {
  title: "Logo",
  component: LogoComponent,
};
 let data = {
  img :{
    url : logoSrc
  }
}

export const LogoComponent = () => {
  return <Logo data = {data} />;
};
