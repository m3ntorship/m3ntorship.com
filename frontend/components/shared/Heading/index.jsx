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
  },
  FONT_WEIGHT: {
    BLACK: 'font-black',
    BOLD: 'font-bold',
    NORMAL: 'font-normal'
  }
};

export const Heading = ({
  children,
  type,
  textAlign,
  fontWeight,
  textTransform,
  className,
  as = 'p'
}) => {
  const classes = cn(
    'inline-block w-full',
    {
      //Text Size
      'text-xxlg md:text-ultra': type === HEADING_OPTIONS.TYPE.MAIN_LARGE,
      'text-xlg md:text-super mb-10':
        !type || type === HEADING_OPTIONS.TYPE.MAIN,
      'text-lg md:text-xxxlg mb-10': type === HEADING_OPTIONS.TYPE.SECONDARY,
      'text-lg md:text-xxlg mb-10': type === HEADING_OPTIONS.TYPE.SECTION,
      'text-lg mb-6': type === HEADING_OPTIONS.TYPE.CARD,
      'text-md mb-6': type === HEADING_OPTIONS.TYPE.CARD_SMALL,
      //Alignment
      'text-left': !textAlign || textAlign === HEADING_OPTIONS.TEXT_ALIGN.LEFT,
      'text-center': textAlign === HEADING_OPTIONS.TEXT_ALIGN.CENTER,
      'text-right': textAlign === HEADING_OPTIONS.TEXT_ALIGN.RIGHT,
      //Font Weight
      'font-black':
        !fontWeight || fontWeight === HEADING_OPTIONS.FONT_WEIGHT.BLACK,
      'font-bold': fontWeight === HEADING_OPTIONS.FONT_WEIGHT.BOLD,
      'font-normal': fontWeight === HEADING_OPTIONS.FONT_WEIGHT.NORMAL,

      //Text transform
      uppercase: textTransform === HEADING_OPTIONS.TEXT_TRANSFORM.UPPERCASE
    },
    className
  );
  return <>{React.createElement(as, { className: classes }, children)}</>;
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
