import React from 'react';
import { Heading, GradientText, HEADING_OPTIONS } from '../shared/Heading';
import PersonCard from '../person-card';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import useMedia from '../../helper/useMedia';

const sectionVariants = {
  start: {
    opacity: 0,
    transition: { staggerChildren: 0.07, delayChildren: 0.2 }
  },
  end: {
    opacity: 1,
    transition: {
      duration: 1,
      type: 'spring',
      staggerChildren: 0.3
    }
  }
};

const cardVariants = {
  start: {
    scale: 0
  },
  end: {
    scale: 1,
    transition: {
      duration: 1,
      type: 'spring'
    }
  }
};

const TeamGroupSection = ({ data }) => {
  const isDesktop = useMedia(['(max-width: 1024px)'], [false], true);

  const [sectionRef, inView] = useInView({
    threshold: 0.5,
    triggerOnce: true
  });

  if (data) {
    const { title, member } = data;
    const membersData = member
      ? member.map(cardData => {
          return (
            <div key={cardData.id} className="border border-c1100">
              <PersonCard cardDetails={cardData} rounded={true} />
            </div>
          );
        })
      : null;

    return (
      <motion.section
        ref={sectionRef}
        variants={isDesktop ? sectionVariants : ''}
        initial="start"
        animate={inView ? 'end' : ''}
        className="text-center container"
      >
        {title && (
          <Heading
            type={HEADING_OPTIONS.TYPE.SECTION}
            textAlign={HEADING_OPTIONS.TEXT_ALIGN.CENTER}
            textTransform={HEADING_OPTIONS.TEXT_TRANSFORM.UPPERCASE}
            className="pb-5"
            as="h2"
          >
            <GradientText
              text={title}
              gradientColor={HEADING_OPTIONS.GRADIENT_COLOR.GREEN}
            />
          </Heading>
        )}
        {membersData && (
          <motion.div
            variants={isDesktop ? cardVariants : ''}
            className="grid md:grid-cols-2 sm:grid-cols-1 xl:px-40 gap-5"
          >
            {membersData}
          </motion.div>
        )}
      </motion.section>
    );
  } else {
    return null;
  }
};

export default TeamGroupSection;
