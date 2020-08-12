import React from 'react';
import { Heading, GradientText, HEADING_OPTIONS } from '../Heading/index';
import GenericParagrapgh from '../GenericParagrapgh/index';
import cn from 'classnames';

/**
 * Props List
 *    Heading
 *    HeadingGradientText
 *    description
 *    image or images (patch)
 *    children >> buttons
 */

const SectionHeader = ({
  data,
  headingtype,
  children,
  gradient_color,
  headingFontWeight,
  customClassName,
  headingAs
}) => {
  const {
    title,
    header_image,
    headingGradientText,
    description,
    side_image
  } = data;
  return (
    <>
      {data && (
        <section
          className={cn(
            'flex  flex-col-reverse items-center lg:flex-row',
            customClassName
          )}
        >
          <div className="flex-1 lg:mr-6 justify-center w-full lg:w-1/2">
            <div className="flex items-start">
              <Heading
                type={headingtype}
                fontWeight={headingFontWeight}
                textTransform={HEADING_OPTIONS.TEXT_TRANSFORM.UPPERCASE}
                textAlign={HEADING_OPTIONS.TEXT_ALIGN.CENTER}
                as={headingAs ? headingAs : 'h1'}
                className="lg:text-left"
              >
                {title ? title : null}{' '}
                {headingGradientText && (
                  <GradientText
                    text={headingGradientText}
                    gradientColor={gradient_color}
                  ></GradientText>
                )}
              </Heading>
              {side_image && (
                <div className="hidden lg:block heading-image">
                  <img src={side_image.url} alt="" />
                </div>
              )}
            </div>
            {description && (
              <p className=" text-c600 text-center lg:text-left text-base mb-16">
                {description}
              </p>
            )}
            <div className="flex flex-wrap lg:flex-no-wrap flex-col md:flex-row items-center justify-center lg:justify-start">
              {children}
            </div>
          </div>

          {header_image && (
            <div className="flex-1 mb-12 lg:mb-0 w-full lg:w-1/2">
              <img src={header_image.url} className="mx-auto" alt="" />
            </div>
          )}
        </section>
      )}
    </>
  );
};

export default SectionHeader;
