import React from 'react';
import { GradientText, Heading, HEADING_OPTIONS } from '../shared/Heading';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Goals = ({ data }) => {
  const { title, list_goals, side_image } = data;
  const [ref, inView] = useInView({
    threshold: 0.1
  });
  const containerVariants = {
    initial: {
      opacity: 0,
      y: '50vh'
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
      x: '50vw'
    },
    animate: {
      opacity: 1,
      x: 0
    }
  };
  const goalVariants = {
    initial: {
      opacity: 0,
      x: '-50vw'
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
        variants={containerVariants}
        initial="initial"
        animate={inView ? 'animate' : ''}
      >
        <motion.div
          className="absolute hidden md:block -top-12 right-12"
          variants={sideImageVariants}
        >
          {side_image && <img src={side_image.url} />}
        </motion.div>
        <Heading
          textAlign={HEADING_OPTIONS.TEXT_ALIGN.CENTER}
          type={HEADING_OPTIONS.TYPE.SECTION}
          textTransform={HEADING_OPTIONS.TEXT_TRANSFORM.UPPERCASE}
          fontWeight={HEADING_OPTIONS.FONT_WEIGHT.BOLD}
          as="h2"
        >
          <GradientText text={title} />
        </Heading>
        <div className="goals__goals-list">
          {list_goals.map(({ id, goal }) => {
            return (
              <motion.p
                className="font-normal text-base md:text-xlg mb-12"
                key={id}
                variants={goalVariants}
              >
                {goal}
              </motion.p>
            );
          })}
        </div>
      </motion.section>
    );
  }
};

export default Goals;
