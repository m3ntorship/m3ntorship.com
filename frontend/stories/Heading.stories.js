import React from 'react';
import {
  Heading,
  GradientText,
  HEADING_OPTIONS
} from '../components/shared/Heading';
import { withKnobs, text, select } from '@storybook/addon-knobs';

export default {
  title: 'Heading',
  component: Heading,
  decorators: [withKnobs]
};
const data = {
  uncoloredText: 'lever up your',
  coloredText: 'skills'
};

export const CodeExample = () => {
  const { uncoloredText, coloredText } = data;
  return (
    <Heading
      type={HEADING_OPTIONS.TYPE.MAIN}
      textAlign={HEADING_OPTIONS.TEXT_ALIGN.CENTER}
      textTransform={HEADING_OPTIONS.TEXT_TRANSFORM.UPPERCASE}
    >
      {uncoloredText}{' '}
      <GradientText
        text={coloredText}
        gradientColor={HEADING_OPTIONS.GRADIENT_COLOR.BLUE}
      />
    </Heading>
  );
};

export const Variations = () => {
  return (
    <Heading
      type={select(
        'type',
        { ...HEADING_OPTIONS.TYPE, None: null },
        HEADING_OPTIONS.TYPE.MAIN
      )}
      textAlign={select(
        'textAlign',
        { ...HEADING_OPTIONS.TEXT_ALIGN, None: null },
        HEADING_OPTIONS.TEXT_ALIGN.LEFT
      )}
      textTransform={select(
        'textTransform',
        { ...HEADING_OPTIONS.TEXT_TRANSFORM, None: null },
        HEADING_OPTIONS.TEXT_TRANSFORM.UPPERCASE
      )}
    >
      {text('Heading Text', 'Hello World')}{' '}
      <GradientText
        text={text('gradient text', 'Colored Text')}
        gradientColor={select(
          'gradientColor',
          { ...HEADING_OPTIONS.GRADIENT_COLOR, None: null },
          HEADING_OPTIONS.GRADIENT_COLOR.GREEN
        )}
      />
    </Heading>
  );
};
