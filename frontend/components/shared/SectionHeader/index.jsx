import React from 'react';
import { Heading, GradientText, HEADING_OPTIONS } from '../Heading/index';
import GenericParagrapgh from '../GenericParagrapgh/index';

/**
 * Props List
 *    Heading
 *    HeadingGradientText
 *    description
 *    image or images (patch)
 *    children >> buttons
 */

const SectionHeader = ({ data, headingtype, children, gradient_color }) => {
  const {
    title,
    headerImage,
    headingGradientText,
    description,
    side_image
  } = data;
  return (
    <>
      {data && (
        <section className="flex items-center justify-center flex-col-reverse lg:flex-row">
          <div className="flex-1 lg:mr-6 justify-center">
            <div className="flex items-start">
              <div className="heading ">
                {title && (
                  <Heading
                    type={headingtype}
                    textTransform={HEADING_OPTIONS.TEXT_TRANSFORM.UPPERCASE}
                  >
                    {title}
                    {headingGradientText && (
                      <GradientText
                        text={headingGradientText}
                        gradientColor={gradient_color}
                      ></GradientText>
                    )}
                  </Heading>
                )}
              </div>

              {side_image && (
                <div className="hidden lg:block heading-image">
                  <img src={side_image.url} alt="" />
                </div>
              )}
            </div>
            {description && (
              <GenericParagrapgh
                textColor="gray"
                customClassName="text-base py-10"
              >
                {description}
              </GenericParagrapgh>
            )}
            <div className="flex flex-col md:flex-row items-center justify-center md:justify-start">
              {children}
            </div>
          </div>

          {headerImage && (
            <div className="flex-1">
              <img src={headerImage} alt="" />
            </div>
          )}
        </section>
      )}
    </>
  );
};

export default SectionHeader;
