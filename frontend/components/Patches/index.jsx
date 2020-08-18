import React from 'react';
import {
  Heading,
  HEADING_OPTIONS,
  GradientText
} from '../shared/Heading/index';
import PatchCard from '../patch-card';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
const Patches = ({ data, batchesCards }) => {
  const { title, description, dashed_card } = data;
  const [containerRef, contianerInView] = useInView({
    threshold: 0.1
  });
  const [cardsRef, cardsInView] = useInView({
    threshold: 0.3
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
        duration: 0.3
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
        staggerChildren: 0.4
      }
    }
  };
  const cardVariants = {
    initial: {
      scale: 0,
      opacity: 0,
      y: 150
    },
    animate: {
      scale: 1,
      opacity: 1,
      y: 0
    }
  };
  if ((data, batchesCards)) {
    return (
      <motion.section
        ref={containerRef}
        className="patches container"
        variants={containerVariants}
        initial="initial"
        animate={contianerInView ? 'animate' : ''}
      >
        <div className="text-center">
          {title && (
            <Heading
              as="h2"
              type={HEADING_OPTIONS.TYPE.SECTION}
              textAlign={HEADING_OPTIONS.TEXT_ALIGN.CENTER}
            >
              <GradientText text={title} className="uppercase font-bold" />
            </Heading>
          )}
        </div>
        {description && (
          <p className="mb-16 mx-auto text-center text-base text-c600 lg:w-4/6">
            {description}
          </p>
        )}
        {batchesCards[0] && (
          <motion.div
            className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 mt-10"
            variants={cardListVariants}
            initial="initial"
            animate={cardsInView ? 'animate' : ''}
            ref={cardsRef}
          >
            {batchesCards.map(card => {
              return (
                <motion.div key={card.id} variants={cardVariants}>
                  <PatchCard cardDetails={card} dashed={false} />
                </motion.div>
              );
            })}
            <motion.div variants={cardVariants}>
              <PatchCard cardDetails={dashed_card} dashed={true} />
            </motion.div>
          </motion.div>
        )}
      </motion.section>
    );
  }
};

export default Patches;
