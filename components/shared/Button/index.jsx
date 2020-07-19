import React from "react";

import cn from "classnames";

const Button = ({ children, ...props }) => {
  let {
    primaryTextColor,
    fontSize,
    primaryClassName,
    secondaryClassName,
    bgColor,
    btnPadding,
    bntText,
    btnUrl,
  } = props;
  return (
    <>
      <a
        className={cn(
          "extra-bold",
          {
            // sizes
            "text-sm": fontSize === "sm",
            "text-xs": fontSize === "xs",
            "text-base": !fontSize,
            "text-md": fontSize === "md",

            // colors
            "text-c100": !primaryTextColor,
            "text-c000": primaryTextColor === "c000",
            "text-c1000": primaryTextColor === "c1000",
            "text-c800": primaryTextColor === "c800",

            //bg Color
            "bg-c000": !bgColor,
            "bg-c100": bgColor === "c100",
            "bg-c200": bgColor === "c200",
            "bg-c300": bgColor === "c300",
            "bg-c1100": bgColor === "c1100",

            //spacing
            "p-baseBtn": !btnPadding,
            "p-smBtn": btnPadding === "smBtn",
            "p-mdBtn": btnPadding === "mdBtn",
            "p-lgBtn": btnPadding === "lgBtn",
            "p-vlgBtn": btnPadding === "vlgBtn",
            "p-giantBtn": btnPadding === "giantBtn",
          },
          primaryClassName,
          secondaryClassName
        )}
      >
        {children}
      </a>
    </>
  );
};

export default Button;
