import React from 'react';
import {
  Heading,
  HEADING_OPTIONS,
  GradientText
} from '../shared/Heading/index';
import PatchCard from '../patch-card';
import { motion } from 'framer-motion';
const Patches = ({ data, batchesCards }) => {
  const { title, description, dashed_card } = data;
  const containerVariants = {
    initial: {
      opacity: 0,
      y: '-50vh'
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
  const cardListVariants = {
    initial: {
      opacity: 0,
      y: 150
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        when: 'beforeChildren',
        staggerChildren: 0.3
      }
    }
  };
  const cardVariants = {
    initial: {
      opacity: 0,
      y: 150
    },
    animate: {
      opacity: 1,
      y: 0
    }
  };
  if ((data, batchesCards)) {
    return (
      <motion.section
        className="patches container"
        variants={containerVariants}
        initial="initial"
        animate="animate"
      >
        <div className="text-center">
          <Heading
            as="h2"
            type={HEADING_OPTIONS.TYPE.SECTION}
            textAlign={HEADING_OPTIONS.TEXT_ALIGN.CENTER}
          >
            <GradientText text={title} className="uppercase font-bold" />
          </Heading>
        </div>
        <p className="mb-16 mx-auto text-center text-base text-c600 lg:w-4/6">
          {description}
        </p>
        <motion.div
          className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 mt-10"
          variants={cardListVariants}
          initial="initial"
          animate="animate"
        >
          {batchesCards.map(card => {
            return (
              <motion.div variants={cardVariants}>
                <PatchCard key={card.id} cardDetails={card} dashed={false} />
              </motion.div>
            );
          })}
          <motion.div variants={cardVariants}>
            <PatchCard cardDetails={dashed_card} dashed={true} />
          </motion.div>
        </motion.div>
      </motion.section>
    );
  }
};

export default Patches;
