import React from 'react';
import { GradientText, Heading, HEADING_OPTIONS } from '../shared/Heading';
import PersonCard from '../person-card';
import {motion} from 'framer-motion';

const sectionVariants = {
  hidden: {
    opacity: 0,
    y: -50
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {duration: 1, type: 'spring'}
  }
}

const HowItWork = ({ data }) => {
  const { title, description, cards } = data;
  if (data) {
    return (
      <motion.div
        className="text-center mt-40 mb-20"
        variants={sectionVariants}
        initial='hidden'
        animate='visible'
      >
        <div className="container relative">
          <Heading
            as="h2"
            type={HEADING_OPTIONS.TYPE.SECTION}
            textAlign={HEADING_OPTIONS.TEXT_ALIGN.CENTER}
          >
            <GradientText text={title} className="uppercase font-bold" />
          </Heading>
          <p className="my-10 mx-auto text-base text-c600 lg:w-4/6">
            {description}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 col-gap-5 row-gap-32 mt-32">
            {cards.map((el, index) => {
              return (
                <div className="relative h-full" key={el.id}>
                  <span
                    className="absolute block text-giant z-0 text-c400 font-bold "
                    style={{
                      top: '-120px',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      zIndex: '-1'
                    }}
                  >{` 0${index + 1}`}</span>
                  <div className="z-10 bg-c000 h-full">
                    <PersonCard cardDetails={el} boxShadow={true} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </motion.div>
    );
  }
};

export default HowItWork;
