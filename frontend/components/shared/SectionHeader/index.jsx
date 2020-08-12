import React from 'react';
import { Heading, GradientText, HEADING_OPTIONS } from '../Heading/index';
import GenericParagrapgh from '../GenericParagrapgh/index';
import { motion } from 'framer-motion';

/**
 * Props List
 *    Heading
 *    HeadingGradientText
 *    description
 *    image or images (patch)
 *    children >> buttons
 */

const sectionVariants = {
  hidden: { opacity: 0, x: -400 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { type: 'spring', duration: 0.3 }
  }
};

const childVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', duration: 0.3 }
  }
};

const SectionHeader = ({ data, headingtype, children, gradient_color }) => {
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
        <section className="container flex  flex-col-reverse lg:flex-row">
          <motion.div
            variants={sectionVariants}
            initial="hidden"
            animate="visible"
            className="flex-1 lg:mr-6 justify-center"
          >
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
            <motion.div
              variants={childVariants}
              className="flex flex-wrap lg:flex-no-wrap flex-col md:flex-row items-center justify-center md:justify-start"
            >
              {children}
            </motion.div>
          </motion.div>

          {header_image && (
            <motion.div
              initial={{ opacity: 0, x: 400 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ type: 'spring', duration: 0.3 }}
              className="flex-1 mb-16 md:mb-0"
            >
              <img src={header_image.url} alt="" />
            </motion.div>
          )}
        </section>
      )}
    </>
  );
};

export default SectionHeader;
