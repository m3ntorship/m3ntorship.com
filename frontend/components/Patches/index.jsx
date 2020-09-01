import React from 'react';
import {
  Heading,
  HEADING_OPTIONS,
  GradientText
} from '../shared/Heading/index';
import PatchCard from '../patch-card';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import useMobileAnimation from '../../helper/useMobileAnimation';


const Patches = ({ data, batchesCards, settings}) => {
  const componentId = 'cohorts'
  const animateOnMobile = useMobileAnimation(settings, componentId)

  const [containerRef, contianerInView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });
  const [cardsRef, cardsInView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });
  const containerVariants = {
    initial: {
      opacity: 0,
      y: 100
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring'
      }
    }
  };
  const cardListVariants = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  const cardVariants = {
    initial: {
      scale: 0.2,
      opacity: 0
    },
    animate: {
      scale: 1,
      opacity: 1,
      transition: {
        type: 'spring'
      }
    }
  };
  if ((data, batchesCards)) {
    const { title, description, dashed_card } = data;
    return (
      <motion.section
        className="patches container"
        variants={animateOnMobile && containerVariants}
        initial="initial"
        animate={contianerInView ? 'animate' : ''}
      >
        <div ref={containerRef}>
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
            <p className="mb-10 mx-auto text-center text-base text-c600 lg:w-4/6">
              {description}
            </p>
          )}
          {batchesCards[0] && (
            <motion.div
              className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 mt-10"
              variants={animateOnMobile && cardListVariants}
              initial="initial"
              animate={cardsInView ? 'animate' : ''}
              ref={cardsRef}
            >
              {batchesCards.map(card => {
                return (
                  <motion.div key={card.id} variants={animateOnMobile && cardVariants}>
                    <PatchCard cardDetails={card} dashed={false} />
                  </motion.div>
                );
              })}
              {dashed_card && (
                <motion.div variants={animateOnMobile && cardVariants}>
                  <PatchCard cardDetails={dashed_card} dashed={true} />
                </motion.div>
              )}
            </motion.div>
          )}
        </div>{' '}
      </motion.section>
    );
  }
};

export default Patches;
