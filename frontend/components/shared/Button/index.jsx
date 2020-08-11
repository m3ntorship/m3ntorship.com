import React from 'react';

import cn from 'classnames';

const Button = React.forwardRef(({ children, ...props }, ref) => {
  let {
    customClassName,
    textColor,
    bgColor,
    btnSize,
    borderColor,
    borderStyle,
    href,
    onClick,
    extrnalLink,
    textSize,
    fontWeight
  } = props;
  return (
    <>
      <a
        onClick={onClick}
        href={`${href ? href : ''}`}
        ref={ref}
        target={extrnalLink && '_blank'}
        className={cn(
          'flex items-center justify-center sm:h-',
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
            'text-c800': textColor === 'gray',
            'text-c200': textColor === 'green',

            //bg Color
            'bg-c000': !bgColor,
            'bg-c100': bgColor === 'black',
            'bg-c200': bgColor === 'green',
            'bg-c300': bgColor === 'blue',
            'bg-c1000': bgColor === 'gray',

            //spacing
            'w-24 h-12 md:w-48 md:h-16': !btnSize,
            'w-16 h-12 md:w-16 md:h-20': btnSize === 'small',
            'w-32 h-12  md:w-56 md:h-16': btnSize === 'medium',
            'w-48 h-12 md:w-64 md:h-16': btnSize === 'large',

            //font size
            'text-base': !textSize || textSize === 'large',
            'text-xs': textSize === 'medium',
            'text-xxs': textSize === 'small',
            //font weight
            'font-black': !fontWeight || fontWeight === 'bold',
            'font-normal': fontWeight === 'normal'
          },
          customClassName
        )}
      >
        {children}
      </a>
    </>
  );
});

export default Button;
