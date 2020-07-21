import React from 'react';

import cn from 'classnames';

const Button = ({ children, ...props }) => {
  let {
    customClassName,
    textColor,
    bgColor,
    btnPadding,
    borderColor,
    borderStyle
  } = props;
  return (
    <>
      <a
        className={cn(
          'extra-bold text-base inline-block',
          {
            // border
            'border-none': !borderStyle,
            'border border-solid': borderStyle === 'solid',
            'border-c300': borderColor === 'blue',
            'border-c200': borderColor === 'green',
            'border-c100': borderColor === 'black',

            // colors
            'text-c100': !textColor,
            'text-c000': textColor === 'white',
            'text-c1000': textColor === 'gray',
            'text-c200': textColor === 'green',

            //bg Color
            'bg-c000': !bgColor,
            'bg-c100': bgColor === 'black',
            'bg-c200': bgColor === 'green',
            'bg-c300': bgColor === 'blue',
            'bg-c1000': bgColor === 'gray',

            //spacing
            'p-baseBtn': !btnPadding,
            'p-smBtn': btnPadding === 'small',
            'p-mdBtn': btnPadding === 'medium',
            'p-lgBtn': btnPadding === 'large'
          },
          customClassName
        )}
      >
        {children}
      </a>
    </>
  );
};

export default Button;
