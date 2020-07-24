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
  className
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
  const headingElement = type => {
    switch (type) {
      case HEADING_OPTIONS.TYPE.MAIN_LARGE:
        return 'h1';
      case HEADING_OPTIONS.TYPE.MAIN:
        return 'h1';
      case HEADING_OPTIONS.TYPE.SECONDARY:
        return 'h2';
      case HEADING_OPTIONS.TYPE.SECTION:
        return 'h3';
      case HEADING_OPTIONS.TYPE.CARD:
        return 'h4';
      case HEADING_OPTIONS.TYPE.CARD_SMALL:
        return 'h5';
      default:
        return 'h1';
    }
  };
  return (
    <>
      {React.createElement(headingElement(type), { className: classes }, [
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
