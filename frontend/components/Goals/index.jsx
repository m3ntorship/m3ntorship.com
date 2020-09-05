import React from 'react';
import { GradientText, Heading, HEADING_OPTIONS } from '../shared/Heading';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import useMobileAnimation from '../../helper/useMobileAnimation';
import dynamic from 'next/dynamic';

const LazyImage = dynamic(
() => import('../../helper/lazy-image'),
{ ssr: false }
);

const Goals = ({ data, settings }) => {
  const componentId = 'goals'
  const animateOnMobile = useMobileAnimation(settings, componentId)
  const { title, list_goals, side_image } = data;
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });
  const containerVariants = {
    initial: {
      opacity: 0,
      y: '100px'
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        when: 'beforeChildren'
      }
    }
  };
  const sideImageVariants = {
    initial: {
      opacity: 0,
      x: '400px'
    },
    animate: {
      opacity: 1,
      x: 0
    }
  };
  const goalVariants = {
    initial: {
      opacity: 0,
      x: '-400px'
    },
    animate: {
      opacity: 1,
      x: 0
    }
  };
  if (data) {
    return (
      <motion.section
        ref={ref}
        className="text-center text-lg container relative"
        variants={animateOnMobile && containerVariants}
        initial="initial"
        animate={inView ? 'animate' : ''}
      >
        <motion.div
          className="absolute hidden xl:block -top-12 right-12"
          variants={animateOnMobile && sideImageVariants}
        >
          {side_image && <LazyImage src={side_image.url} alt="side icon" />}
        </motion.div>
        {title && (
          <Heading
            textAlign={HEADING_OPTIONS.TEXT_ALIGN.CENTER}
            type={HEADING_OPTIONS.TYPE.SECTION}
            textTransform={HEADING_OPTIONS.TEXT_TRANSFORM.UPPERCASE}
            fontWeight={HEADING_OPTIONS.FONT_WEIGHT.BOLD}
            as="h2"
          >
            <GradientText text={title} />
          </Heading>
        )}
        {list_goals && (
          <div className="goals__goals-list">
            {list_goals.map(({ id, goal }) => {
              return (
                <motion.p
                  className="font-normal text-base md:text-xlg mb-10 last:mb-0"
                  key={id}
                  variants={animateOnMobile && goalVariants}
                >
                  {goal}
                </motion.p>
              );
            })}
          </div>
        )}
      </motion.section>
    );
  }
};

export default Goals;
