import React from 'react';
import cn from 'classnames';

export const Heading = ({ children, type, className }) => {
  return (
    <span
      className={cn(
        'font-bold',
        {
          //Text Size
          'text-super': !type || type === 'main',
          'text-xxxlg': type === 'secondary',
          'text-xxlg': type === 'section',
          'text-lg': type === 'card',
          'text-md': type === 'cardSmall',
          'text-ultra': type === 'mainLarge'
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
