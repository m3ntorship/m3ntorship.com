import React from 'react';

import cn from 'classnames';

const Button = React.forwardRef(({ children, ...props }, ref) => {
  let {
    customClassName,
    textColor,
    bgColor,
    btnPadding,
    borderColor,
    borderStyle,
    href,
    extrnalLink
  } = props;
  return (
    <>
      <a
        href={`${href ? href : ''}`}
        ref={ref}
        target={extrnalLink && '_blank'}
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
            'text-c800': textColor === 'gray',
            'text-c200': textColor === 'green',

            //bg Color
            'bg-c000': !bgColor,
            'bg-c100': bgColor === 'black',
            'bg-c200': bgColor === 'green',
            'bg-c300': bgColor === 'blue',
            'bg-c1000': bgColor === 'gray',

            //spacing
            'py-4 px-10': !btnPadding,
            'py-6 px-16': btnPadding === 'small',
            'py-6 px-24': btnPadding === 'medium',
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