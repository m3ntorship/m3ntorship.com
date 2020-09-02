import React from 'react';
import ProjectCard from '../ProjectCard';
import { GradientText, Heading, HEADING_OPTIONS } from '../shared/Heading';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import useMedia from '../../helper/useMedia';
import useMobileAnimation from '../../helper/useMobileAnimation';

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

const RealProjects = ({ projectsInfoData, projectsData, settings }) => {
  const componentId = 'homepage_real_projects';
  const animateOnMobile = useMobileAnimation(settings, componentId);
  const isDesktop = useMedia(['(max-width: 1024px)'], [false], true);
  const [ref, inView] = useInView({
    threshold: isDesktop ? 0.5 : 0.1,
    triggerOnce: true
  });

  if (projectsInfoData.projects_brief && projectsData) {
    const {
      projects_brief: {
        title,
        description,
        image: { url }
      }
    } = projectsInfoData;
    return (
      <section className="real-projects relative" ref={ref}>
        <div className="absolute hidden lg:block top-12 right-12">
          {url && (
            <img  loading ="lazy" src={url} alt="sideImage" className="w-1/2 float-right" />
          )}
        </div>
        <motion.div
          variants={animateOnMobile && projectsSectionVariants}
          initial="start"
          animate={inView ? 'end' : ''}
          className="container"
        >
          <div>
            <Heading
              type={HEADING_OPTIONS.TYPE.SECTION}
              textAlign={HEADING_OPTIONS.TEXT_ALIGN.CENTER}
              textTransform={HEADING_OPTIONS.TEXT_TRANSFORM.UPPERCASE}
              fontWeight={HEADING_OPTIONS.FONT_WEIGHT.BOLD}
              as="h2"
            >
              {title && <GradientText text={title} />}
            </Heading>
            {description && (
              <p className="text-center mx-auto text-base text-c600 md:w-2/3">
                {description}
              </p>
            )}
          </div>
          <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {!projectsData.statusCode &&
              projectsData.map(project => {
                return (
                  <motion.div
                    key={project.id}
                    variants={isDesktop ? projectsCardVariants : ''}
                  >
                    <ProjectCard data={project} settings={settings} />
                  </motion.div>
                );
              })}
          </div>
        </motion.div>
      </section>
    );
  } else {
    return null;
  }
};

export default RealProjects;
