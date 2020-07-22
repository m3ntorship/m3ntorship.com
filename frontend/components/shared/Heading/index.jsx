import React from 'react';
import cn from 'classnames';

export const Heading = ({
  children,
  type,
  textAlign,
  textTransform,
  className
}) => {
  return (
    <span
      className={cn(
        'font-black',
        {
          //Text Size
          'text-super': !type || type === 'main',
          'text-xxxlg': type === 'secondary',
          'text-xxlg': type === 'section',
          'text-lg': type === 'card',
          'text-md': type === 'cardSmall',
          'text-xxlg md:text-ultra': type === 'mainLarge',
          //Alignment
          'text-left': !textAlign || textTransform === 'left',
          'text-center': textAlign === 'center',
          'text-right': textAlign === 'right',
          //Text transform
          uppercase: textTransform === 'uppercase'
        },
        className
      )}
    >
      {children}
    </span>
  );
};

export const GradientText = ({ text, gradientColor, className }) => {
  if (!text) {
    return null;
  }
  return (
    <span
      className={cn(
        {
          'gradient-green': !gradientColor || gradientColor === 'green',
          'gradient-blue': gradientColor === 'blue'
        },
        className
      )}
    >
      {text}
    </span>
  );
};
