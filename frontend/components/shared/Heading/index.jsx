import React from 'react';
import cn from 'classnames';

export const Heading = ({ primaryText, gradientText, type, gradientColor }) => {
  return (
    <span
      className={cn('font-bold leading-remove inline-block', {
        //Text Size
        'text-super': !type ?? type === 'main',
        'text-xxxl': type === 'secondary',
        'text-xxl': type === 'section',
        'text-lg': type === 'card',
        'text-md': type === 'cardSmall',
        'text-ultra': type === 'mainLarge'
      })}
    >
      {primaryText}{' '}
      <span
        className={cn(
          'heading__secondary-text leading-remove inline-block relative '
        )}
        style={{
          background: `linear-gradient(0deg, ${
            gradientColor === 'blue'
              ? 'rgba(45, 91, 255,1)'
              : 'rgba(102,242,141,1)'
          } 0%,rgba(0,0,0,0) 40%)`
        }}
      >
        {gradientText}
      </span>
    </span>
  );
};
