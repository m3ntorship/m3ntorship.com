import React, { useRef } from 'react';
import randomPosition from '../../helper/randomPosition';
import { motion } from 'framer-motion';
import useMobileAnimation from '../../helper/useMobileAnimation';
import dynamic from 'next/dynamic';

const LazyImage = dynamic(
() => import('../../helper/lazy-image'),
{ ssr: false }
);

const ListOfRoundedImages = ({ data, settings }) => {
  const componentId = 'list_of_random_images';
  const animateOnMobile = useMobileAnimation(settings, componentId);
  let cache = [];
  //animation varitants
  const imageContainer = {
    visible: {
      transition: {
        staggerChildren: 0.05
      }
    }
  };

  const image = {
    hidden: {
      scale: 0
    },
    visible: {
      scale: 1,
      transition: {
        type: 'spring'
      }
    }
  };
  const splash = {
    hidden: {
      x: 400,
      opacity: 0
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: 'spring'
      }
    }
  };

  const positionStyle = () => {
    const position = randomPosition(120, 100, 14, cache, 1);
    return {
      left: `${position.x}%`,
      bottom: `${position.y}%`,
      cursor: 'grab'
    };
  };

  return (
    <motion.div
      className="list-of-rounded-images flex flex-wrap items-center justify-center lg:block relative w-full h-full gap-5"
      variants={animateOnMobile && imageContainer}
      animate="visible"
      style={{
        placeItems: 'center'
      }}
    >
      <motion.div
        variants={animateOnMobile && splash}
        initial="hidden"
        className="absolute hidden lg:block left-0"
        style={{ width: '135%', top: '-10%' }}
      >
        <LazyImage src="/static/images/splashes.png" alt="" />
      </motion.div>
      {data &&
        data.map(({ url, title }, index) => {
          return (
            <motion.img
              key={index}
              className="static lg:absolute w-24 h-24 rounded-full shadow-img object-cover"
              variants={animateOnMobile && image}
              initial="hidden"
              style={positionStyle()}
              drag
              whileTap={{ cursor: 'grabbing' }}
              src={url}
              dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
              title={title}
              alt={title}
            />
          );
        })}
    </motion.div>
  );
};

export default ListOfRoundedImages;
