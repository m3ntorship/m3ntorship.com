import React from 'react';
import ProjectCard from '../ProjectCard';
import { GradientText, Heading, HEADING_OPTIONS } from '../shared/Heading';
import { motion } from 'framer-motion';

const projectsSectionVariants = {
  start: {
    opacity: 0,
    transition: { staggerChildren: 0.07, delayChildren: 0.2 }
  },
  end: {
    opacity: 1,
    transition: {
      type: 'spring',
      staggerChildren: 0.3
    }
  }
};

const projectsCardVariants = {
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

const dataTest = [0, 1, 2];

const RealProjects = ({ data }) => {
  if (data) {
    return (
      <section className="real-projects">
        <motion.div
          variants={projectsSectionVariants}
          initial="start"
          animate="end"
          className="container"
        >
          <div>
            <Heading
              type={HEADING_OPTIONS.TYPE.SECTION}
              textAlign={HEADING_OPTIONS.TEXT_ALIGN.CENTER}
              textTransform={HEADING_OPTIONS.TEXT_TRANSFORM.UPPERCASE}
            >
              <GradientText text="Real projects in Real teams" />
            </Heading>
            <p className="text-center mx-auto text-base text-c600 md:w-2/3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Molestie
              aliquam iaculis facilisis sit pharetra pellentesque ullamcorper.
            </p>
          </div>
          <div className="my-10 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {dataTest.map(project => {
              return (
                <motion.div variants={projectsCardVariants}>
                  <ProjectCard data="0" />
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </section>
    );
  }
};

export default RealProjects;
