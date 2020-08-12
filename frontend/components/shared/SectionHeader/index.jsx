import React from 'react';
import { Heading, GradientText, HEADING_OPTIONS } from '../Heading/index';
import GenericParagrapgh from '../GenericParagrapgh/index';
import { motion } from 'framer-motion';
import cn from 'classnames';

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
          className={cn('flex  flex-col-reverse lg:flex-row', customClassName)}
        >
          <motion.div
            className="flex-1 lg:mr-6 justify-center"
            variants={sectionVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="flex items-start">
              <Heading
                type={headingtype}
                fontWeight={headingFontWeight}
                textTransform={HEADING_OPTIONS.TEXT_TRANSFORM.UPPERCASE}
                as={headingAs ? headingAs : 'h1'}
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
              <p className=" text-c600 text-base mb-16">{description}</p>
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
