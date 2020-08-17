import React, { useEffect } from 'react';
import { Heading, HEADING_OPTIONS } from '../shared/Heading';
import Link from 'next/link';
import Button from '../shared/Button';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
const JoinUs = ({ data }) => {
  const {
    title,
    description,
    mentorBtn: { url: mentorBtnUrl, name: mentorBtnName },
    memberBtn: { url: memberBtnUrl, name: memberBtnName },
    left_img: { url: left_image },
    right_img: { url: right_image }
  } = data;
  const controls = useAnimation();

  const [containerRef, ContainerInView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });
  useEffect(() => {
    if (ContainerInView) {
      controls.start('animate');
    } else {
      controls.start('initial');
    }
  }, [controls, ContainerInView]);
  const containerVariants = {
    initial: {
      opacity: 0
    },
    animate: {
      opacity: 1,

      transition: {
        when: 'beforeChildren'
      }
    }
  };
  const leftImageVariants = {
    initial: {
      opacity: 0,
      x: '50vw'
    },
    animate: {
      opacity: 1,
      x: 0
    }
  };
  const rightImageVariants = {
    initial: {
      opacity: 0,
      x: '-50vw'
    },
    animate: {
      opacity: 1,
      x: 0
    }
  };
  const innerContainerVariants = {
    initial: {
      opacity: 0
    },
    animate: {
      opacity: 1,

      transition: {
        when: 'beforeChildren',
        staggerChildren: 0.3
      }
    }
  };
  const innerItemsVariants = {
    initial: {
      opacity: 0,
      scale: 0,
      y: 100
    },
    animate: {
      opacity: 1,
      scale: 1,
      y: 0
    }
  };
  return (
    <section className="container" ref={containerRef}>
      <motion.div
        className="border-4 py-20 border-dashed border-c100 flex justify-evenly items-center"
        variants={containerVariants}
        initial="initial"
        animate={controls}
      >
        <motion.div className="w-1/6" variants={leftImageVariants}>
          <img
            className="object-cover items-center hidden lg:block"
            src={left_image}
            alt=""
          />
        </motion.div>

        <motion.div
          className="w-full md:w-72 flex flex-col justify-center"
          variants={innerContainerVariants}
        >
          <motion.div variants={innerItemsVariants}>
            <Heading
              type={HEADING_OPTIONS.TYPE.CARD}
              textAlign={HEADING_OPTIONS.TEXT_ALIGN.CENTER}
              textTransform={HEADING_OPTIONS.TEXT_TRANSFORM.UPPERCASE}
              className="mb-10"
              as="h2"
            >
              {title}
            </Heading>
          </motion.div>
          <motion.p
            className="join-us-description text-center text-xs font-light text-c700"
            variants={innerItemsVariants}
          >
            {description}
          </motion.p>
          <motion.div variants={innerItemsVariants}>
            <Link href={`${memberBtnUrl}?as=mentee`} passHref>
              <Button
                customClassName="uppercase mt-10 mx-auto"
                textSize="medium"
                btnSize="large"
                fontWeight="bold"
                bgColor="green"
              >
                {memberBtnName}
              </Button>
            </Link>
          </motion.div>
          <motion.div variants={innerItemsVariants}>
            <Link href={`${mentorBtnUrl}?as=mentor`} passHref>
              <Button
                customClassName="uppercase mt-5 mx-auto"
                textSize="medium"
                textColor="white"
                btnSize="large"
                fontWeight="bold"
                bgColor="blue"
              >
                {mentorBtnName}
              </Button>
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          className="w-1/6 flex items-center"
          variants={rightImageVariants}
        >
          <img
            className="object-cover hidden lg:block"
            src={right_image}
            alt=""
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default JoinUs;
