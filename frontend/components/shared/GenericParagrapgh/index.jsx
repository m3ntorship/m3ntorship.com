import React from 'react';
import cn from 'classnames';
const GenericParagrapgh = ({ children, ...props }) => {
  let { customClassName, textColor } = props;
  return (
    <p
      className={cn(
        'text-sm',
        {
          // colors
          'text-c100': !textColor,
          'text-c600': textColor === 'gray'
        },
        customClassName
      )}
    >
      {children}
    </p>
  );
};

export default GenericParagrapgh;
