import React from 'react';
import { Heading, GradientText, HEADING_OPTIONS } from '../Heading/index';
import GenericParagrapgh from '../GenericParagrapgh/index';
import { motion } from 'framer-motion';
import cn from 'classnames';
import { useInView } from 'react-intersection-observer';
import useMobileAnimation from '../../../helper/useMobileAnimation';

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

const imageVarians = {
  hidden: { opacity: 0, x: 400 },
  visible: {
    opacity: 1,
    x: 0,
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
  headingAs,
  settings
}) => {

  const componentId = 'section-header';
  const animateOnMobile = useMobileAnimation(settings, componentId);
  const [headerRef, headerInView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

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
          ref={headerRef}
          className={cn(
            'flex flex-col-reverse items-center lg:flex-row',
            customClassName
          )}
        >
          <motion.div
            className="flex-1 lg:mr-6 justify-center w-full lg:w-1/2"
            variants={animateOnMobile && sectionVariants}
            initial="hidden"
            animate={headerInView ? 'visible' : ''}
          >
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
            <motion.div
              variants={animateOnMobile && childVariants}
              className="flex flex-wrap lg:flex-no-wrap flex-col md:flex-row items-center justify-center lg:justify-start"
            >
              {children}
            </motion.div>
          </motion.div>

          {header_image && (
            <motion.div
              variants={animateOnMobile && imageVarians}
              initial="hidden"
              animate={headerInView ? 'visible' : ''}
              className="flex-1 mb-12 lg:mb-0 w-full lg:w-1/2"
            >
              <img src={header_image.url} className="mx-auto" alt="" />
            </motion.div>
          )}
        </section>
      )}
    </>
  );
};

export default SectionHeader;
