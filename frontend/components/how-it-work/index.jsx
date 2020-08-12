import React from 'react';
import { GradientText, Heading, HEADING_OPTIONS } from '../shared/Heading';
import PersonCard from '../person-card';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const sectionVariants = {
  hidden: {
    opacity: 0,
    x: -50,
    transition: { staggerChildren: 0.07, delayChildren: 0.2 }
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: 'spring',
      staggerChildren: 0.3
    }
  }
};

const cardVariants = {
  hidden: {
    scale: 0
  },
  visible: {
    scale: 1,
    transition: {
      duration: 1,
      type: 'spring'
    }
  }
};

const HowItWork = ({ data }) => {
  const [ref, inView] = useInView({
    threshold: 0.1
  });
  const { title, description, cards } = data;
  if (data) {
    return (
      <motion.section
        className="text-center container relative"
        ref={ref}
        variants={sectionVariants}
        initial="hidden"
        animate={inView ? 'visible' : ''}
      >
        <Heading
          as="h2"
          type={HEADING_OPTIONS.TYPE.SECTION}
          textAlign={HEADING_OPTIONS.TEXT_ALIGN.CENTER}
        >
          <GradientText text={title} className="uppercase font-bold" />
        </Heading>
        <p className="mb-10 mx-auto text-base text-c600 lg:w-4/6">
          {description}
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 col-gap-5 row-gap-32 mt-32">
          {cards.map((el, index) => {
            return (
              <motion.div
                variants={cardVariants}
                className="relative h-full"
                key={el.id}
              >
                <span className="absolute block text-giant z-0 text-c400 font-bold transform -translate-x-1/2 -z-1 -top-30 left-1/2">{` 0${
                  index + 1
                }`}</span>
                <div className="z-10 bg-c000 h-full">
                  <PersonCard cardDetails={el} boxShadow={true} />
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.section>
    );
  }
};

export default HowItWork;
