import React, { createElement } from 'react';
import cn from 'classnames';

export const HEADING_OPTIONS = {
  TYPE: {
    MAIN_LARGE: 'mainLarge',
    MAIN: 'main',
    SECONDARY: 'secondary',
    SECTION: 'section',
    CARD: 'card',
    CARD_SMALL: 'cardSmall'
  },
  TEXT_ALIGN: {
    LEFT: 'left',
    CENTER: 'center',
    RIGHT: 'right'
  },
  TEXT_TRANSFORM: {
    UPPERCASE: 'uppercase'
  },
  GRADIENT_COLOR: {
    GREEN: 'green',
    BLUE: 'blue'
  }
};

export const Heading = ({
  children,
  type,
  textAlign,
  textTransform,
  className,
  as
}) => {
  const classes = cn(
    'font-black inline-block',
    {
      //Text Size
      'text-xxlg md:text-ultra': type === HEADING_OPTIONS.TYPE.MAIN_LARGE,
      'text-super': !type || type === HEADING_OPTIONS.TYPE.MAIN,
      'text-xxxlg': type === HEADING_OPTIONS.TYPE.SECONDARY,
      'text-xxlg': type === HEADING_OPTIONS.TYPE.SECTION,
      'text-lg': type === HEADING_OPTIONS.TYPE.CARD,
      'text-md': type === HEADING_OPTIONS.TYPE.CARD_SMALL,
      //Alignment
      'text-left': !textAlign || textAlign === HEADING_OPTIONS.TEXT_ALIGN.LEFT,
      'text-center': textAlign === HEADING_OPTIONS.TEXT_ALIGN.CENTER,
      'text-right': textAlign === HEADING_OPTIONS.TEXT_ALIGN.RIGHT,
      //Text transform
      uppercase: textTransform === HEADING_OPTIONS.TEXT_TRANSFORM.UPPERCASE
    },
    className
  );
  return (
    <>
      {React.createElement(`${as ? as : 'p'}`, { className: classes }, [
        ...children
      ])}
    </>
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
          'gradient-green':
            !gradientColor ||
            gradientColor === HEADING_OPTIONS.GRADIENT_COLOR.GREEN,
          'gradient-blue': gradientColor === HEADING_OPTIONS.GRADIENT_COLOR.BLUE
        },
        className
      )}
    >
      {text}
    </span>
  );
};
