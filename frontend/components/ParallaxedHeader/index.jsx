import React from 'react';
import { Heading } from '../shared/Heading';
import { motion, useViewportScroll, useTransform } from 'framer-motion';
import useMobileAnimation from '../../helper/useMobileAnimation';

const titleContainerVariant = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.03
    }
  }
};
const titleVariant = {
  initial: {
    y: -100,
    opacity: 0
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring'
    }
  }
};

export const ParallaxedHeader = ({ data, settings }) => {
  const componentId = 'parallaxed-header';
  const animateOnMobile = useMobileAnimation(settings, componentId);
  const { scrollY } = useViewportScroll();
  const y1 = useTransform(scrollY, value => value / -6);

  if (data) {
    const { title, sub_title, image } = data;

    return (
      <section className="pt-0">
        <div className="bg-c200 global-section-padding">
          <motion.div
            className="container flex justify-center items-center"
            style={{ y: y1 }}
          >
            <motion.div
              className="hidden lg:block mr-auto w-56"
              initial={animateOnMobile && { x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ type: 'spring' }}
            >
              {image && <img src={image.url} alt="side icon" />}
            </motion.div>
            <div className="flex flex-col justify-center items-center mx-10">
              {title && (
                <Heading
                  type="mainLarge"
                  textAlign="center"
                  textTransform="uppercase"
                  as="h1"
                >
                  <motion.span
                    variants={animateOnMobile && titleContainerVariant}
                    initial="initial"
                    animate="animate"
                    className="inline-block whitespace-no-wrap"
                  >
                    {title.split('').map((letter, index) => (
                      <motion.span
                        variants={animateOnMobile && titleVariant}
                        className="inline-block whitespace-no-wrap"
                        key={index}
                      >
                        {letter}
                      </motion.span>
                    ))}
                  </motion.span>
                </Heading>
              )}
              {sub_title && (
                <motion.p
                  className="text-base md:text-md uppercase text-center"
                  initial={animateOnMobile && { opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, type: 'spring' }}
                >
                  {sub_title}
                </motion.p>
              )}
            </div>
            <motion.div
              className="hidden lg:block ml-auto w-56"
              initial={animateOnMobile && { x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ type: 'spring' }}
            >
              {image && <img src={image.url} alt="side icon" />}
            </motion.div>
          </motion.div>
        </div>
        <div className="text-c200">
          {' '}
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            className="fill-current"
          >
            {' '}
            <path
              d="M0 0v7.23c0 58.29 268.63 105.54 600 105.54s600-47.25 600-105.54V0z"
              className="shape-fill"
            ></path>{' '}
          </svg>{' '}
        </div>
      </section>
    );
  } else {
    return null;
  }
};
