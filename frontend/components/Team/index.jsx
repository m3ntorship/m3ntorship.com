import React from 'react';
import { GradientText, Heading, HEADING_OPTIONS } from '../shared/Heading';
import PersonCard from '../person-card';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import useMedia from '../../helper/useMedia';
import useMobileAnimation from '../../helper/useMobileAnimation';

const textContainerVariant = {
  initial: {
    opacity: 0,
    y: -50
  },
  shown: {
    y: 0,
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const textVariant = {
  initial: {
    y: -50,
    opacity: 0
  },
  shown: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring'
    }
  }
};

const cardsContainerVariant = {
  initial: {
    scale: 0.2,
    opacity: 0
  },
  shown: {
    scale: 1,
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const cardVariant = {
  initial: {
    scale: 0.2,
    opacity: 0
  },
  shown: {
    scale: 1,
    opacity: 1,
    transition: {
      type: 'spring'
    }
  }
};

export const Team = ({ data, team_members, settings }) => {
  const componentId = 'cohort-team';
  const animateOnMobile = useMobileAnimation(settings, componentId);
  const [textContainerRef, textContainerInView] = useInView({
    threshold: 0.7,
    triggerOnce: true
  });
  const [cardsRef, cardsInView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  if (data) {
    const {
      title,
      side_image: { url },
      description
    } = data;
    return (
      <section className="team relative text-center container">
        <div className="absolute graph right-0 hidden xl:block">
          <img src={url} alt="side icon" />
        </div>
        <div ref={textContainerRef}>
          <motion.div
            variants={animateOnMobile && textContainerVariant}
            initial="initial"
            animate={textContainerInView ? 'shown' : null}
          >
            {title && (
              <motion.div variants={animateOnMobile && textVariant}>
                <Heading
                  type={HEADING_OPTIONS.TYPE.SECTION}
                  fontWeight={HEADING_OPTIONS.FONT_WEIGHT.BOLD}
                  textAlign={HEADING_OPTIONS.TEXT_ALIGN.CENTER}
                  textTransform={HEADING_OPTIONS.TEXT_TRANSFORM.UPPERCASE}
                  as="h2"
                >
                  <GradientText text={title} />
                </Heading>
              </motion.div>
            )}
            {description && (
              <motion.p
                variants={animateOnMobile && textVariant}
                className="mb-16 mx-auto text-center text-base text-c600 lg:w-4/6"
              >
                {description}
              </motion.p>
            )}
          </motion.div>
        </div>
        {team_members && (
          <div ref={cardsRef}>
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
              variants={animateOnMobile && cardsContainerVariant}
              initial="initial"
              animate={cardsInView ? 'shown' : null}
            >
              {team_members.map(({ member_info, id }) => {
                return (
                  <motion.div
                    variants={animateOnMobile && cardVariant}
                    key={id}
                  >
                    <PersonCard
                      cardDetails={member_info}
                      bgColord={true}
                      rounded={true}
                      roundedSmall={true}
                      settings={settings}
                    />
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        )}
      </section>
    );
  }
};
