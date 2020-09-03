import React from 'react';
import { Heading, HEADING_OPTIONS } from '../shared/Heading';
import Button from '../shared/Button';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import useMobileAnimation from '../../helper/useMobileAnimation';
import dynamic from 'next/dynamic';

const LazyImage = dynamic(() => import('../../helper/lazy-image'), {
  ssr: false
});

const sectionVariants = {
  hidden: {
    opacity: 0,
    x: -50,
    transition: { staggerChildren: 0.2, delayChildren: 0.5 }
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

const icons = {
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

const SponsorUs = ({
  sponsersData,
  sponserUsData,
  withBtn,
  withIcons,
  settings
}) => {
  const componentId = 'sponsor';
  const animateOnMobile = useMobileAnimation(settings, componentId);
  const [ref, inView] = useInView({
    threshold: 0.5,
    triggerOnce: true
  });
  const { title, sub_title, sponsers_link } = sponserUsData;
  return (
    <section className="container">
      <motion.div
        ref={ref}
        variants={animateOnMobile && sectionVariants}
        initial="hidden"
        animate={inView && 'visible'}
        className="py-20 border border-c400 bg-c1200"
      >
        <div className="text-c600">
          <Heading
            as="h2"
            type={HEADING_OPTIONS.TYPE.CARD_SMALL}
            textAlign={HEADING_OPTIONS.TEXT_ALIGN.CENTER}
            fontWeight={HEADING_OPTIONS.FONT_WEIGHT.BOLD}
          >
            {title}
          </Heading>
          <div className="p-2 w-3/4 mx-auto mt-6">
            <p className="text-base text-center">{sub_title}</p>
          </div>
        </div>
        {withIcons && (
          <ul className="flex items-center justify-center  md:px-32 mx-auto flex-wrap">
            {sponsersData.map(({ id, link, logo: { url } }) => {
              return (
                <motion.li
                  variants={animateOnMobile && icons}
                  key={id}
                  className="mx-10 my-6"
                >
                  <a
                    target="_blank"
                    rel="noreferrer noopener"
                    className=" max-w-xxs inline-block"
                    href={link}
                  >
                    <LazyImage
                      className="m-auto sponsors__logo"
                      src={url}
                      alt=""
                    />
                  </a>
                </motion.li>
              );
            })}
          </ul>
        )}
        {withBtn && (
          <div className="mt-6">
            <Link href={sponsers_link.url}>
              <Button
                textColor="black"
                bgColor="green"
                btnSize="large"
                textSize="medium"
                customClassName="mx-auto"
              >
                {sponsers_link.name}
              </Button>
            </Link>
          </div>
        )}
      </motion.div>
    </section>
  );
};

export default SponsorUs;
