import React, { useState } from 'react';
import {
  Heading,
  HEADING_OPTIONS,
  GradientText
} from '../shared/Heading/index';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import useMobileAnimation from '../../helper/useMobileAnimation';

export default function resources({ title, resourcesCards, settings }) {
  const componentId = 'resources';
  const animateOnMobile = useMobileAnimation(settings, componentId);
  const ResourceCard = ({ title, url, description, settings }) => {
    const [copy, setCopy] = useState(false);
    const [copySuccess, setCopySuccess] = useState(false);

    const linkSvg = (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M9.99999 17.5501L8.22999 19.2701C7.76586 19.7342 7.13637 19.995 6.47999 19.995C5.82361 19.995 5.19412 19.7342 4.72999 19.2701C4.26586 18.806 4.00512 18.1765 4.00512 17.5201C4.00512 16.8637 4.26586 16.2342 4.72999 15.7701L9.26999 11.2201C9.7156 10.773 10.316 10.5144 10.947 10.4976C11.578 10.4809 12.1913 10.7073 12.66 11.1301L12.78 11.2301C12.9696 11.4157 13.2252 11.5185 13.4906 11.5157C13.756 11.5128 14.0093 11.4047 14.195 11.2151C14.3806 11.0255 14.4834 10.7699 14.4805 10.5045C14.4777 10.2391 14.3696 9.98575 14.18 9.80009C14.1236 9.72712 14.0635 9.65703 14 9.59009C13.1463 8.84741 12.0423 8.45694 10.9116 8.49779C9.78079 8.53864 8.70782 9.00775 7.90999 9.81009L3.30999 14.3601C2.52835 15.2109 2.10561 16.3308 2.13006 17.4858C2.15452 18.6409 2.62427 19.7419 3.44122 20.5589C4.25817 21.3758 5.35915 21.8456 6.51424 21.87C7.66932 21.8945 8.7892 21.4717 9.63999 20.6901L11.37 19.0001C11.5408 18.8137 11.6347 18.5696 11.6328 18.3168C11.6309 18.064 11.5333 17.8214 11.3597 17.6376C11.1861 17.4539 10.9493 17.3427 10.6971 17.3264C10.4448 17.3102 10.1957 17.3901 9.99999 17.5501ZM20.69 3.31009C19.8488 2.4741 18.711 2.00488 17.525 2.00488C16.339 2.00488 15.2012 2.4741 14.36 3.31009L12.63 5.00009C12.4592 5.18644 12.3653 5.43057 12.3672 5.68336C12.3691 5.93615 12.4667 6.17883 12.6403 6.36258C12.8139 6.54633 13.0507 6.65751 13.3029 6.67375C13.5552 6.68998 13.8043 6.61007 14 6.45009L15.73 4.73009C16.1941 4.26597 16.8236 4.00522 17.48 4.00522C18.1364 4.00522 18.7659 4.26597 19.23 4.73009C19.6941 5.19422 19.9549 5.82372 19.9549 6.48009C19.9549 7.13647 19.6941 7.76596 19.23 8.23009L14.69 12.7801C14.2444 13.2272 13.644 13.4858 13.013 13.5026C12.382 13.5193 11.7687 13.2929 11.3 12.8701L11.18 12.7701C10.9904 12.5844 10.7347 12.4817 10.4694 12.4845C10.204 12.4874 9.95064 12.5955 9.76499 12.7851C9.57934 12.9747 9.47662 13.2303 9.47943 13.4957C9.48225 13.7611 9.59036 14.0144 9.77999 14.2001C9.85263 14.2744 9.92942 14.3445 10.01 14.4101C10.8647 15.1505 11.9682 15.5395 13.0983 15.4987C14.2284 15.4579 15.301 14.9903 16.1 14.1901L20.65 9.64009C21.4913 8.80417 21.9677 7.66932 21.9752 6.48334C21.9827 5.29736 21.5207 4.15659 20.69 3.31009Z"
          fill="black"
        />
      </svg>
    );
    const checkSvg = (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7 10L9 12L13 8M19 10C19 11.1819 18.7672 12.3522 18.3149 13.4442C17.8626 14.5361 17.1997 15.5282 16.364 16.364C15.5282 17.1997 14.5361 17.8626 13.4442 18.3149C12.3522 18.7672 11.1819 19 10 19C8.8181 19 7.64778 18.7672 6.55585 18.3149C5.46392 17.8626 4.47177 17.1997 3.63604 16.364C2.80031 15.5282 2.13738 14.5361 1.68508 13.4442C1.23279 12.3522 1 11.1819 1 10C1 7.61305 1.94821 5.32387 3.63604 3.63604C5.32387 1.94821 7.61305 1 10 1C12.3869 1 14.6761 1.94821 16.364 3.63604C18.0518 5.32387 19 7.61305 19 10Z"
          stroke="black"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    );

    const copySvg = (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M21 8.94C20.9896 8.84813 20.9695 8.75763 20.94 8.67V8.58C20.8919 8.47718 20.8278 8.38267 20.75 8.3L14.75 2.3C14.6673 2.22222 14.5728 2.15808 14.47 2.11C14.4402 2.10576 14.4099 2.10576 14.38 2.11C14.2784 2.05174 14.1662 2.01434 14.05 2H10C9.20435 2 8.44129 2.31607 7.87868 2.87868C7.31607 3.44129 7 4.20435 7 5V6H6C5.20435 6 4.44129 6.31607 3.87868 6.87868C3.31607 7.44129 3 8.20435 3 9V19C3 19.7956 3.31607 20.5587 3.87868 21.1213C4.44129 21.6839 5.20435 22 6 22H14C14.7956 22 15.5587 21.6839 16.1213 21.1213C16.6839 20.5587 17 19.7956 17 19V18H18C18.7956 18 19.5587 17.6839 20.1213 17.1213C20.6839 16.5587 21 15.7956 21 15V9C21 9 21 9 21 8.94ZM15 5.41L17.59 8H16C15.7348 8 15.4804 7.89464 15.2929 7.70711C15.1054 7.51957 15 7.26522 15 7V5.41ZM15 19C15 19.2652 14.8946 19.5196 14.7071 19.7071C14.5196 19.8946 14.2652 20 14 20H6C5.73478 20 5.48043 19.8946 5.29289 19.7071C5.10536 19.5196 5 19.2652 5 19V9C5 8.73478 5.10536 8.48043 5.29289 8.29289C5.48043 8.10536 5.73478 8 6 8H7V15C7 15.7956 7.31607 16.5587 7.87868 17.1213C8.44129 17.6839 9.20435 18 10 18H15V19ZM19 15C19 15.2652 18.8946 15.5196 18.7071 15.7071C18.5196 15.8946 18.2652 16 18 16H10C9.73478 16 9.48043 15.8946 9.29289 15.7071C9.10536 15.5196 9 15.2652 9 15V5C9 4.73478 9.10536 4.48043 9.29289 4.29289C9.48043 4.10536 9.73478 4 10 4H13V7C13 7.79565 13.3161 8.55871 13.8787 9.12132C14.4413 9.68393 15.2044 10 16 10H19V15Z"
          fill="black"
        />
      </svg>
    );
    return (
      <div className="flex flex-col py-5">
        <div
          className="flex flex-row mr-4 cursor-pointer"
          onMouseEnter={() => setCopy(true)}
          onMouseLeave={() => {
            setCopy(false), setCopySuccess(false);
          }}
        >
          <div className="flex flex-row my-4 self-start flex-none ">
            <div className="self-center order-none">{linkSvg}</div>
            <motion.h4
              whileHover={
                animateOnMobile && {
                  textDecoration: 'underline'
                }
              }
              className="text-xs uppercase leading-6 self-center order-0 md:order-1 mx-4"
            >
              {title}
            </motion.h4>
          </div>
          <AnimatePresence>
            {copy && (
              <motion.div
                whileHover={{ opacity: 1 }}
                initial={animateOnMobile && { opacity: 0 }}
                animate={{ opacity: 0.5 }}
                exit={{ opacity: 0 }}
                className="opacity-50 my-4 ml-auto pr-4"
                onClick={() => {
                  navigator.clipboard.writeText(url);
                  setCopySuccess(true);
                }}
              >
                {copySuccess ? checkSvg : copySvg}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <p className="text-c600 text-xxs leading-6 ml-10  flex-none order-1">
          {description}
        </p>
      </div>
    );
  };
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
  const cardListVariants = {
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
  const cardVariants = {
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
    <motion.section
      className="container"
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
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
          variants={animateOnMobile && cardListVariants}
          initial="initial"
          animate={cardsInView ? 'animate' : ''}
          ref={cardsRef}
        >
          {resourcesCards.map(card => {
            const { title, url, description } = card;
            return (
              <motion.div variants={animateOnMobile && cardVariants}>
                <ResourceCard
                  title={title}
                  url={url}
                  description={description}
                  settings={settings}
                />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </motion.section>
  );
}
