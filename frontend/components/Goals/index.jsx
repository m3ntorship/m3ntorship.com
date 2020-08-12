import React from 'react';
import { GradientText, Heading, HEADING_OPTIONS } from '../shared/Heading';
import { motion } from 'framer-motion';
const Goals = ({ data }) => {
  const { title, list_goals, side_image } = data;

  const containerVariants = {
    initial: {
      opacity: 0,
      y: '50vh'
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
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
      x: 0,
      transition: {
        duration: 0.75
      }
    }
  };
  const goalVariants = {
    initial: {
      opacity: 0,
      x: '-50vw'
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.75
      }
    }
  };
  if (data) {
    return (
      <motion.div
        className="relative w-full my-24"
        variants={containerVariants}
        initial="initial"
        animate="animate"
      >
        <div className="text-center text-lg container">
          <motion.div
            className="absolute graph hidden md:block"
            variants={sideImageVariants}
          >
            {side_image && <img src={side_image.url} />}
          </motion.div>
          <Heading
            textAlign={HEADING_OPTIONS.TEXT_ALIGN.CENTER}
            type={HEADING_OPTIONS.TYPE.SECTION}
            as="h2"
          >
            <GradientText text={title} className="uppercase font-bold" />
          </Heading>
          <div className="mt-10 md:mt-16">
            {list_goals.map(({ id, text }) => {
              return (
                <motion.p
                  className="uppercase mb-12 font-normal text-sm md:text-xlg"
                  key={id}
                  variants={goalVariants}
                >
                  {text}
                </motion.p>
              );
            })}
          </div>
        </div>
      </motion.div>
    );
  }
};

export default Goals;
